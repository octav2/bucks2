import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/servicesData';
import { locationsData } from '@/lib/locationsData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.buckstechhelp.co.uk';

    const services = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const locations = Object.keys(locationsData).map((slug) => ({
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
            url: `${baseUrl}/quote`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        ...services,
        ...locations,
    ];
}

