import React from 'react';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { businessDetails } from '@/lib/data';

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-4 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white skew-y-2 origin-top-left -translate-y-20 -z-10"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">Simple, Honest Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Clear costs with no hidden fees. I value your trust above all else.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-stretch">
                    {/* Standard Visit */}
                    <div className="bg-white border border-gray-100 rounded-[3rem] p-10 md:p-12 shadow-sm hover:shadow-xl transition-all border-b-8 border-b-blue-600 flex flex-col group">
                        <div className="mb-10">
                            <h3 className="text-2xl font-black text-blue-950 mb-3 uppercase tracking-wider">Standard Visit</h3>
                            <p className="text-gray-500 font-bold">Troubleshooting & Support</p>
                        </div>
                        <div className="mb-10 flex items-baseline gap-2">
                            <span className="text-7xl font-black text-blue-950 tracking-tighter">{businessDetails.basePrice}</span>
                            <span className="text-gray-400 font-black uppercase text-sm tracking-widest">/ first hour</span>
                        </div>
                        <p className="text-gray-600 mb-10 leading-relaxed font-medium text-lg">
                            Then <span className="text-blue-600 font-black italic">£35 per 30 mins</span>. Most common issues are resolved within the first hour.
                        </p>
                        <div className="space-y-5 mb-12 flex-grow">
                            {[
                                "Printer setup & troubleshooting",
                                "Phone & tablet optimization",
                                "Wi-Fi & network diagnostics",
                                "Smart TV & streaming setup"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-gray-700 font-bold">
                                    <CheckCircle size={24} className="text-blue-500 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <a href="#contact" className="block w-full py-5 text-center bg-blue-50 text-blue-700 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.02] shadow-sm">
                            Book a Visit
                        </a>
                    </div>

                    {/* Digital MOT */}
                    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col border-b-8 border-b-green-500 transform lg:scale-105">
                        <div className="absolute top-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] font-black px-5 py-2 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-green-500/20">MOST POPULAR</div>
                        
                        <div className="mb-10">
                            <h3 className="text-2xl font-black mb-3 uppercase tracking-wider">Digital MOT</h3>
                            <p className="text-blue-300 font-bold">2-Hour Complete Check-up</p>
                        </div>
                        <div className="mb-10 flex items-baseline gap-2">
                            <span className="text-7xl font-black tracking-tighter">{businessDetails.motPrice}</span>
                            <span className="text-blue-400 font-black uppercase text-sm tracking-widest">/ fixed price</span>
                        </div>
                        <p className="text-blue-100 mb-10 leading-relaxed font-medium text-lg">
                            The ultimate check-up for your home tech. Optimize speed, security, and reliability.
                        </p>
                        <div className="space-y-5 mb-12 flex-grow">
                            {[
                                "Full Wi-Fi signal & speed audit",
                                "Deep device security review",
                                "Password & anti-scam hardening",
                                "OS updates & bloatware removal",
                                "Complete printer & TV sync"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-blue-50 font-bold">
                                    <ShieldCheck size={24} className="text-green-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <a href="#contact" className="block w-full py-6 text-center bg-gradient-to-r from-green-500 to-green-600 text-white font-black rounded-2xl hover:from-green-400 hover:to-green-500 transition-all shadow-xl shadow-green-500/20 transform hover:scale-[1.02]">
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
