import React from 'react';
import { ClipboardCheck, Ruler, HardHat, BadgeCheck } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        { icon: ClipboardCheck, title: "Online Quote Audit", desc: "Answer a few quick questions about your property, challenge and budget." },
        { icon: Ruler, title: "Scope & Survey", desc: "We review your layout and email a preliminary scope and fixed price within 24 hours." },
        { icon: HardHat, title: "Installation", desc: "Structured cabling, access points and CCTV installed tidily and tested end-to-end." },
        { icon: BadgeCheck, title: "Handover", desc: "You get a tested, documented network and a full walkthrough with no ongoing fees." },
    ];

    return (
        <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">How It Works</span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tight">From Audit To Handover</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 -z-10"></div>

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-7 rounded-3xl mb-7 relative shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                                    <Icon size={30} />
                                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-lg border-2 border-slate-950">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="font-black text-xl text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
