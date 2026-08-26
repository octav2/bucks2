import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/servicesData';
import { getAllLocationSlugs } from '@/lib/locations';
import { getAllLocationServiceSlugs } from '@/lib/locationServices';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.buckstechhelp.co.uk';

    const services = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

        const locations = getAllLocationSlugs().map((slug) => ({
        url: `${baseUrl}/locations/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const locationServices = getAllLocationServiceSlugs().map(({ slug }) => ({
        url: `${baseUrl}/locations/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/quote`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        ...services,
        ...locations,
        ...locationServices,
    ];
}

