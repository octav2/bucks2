import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Use a clean, readable font for older demographics
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.buckstechhelp.co.uk'),
    title: 'Home Tech Help Buckinghamshire | Wi-Fi, Printers, Phones & Smart TVs',
    description: 'Friendly home tech support across Buckinghamshire. Help with Wi-Fi, printers, phones, tablets, laptops, smart TVs, email issues and scam messages. Evening and weekend appointments.',
    keywords: ['Home tech help Buckinghamshire', 'Wi-Fi help', 'Printer setup', 'Tech help for seniors', 'IT support at home'],
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
            </head>
            <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
                {children}
            </body>
        </html>
    );
}
