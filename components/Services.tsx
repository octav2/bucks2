import React from 'react';
import { Wifi, Printer, Smartphone, Laptop, Tv, ShieldAlert, ChevronRight } from 'lucide-react';

export default function Services() {
    const servicesList = [
        { 
            icon: Wifi, 
            title: "Wi-Fi Help", 
            desc: "Slow internet? Weak signal upstairs? I can help diagnose problems, improve coverage, and set up mesh Wi-Fi systems.",
            features: ["Router Setup", "Mesh Systems", "Dead Zones"]
        },
        { 
            icon: Printer, 
            title: "Printer Help", 
            desc: "I can help with wireless printer setup, 'printer offline' problems, and printing from phones or tablets.",
            features: ["Wireless Setup", "Scanner Setup", "Fix Offline"]
        },
        { 
            icon: Smartphone, 
            title: "Phone & Tablet", 
            desc: "Bought a new device? I can help set up iPhones, iPads, transfer contacts, and show you how to use everything.",
            features: ["New Device Setup", "Data Transfer", "App Help"]
        },
        { 
            icon: Laptop, 
            title: "Laptop & Computer", 
            desc: "Help with Windows, MacBooks, email problems, updates, slow devices, and general troubleshooting.",
            features: ["Speed Up Laptop", "Email Issues", "Updates"]
        },
        { 
            icon: Tv, 
            title: "Smart TV Help", 
            desc: "I can connect your TV to Wi-Fi, install apps like Netflix or iPlayer, and show you how to use your remote.",
            features: ["App Installation", "Wi-Fi Connection", "Fire Stick"]
        },
        { 
            icon: ShieldAlert, 
            title: "Scam & Safety", 
            desc: "Worried about suspicious emails? I can check your devices, improve passwords, and give advice on staying safe.",
            features: ["Scam Checks", "Password Security", "Safety Advice"]
        }
    ];

    return (
        <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">
                        Expert Support For <br className="hidden md:block" />
                        <span className="text-blue-600">Your Home Tech.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Whether it's a quick fix, a complex setup, or just needing someone to explain it simply, I'm here to help.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {servicesList.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
                                {/* Subtle Hover Glow */}
                                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-[4] transition-transform duration-700"></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-blue-600 mb-8 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Icon size={36} />
                                    </div>
                                    <h3 className="text-2xl font-black text-blue-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed font-medium flex-grow">{service.desc}</p>
                                    
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                                        {service.features.map((feat, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-[0.1em] text-blue-900/40 bg-blue-50/50 px-3 py-1.5 rounded-lg group-hover:bg-blue-600/5 group-hover:text-blue-600 transition-colors">
                                                {feat}
                                            </span>
                                        ))}
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
