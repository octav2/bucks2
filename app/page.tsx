import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import WhoIHelp from '@/components/WhoIHelp';
import HowItWorks from '@/components/HowItWorks';
import AreasCovered from '@/components/AreasCovered';
import FAQ from '@/components/FAQ';
import { Phone, MessageCircle, Clock, MapPin, CheckCircle, ShieldAlert, AlertTriangle, ArrowRight, Heart } from 'lucide-react';
import { businessDetails } from '@/lib/data';

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-blue-50 py-20 md:py-32 px-4">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-900 text-blue-50 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-fade-in">
                        <MapPin size={14} />
                        Serving Buckinghamshire & Nearby
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-blue-950 mb-8 leading-[1.1] tracking-tight">
                        Frustrated With Technology? <br className="hidden md:block" />
                        <span className="text-blue-600">I Can Help.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                        Friendly, patient home tech support for Wi-Fi, printers, phones, smart TVs and more. 
                        <strong> Jargon-free help at your own pace.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:07000000000" className="w-full sm:w-auto bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3">
                            <Phone size={22} />
                            Book a Home Visit
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-3">
                            <MessageCircle className="text-green-600" size={22} />
                            WhatsApp Me
                        </a>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-500 font-medium text-sm md:text-base">
                        <span className="flex items-center gap-2"><Clock className="text-blue-600" size={18} /> Evening & Weekends</span>
                        <span className="flex items-center gap-2"><CheckCircle className="text-blue-600" size={18} /> DBS Checked</span>
                        <span className="flex items-center gap-2"><CheckCircle className="text-blue-600" size={18} /> Fully Insured</span>
                    </div>
                </div>
            </section>

            {/* Trust Bar / Quick Features */}
            <section className="bg-white py-12 border-y border-gray-100 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { title: "Local Service", subtitle: "Buckinghamshire based", icon: MapPin },
                        { title: "Patient Help", subtitle: "We go at your pace", icon: Heart },
                        { title: "No Jargon", subtitle: "Simple explanations", icon: MessageCircle },
                        { title: "Transparent", subtitle: "Clear, upfront pricing", icon: ShieldAlert }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="bg-blue-50 p-4 rounded-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                                <item.icon className="text-blue-600" size={24} />
                            </div>
                            <h3 className="font-bold text-blue-950">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Services />
            
            <WhoIHelp />

            {/* Boundary Note */}
            <section className="bg-orange-50 py-16 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-orange-100">
                    <div className="bg-orange-100 p-6 rounded-3xl text-orange-600 flex-shrink-0">
                        <AlertTriangle size={48} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Simple, Practical Tech Support — No Messy Installations</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            I focus on setup, troubleshooting and support for the devices you already have. 
                            <strong> I do not carry out electrical work, hardwiring, wall mounting, drilling, or CCTV cabling.</strong> 
                            If a job requires a specialist installer or electrician, I will always let you know honestly.
                        </p>
                    </div>
                </div>
            </section>

            <Pricing />
            
            <HowItWorks />
            
            <AreasCovered />
            
            <FAQ />

            {/* Final Contact CTA */}
            <section id="contact" className="py-24 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-blue-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-800 rounded-full"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-800 rounded-full"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Need Help With Your Home Tech?</h2>
                            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't let technology frustrate you anymore. Get in touch today for friendly, local help that comes to you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3">
                                    <MessageCircle size={22} />
                                    WhatsApp Me
                                </a>
                                <a href="tel:07000000000" className="w-full sm:w-auto bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3 border-2 border-blue-50">
                                    <Phone size={22} />
                                    Call Me
                                </a>
                            </div>
                            <div className="mt-16 max-w-xl mx-auto bg-white p-8 md:p-10 rounded-3xl text-left shadow-2xl relative z-20">
                                <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">Or Send a Message</h3>
                                <form action="https://formsubmit.co/f3e77d17624af15bfa5f71ec63951c35" method="POST" className="space-y-5">
                                    {/* Formsubmit.co configuration */}
                                    <input type="text" name="_honey" style={{ display: 'none' }} />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_subject" value="New Website Enquiry - Bucks Tech Help" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 text-gray-900" placeholder="John Smith" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 text-gray-900" placeholder="07XXX XXXXXX" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 text-gray-900" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-1.5">Postcode</label>
                                            <input type="text" id="postcode" name="postcode" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 text-gray-900" placeholder="e.g. HP11 1AA" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">How can I help?</label>
                                        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none bg-gray-50 text-gray-900" placeholder="Please describe the problem you're having..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all active:scale-[0.98] shadow-md flex justify-center items-center gap-2 text-lg mt-2">
                                        Send Message <ArrowRight size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
