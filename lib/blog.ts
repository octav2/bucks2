// lib/blog.ts
// Server-only loader for the Guides blog (/guides + /guides/[slug]).
// Source markdown lives in content/blog/ in the "ANTIGRAVITY PAGE BRIEF" format:
// YAML frontmatter, an optional HTML-comment brief, the post body in Markdown
// (with any diagram images), and an optional JSON-LD <script> block at the end.
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const markdownProcessor = remark().use(remarkGfm).use(remarkHtml);

const JSONLD_SCRIPT_RE = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;

export interface BlogFrontmatter {
    id: string;
    title: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogFrontmatter;
    jsonLd: object | null;
    html: string;
}

export function getAllBlogSlugs(): string[] {
    return readdirSync(CONTENT_DIR)
        .filter((file) => file.endsWith('.md'))
        .map((file) => file.replace(/\.md$/, ''));
}

export function getAllBlogPosts(): BlogPost[] {
    return getAllBlogSlugs()
        .map((slug) => getBlogPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(CONTENT_DIR, slug + '.md');
    let raw: string;
    try {
        raw = readFileSync(filePath, 'utf8');
    } catch {
        return null;
    }

    const { data, content } = matter(raw);
    const frontmatter = data as unknown as BlogFrontmatter;

    const jsonLdMatch = JSONLD_SCRIPT_RE.exec(content);
    let jsonLd: object | null = null;
    if (jsonLdMatch?.[1]) {
        try {
            jsonLd = JSON.parse(jsonLdMatch[1]);
        } catch {
            jsonLd = null;
        }
    }

    // Strip the JSON-LD script, the HTML brief/SEO comments, then drop any
    // leftover raw head tags so only Markdown remains.
    let body = content.replace(JSONLD_SCRIPT_RE, '').replace(HTML_COMMENT_RE, '');
    body = body
        .replace(/<title[\s\S]*?<\/title>/gi, '')
        .replace(/<meta[^>]*>/gi, '')
        .replace(/<link[^>]*>/gi, '')
        .trim();

    // Drop the leading top-level H1 (rendered as the hero title instead).
    body = body.replace(/^\s*#\s+.+(\n|$)/, '');

    const html = markdownProcessor.processSync(body).toString();

    return { slug, frontmatter, jsonLd, html };
}

// Rough reading time from rendered HTML text.
export function estimateReadMinutes(html: string): number {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.length > 0 ? text.split(' ').length : 0;
    return Math.max(1, Math.round(words / 200));
}