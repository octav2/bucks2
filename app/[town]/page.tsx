import React from 'react';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { serviceAreas, businessDetails } from '@/lib/data';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export async function generateMetadata({ params }: { params: { town: string } }) {
    const townName = params.town
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `Bucks Tech Help ${townName} | Home Technology Support`,
        description: `Friendly home tech support in ${townName} from Bucks Tech Help. Expert help with Wi-Fi, printers, phones, smart TVs and more. Patient, jargon-free support for ${townName} residents.`,
    };
}

export default function TownPage({ params }: { params: { town: string } }) {
    const townName = params.town
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const isServiced = serviceAreas.some(area => area.toLowerCase() === townName.toLowerCase());
    if (!isServiced) return notFound();

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <Script
                id={`local-schema-${params.town}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `Bucks Tech Help ${townName}`,
                        "description": `Patient, jargon-free home technology support in ${townName}. Expert help with Wi-Fi, printers, phones, and smart TVs for ${townName} residents.`,
                        "url": `https://www.buckstechhelp.co.uk/${params.town}`,
                        "telephone": "0734 307 9390",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": townName,
                            "addressRegion": "Buckinghamshire",
                            "addressCountry": "GB"
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": townName
                        }
                    })
                }}
            />

            {/* Localized Hero Section */}
            <section className="relative overflow-hidden bg-blue-50 py-16 md:py-24 px-4 border-b border-blue-100">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-900 text-blue-50 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <MapPin size={16} /> Patient Tech Support in {townName}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-8 leading-tight tracking-tight">
                        IT Support & Computer Technician in <span className="text-blue-600">{townName}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        If you are searching for computer help near me in {townName}, Bucks Tech Help is here to provide patient, jargon-free support. We offer local computer services, software troubleshooting, and home tech setup right to your door.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:07343079390" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Book a Visit in {townName}
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
                            <MessageCircle className="text-green-600" size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-blue-600" /> Evening & Weekend Appointments</span>
                    </div>
                </div>
            </section>

            <Services />
            
            <Pricing />
            
            <HowItWorks />
            
            {/* Local Trust Note */}
            <section className="py-16 px-4 bg-blue-900 text-white overflow-hidden relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Trusted Local Support for {townName} Residents</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        We specialize in helping older residents and busy families in {townName} get the most out of their home technology without the stress.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-800/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-700">
                            <CheckCircle className="text-green-400 mx-auto mb-3" size={32} />
                            <h3 className="font-bold">Patient & Clear</h3>
                            <p className="text-sm text-blue-200">No jargon, just simple help.</p>
                        </div>
                        <div className="bg-blue-800/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-700">
                            <CheckCircle className="text-green-400 mx-auto mb-3" size={32} />
                            <h3 className="font-bold">Home Visits</h3>
                            <p className="text-sm text-blue-200">We come to you in {townName}.</p>
                        </div>
                        <div className="bg-blue-800/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-700">
                            <CheckCircle className="text-green-400 mx-auto mb-3" size={32} />
                            <h3 className="font-bold">Safe & Secure</h3>
                            <p className="text-sm text-blue-200">DBS checked & fully insured.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <FAQ />

            {/* Local CTA */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto bg-blue-50 rounded-[2.5rem] p-10 md:p-16 text-center border border-blue-100 shadow-sm">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Get Tech Help in {townName} Today</h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Whether it's a printer that won't print or a Wi-Fi dead zone, we're just a call or message away from helping you solve it.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:07343079390" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                            <Phone size={20} />
                            0734 307 9390
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
