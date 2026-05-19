import React from 'react';
import { PhoneCall, CheckCircle, Calendar, Zap } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        { icon: PhoneCall, title: "1. Get in touch", desc: "Call, text or WhatsApp with a brief description of the problem." },
        { icon: CheckCircle, title: "2. We confirm help", desc: "We'll let you know if we can assist and give you a rough idea of the fix." },
        { icon: Calendar, title: "3. Book a visit", desc: "We arrange a convenient evening or weekend appointment." },
        { icon: Zap, title: "4. We visit and help", desc: "We diagnose the issue, fix what we can, and explain how it works." }
    ];

    return (
        <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-16 tracking-tight">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Progress line for desktop */}
                    <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 -z-10 rounded-full"></div>
                    
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-3xl mb-8 relative shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                                    <Icon size={32} />
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-lg border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="font-black text-xl text-blue-950 mb-3 uppercase tracking-wider">{step.title.split('. ')[1]}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
