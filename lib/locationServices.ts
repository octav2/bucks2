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

export interface FaqItem {
    question: string;
    answer: string;
}

export type LocationServiceSection =
    | { kind: 'prose'; title: string; html: string }
    | { kind: 'bullets'; title: string; items: string[] }
    | { kind: 'faq'; title: string; faqs: FaqItem[] };

export interface LocationServiceContent {
    /** URL segment, e.g. "beaconsfield/wifi-installation" */
    slug: string;
    town: string;
    service: string;
    pageTitle: string;
    metaTitle: string;
    metaDescription: string;
    canonical: string;
    jsonLd: object | null;
    introHtml: string;
    sections: LocationServiceSection[];
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

function nodeToString(node: any): string {
    if (!node) return '';
    if (node.type === 'text' || node.type === 'inlineCode') return String(node.value ?? '');
    if (node.value !== undefined && node.type !== 'html') return String(node.value);
    if (Array.isArray(node.children)) return node.children.map(nodeToString).join('');
    return '';
}

function renderNodeHtml(source: string, node: any): string {
    if (!node.position || node.position.start.offset == null || node.position.end.offset == null) return '';
    const start = node.position.start.offset;
    const end = node.position.end.offset;
    return markdownProcessor.processSync(source.slice(start, end)).toString();
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
    body = body.trim();

    const tree: any = remark().use(remarkGfm).parse(body);

    // The first H1 is the page headline; it is rendered by the hero section.
    let pageTitle = '';
    const children = [...(tree.children ?? [])];
    const h1Index = children.findIndex((n) => n.type === 'heading' && n.depth === 1);
    if (h1Index !== -1) {
        pageTitle = nodeToString(children[h1Index]).trim();
        children.splice(h1Index, 1);
    }

    // Bucket remaining nodes into sections split on H2 headings.
    const buckets: { title: string; nodes: any[] }[] = [];
    for (const child of children) {
        if (child.type === 'heading' && child.depth === 2) {
            buckets.push({ title: nodeToString(child).trim(), nodes: [] });
        } else {
            if (buckets.length === 0) buckets.push({ title: '', nodes: [] });
            buckets[buckets.length - 1].nodes.push(child);
        }
    }

    let introHtml = '';
    const sections: LocationServiceSection[] = [];

    for (const bucket of buckets) {
        const title = bucket.title;
        const key = (title || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        const isFaq = key.includes('frequently asked') || key === 'faq';
        const listNodes = bucket.nodes.filter((n: any) => n.type === 'list');

        // Intro bucket (before the first H2)
        if (!title) {
            introHtml = bucket.nodes.map((n: any) => renderNodeHtml(body, n)).join('');
            continue;
        }

        if (isFaq) {
            const faqs: FaqItem[] = [];
            let current: { question: string; answer: string } | null = null;
            for (const node of bucket.nodes) {
                if (node.type === 'heading' && node.depth === 3) {
                    if (current && current.question && current.answer) faqs.push(current);
                    current = { question: nodeToString(node).trim(), answer: '' };
                } else if (node.type === 'paragraph' && current) {
                    current.answer = nodeToString(node).trim();
                }
            }
            if (current && current.question && current.answer) faqs.push(current);
            sections.push({ kind: 'faq', title, faqs });
            continue;
        }

        if (listNodes.length > 0 && bucket.nodes.every((n: any) => n.type === 'list')) {
            const items = listNodes.flatMap((list: any) =>
                (list.children ?? []).map((item: any) => nodeToString(item).trim())
            );
            sections.push({ kind: 'bullets', title, items });
            continue;
        }

        sections.push({
            kind: 'prose',
            title,
            html: bucket.nodes.map((n: any) => renderNodeHtml(body, n)).join(''),
        });
    }

    const title = extractTag(content, 'title');
    const description =
        /<meta\s+name="description"\s+content="([^"]*)"/i.exec(content)?.[1] ?? '';
    const canonical =
        /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(content)?.[1] ?? '';

    return {
        slug: `${town}/${service}`,
        town,
        service,
        pageTitle,
        metaTitle: title,
        metaDescription: description,
        canonical,
        jsonLd,
        introHtml,
        sections,
    };
}
