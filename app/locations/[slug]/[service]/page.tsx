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
    type LocationServiceSection,
} from '@/lib/locationServices';
import { businessDetails } from '@/lib/data';
import {
    Wifi,
    Cable,
    Cctv,
    CheckCircle,
    ArrowRight,
    ChevronRight,
    HelpCircle,
} from 'lucide-react';

export const dynamicParams = false;

const SERVICE_META: Record<string, { icon: any; pill: string }> = {
    'wifi-installation': { icon: Wifi, pill: 'Whole-Home Wi-Fi · Zero Dead Zones' },
    'network-cabling': { icon: Cable, pill: 'Structured Cabling · Rack Installation' },
    'cctv-installation': { icon: Cctv, pill: '4K IP CCTV · No Monthly Fees' },
};

function renderSection(section: LocationServiceSection, key: number) {
    const onDark = key % 2 === 1;
    const bandBg = onDark ? 'bg-slate-950' : 'bg-slate-900';
    const bandBorder = onDark ? '' : 'border-y border-slate-800';

    switch (section.kind) {
        case 'prose':
            return (
                <section key={key} className={`py-16 px-4 ${bandBg} ${bandBorder}`}>
                    <div className="max-w-4xl mx-auto">
                        <span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-5"></span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">{section.title}</h2>
                        <div className="markdown-body text-lg text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: section.html }} />
                    </div>
                </section>
            );
        case 'bullets':
            return (
                <section key={key} className={`py-16 px-4 ${bandBg} ${bandBorder}`}>
                    <div className="max-w-4xl mx-auto">
                        <span className="flex justify-center"><span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></span></span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {section.items.map((item, i) => (
                                <div key={i} className="group flex items-start gap-3 bg-slate-900/70 border border-slate-800 hover:border-blue-600/40 p-6 rounded-2xl transition-colors duration-300">
                                    <CheckCircle size={22} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case 'faq':
            return (
                <section key={key} className="py-16 px-4 bg-slate-950 border-t border-slate-800">
                    <div className="max-w-3xl mx-auto">
                        <span className="flex justify-center mb-4"><HelpCircle size={28} className="text-blue-400" /></span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="space-y-4">
                            {section.faqs.map((faq, i) => (
                                <details key={i} className="group bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
                                    <summary className="w-full flex items-center justify-between gap-4 cursor-pointer text-left p-6 hover:bg-slate-800/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                        <span className="font-bold text-white text-lg flex gap-3 items-center">
                                            <HelpCircle className="text-blue-400 flex-shrink-0" size={22} /> {faq.question}
                                        </span>
                                        <span className="text-blue-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                                        </span>
                                    </summary>
                                    <p className="text-slate-400 leading-relaxed pl-6 pr-6 pb-6 font-medium">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            );
    }
}


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
    const meta = SERVICE_META[page.service] ?? { icon: Wifi, pill: 'Local Service' };
    const Icon = meta.icon;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(page.jsonLd) }}
            />

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

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 pb-20 md:pb-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <Icon size={16} /> {meta.pill}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight text-center">
                        {page.pageTitle || page.metaTitle.split('|')[0].trim()}
                    </h1>
                    {page.introHtml && (
                        <div className="markdown-body max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: page.introHtml }} />
                    )}
                    <div className="flex justify-center mt-10">
                        <Link href={quoteHref} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Book a Free Survey in {town} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content sections rendered from the markdown brief */}
            {page.sections.map((section, i) => renderSection(section, i))}

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

            <Footer />
        </div>
    );
}
