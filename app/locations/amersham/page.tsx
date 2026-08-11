import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationPageLayout from '@/components/LocationPageLayout';
import { locationsData } from '@/lib/locationsData';

const slug = 'amersham';

export async function generateMetadata(): Promise<Metadata> {
    const location = locationsData[slug];
    if (!location) return {};
    return {
        title: location.metaTitle,
        description: location.metaDesc,
        alternates: { canonical: `https://www.buckstechhelp.co.uk/locations/${slug}` },
    };
}

export default function Page() {
    const location = locationsData[slug];
    if (!location) return notFound();
    return <LocationPageLayout location={location} />;
}
