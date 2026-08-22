import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/ServiceCTA';
import { servicesData } from '@/lib/servicesData';
import { getAllLocations, type LocationContent } from '@/lib/locations';
import { businessDetails } from '@/lib/data';
import type { ServiceContent, MarkdownSection } from '@/lib/markdown';
import { Wifi, Cable, Cctv, CheckCircle, ArrowRight, BadgeCheck } from 'lucide-react';

const heroMeta: Record<string, { icon: any; pill: string }> = {
    'whole-home-wifi': { icon: Wifi, pill: 'Enterprise Wi-Fi · Zero Dead Zones' },
    'commercial-cabling': { icon: Cable, pill: 'Structured Cabling · Rack Installation' },
    'smart-security': { icon: Cctv, pill: '4K IP CCTV · No Monthly Fees' },
};

// Enriched per-service Service schema config. Extend per slug as each service template is defined.
const serviceSchemaConfig: Record<string, { serviceType: string; catalogName: string; items: string[] }> = {
    'whole-home-wifi': {
        serviceType: 'Whole Home Wi-Fi & Enterprise Network Installation',
        catalogName: 'Wi-Fi & Network Solutions',
        items: [
            'Whole Home Wi-Fi Installation',
            'Commercial Wi-Fi Solutions',
            'Outdoor Wi-Fi Access Points',
            'Garden Office Internet Links',
            'Smart Home IoT VLAN Setup',
        ],
    },
    'commercial-cabling': {
        serviceType: 'Structured Network Cabling & Data Rack Installation',
        catalogName: 'Commercial Data Cabling Services',
        items: [
            'Cat6 & Cat6a Ethernet Cable Installation',
            'Data Cabinet & Network Rack Installation',
            'Patch Panel Wiring & Termination',
            'Trunking & Cable Containment',
            'PoE Switch & Managed Network Setup',
            'Server Room Cable Tidying & Re-Dressing',
        ],
    },
    'smart-security': {
        serviceType: '4K CCTV Installation & Smart Access Control',
        catalogName: 'Security & Access Control Solutions',
        items: [
            'Commercial CCTV Installation',
            'Smart Door Access Control Systems',
            'Outdoor Security Cameras',
            'Integrated Security Systems',
            'NVR Storage Upgrades',
        ],
    },
};

function extractPrice(value: string): string {
    const match = /£\s*([\d,]+)/.exec(value);
    return match ? match[1].replace(/,/g, '') : '1500';
}

function renderSection(section: MarkdownSection, key: number) {
    switch (section.kind) {
        case 'prose':
            return (
                <section key={key} className="py-14 px-4 bg-slate-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">{section.title}</h2>
                        <div className="markdown-body text-lg text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: section.html }} />
                    </div>
                </section>
            );
        case 'bullets':
            return (
                <section key={key} className="py-14 px-4 bg-slate-950">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-slate-900/70 border border-slate-800 p-6 rounded-2xl">
                                    <CheckCircle size={22} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case 'table':
            return (
                <section key={key} className="py-14 px-4 bg-slate-950">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
                            <table className="markdown-table text-sm">
                                <thead>
                                    <tr>
                                        {section.headers.map((h, i) => (
                                            <th key={i}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.rows.map((row, ri) => (
                                        <tr key={ri}>
                                            {row.map((cell, ci) => (
                                                <td key={ci}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            );
        case 'steps':
            return (
                <section key={key} className="py-14 px-4 bg-slate-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {section.steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                                    <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black flex items-center justify-center">{i + 1}</span>
                                    <p className="text-slate-200 font-bold">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case 'faq':
            return (
                <section key={key} className="py-14 px-4 bg-slate-950">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">{section.title}</h2>
                        <div className="space-y-4">
                            {section.faqs.map((faq, i) => (
                                <details key={i} className="group bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
                                    <summary className="w-full flex items-center justify-between gap-4 cursor-pointer text-left p-6 hover:bg-slate-800/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                        <span className="font-bold text-white text-lg">{faq.question}</span>
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

export default function ServiceMarkdownLayout({ service }: { service: ServiceContent }) {
    const { frontmatter: fm, heroHighlights, sections } = service;
    const meta = heroMeta[service.slug] ?? { icon: Wifi, pill: 'Network Infrastructure' };
    const Icon = meta.icon;
        const otherServices = Object.values(servicesData).filter((s) => s.slug !== service.slug);
    const locationBySlug = Object.fromEntries(getAllLocations().map((l) => [l.slug, l]));

    const coverageSlugs = [
        'beaconsfield', 'amersham', 'chesham', 'gerrards-cross', 'high-wycombe', 'marlow',
        'hazlemere', 'great-missenden', 'bourne-end', 'penn', 'stoke-poges', 'chalfont-st-peter', 'aylesbury',
        'chalfont-st-giles', 'wendover', 'princes-risborough', 'berkhamsted', 'tring',
    ];
    const coverageTowns = coverageSlugs
        .map((slug) => locationBySlug[slug])
        .filter((l): l is LocationContent => Boolean(l))
        .map((l) => l.name);

    const faqSection = sections.find((s) => s.kind === 'faq');

    const serviceSchemaConfigForSlug = serviceSchemaConfig[service.slug];
    const serviceSchema = serviceSchemaConfigForSlug
        ? {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: serviceSchemaConfigForSlug.serviceType,
            name: fm.title,
            description: fm.metaDescription,
            provider: {
                '@type': 'LocalBusiness',
                name: businessDetails.name,
                email: businessDetails.email,
                url: businessDetails.domain,
                areaServed: coverageTowns.map((name) => ({ '@type': 'City', name })),
            },
            areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Buckinghamshire, UK',
            },
            offers: {
                '@type': 'Offer',
                priceCurrency: 'GBP',
                price: extractPrice(fm.startingPrice),
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: extractPrice(fm.startingPrice),
                    priceCurrency: 'GBP',
                },
                description: fm.priceDetails,
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: serviceSchemaConfigForSlug.catalogName,
                itemListElement: serviceSchemaConfigForSlug.items.map((name) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name },
                })),
            },
        }
        : {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: fm.title,
            provider: {
                '@type': 'LocalBusiness',
                name: businessDetails.name,
                url: businessDetails.domain,
                priceRange: businessDetails.priceRange,
            },
            areaServed: coverageTowns.map((name) => ({ '@type': 'City', name })),
            description: fm.metaDescription,
            offers: {
                '@type': 'Offer',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: extractPrice(fm.startingPrice),
                    priceCurrency: 'GBP',
                },
            },
        };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (faqSection && faqSection.kind === 'faq' ? faqSection.faqs : []).map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
            />

            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <Icon size={16} /> {meta.pill}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-center">
                        {fm.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center leading-relaxed font-medium mb-10">
                        {fm.subtitle}
                    </p>
                    <ul className="max-w-2xl mx-auto space-y-3">
                        {heroHighlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-200 font-medium">
                                <CheckCircle size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" /> {h}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-10">
                        <Link href="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Get a Free Quote Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* STARTING PRICE ANCHOR */}
            <section className="py-14 px-4 bg-slate-900 border-b border-slate-800">
                <div className="max-w-3xl mx-auto bg-slate-950/60 border border-cyan-500/20 rounded-3xl p-8 md:p-10 text-center">
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest mb-3">
                        <BadgeCheck size={16} /> {fm.pricingTitle || 'Starting Investment'}
                    </span>
                    <p className="text-4xl md:text-5xl font-black text-white">{fm.startingPrice}</p>
                    <p className="text-slate-300 text-lg mt-3 max-w-xl mx-auto leading-relaxed font-medium">{fm.priceDetails}</p>
                    <div className="mt-7">
                        <Link href="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-600/20 hover:scale-[1.02]">
                            Request My Property Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {sections.map((section, i) => renderSection(section, i))}

            {/* AREAS */}
            <section className="py-16 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight text-center">Available Across Buckinghamshire</h2>
                    <p className="text-slate-400 text-center font-medium mb-8">Enterprise infrastructure installed across all 13 Buckinghamshire location hubs.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {coverageSlugs.map((slug) => {
                            const loc = locationBySlug[slug];
                            if (!loc) return null;
                            return (
                                <Link key={slug} href={`/locations/${slug}`} className="flex items-center justify-center px-4 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 text-sm font-bold text-white text-center transition-all h-full">
                                    {loc.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* OTHER SERVICES */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-10 tracking-tight text-center">Explore More Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherServices.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex gap-5 bg-slate-900/60 border border-slate-800 p-6 rounded-3xl hover:border-blue-600/40 hover:bg-slate-900 transition-all duration-300">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-2xl text-white flex-shrink-0 h-14 w-14 flex items-center justify-center">
                                    <s.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-white group-hover:text-blue-300 transition-colors mb-2 text-lg">{s.shortTitle}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{s.intro}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCTA />
            <Footer />
        </div>
    );
}
