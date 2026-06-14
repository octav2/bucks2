import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { serviceAreas } from '@/lib/data';
import './globals.css';

// Use a clean, readable font for older demographics
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.buckstechhelp.co.uk'),
    title: 'Bucks Tech Help | Friendly Computer Technician & IT Support Near You',
    description: 'Patient, jargon-free home tech support in Buckinghamshire. We offer IT support near you, computer help, Wi-Fi setup, and printer troubleshooting.',
    keywords: ['Bucks Tech Help', 'Home tech help Buckinghamshire', 'Wi-Fi help', 'Printer setup', 'Tech help for seniors', 'IT support at home'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Bucks Tech Help',
        description: 'Patient, jargon-free home tech support in Buckinghamshire.',
        locale: 'en_GB',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
                <link rel="alternate" type="text/plain" href="/llm.txt" />
                <Script
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-YKTBYJCCLC"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-YKTBYJCCLC');
                    `}
                </Script>
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": "Bucks Tech Help",
                                "image": "https://www.buckstechhelp.co.uk/logo.png",
                                "@id": "https://www.buckstechhelp.co.uk/#localbusiness",
                                "url": "https://www.buckstechhelp.co.uk",
                                "telephone": "0734 307 9390",
                                "priceRange": "££",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "High Wycombe",
                                    "addressRegion": "Buckinghamshire",
                                    "addressCountry": "GB"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 51.6287,
                                    "longitude": -0.7482
                                },
                                "areaServed": [
                                    {
                                        "@type": "AdministrativeArea",
                                        "name": "Buckinghamshire"
                                    },
                                    ...serviceAreas.map(town => ({
                                        "@type": "City",
                                        "name": town
                                    }))
                                ],
                                "description": "Patient, jargon-free home technology support across Buckinghamshire. Expert help for seniors and home users with Wi-Fi, printers, phones, and smart TVs.",
                                "openingHoursSpecification": [
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                        "opens": "09:00",
                                        "closes": "21:00"
                                    }
                                ],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Technology Support Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Wi-Fi & Connectivity Troubleshooting",
                                                "description": "Help with slow internet, dead zones, and connecting devices to your home network."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Printer Setup & Support",
                                                "description": "Installation, wireless configuration, and troubleshooting for home printers."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Smartphone & Tablet Help",
                                                "description": "Patient guidance on using iPhones, iPads, and Android devices."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Smart TV & Streaming Setup",
                                                "description": "Setting up Netflix, iPlayer, and other streaming services on your TV."
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Tech MOT (Security & Optimization)",
                                                "description": "Full device checkup, security updates, and performance optimization."
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Bucks Tech Help",
                                "url": "https://www.buckstechhelp.co.uk",
                                "logo": "https://www.buckstechhelp.co.uk/logo.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+44-7343-079390",
                                    "contactType": "customer support",
                                    "areaServed": "GB",
                                    "availableLanguage": "en"
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Bucks Tech Help",
                                "url": "https://www.buckstechhelp.co.uk",
                                "publisher": {
                                    "@id": "https://www.buckstechhelp.co.uk/#localbusiness"
                                }
                            }
                        ])
                    }}
                />
            </head>
            <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
                {children}
            </body>
        </html>
    );
}
