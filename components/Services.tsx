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
        <section id="services" className="py-24 px-4 bg-white relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight text-balance">
                        How I Can Help You
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Whether you need something fixed, set up, or simply explained properly, I will help you get things working again.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{service.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                                    {service.features.map((feat, i) => (
                                        <span key={i} className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50/50 px-2.5 py-1 rounded-md">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
