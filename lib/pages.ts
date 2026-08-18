// lib/pages.ts
// Server-only loader for top-level content pages (homepage `index`, `about`, etc.)
// Parses frontmatter via gray-matter and extracts the embedded JSON-LD
// (`<script type="application/ld+json">`) block from each markdown file.
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PageFrontmatter {
    id: string;
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    coveredTowns?: string[];
}

export interface PageContent {
    slug: string;
    frontmatter: PageFrontmatter;
    jsonLd: object | null;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

const JSONLD_SCRIPT_RE = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;

export function getPageBySlug(slug: string): PageContent | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);
    let raw: string;
    try {
        raw = readFileSync(filePath, 'utf8');
    } catch {
        return null;
    }

    const { data, content } = matter(raw);
    const frontmatter = data as unknown as PageFrontmatter;

    const match = JSONLD_SCRIPT_RE.exec(content);
    let jsonLd: object | null = null;
    if (match && match[1]) {
        try {
            jsonLd = JSON.parse(match[1]);
        } catch {
            jsonLd = null;
        }
    }

    return { slug, frontmatter, jsonLd };
}