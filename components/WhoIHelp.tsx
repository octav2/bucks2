import React from 'react';
import { Home, Building, Building2, Warehouse } from 'lucide-react';

export default function WhoIHelp() {
    const categories = [
        { icon: Home, title: "Large Homes", desc: "Whole-property Wi-Fi, annexes and period properties where a single router simply can't cope." },
        { icon: Building, title: "Garden Offices", desc: "Reliable, full-speed internet where you actually work, with cabling run to your studio or cabin." },
        { icon: Warehouse, title: "Estates & Farms", desc: "Multi-building wireless and cabling across outbuildings, barns, stables and holiday lets." },
        { icon: Building2, title: "Commercial Units", desc: "Structured cabling, racks and IP CCTV for offices, studios, clinics and retail units." },
    ];

    return (
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Who We Serve</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Built For Properties That Outgrow Wi-Fi</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        If your space expects more than a plug-in router can deliver, we design the infrastructure around it.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <div key={index} className="group bg-slate-800/60 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 hover:border-blue-600/40 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20 mb-6">
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-black text-white mb-3 text-lg uppercase tracking-wide">{cat.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{cat.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
