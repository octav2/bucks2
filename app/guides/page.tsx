import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/ServiceCTA';
import { getAllBlogPosts } from '@/lib/blog';
import { businessDetails } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const baseUrl = businessDetails.domain;

export function generateMetadata(): Metadata {
    return {
        title: { absolute: 'Guides & Advice | Bucks Tech Help' },
        description: 'Practical guides on structured cabling, Wi-Fi and network security, written by the installers at Bucks Tech Help.',
        alternates: { canonical: `${baseUrl}/guides` },
        openGraph: {
            title: 'Guides & Advice | Bucks Tech Help',
            description: 'Practical guides on cabling, Wi-Fi and network security from the installers at Bucks Tech Help.',
            url: `${baseUrl}/guides`,
            siteName: businessDetails.name,
            locale: 'en_GB',
            type: 'website',
            images: ['/og-image.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Guides & Advice | Bucks Tech Help',
            description: 'Practical guides on cabling, Wi-Fi and network security from the installers at Bucks Tech Help.',
            images: ['/og-image.png'],
        },
    };
}

export default function GuidesPage() {
    const posts = getAllBlogPosts();

    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Guides & Advice',
        description: 'Practical guides on structured cabling, Wi-Fi and network security from Bucks Tech Help.',
        url: `${baseUrl}/guides`,
        isPartOf: { '@type': 'WebSite', '@id': baseUrl },
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <Header />

            <main>
                {/* HERO */}
                <section className="py-16 md:py-24 px-4 bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
                    <div className="relative max-w-4xl mx-auto text-center">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-5">Bucks Tech Help</span>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight text-balance">Guides &amp; Advice</h1>
                        <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            Plain-language guides on cabling, Wi-Fi and security, written by the engineers who install and test this kit every week.
                        </p>
                    </div>
                </section>

                {/* POST LIST */}
                <section className="py-14 px-4 bg-slate-900 border-y border-slate-800">
                    <div className="max-w-5xl mx-auto">
                        {posts.length === 0 ? (
                            <p className="text-center text-slate-400 font-medium">No guides published yet. Check back soon.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {posts.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/guides/${p.slug}`}
                                        className="group flex flex-col gap-3 bg-slate-950/70 border border-slate-800 p-7 rounded-3xl hover:border-blue-600/40 hover:bg-slate-900 transition-all duration-300"
                                    >
                                        <h2 className="font-black text-white group-hover:text-blue-300 transition-colors text-xl md:text-2xl leading-snug">
                                            {p.frontmatter.title}
                                        </h2>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium line-clamp-3">
                                            {p.frontmatter.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm mt-auto pt-3">
                                            Read the guide <ArrowRight size={16} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <ServiceCTA />
            </main>

            <Footer />
        </div>
    );
}