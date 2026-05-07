import React from 'react';
import { PhoneCall, CheckCircle, Calendar, Zap } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        { icon: PhoneCall, title: "1. Get in touch", desc: "Call, text or WhatsApp with a brief description of the problem." },
        { icon: CheckCircle, title: "2. I confirm help", desc: "I'll let you know if I can assist and give you a rough idea of the fix." },
        { icon: Calendar, title: "3. Book a visit", desc: "We arrange a convenient evening or weekend appointment." },
        { icon: Zap, title: "4. I visit and help", desc: "I diagnose the issue, fix what I can, and explain how it works." }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Progress line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-blue-100 -z-10"></div>
                    
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-blue-900 text-white p-6 rounded-full mb-6 relative">
                                    <Icon size={32} />
                                </div>
                                <h3 className="font-bold text-lg text-blue-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
