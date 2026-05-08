import { MetadataRoute } from 'next';
import { serviceAreas } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.buckstechhelp.co.uk';

    const towns = serviceAreas.map((town) => ({
        url: `${baseUrl}/${town.toLowerCase().replace(/ /g, '-')}`,
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
        ...towns,
    ];
}
