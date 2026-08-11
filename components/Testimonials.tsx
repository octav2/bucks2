import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    // Social-proof placeholders — replace with verified reviews once available.
    const testimonials = [
        {
            name: "Client *",
            location: "Beaconsfield",
            text: "Our new UniFi system gives every room of our extended home full-speed Wi-Fi — including the garden office. The cabling is invisible and the coverage never drops.",
            tag: "Whole-Home Wi-Fi",
        },
        {
            name: "Office Manager *",
            location: "High Wycombe",
            text: "The structured cabling transformed our office network. Everything is labelled, tested and our remote meetings no longer drop. Worth every penny.",
            tag: "Structured Cabling",
        },
        {
            name: "Estate Owner *",
            location: "Gerrards Cross",
            text: "Subscription-free 4K CCTV we actually own. Clear footage, easy remote viewing and no monthly bill. Exactly what we asked for.",
            tag: "IP CCTV",
        },
    ];

    return (
        <section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Social Proof</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Trusted Across Buckinghamshire</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Illustrative client outcomes — verified names and reviews coming soon.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700 relative">
                            <Quote size={40} className="text-blue-500/30 absolute top-6 right-6" />
                            <div className="flex gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-slate-200 leading-relaxed text-lg mb-8 italic">"{t.text}"</p>
                            <span className="inline-block text-[11px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full mb-4">{t.tag}</span>
                            <p className="font-bold text-white mt-3">{t.name}</p>
                            <p className="text-sm text-slate-500 font-medium">{t.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
