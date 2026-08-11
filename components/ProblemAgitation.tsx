import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pains = [
    'Disconnections during critical Zoom calls in the home office',
    'Dead zones in garden rooms, lofts, or patio areas',
    'Buffer wheels on 4K Smart TVs',
    'Wireless mesh extenders that crash with 30+ smart home devices',
];

const solutions = [
    'Dedicated Cat6 gigabit backhaul to every key room',
    'Seamless roaming across the main property & outbuildings',
    'Discrete, ceiling-mounted enterprise Access Points',
    '100% Zero-Dead-Zone Guarantee',
];

export default function ProblemAgitation() {
    return (
        <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-4">Sound Familiar?</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Tired of Wi-Fi That Drops When You{" "}
                        <span className="text-cyan-400">Leave the Kitchen?</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-5 font-medium">
                        If any of this sounds like your network, the problem isn&apos;t your router &mdash; it&apos;s the missing infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8 flex flex-col">
                        <h3 className="text-xl font-black text-red-300 mb-6 flex items-center gap-2">The Pain</h3>
                        <ul className="space-y-4">
                            {pains.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-slate-200 font-medium leading-relaxed">
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                                        <X size={14} />
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-3xl p-8 flex flex-col">
                        <h3 className="text-xl font-black text-emerald-300 mb-6 flex items-center gap-2">The Infrastructure Solution</h3>
                        <ul className="space-y-4 mb-8">
                            {solutions.map((s) => (
                                <li key={s} className="flex items-start gap-3 text-slate-200 font-medium leading-relaxed">
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                                        <Check size={14} />
                                    </span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/quote"
                            className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-black hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Fix My Wi-Fi &amp; Get A Free Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
