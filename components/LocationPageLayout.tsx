import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/ServiceCTA';
import { LocationData, locationsData } from '@/lib/locationsData';
import { servicesData } from '@/lib/servicesData';
import { businessDetails } from '@/lib/data';
import { CheckCircle, MapPin, ArrowRight } from 'lucide-react';

export default function LocationPageLayout({ location }: { location: LocationData }) {
    const otherLocations = Object.values(locationsData).filter((l) => l.slug !== location.slug);
    const services = Object.values(servicesData);

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Bucks Tech Help ${location.name}`,
        description: location.metaDesc,
        url: `${businessDetails.domain}/locations/${location.slug}`,
        telephone: businessDetails.phone,
        priceRange: businessDetails.priceRange,
        address: {
            "@type": "PostalAddress",
            addressLocality: location.name,
            addressRegion: "Buckinghamshire",
            addressCountry: "GB",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: location.geo.latitude,
            longitude: location.geo.longitude,
        },
        areaServed: [{ "@type": "City", name: location.name }],
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Script id={`local-schema-${location.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <MapPin size={16} /> Network Installations in {location.name}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-center">
                        {location.headline}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center leading-relaxed font-medium mb-10">
                        {location.intro}
                    </p>
                    <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {location.details.map((d, i) => (
                            <div key={i} className="flex items-start gap-2.5 bg-slate-900/70 border border-slate-800 p-4 rounded-xl">
                                <CheckCircle size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-200 text-sm font-medium">{d}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link href="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Get a {location.name} Quote <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/*_LOCATION_REST*/}
            {/* Local services */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">Services in {location.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-slate-800/60 border border-slate-700 p-7 rounded-3xl hover:border-blue-600/40 hover:-translate-y-1 transition-all duration-300">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5">
                                    <s.icon size={26} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">{s.shortTitle}</h3>
                                <p className="text-sm text-slate-400 font-medium">In {location.name} &amp; nearby villages.</p>
                            </Link>
                        ))}
                    </div>
                    <h2 className="text-2xl font-black text-white mt-14 mb-6 tracking-tight">Local Knowledge in {location.name}</h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                        We cover {location.name} and the surrounding villages of {location.nearby.join(', ')}. Our installers understand the construction and connectivity challenges common to properties in this area, and plan every cable run for a tidy, minimal-disruption finish.
                    </p>
                </div>
            </section>

            {/* Local FAQ */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 tracking-tight text-center">FAQs for {location.name}</h2>
                    <div className="space-y-4">
                        {location.faqs.map((f, i) => (
                            <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white flex gap-3 mb-3">
                                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0" /> {f.question}
                                </h3>
                                <p className="text-slate-400 leading-relaxed pl-9 font-medium">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby locations */}
            <section className="py-16 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-black text-white mb-8 tracking-tight text-center">Nearby Areas We Cover</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {otherLocations.map((l) => (
                            <Link key={l.slug} href={`/locations/${l.slug}`} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all">
                                {l.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCTA title={`Ready for a ${location.name} network installation?`} subtitle="Complete our 2-minute quote audit and receive a preliminary scope and fixed price within 24 hours." />
            <Footer />
            {/*_LOCATION_REST_END*/}
        </div>
    );
}
