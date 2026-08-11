'use client';

import React from 'react';
import { Wifi, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { businessDetails } from '@/lib/data';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { label: 'Services', href: '/#services' },
        { label: 'Locations', href: '/locations/beaconsfield' },
        { label: 'Coverage', href: '/#coverage' },
        { label: 'FAQ', href: '/#faq' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70">
            <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group py-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                        <Wifi size={22} />
                    </div>
                    <div className="leading-tight">
                        <span className="text-white text-lg font-black tracking-tight">Bucks Tech Help</span>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-400 font-bold">
                            Network &amp; Cabling Infrastructure
                        </span>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
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

