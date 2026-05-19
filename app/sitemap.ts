import { MetadataRoute } from 'next';
import { serviceAreas } from '@/lib/data';
import { servicesData } from '@/lib/servicesData';
import { guidesData } from '@/lib/guidesData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.buckstechhelp.co.uk';

    const towns = serviceAreas.map((town) => ({
        url: `${baseUrl}/${town.toLowerCase().replace(/ /g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const services = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const guides = Object.keys(guidesData).map((slug) => ({
        url: `${baseUrl}/guides/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        ...services,
        ...guides,
        ...towns,
    ];
}
