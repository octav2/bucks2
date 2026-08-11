import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
    title?: string;
    subtitle?: string;
}

export default function ServiceCTA({ title = "Ready to eliminate dead zones and build a network that lasts?", subtitle = "Complete our 2-minute quote audit and receive a preliminary scope and fixed price within 24 hours." }: Props) {
    return (
        <section className="py-16 px-4 bg-slate-950 border-t border-slate-800">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight">{title}</h2>
                    <p className="text-blue-100 text-lg mb-9 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
                    <Link
                        href="/quote"
                        className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                    >
                        Start My Free Quote Audit <ArrowRight size={22} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
