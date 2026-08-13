import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.buckstechhelp.co.uk'),
    title: {
        default: 'Bucks Tech Help | Network & Cabling Specialists',
        template: '%s | Bucks Tech Help',
    },
    description: 'Ubiquiti UniFi & TP-Link Omada installer in Buckinghamshire. Hardwired whole-home & garden office Wi-Fi, Cat6 structured cabling and subscription-free 4K IP CCTV for large homes and businesses across Beaconsfield, Amersham, Chesham & High Wycombe.',
    keywords: [
        'Ubiquiti UniFi installer Buckinghamshire',
        'home network cabling Amersham',
        'garden office internet setup Chesham',
        'Cat6 structured cabling',
        '4K IP CCTV installation',
        'enterprise Wi-Fi Beaconsfield',
        'network installation High Wycombe',
    ],
    openGraph: {
        title: 'Bucks Tech Help | Enterprise Wi-Fi, Cabling & CCTV',
        description: 'Hardwired Wi-Fi, structured cabling and IP CCTV infrastructure for large homes, garden offices and businesses across Buckinghamshire.',
        locale: 'en_GB',
        type: 'website',
        url: 'https://www.buckstechhelp.co.uk',
        siteName: 'Bucks Tech Help',
    },
    robots: {
        index: true,
        follow: true,
    },
    formatDetection: {
        telephone: false,
        email: true,
        address: true,
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
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-861758447"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-YKTBYJCCLC');
                        gtag('config', 'AW-861758447');
                    `}
                </Script>
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([localBusinessSchema(), organizationSchema(), websiteSchema()]),
                    }}
                />
            </head>
            <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
                {children}
            </body>
        </html>
    );
}
