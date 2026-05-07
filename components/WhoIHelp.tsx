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
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Who I Help</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        You do not need to be good with technology. That is what I am here for.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                                <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 mb-4">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-bold text-blue-900 mb-2">{cat.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
