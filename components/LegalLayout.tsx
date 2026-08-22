import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const baseUrl = 'https://www.buckstechhelp.co.uk';

export default function LegalLayout({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: `${baseUrl}${path}`,
        isPartOf: { '@type': 'WebSite', '@id': baseUrl },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: title, item: `${baseUrl}${path}` },
        ],
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-slate-200 pb-28 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, breadcrumbSchema]) }}
            />
            <Header />

            <section className="px-4 pt-28 md:pt-32 pb-20">
                <div className="max-w-3xl mx-auto bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></span>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">{title}</h1>
                    </div>

                    <div className="max-w-none space-y-6 text-slate-300 leading-relaxed">
                        {children}
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#1E293B]">
                        <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2">
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileStickyCTA />
        </div>
    );
}