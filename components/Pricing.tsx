import React from 'react';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { businessDetails } from '@/lib/data';

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white skew-y-3 origin-top-left -translate-y-12 -z-10"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight">Simple, Honest Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Clear costs with no hidden fees or surprise upselling.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Standard Visit */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-lg transition-all border-b-4 border-b-blue-600 flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-blue-950 mb-2">Standard Visit</h3>
                            <p className="text-gray-500 font-medium">For troubleshooting & setup</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-6xl font-black text-blue-950">{businessDetails.basePrice}</span>
                            <span className="text-gray-400 font-bold">/ first hour</span>
                        </div>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                            Then <span className="text-blue-700 font-bold">£35 per 30 mins</span>. Most common issues are fixed within the first hour.
                        </p>
                        <div className="space-y-4 mb-10 flex-grow">
                            {[
                                "Printer setup & repair",
                                "Phone & tablet help",
                                "Wi-Fi & internet checks",
                                "Smart TV app setup"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <a href="#contact" className="block w-full py-4 text-center bg-blue-50 text-blue-700 font-bold rounded-2xl hover:bg-blue-100 transition-colors mt-auto">
                            Book a Visit
                        </a>
                    </div>

                    {/* Digital MOT */}
                    <div className="bg-blue-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden flex flex-col border-b-4 border-b-green-500 scale-105">
                        <div className="absolute top-6 right-6 bg-green-500 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">MOST POPULAR</div>
                        
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Digital MOT</h3>
                            <p className="text-blue-200 font-medium">2-hour home tech check-up</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-6xl font-black">{businessDetails.motPrice}</span>
                            <span className="text-blue-300 font-bold">/ fixed price</span>
                        </div>
                        <p className="text-blue-100 mb-8 leading-relaxed">
                            Ideal for a complete device clean-up, security check, and Wi-Fi optimization.
                        </p>
                        <div className="space-y-4 mb-10 flex-grow">
                            {[
                                "Full Wi-Fi & signal check",
                                "Device security review",
                                "Password & scam advice",
                                "Laptop & tablet updates",
                                "Printer & Smart TV check"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-blue-50 font-medium">
                                    <ShieldCheck size={20} className="text-green-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <a href="#contact" className="block w-full py-4 text-center bg-white text-blue-900 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg mt-auto">
                            Book Your MOT
                        </a>
                    </div>
                </div>
                
                <div className="mt-16 text-center text-gray-500 text-sm font-medium">
                    <p>* Hardware, software subscriptions or paid apps are not included in the price.</p>
                </div>
            </div>
        </section>
    );
}
