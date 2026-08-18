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
    const metaTitle = service.frontmatter.metaTitle;
    const metaDescription = service.frontmatter.metaDescription;
    const url = `https://www.buckstechhelp.co.uk/services/${service.slug}`;
    return {
        title: { absolute: metaTitle },
        description: metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url,
            siteName: 'Bucks Tech Help',
            locale: 'en_GB',
            type: 'website',
            images: ['/og-image.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: ['/og-image.png'],
        },
    };
}

export default function ServicePage({ params }: Props) {
    const service = getServiceBySlug(params.slug);
    if (!service) return notFound();
    return <ServiceMarkdownLayout service={service} />;
}
