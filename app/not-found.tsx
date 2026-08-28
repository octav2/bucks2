import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Wifi, ShieldCheck, Cable, Search } from 'lucide-react';

export const metadata = {
    title: 'Page Not Found | Bucks Tech Help',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center px-4 py-24">
                <div className="max-w-2xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 px-5 py-2 rounded-full text-sm font-bold mb-8">
                        <Search size={15} /> 404 ERROR
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Page Not <span className="text-blue-400">Found</span>
                    </h1>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-xl mx-auto">
                        Sorry — that page doesn&apos;t exist or may have moved. The rest of the site is
                        working fine. Try one of the quick links below to get back on track.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                        <Link
                            href="/services/whole-home-wifi"
                            className="group bg-slate-900/70 border border-slate-800 p-6 rounded-2xl hover:border-blue-600/50 transition-all"
                        >
                            <Wifi size={24} className="text-blue-400 mb-3" />
                            <p className="font-bold text-white">Wi-Fi Installation</p>
                            <p className="text-sm text-slate-400 mt-1">Whole-home & garden office networks</p>
                        </Link>
                        <Link
                            href="/services/commercial-cabling"
                            className="group bg-slate-900/70 border border-slate-800 p-6 rounded-2xl hover:border-blue-600/50 transition-all"
                        >
                            <Cable size={24} className="text-blue-400 mb-3" />
                            <p className="font-bold text-white">Data Cabling</p>
                            <p className="text-sm text-slate-400 mt-1">Cat6/Cat6a structured cabling</p>
                        </Link>
                        <Link
                            href="/services/smart-security"
                            className="group bg-slate-900/70 border border-slate-800 p-6 rounded-2xl hover:border-blue-600/50 transition-all"
                        >
                            <ShieldCheck size={24} className="text-blue-400 mb-3" />
                            <p className="font-bold text-white">CCTV & Security</p>
                            <p className="text-sm text-slate-400 mt-1">Subscription-free 4K CCTV</p>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black hover:scale-[1.03] transition-all"
                        >
                            Back to Homepage
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white border border-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                        >
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}