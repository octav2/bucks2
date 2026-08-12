'use client';

import React from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { businessDetails } from '@/lib/data';
import Logo from '@/components/Logo';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const serviceLinks = [
        { label: 'Whole-Home & Garden Room Wi-Fi', href: '/services/whole-home-wifi' },
        { label: 'Commercial Cat6/Cat6a Cabling', href: '/services/commercial-cabling' },
        { label: '4K IP CCTV & Smart Access Control', href: '/services/smart-security' },
    ];

    const navLinks = [
        { label: 'Coverage', href: '/#coverage' },
        { label: 'FAQ', href: '/#faq' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70">
            <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
                <Link href="/" className="flex items-center py-1 shrink-0" aria-label="Bucks Tech Help home">
                    <Logo className="h-12" priority />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
                    <Link href="/about" className="hover:text-white transition-colors">
                        About Us
                    </Link>
                    <div className="relative group">
                        <Link href="/#services" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                            Services
                            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                        </Link>
                        <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                            <div className="w-72 rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50 p-2">
                                {serviceLinks.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        className="block rounded-xl px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors font-medium"
                                    >
                                        {s.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/quote"
                        className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2.5 rounded-xl font-bold hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.03]"
                    >
                        Get a Quote <ArrowRight size={18} />
                    </Link>
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-white p-2"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden bg-slate-950 border-t border-slate-800/70 px-6 py-6 space-y-4">
                    <Link
                        href="/about"
                        onClick={() => setOpen(false)}
                        className="block text-slate-200 font-semibold text-lg hover:text-white"
                    >
                        About Us
                    </Link>
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 mb-2">Services</p>
                        {serviceLinks.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setOpen(false)}
                                className="block text-slate-200 font-semibold text-base hover:text-white py-1.5"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block text-slate-200 font-semibold text-lg hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/quote"
                        onClick={() => setOpen(false)}
                        className="block text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-xl font-bold"
                    >
                        Get a Quote
                    </Link>
                    <p className="text-xs text-slate-500 pt-2">{businessDetails.phone} · {businessDetails.email}</p>
                </div>
            )}
        </header>
    );
}

