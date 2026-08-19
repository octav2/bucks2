import React from 'react';
import { ChevronRight, ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const pricing: Record<string, { from: string; micro: string }> = {
    'whole-home-wifi': {
        from: '£1,500',
        micro: 'Includes enterprise Ubiquiti UniFi Wi-Fi 7 hardware, hardwired Cat6a backhaul, and unified app handover.',
    },
    'smart-security': {
        from: '£1,800',
        micro: 'Includes Ubiquiti Protect NVR storage, 4K AI optical cameras, and single-app setup.',
    },
    'commercial-cabling': {
        from: '£2,000',
        micro: 'Includes certified Cat6a cabling, rack assembly, and Fluke channel performance testing.',
    },
};

const cardCopy: Record<string, { title: string; subtext: string }> = {
    'whole-home-wifi': {
        title: 'Enterprise Whole-Home Wi-Fi 7 Installation',
        subtext: 'Hardwired Cat6a backbones and zero-dead-zone Ubiquiti Wi-Fi 7 installation, engineered specifically for period properties, luxury estates, and detached garden offices across Buckinghamshire. We eliminate wireless dead zones permanently without relying on weak consumer mesh extenders or ongoing monthly subscription fees.',
    },
    'commercial-cabling': {
        title: 'Enterprise Network Cabling Installation & Data Rack Architecture',
        subtext: 'Certified Cat6a network cabling installation, 19-inch data cabinet rack builds, and multi-gigabit network backbones for commercial offices, law firms, and multi-tenant premises. Designed for zero-latency VoIP, high-density PoE security, and clean, Fluke-tested patch panel management.',
    },
    'smart-security': {
        title: 'Subscription-Free 4K CCTV Installation & Perimeter Security',
        subtext: 'On-premise Ubiquiti Protect 4K CCTV installation and integrated smart video access control for luxury homes and commercial grounds. Record continuous 24/7 high-bitrate video directly to local NVR storage with zero monthly cloud storage subscription fees.',
    },
};

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
                        const price = pricing[service.slug];
                        const copy = cardCopy[service.slug];
                        const showBadge = service.slug === 'smart-security';
                        return (
                            <div key={service.slug} className="group relative bg-slate-900/80 border border-slate-800 rounded-3xl p-9 shadow-xl hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-600/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                                {showBadge && (
                                    <div className="relative z-20 mb-6">
                                        <span className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-500/20">
                                            <BadgeCheck size={14} />
                                            No Monthly Subscription Fees Forever
                                        </span>
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-7 shadow-lg shadow-blue-600/20">
                                        <Icon size={32} />
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-400 mb-3">{service.heroPill}</p>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-snug">
                                        {copy?.title || service.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed font-medium flex-grow">{copy?.subtext || service.intro}</p>

                                    <ul className="space-y-3 mb-8">
                                        {service.heroBullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                                                <ArrowRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-2 pt-6 border-t border-slate-800">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="text-blue-400 hover:text-blue-300 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                        >
                                            View Service <ChevronRight size={16} />
                                        </Link>

                                        <div className="mt-6 pt-5 border-t border-slate-800 flex items-baseline gap-2">
                                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">From</span>
                                            <span className="text-3xl font-black text-white leading-none">{price.from}</span>
                                        </div>
                                        <p className="mt-2 text-xs text-slate-400 font-medium leading-relaxed">{price.micro}</p>
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
