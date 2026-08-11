import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/ServiceCTA';
import { servicesData, ServiceData } from '@/lib/servicesData';
import { locationsData } from '@/lib/locationsData';
import { businessDetails } from '@/lib/data';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicePageLayout({ service }: { service: ServiceData }) {
    const otherServices = Object.values(servicesData).filter((s) => s.slug !== service.slug);
    const areas = ["Beaconsfield", "Amersham", "Chesham", "Gerrards Cross", "High Wycombe", "Marlow"];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        provider: {
            "@type": "LocalBusiness",
            name: businessDetails.name,
            url: businessDetails.domain,
            telephone: businessDetails.phone,
            priceRange: businessDetails.priceRange,
        },
        areaServed: areas.map((t) => ({ "@type": "City", name: t })),
        description: service.metaDesc,
        offers: {
            "@type": "Offer",
            priceSpecification: {
                "@type": "PriceSpecification",
                price: "1500",
                priceCurrency: "GBP",
                minPrice: "1500",
            },
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Where do you install in Buckinghamshire?",
                acceptedAnswer: { "@type": "Answer", text: "We install across Buckinghamshire including Beaconsfield, Amersham, Chesham, Gerrards Cross, High Wycombe and nearby areas." },
            },
            {
                "@type": "Question",
                name: "How much does a project typically cost?",
                acceptedAnswer: { "@type": "Answer", text: service.engagement },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Script id={`service-schema-${service.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }} />

            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <service.icon size={16} /> {service.heroPill}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-center">
                        {service.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center leading-relaxed font-medium mb-10">
                        {service.intro}
                    </p>
                    <ul className="max-w-2xl mx-auto space-y-3">
                        {service.heroBullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-200 font-medium">
                                <CheckCircle size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" /> {b}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-10">
                        <Link href="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Get a Quote <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">About This Service</h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">{service.longDescription}</p>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {service.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                                <CheckCircle size={22} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-200 font-medium">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*_SERVICE_REST*/}
            {/* Process */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">Our Process</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {service.process.map((p, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                                <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black flex items-center justify-center">{i + 1}</span>
                                <p className="text-slate-200 font-bold">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement / Budget */}
            <section className="py-16 px-4 bg-slate-950">
                <div className="max-w-3xl mx-auto bg-slate-900/70 border border-slate-800 rounded-3xl p-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">Typical Investment</h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">{service.engagement}</p>
                    <p className="text-sm text-slate-500 mt-4">A fixed, itemised quote is emailed after your free online quote audit.</p>
                </div>
            </section>

            {/* Areas */}
            <section className="py-16 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight text-center">Available Across Buckinghamshire</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {areas.map((a) => {
                            const slug = a.toLowerCase().replace(/\s+/g, '-');
                            return locationsData[slug] ? (
                                <Link key={slug} href={`/locations/${slug}`} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all">
                                    {a}
                                </Link>
                            ) : (
                                <span key={a} className="bg-slate-800 border border-slate-700 px-5 py-2.5 rounded-full text-sm font-bold text-slate-300">{a}</span>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Other services */}
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
            {/*_SERVICE_REST_END*/}
        </div>
    );
}
