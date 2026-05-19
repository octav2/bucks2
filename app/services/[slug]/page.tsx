import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesData } from '@/lib/servicesData';
import { serviceAreas, businessDetails } from '@/lib/data';
import { CheckCircle, Phone, MessageCircle, Clock, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    return [
        { slug: 'computer-laptop-support' },
        { slug: 'home-printer-setup-help' },
        { slug: 'wifi-internet-setup' },
        { slug: 'phone-tablet-setup' },
        { slug: 'smart-tv-setup' },
        { slug: 'computer-security-scam-checks' },
    ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const service = servicesData[params.slug];
    if (!service) return {};

    return {
        title: service.metaTitle,
        description: service.metaDesc,
        alternates: {
            canonical: `https://www.buckstechhelp.co.uk/services/${params.slug}`
        }
    };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = servicesData[params.slug];
    if (!service) return notFound();

    const Icon = service.icon;

    // Get other services for navigation
    const otherServices = Object.values(servicesData).filter(s => s.slug !== params.slug);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Header Schema for service page */}
            <Script
                id={`service-schema-${params.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": service.title,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Bucks Tech Help",
                            "image": "https://www.buckstechhelp.co.uk/logo.png",
                            "telephone": "0734 307 9390",
                            "priceRange": "££",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "High Wycombe",
                                "addressRegion": "Buckinghamshire",
                                "addressCountry": "GB"
                            }
                        },
                        "areaServed": serviceAreas.map(town => ({
                            "@type": "City",
                            "name": town
                        })),
                        "description": service.metaDesc
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32 px-4 border-b border-blue-100">
                {/* Modern Tech Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Link href="/#services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm mb-8 group transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Services
                    </Link>

                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/80 p-5 rounded-2xl text-blue-600 shadow-inner">
                            <Icon size={40} />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-blue-950 mb-8 leading-tight tracking-tight">
                        {service.title}
                    </h1>

                    {/* SEO Target Keywords Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto mb-10">
                        {service.keywords.map((kw, i) => (
                            <span key={i} className="text-[11px] font-black uppercase tracking-wider text-blue-900/60 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/50">
                                {kw}
                            </span>
                        ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                        {service.intro}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:07343079390" className="w-full sm:w-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10">
                            <Phone size={20} />
                            Book a Home Visit
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                            <MessageCircle className="text-green-600" size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Service Content */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left/Main Column - Description and Checklist */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-2xl font-black text-blue-950 mb-6 tracking-tight">Service Overview</h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    {service.longDescription}
                                </p>
                            </div>

                            <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-950 mb-6">Common Help We Provide:</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feat, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 text-base font-medium">
                                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Pricing and Trust Card */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden border border-blue-800">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight">Clear Pricing</h3>
                                <p className="text-blue-100 text-sm leading-relaxed mb-6 font-medium">
                                    {service.pricing}
                                </p>
                                <div className="pt-6 border-t border-white/10 space-y-4">
                                    <div className="flex items-center gap-3 text-xs text-blue-200 font-bold uppercase tracking-wider">
                                        <Clock size={16} className="text-blue-400" /> Evening & Weekend visits
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-blue-200 font-bold uppercase tracking-wider">
                                        <CheckCircle size={16} className="text-green-400" /> DBS Checked & Insured
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 rounded-[2rem] p-8 border border-blue-100/50">
                                <h3 className="text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-blue-600" /> Service Area
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4">
                                    We visit homes across Buckinghamshire and South Bucks.
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {serviceAreas.slice(0, 8).map((area, i) => (
                                        <span key={i} className="text-[10px] font-bold text-blue-950 bg-white border border-blue-100 px-2.5 py-1 rounded-md">
                                            {area}
                                        </span>
                                    ))}
                                    <span className="text-[10px] font-bold text-gray-500 px-2 py-1">and more...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA Banner */}
            <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 text-center border border-gray-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <h2 className="text-3xl font-black text-blue-950 mb-6 tracking-tight">Need {service.title}?</h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                        Get patient, professional help that comes directly to you. Speak with a local computer technician today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:07343079390" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-md">
                            <Phone size={20} />
                            0734 307 9390
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-green-600/10">
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Dynamic Other Services Navigation */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-black text-blue-950 mb-10 tracking-tight text-center">Other Services We Can Help With</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherServices.slice(0, 4).map((s, index) => {
                            const SIcon = s.icon;
                            return (
                                <Link 
                                    href={`/services/${s.slug}`} 
                                    key={index} 
                                    className="group flex gap-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl text-blue-600 flex-shrink-0 h-14 w-14 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                                        <SIcon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-blue-950 group-hover:text-blue-600 transition-colors mb-2 text-lg">{s.title}</h4>
                                        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed font-medium">{s.metaDesc}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
