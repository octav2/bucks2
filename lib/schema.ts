// lib/schema.ts
// JSON-LD schema helpers for the infrastructure agency.
import { businessDetails } from '@/lib/data';

export function localBusinessSchema(): object {
    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TelecommunicationsContractor"],
        name: businessDetails.name,
        image: businessDetails.logo,
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
        areaServed: [
            { "@type": "City", name: "Beaconsfield" },
            { "@type": "City", name: "Amersham" },
            { "@type": "City", name: "Chesham" },
            { "@type": "City", name: "Gerrards Cross" },
            { "@type": "City", name: "High Wycombe" },
        ],
    };
}

export function organizationSchema(): object {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: businessDetails.name,
        url: businessDetails.domain,
        logo: businessDetails.logo,
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            areaServed: "GB",
            availableLanguage: "en",
        },
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
