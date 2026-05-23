import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guidesData } from '@/lib/guidesData';
import { ArrowRight, BookOpen, Clock, User, ShieldCheck, Wifi, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { businessDetails } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Helpful Home Tech Guides & Tips | Bucks Tech Help',
    description: 'Read our simple, jargon-free guides on home tech support, Wi-Fi troubleshooting, and online safety tailored for Buckinghamshire residents.',
    alternates: {
        canonical: 'https://www.buckstechhelp.co.uk/guides'
    }
};

export default function GuidesPage() {
    const guides = Object.values(guidesData);

    // Dynamic icon getter based on category
    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'online security':
                return <ShieldCheck className="text-emerald-600" size={20} />;
            case 'home internet':
                return <Wifi className="text-blue-600" size={20} />;
            default:
                return <BookOpen className="text-indigo-600" size={20} />;
        }
    };

    // Dynamic category color getter
    const getCategoryStyles = (category: string) => {
        switch (category.toLowerCase()) {
            case 'online security':
                return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'home internet':
                return 'bg-blue-50 text-blue-700 border-blue-100';
            default:
                return 'bg-indigo-50 text-indigo-700 border-indigo-100';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50/50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* Premium Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white py-24 px-4">
                {/* Decorative glowing blobs */}
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-800/60 border border-blue-700/50 text-blue-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm">
                            <BookOpen size={14} className="text-emerald-400" /> Technology Made Simple
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
                        Friendly, Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Tech Guides</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
                        Patient, jargon-free articles to help you stay safe online, improve your Wi-Fi speeds, and get the absolute most out of your home technology.
                    </p>
                </div>
            </section>

            {/* Guides Grid Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {guides.map((guide, index) => (
                            <Link 
                                href={`/guides/${guide.slug}`} 
                                key={index} 
                                className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
                            >
                                {/* Decorative gradient accent bar */}
                                <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-emerald-500"></div>

                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    {/* Meta Tags Header */}
                                    <div className="flex flex-wrap items-center gap-3 mb-5">
                                        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryStyles(guide.category)}`}>
                                            {getCategoryIcon(guide.category)}
                                            {guide.category}
                                        </span>
                                        <span className="text-gray-400 text-xs flex items-center gap-1">
                                            <Clock size={12} />
                                            {guide.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {guide.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium flex-grow">
                                        {guide.metaDesc}
                                    </p>

                                    {/* Footer Info */}
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-blue-950 flex items-center justify-center text-white text-xs font-bold">
                                                B
                                            </div>
                                            <span className="text-slate-700 text-xs font-bold">{guide.author}</span>
                                        </div>
                                        
                                        <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                                            Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA / Help Banner */}
            <section className="py-12 px-4 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-550 to-blue-900 bg-blue-900 text-white rounded-[2.5rem] p-10 md:p-14 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <HelpCircle size={44} className="mx-auto mb-4 text-emerald-400" />
                        <h2 className="text-2xl md:text-3xl font-black mb-4">Still Stretched or Confused?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto text-base leading-relaxed">
                            No problem! We specialize in patient, stress-free home visits to resolve all your tech issues in simple, understandable terms.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href={`tel:${businessDetails.phone.replace(/\s+/g, '')}`} className="w-full sm:w-auto bg-white text-blue-950 px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2">
                                Call {businessDetails.phone}
                            </a>
                            <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
