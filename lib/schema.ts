// lib/schema.ts
// JSON-LD schema helpers for the infrastructure agency.
import { businessDetails, googleBusinessProfile } from '@/lib/data';

const allServiceCities = [
    "Beaconsfield", "Amersham", "Chesham", "Gerrards Cross", "High Wycombe", "Marlow",
    "Hazlemere", "Great Missenden", "Bourne End", "Penn", "Stoke Poges", "Chalfont St Peter",
    "Aylesbury", "Chalfont St Giles", "Wendover", "Princes Risborough", "Berkhamsted", "Tring",
];

export function localBusinessSchema(): object {
    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TelecommunicationsContractor"],
        "@id": `${businessDetails.domain}/#organization`,
        name: businessDetails.name,
        image: businessDetails.logo,
        logo: businessDetails.logo,
        url: businessDetails.domain,
        telephone: '07343079390',
        email: businessDetails.email,
        priceRange: businessDetails.priceRange,
        description: businessDetails.tagline,
        address: {
            "@type": "PostalAddress",
            addressLocality: businessDetails.address.addressLocality,
            addressRegion: businessDetails.address.addressRegion,
            addressCountry: businessDetails.address.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: businessDetails.geo.latitude,
            longitude: businessDetails.geo.longitude,
        },
        areaServed: allServiceCities.map((name) => ({ "@type": "City", name })),
        sameAs: [googleBusinessProfile.url],
        hasMap: googleBusinessProfile.url,
    };
}

export function organizationSchema(): object {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${businessDetails.domain}/#organization`,
        name: businessDetails.name,
        url: businessDetails.domain,
        logo: businessDetails.logo,
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            areaServed: "GB",
            availableLanguage: "en",
        },
        sameAs: [googleBusinessProfile.url],
    };
}

export function websiteSchema(): object {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: businessDetails.name,
        url: businessDetails.domain,
    };
}

// BreadcrumbList structured data for tier-two navigation paths.
export function breadcrumbListSchema(items: { position: number; name: string; item: string }[]): object {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map(({ position, name, item }) => ({
            "@type": "ListItem",
            position,
            name,
            item,
        })),
    };
}

// Generic WebPage schema (adds a page identity to pages without a more specific type).
export function webPageSchema(name: string, url: string, description?: string): object {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        url,
        ...(description ? { description } : {}),
        isPartOf: { "@type": "WebSite", "@id": businessDetails.domain },
    };
}
