'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-4 bg-slate-950">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">FAQ</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Common Questions</h2>
                    <p className="text-slate-400 text-lg">Everything you need to know about our infrastructure work.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 text-left p-6 hover:bg-slate-800/50 transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-bold text-white text-lg flex gap-3 items-center">
                                        <HelpCircle className="text-blue-400 flex-shrink-0" size={22} />
                                        {faq.question}
                                    </span>
                                    <span className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="text-slate-400 leading-relaxed pl-6 pr-6 pb-6 font-medium">{faq.answer}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
