import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { coreTowns } from '@/lib/data';
import { locationsData } from '@/lib/locationsData';

export default function CoverageMap() {
    const featured = coreTowns.map((town) => locationsData[town.toLowerCase().replace(/\s+/g, '-')] ?? { slug: town.toLowerCase().replace(/\s+/g, '-'), name: town });

    return (
        <section id="coverage" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Coverage</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Proudly Serving <span className="text-blue-400">Buckinghamshire</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                            We design and install enterprise Wi-Fi, structured cabling and IP CCTV across the affluent towns of South &amp; Central Buckinghamshire — from Beaconsfield to High Wycombe.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {coreTowns.map((town, i) => (
                                <Link
                                    key={i}
                                    href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="flex items-center gap-2 py-3 px-4 rounded-xl bg-slate-800/70 border border-slate-700 hover:border-blue-600/50 hover:bg-slate-800 transition-all group"
                                >
                                    <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                                    <span className="text-sm font-bold text-white">{town}</span>
                                    <ArrowRight size={14} className="ml-auto text-slate-500 group-hover:text-blue-400 transition-colors" />
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 font-medium">Also covering Marlow, Hazlemere, Great Missenden, Bourne End, Penn, Stoke Poges &amp; the Chalfonts.</p>
                    </div>

                    {/* Stylised coverage visual */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-white font-black uppercase tracking-wider text-sm">Coverage Area</h3>
                            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full">South &amp; Central Bucks</span>
                        </div>
                        <div className="relative h-72 bg-grid rounded-2xl border border-slate-800 overflow-hidden">
                            {featured.map((loc, i) => (
                                <div
                                    key={i}
                                    className="absolute flex flex-col items-center gap-1.5"
                                    style={{ left: `${15 + i * 18}%`, top: `${30 + (i % 2) * 35}%` }}
                                >
                                    <div className="relative w-4 h-4">
                                        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping"></span>
                                        <span className="absolute inset-1 rounded-full bg-blue-400"></span>
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-700 whitespace-nowrap">
                                        {loc.name}
                                    </span>
                                </div>
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-slate-600 font-black uppercase tracking-[0.3em] text-sm">Buckinghamshire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
