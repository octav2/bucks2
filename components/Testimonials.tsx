import React from 'react';
import { MapPin, AlertTriangle, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    {
        location: 'Beaconsfield',
        property: '6-Bed Detached + Garden Room',
        tag: 'Whole-Property Wi-Fi',
        problem: 'Zero internet coverage in the garden office and constant dropouts through solid brick internal walls.',
        solution: '4 x hardwired UniFi U7 access points + armored external cable drop.',
        result: '940Mbps verified Wi-Fi speed in every room and garden room.',
    },
    {
        location: 'Amersham',
        property: 'Commercial Dental Practice',
        tag: 'Commercial Structured Cabling',
        problem: 'Unreliable Wi-Fi causing patient booking delays and IP phone dropouts.',
        solution: 'Cat6 structured rack installation, isolated guest network, and PoE switch upgrade.',
        result: 'Zero network downtime and isolated secure patient Wi-Fi.',
    },
    {
        location: 'Gerrards Cross',
        property: 'Country Estate',
        tag: 'Subscription-Free IP CCTV',
        problem: 'Security cameras relied on flaky wireless signal and paid third-party monthly cloud fees.',
        solution: 'Owned-outright 4K IP CCTV over wired PoE with on-site NVR storage.',
        result: 'No monthly subscription fees forever, with footage stored securely on-site.',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Case Studies</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Results Across Buckinghamshire</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Real-world outcomes from structured network and security installations we&apos;ve delivered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((c, i) => (
                        <article key={i} className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700 flex flex-col hover:border-cyan-500/40 transition-colors">
                            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                                <span className="flex items-center gap-2 text-blue-400 font-bold">
                                    <MapPin size={16} /> {c.location}
                                </span>
                                <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full">{c.property}</span>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400 mb-1.5">
                                        <AlertTriangle size={14} /> Problem
                                    </p>
                                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{c.problem}</p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-300 mb-1.5">
                                        <CheckCircle2 size={14} /> Solution
                                    </p>
                                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{c.solution}</p>
                                </div>
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
                                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300 mb-1.5">
                                        <TrendingUp size={14} /> Result
                                    </p>
                                    <p className="text-sm text-emerald-100 font-bold leading-relaxed">{c.result}</p>
                                </div>
                            </div>

                            <span className="mt-auto pt-6 text-[11px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 self-start px-3 py-1.5 rounded-full">{c.tag}</span>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <Link
                        href="/quote"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-600/30"
                    >
                        Request My Property Audit <ArrowRight size={22} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
