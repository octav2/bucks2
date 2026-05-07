import React from 'react';
import { Users, Home, Briefcase, Heart, Ship, HelpCircle } from 'lucide-react';

export default function WhoIHelp() {
    const categories = [
        { icon: Heart, title: "Older People", desc: "Patient, clear help for those who want to use technology confidently and safely." },
        { icon: Users, title: "Adult Children", desc: "Providing peace of mind by supporting your parents with their home technology." },
        { icon: Briefcase, title: "Busy Professionals", desc: "Taking the frustration out of setup so you can focus on your work and family." },
        { icon: Home, title: "New Homeowners", desc: "Setting up your Wi-Fi, TVs and devices correctly when you move into a new house." }
    ];

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">Who I Help</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        You don't need to be an expert. That's what I'm here for.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <div key={index} className="group bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="bg-white p-5 rounded-2xl shadow-sm text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-black text-blue-950 mb-3 text-lg uppercase tracking-wide">{cat.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{cat.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
