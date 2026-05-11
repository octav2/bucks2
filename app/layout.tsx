import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Use a clean, readable font for older demographics
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.buckstechhelp.co.uk'),
    title: 'Bucks Tech Help | Home Tech Support Buckinghamshire',
    description: 'Patient, jargon-free home technology support across Buckinghamshire. Expert help with Wi-Fi, printers, phones, smart TVs and more.',
    keywords: ['Bucks Tech Help', 'Home tech help Buckinghamshire', 'Wi-Fi help', 'Printer setup', 'Tech help for seniors', 'IT support at home'],
    openGraph: {
        title: 'Bucks Tech Help',
        description: 'Patient, jargon-free home technology support across Buckinghamshire.',
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
                <link rel="alternate" type="text/plain" href="/llm.txt" />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-YKTBYJCCLC"
                />
                <Script id="google-analytics">
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
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Bucks Tech Help",
                            "image": "https://www.buckstechhelp.co.uk/logo.png",
                            "@id": "https://www.buckstechhelp.co.uk",
                            "url": "https://www.buckstechhelp.co.uk",
                            "telephone": "0734 307 9390",
                            "priceRange": "££",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "High Wycombe",
                                "addressRegion": "Buckinghamshire",
                                "addressCountry": "GB"
                            },
                            "areaServed": [
                                {
                                    "@type": "AdministrativeArea",
                                    "name": "Buckinghamshire"
                                }
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
                                            "name": "Wi-Fi & Connectivity Troubleshooting"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Printer Setup & Support"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Smartphone & Tablet Help"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Smart TV & Streaming Setup"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Tech MOT (Security & Optimization)"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </head>
            <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
                {children}
            </body>
        </html>
    );
}
