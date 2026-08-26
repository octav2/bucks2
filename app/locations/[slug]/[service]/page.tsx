import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MicroTrust from '@/components/MicroTrust';
import { getLocationBySlug } from '@/lib/locations';
import {
    getAllLocationServiceSlugs,
    getLocationService,
} from '@/lib/locationServices';
import { businessDetails } from '@/lib/data';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllLocationServiceSlugs().map(({ town, service }) => ({
        slug: town,
        service,
    }));
}

interface Props {
    params: { slug: string; service: string };
}

const domain = 'https://www.buckstechhelp.co.uk';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = getLocationService(params.slug, params.service);
    if (!page) return {};
    return {
        title: { absolute: page.metaTitle },
        description: page.metaDescription,
        alternates: { canonical: page.canonical || `${domain}/locations/${page.slug}` },
        robots: { index: true, follow: true },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            url: page.canonical || `${domain}/locations/${page.slug}`,
            siteName: businessDetails.name,
            locale: 'en_GB',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: page.metaTitle,
            description: page.metaDescription,
        },
    };
}

export default function LocationServicePage({ params }: Props) {
    const page = getLocationService(params.slug, params.service);
    if (!page) return notFound();

    const location = getLocationBySlug(page.town);
    const town = location?.name ?? page.town;
    const hubHref = `/locations/${page.town}`;
    const quoteHref = '/quote';

    return (
        <div className="bg-slate-950 min-h-screen">
            <Header />

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="pt-28 pb-6 px-4 bg-slate-950">
                <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-slate-400 font-medium">
                    <li>
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight size={14} /></li>
                    <li>
                        <Link href={hubHref} className="hover:text-blue-400 transition-colors">{town}</Link>
                    </li>
                    <li aria-hidden="true"><ChevronRight size={14} /></li>
                    <li aria-current="page" className="text-slate-200">{page.metaTitle.split('|')[0].trim()}</li>
                </ol>
            </nav>

            {/* Page body rendered from the markdown brief */}
            <article
                className="markdown-body max-w-4xl mx-auto px-4 pb-16 text-lg text-slate-300 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
            />

            {/* CTA */}
            <section className="py-16 px-4 bg-slate-950">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight">Book a Free Survey in {town}</h2>
                        <p className="text-blue-100 text-lg mb-9 max-w-xl mx-auto leading-relaxed">Complete our 2-minute quote audit and receive a preliminary scope within 24 hours.</p>
                        <Link href={quoteHref} className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                            Start My Free Quote Audit <ArrowRight size={22} />
                        </Link>
                        <div className="mt-6">
                            <MicroTrust />
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD structured data from the content brief */}
            {page.jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(page.jsonLd) }}
                />
            )}

            <Footer />
        </div>
    );
}
