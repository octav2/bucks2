import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import WhoIHelp from '@/components/WhoIHelp';
import HowItWorks from '@/components/HowItWorks';
import CoverageMap from '@/components/CoverageMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ServiceCTA from '@/components/ServiceCTA';
import BrandTrustBar from '@/components/BrandTrustBar';
import ProblemAgitation from '@/components/ProblemAgitation';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import MicroTrust from '@/components/MicroTrust';
import { ArrowRight, Zap, ShieldCheck, Wifi, Gauge, HardHat } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: { absolute: 'Enterprise Property Connectivity Architecture | Bucks Tech Help' },
    description: 'Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a structured cabling, and subscription-free 4K CCTV engineered for luxury estates, period homes, and commercial premises across Buckinghamshire.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Enterprise Property Connectivity Architecture across Buckinghamshire',
        description: 'Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a structured cabling, and subscription-free 4K CCTV engineered for luxury estates, period homes, and commercial premises across Buckinghamshire.',
        url: 'https://www.buckstechhelp.co.uk/',
        siteName: 'Bucks Tech Help',
        locale: 'en_GB',
        type: 'website',
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise Property Connectivity Architecture across Buckinghamshire',
        description: 'Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a structured cabling, and subscription-free 4K CCTV engineered for luxury estates, period homes, and commercial premises across Buckinghamshire.',
        images: ['/og-image.png'],
    },
};

const enterpriseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'HomeAndConstructionBusiness',
            '@id': 'https://www.buckstechhelp.co.uk/#organization',
            name: 'Bucks Tech Help',
            url: 'https://www.buckstechhelp.co.uk',
            logo: 'https://www.buckstechhelp.co.uk/icon.png',
            image: 'https://www.buckstechhelp.co.uk/icon.png',
            telephone: '07343079390',
            priceRange: '£1500 - £5000+',
            address: {
                '@type': 'PostalAddress',
                addressRegion: 'Buckinghamshire',
                addressCountry: 'GB',
            },
            areaServed: [
                'Beaconsfield', 'Amersham', 'Gerrards Cross', 'Chesham', 'High Wycombe', 'Marlow', 'Aylesbury',
            ],
        },
        {
            '@type': 'Service',
            name: 'Enterprise Whole-Home Connectivity Architecture',
            provider: { '@id': 'https://www.buckstechhelp.co.uk/#organization' },
            serviceType: 'Wi-Fi Installation & Structured Cabling',
            brand: { '@type': 'Brand', name: 'Ubiquiti UniFi' },
            offers: { '@type': 'Offer', price: '1500.00', priceCurrency: 'GBP' },
        },
        {
            '@type': 'Service',
            name: 'High-Density Data Infrastructure & Enterprise Rack Architecture',
            provider: { '@id': 'https://www.buckstechhelp.co.uk/#organization' },
            serviceType: 'Commercial Network Cabling & Server Racks',
            offers: { '@type': 'Offer', price: '2000.00', priceCurrency: 'GBP' },
        },
        {
            '@type': 'Service',
            name: 'Subscription-Free 4K Property Perimeter Security & Smart Access',
            provider: { '@id': 'https://www.buckstechhelp.co.uk/#organization' },
            serviceType: '4K CCTV & Video Access Control',
            brand: { '@type': 'Brand', name: 'Ubiquiti Protect' },
            offers: { '@type': 'Offer', price: '1800.00', priceCurrency: 'GBP' },
        },
    ],
};

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 pb-28 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchema) }}
            />
            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32 px-4">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 px-5 py-2 rounded-full text-sm font-bold mb-10">
                        <Wifi size={16} /> Enterprise Connectivity Architecture · Buckinghamshire
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.08] tracking-tight text-balance">
                        Enterprise Property Connectivity{" "}
                        <span className="text-blue-400">Architecture Across Buckinghamshire</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-400 mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
                        Hardwired Ubiquiti UniFi Wi-Fi 7 backbones, certified Cat6a data cabling, and
                        subscription-free 4K CCTV engineered for luxury estates, period homes, and commercial premises.
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link href="/quote" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-6 rounded-2xl font-black text-xl hover:from-blue-600 hover:to-blue-800 transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3">
                            Get My Free Quote Audit <ArrowRight size={24} />
                        </Link>
                        <Link href="/services/whole-home-wifi" className="w-full sm:w-auto bg-slate-900 text-white border border-slate-700 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-slate-800 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3">
                            <Gauge size={24} className="text-blue-400" /> Explore Services
                        </Link>
                    </div>

                    <div className="mt-6">
                        <MicroTrust />
                    </div>

                    <BrandTrustBar />

                    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-slate-400 font-bold text-sm md:text-base uppercase tracking-widest">
                        <span className="flex items-center gap-2.5"><ShieldCheck className="text-emerald-400" size={20} /> Fully Tested &amp; Certified</span>
                        <span className="flex items-center gap-2.5"><Zap className="text-blue-400" size={20} /> Zero Dead Zones</span>
                        <span className="flex items-center gap-2.5"><HardHat className="text-blue-400" size={20} /> Tidy, Low-Disruption Installs</span>
                    </div>
                </div>
            </section>

            {/* PROBLEM AGITATION */}
            <ProblemAgitation />

            {/*_HOME_REST*/}
            {/* VALUE PROPS */}
            <section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Why Bucks Tech Help</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Infrastructure That Performs Like an Enterprise Network</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Gauge, title: "Engineered Performance", desc: "Hardwired access points and structured cabling deliver consistent Gigabit speeds in every room, not the halved throughput of plug-in boosters." },
                            { icon: ShieldCheck, title: "Done Once, Done Right", desc: "Every project is planned, terminated and certified. Labelled cabling, tidy containment and a documented handover built to last." },
                            { icon: Zap, title: "No Monthly Fees", desc: "Subscriptions are the default elsewhere. Our CCTV and networks are owned outright, with no recurring charges and no cloud lock-in." },
                        ].map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={i} className="bg-slate-800/60 border border-slate-700 p-8 rounded-3xl hover:border-blue-600/40 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{v.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Services />
            <WhoIHelp />
            <HowItWorks />
            <CoverageMap />
            <Testimonials />
            <FAQ />
            <ServiceCTA />
            <Footer />
            <MobileStickyCTA />
            {/*_HOME_REST_END*/}
        </div>
    );
}