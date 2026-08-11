import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceMarkdownLayout from '@/components/ServiceMarkdownLayout';
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/markdown';

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};
    return {
        title: service.frontmatter.metaTitle,
        description: service.frontmatter.metaDescription,
        alternates: { canonical: `https://www.buckstechhelp.co.uk/services/${service.slug}` },
    };
}

export default function ServicePage({ params }: Props) {
    const service = getServiceBySlug(params.slug);
    if (!service) return notFound();
    return <ServiceMarkdownLayout service={service} />;
}
