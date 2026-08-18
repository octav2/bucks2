// lib/locations.ts
// Server-only Markdown utilities for the dynamic /locations/[slug] local SEO hub pages.
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const LOCATIONS_DIR = path.join(process.cwd(), 'content', 'locations');
const markdownProcessor = remark().use(remarkGfm).use(remarkHtml);

export interface LocationFrontmatter {
    id: string;
    slug: string;
    townName: string;
    postcode: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubtitle: string;
    nearbyVillages: string[];
}

export interface CaseStudyItem {
    label: string;
    value: string;
}

export interface LocalFaq {
    question: string;
    answer: string;
}

export interface LocationContent {
    slug: string;
    frontmatter: LocationFrontmatter;
    name: string;
    postcode: string;
    localKnowledgeHtml: string;
    engineersHtml: string;
    caseStudy: CaseStudyItem[];
    faqs: LocalFaq[];
}

export function getAllLocationSlugs(): string[] {
    return readdirSync(LOCATIONS_DIR)
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

function extractCaseStudy(nodes: any[]): CaseStudyItem[] {
    const items: CaseStudyItem[] = [];
    for (const node of nodes) {
        if (node.type !== 'list') continue;
        for (const item of node.children ?? []) {
            const paragraph = (item.children ?? []).find((c: any) => c.type === 'paragraph');
            const text = paragraph ? nodeToString(paragraph).trim() : nodeToString(item).trim();
            const match = /^\*\*([^*]+)\*\*:\s*(.+)$/.exec(text);
            if (match) {
                const rawLabel = match[1].trim();
                // Normalise "The Result" to the required "Verified Result" label.
                const label = /result/i.test(rawLabel) ? 'Verified Result' : rawLabel;
                items.push({ label, value: match[2].trim() });
            } else if (text) {
                items.push({ label: '', value: text });
            }
        }
    }
    return items;
}

function extractFaqs(nodes: any[]): LocalFaq[] {
    const faqs: LocalFaq[] = [];
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

export function getLocationBySlug(slug: string): LocationContent | null {
    const filePath = path.join(LOCATIONS_DIR, slug + '.md');
    let raw: string;
    try {
        raw = readFileSync(filePath, 'utf8');
    } catch {
        return null;
    }

    const { data, content } = matter(raw);
    const frontmatter = data as unknown as LocationFrontmatter;
    const tree: any = remark().use(remarkGfm).parse(content);

    const buckets: { title: string; nodes: any[] }[] = [];
    for (const child of tree.children ?? []) {
        if (child.type === 'heading' && child.depth === 2) {
            buckets.push({ title: nodeToString(child).trim(), nodes: [] });
        } else {
            if (buckets.length === 0) buckets.push({ title: '', nodes: [] });
            buckets[buckets.length - 1].nodes.push(child);
        }
    }

    let localKnowledgeHtml = '';
    let engineersHtml = '';
    let caseStudy: CaseStudyItem[] = [];
    let faqs: LocalFaq[] = [];

    for (const bucket of buckets) {
        const key = titleKey(bucket.title);
        if (key.includes('local knowledge') || key.includes('network installation')) {
            const paraNodes = bucket.nodes.filter((n: any) => n.type === 'paragraph');
            localKnowledgeHtml = paraNodes.map((n: any) => renderNodeHtml(content, n)).join('');
        } else if (key.includes('local network engineers') || key.includes('cctv installers')) {
            const paraNodes = bucket.nodes.filter((n: any) => n.type === 'paragraph');
            engineersHtml = paraNodes.map((n: any) => renderNodeHtml(content, n)).join('');
        } else if (key.includes('case study')) {
            caseStudy = extractCaseStudy(bucket.nodes);
        } else if (key.includes('frequently asked') || key === 'faq') {
            faqs = extractFaqs(bucket.nodes);
        }
    }

    return {
        slug,
        frontmatter,
        name: frontmatter.townName || frontmatter.slug
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
        postcode: frontmatter.postcode || '',
        localKnowledgeHtml,
        engineersHtml,
        caseStudy,
        faqs,
    };
}

export function getAllLocations(): LocationContent[] {
    return getAllLocationSlugs()
        .map((slug) => getLocationBySlug(slug))
        .filter((loc): loc is LocationContent => loc !== null);
}
