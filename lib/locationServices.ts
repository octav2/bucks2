// lib/locationServices.ts
// Server-only loader for dedicated local service pages (/locations/[town]/[service]).
// Source markdown lives in content/location-services/ and follows the
// "ANTIGRAVITY PAGE BRIEF" format: an HTML comment brief, an SEO HEAD block,
// the page body in Markdown, and a JSON-LD <script> block at the end.
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'location-services');
const markdownProcessor = remark().use(remarkGfm).use(remarkHtml);

const JSONLD_SCRIPT_RE = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;

export interface LocationServiceContent {
    /** URL segment, e.g. "beaconsfield/wifi-installation" */
    slug: string;
    town: string;
    service: string;
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    jsonLd: object | null;
    bodyHtml: string;
}

/** Registry of published location-service pages: [town, service, fileBase]. */
const PAGES: [string, string, string][] = [
    ['beaconsfield', 'wifi-installation', 'beaconsfield-wifi-installation'],
    ['beaconsfield', 'network-cabling', 'beaconsfield-network-cabling'],
    ['beaconsfield', 'cctv-installation', 'beaconsfield-cctv-installation'],
];

export function getAllLocationServiceSlugs(): { slug: string; town: string; service: string }[] {
    return PAGES.map(([town, service]) => ({ slug: `${town}/${service}`, town, service }));
}

function extractTag(content: string, tag: string): string {
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
    return re.exec(content)?.[1]?.trim() ?? '';
}

export function getLocationService(town: string, service: string): LocationServiceContent | null {
    const entry = PAGES.find(([t, s]) => t === town && s === service);
    if (!entry) return null;
    const [, , fileBase] = entry;

    let raw: string;
    try {
        raw = readFileSync(path.join(CONTENT_DIR, `${fileBase}.md`), 'utf8');
    } catch {
        return null;
    }

    const { content } = matter(raw);

    const jsonLdMatch = JSONLD_SCRIPT_RE.exec(content);
    let jsonLd: object | null = null;
    if (jsonLdMatch?.[1]) {
        try {
            jsonLd = JSON.parse(jsonLdMatch[1]);
        } catch {
            jsonLd = null;
        }
    }

    // Strip the JSON-LD script block and all HTML comments (brief + SEO head block),
    // then remove leftover raw head tags so only Markdown remains.
    let body = content.replace(JSONLD_SCRIPT_RE, '').replace(HTML_COMMENT_RE, '');
    body = body
        .replace(/<title[\s\S]*?<\/title>/gi, '')
        .replace(/<meta[^>]*>/gi, '')
        .replace(/<link[^>]*>/gi, '');

    const bodyHtml = markdownProcessor.processSync(body.trim()).toString();

    const title = extractTag(content, 'title');
    const description =
        /<meta\s+name="description"\s+content="([^"]*)"/i.exec(content)?.[1] ?? '';
    const canonical =
        /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(content)?.[1] ?? '';

    return {
        slug: `${town}/${service}`,
        town,
        service,
        metaTitle: title,
        metaDescription: description,
        canonical,
        jsonLd,
        bodyHtml,
    };
}
