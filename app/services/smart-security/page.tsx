import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePageLayout from '@/components/ServicePageLayout';
import { servicesData } from '@/lib/servicesData';

const slug = 'smart-security';

export async function generateMetadata(): Promise<Metadata> {
    const service = servicesData[slug];
    if (!service) return {};
    return {
        title: service.metaTitle,
        description: service.metaDesc,
        alternates: { canonical: `https://www.buckstechhelp.co.uk/services/${slug}` },
    };
}

export default function Page() {
    const service = servicesData[slug];
    if (!service) return notFound();
    return <ServicePageLayout service={service} />;
}
