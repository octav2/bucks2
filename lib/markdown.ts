// lib/markdown.ts
// Server-only Markdown utilities for the dynamic /services/[slug] pages.
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'services');
const markdownProcessor = remark().use(remarkHtml);

export interface ServiceFrontmatter {
    id: string;
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    startingPrice: string;
    priceDetails: string;
    coveredTowns: string[];
}

export interface FaqItem {
    question: string;
    answer: string;
}

export type MarkdownSection =
    | { kind: 'prose'; title: string; html: string }
    | { kind: 'bullets'; title: string; items: string[] }
    | { kind: 'table'; title: string; headers: string[]; rows: string[][] }
    | { kind: 'steps'; title: string; steps: string[] }
    | { kind: 'faq'; title: string; faqs: FaqItem[] };

export interface ServiceContent {
    slug: string;
    frontmatter: ServiceFrontmatter;
    heroHighlights: string[];
    sections: MarkdownSection[];
}

export function getAllServiceSlugs(): string[] {
    return readdirSync(CONTENT_DIR)
        .filter((file) => file.endsWith('.md'))
        .map((file) => file.replace(/\.md$/, ''));
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

function titleKey(title: string): string {
    return (title || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function extractListItems(nodes: any[]): string[] {
    const items: string[] = [];
    for (const node of nodes) {
        if (node.type !== 'list') continue;
        for (const item of node.children ?? []) {
            items.push(nodeToString(item).trim());
        }
    }
    return items;
}

function extractFaqs(nodes: any[]): FaqItem[] {
    const faqs: FaqItem[] = [];
    let current: { question: string; answer: string } | null = null;
    for (const node of nodes) {
        if (node.type === 'heading' && node.depth === 3) {
            if (current && current.question && current.answer) faqs.push(current);
            current = { question: nodeToString(node).trim(), answer: '' };
        } else if (node.type === 'paragraph' && current) {
            current.answer = nodeToString(node).trim();
        }
    }
    if (current && current.question && current.answer) faqs.push(current);
    return faqs;
}

function extractTable(node: any): { headers: string[]; rows: string[][] } {
    const headers: string[] = [];
    const rows: string[][] = [];
    const rowNodes = node.children ?? [];
    if (rowNodes.length > 0) {
        for (const cell of rowNodes[0].children ?? []) headers.push(nodeToString(cell).trim());
        for (let i = 1; i < rowNodes.length; i++) {
            const row: string[] = [];
            for (const cell of rowNodes[i].children ?? []) row.push(nodeToString(cell).trim());
            rows.push(row);
        }
    }
    return { headers, rows };
}

export function getServiceBySlug(slug: string): ServiceContent | null {
    const filePath = path.join(CONTENT_DIR, slug + '.md');
    let raw: string;
    try {
        raw = readFileSync(filePath, 'utf8');
    } catch {
        return null;
    }

    const { data, content } = matter(raw);
    const frontmatter = data as unknown as ServiceFrontmatter;
    const tree: any = remark().parse(content);

    const buckets: { title: string; nodes: any[] }[] = [];
    for (const child of tree.children ?? []) {
        if (child.type === 'heading' && child.depth === 2) {
            buckets.push({ title: nodeToString(child).trim(), nodes: [] });
        } else {
            if (buckets.length === 0) buckets.push({ title: '', nodes: [] });
            buckets[buckets.length - 1].nodes.push(child);
        }
    }

    const sections: MarkdownSection[] = [];
    let heroHighlights: string[] = [];

    for (const bucket of buckets) {
        const title = bucket.title;
        const key = titleKey(title);
        const isHero = key === 'hero highlights';
        const isFaq = key.includes('frequently asked') || key === 'faq';
        const hasTable = bucket.nodes.some((n: any) => n.type === 'table');

        if (isHero) {
            heroHighlights = extractListItems(bucket.nodes);
            continue;
        }

        if (hasTable) {
            const tableNode = bucket.nodes.find((n: any) => n.type === 'table');
            const { headers, rows } = extractTable(tableNode);
            sections.push({ kind: 'table', title, headers, rows });
            continue;
        }

        if (isFaq) {
            sections.push({ kind: 'faq', title, faqs: extractFaqs(bucket.nodes) });
            continue;
        }

        const listNodes = bucket.nodes.filter((n: any) => n.type === 'list');
        if (listNodes.length > 0 && bucket.nodes.every((n: any) => n.type === 'list')) {
            const list = listNodes[0];
            const items = extractListItems([list]);
            sections.push(list.ordered ? { kind: 'steps', title, steps: items } : { kind: 'bullets', title, items });
            continue;
        }

        const paraNodes = bucket.nodes.filter((n: any) => n.type === 'paragraph');
        if (paraNodes.length > 0) {
            const html = paraNodes.map((n: any) => renderNodeHtml(content, n)).join('');
            sections.push({ kind: 'prose', title, html });
        }
    }

    return { slug, frontmatter, heroHighlights, sections };
}
