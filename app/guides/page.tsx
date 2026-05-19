import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guidesData } from '@/lib/guidesData';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Helpful Tech Guides | Bucks Tech Help',
    description: 'Read our simple, jargon-free guides on home tech support, Wi-Fi troubleshooting, and online safety tailored for Buckinghamshire residents.',
    alternates: {
        canonical: 'https://www.buckstechhelp.co.uk/guides'
    }
};

export default function GuidesPage() {
    const guides = Object.values(guidesData);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-4 border-b border-blue-100">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/80 p-5 rounded-2xl text-blue-600 shadow-inner">
                            <BookOpen size={40} />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight tracking-tight">
                        Simple Tech Guides
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Patient, jargon-free articles to help you stay safe online, improve your Wi-Fi, and get the most out of your home technology.
                    </p>
                </div>
            </section>

            {/* Guides List Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 gap-10">
                        {guides.map((guide, index) => (
                            <Link href={`/guides/${guide.slug}`} key={index} className="group block bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-sm text-blue-600 font-bold tracking-wider uppercase mb-4">
                                            <span>{guide.date}</span>
                                            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                                            <span>{guide.readTime}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-4 group-hover:text-blue-600 transition-colors">
                                            {guide.title}
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            {guide.metaDesc}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
