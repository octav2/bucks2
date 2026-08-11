import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

export default function Services() {
    const servicesList = Object.values(servicesData);

    return (
        <section id="services" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Enterprise-Grade <span className="text-blue-400">Infrastructure</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Designed, installed and tested for large homes, garden offices, estates and businesses across Buckinghamshire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.slug} className="group relative bg-slate-900/60 border border-slate-800 rounded-3xl p-9 shadow-xl hover:border-blue-600/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-600/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-7 shadow-lg shadow-blue-600/20">
                                        <Icon size={32} />
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-400 mb-3">{service.heroPill}</p>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed font-medium flex-grow">{service.intro}</p>

                                    <ul className="space-y-3 mb-8">
                                        {service.heroBullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                                                <ArrowRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-2 pt-6 border-t border-slate-800 flex items-center justify-between">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="text-blue-400 hover:text-blue-300 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                        >
                                            View Service <ChevronRight size={16} />
                                        </Link>
                                        <span className="text-xs text-slate-500 font-bold">From £1,500</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
