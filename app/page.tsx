import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import WhoIHelp from '@/components/WhoIHelp';
import HowItWorks from '@/components/HowItWorks';
import AreasCovered from '@/components/AreasCovered';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { Phone, MessageCircle, Clock, MapPin, CheckCircle, ShieldAlert, AlertTriangle, ArrowRight, Heart } from 'lucide-react';
import { businessDetails, faqs } from '@/lib/data';
import Script from 'next/script';

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Script
                id="faq-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                ...faqs.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                })),
                                {
                                    "@type": "Question",
                                    "name": "Do I need to know my passwords?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "For many jobs, yes. If you need help with email, Apple ID, Google, Netflix, Wi-Fi or Microsoft accounts, you may need access to your passwords. I can guide you through recovery if needed."
                                    }
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "@id": "https://www.buckstechhelp.co.uk/#webpage",
                            "url": "https://www.buckstechhelp.co.uk",
                            "name": "Bucks Tech Help | Home Tech Support Buckinghamshire",
                            "description": "Patient, jargon-free home technology support across Buckinghamshire. Expert help with Wi-Fi, printers, phones, smart TVs and more.",
                            "about": {
                                "@id": "https://www.buckstechhelp.co.uk/#localbusiness"
                            }
                        }
                    ])
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-24 md:py-40 px-4">
                {/* Modern Tech Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-800 text-blue-50 px-5 py-2 rounded-full text-sm font-bold mb-10 shadow-lg shadow-blue-900/10 border border-blue-700/50">
                        <MapPin size={16} className="text-green-400" />
                        Buckinghamshire's Trusted Tech Expert
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl font-black text-blue-950 mb-8 leading-[1.05] tracking-tight">
                        Technology Support <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-green-500">Made Simple.</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
                        Patient, jargon-free home help for Wi-Fi, printers, smart TVs and more. 
                        <span className="text-blue-900 font-bold block mt-2">Professional support that comes to your door.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a href="tel:07343079390" className="w-full sm:w-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3">
                            <Phone size={24} />
                            Book a Visit
                        </a>
                        <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all hover:scale-[1.03] active:scale-95 shadow-xl flex items-center justify-center gap-3">
                            <MessageCircle className="text-green-600" size={24} />
                            WhatsApp Me
                        </a>
                    </div>
                    
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-gray-500 font-bold text-sm md:text-base uppercase tracking-widest">
                        <span className="flex items-center gap-2.5"><Clock className="text-blue-500" size={20} /> Evening & Weekends</span>
                        <span className="flex items-center gap-2.5"><CheckCircle className="text-green-500" size={20} /> DBS Checked</span>
                        <span className="flex items-center gap-2.5"><CheckCircle className="text-blue-500" size={20} /> Fully Insured</span>
                    </div>
                </div>
            </section>

            {/* Trust Bar / Quick Features */}
            <section className="bg-gray-50/50 py-16 border-y border-gray-100 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { title: "Local Service", subtitle: "Buckinghamshire based", icon: MapPin, color: "text-blue-600" },
                        { title: "Patient Help", subtitle: "We go at your pace", icon: Heart, color: "text-red-500" },
                        { title: "No Jargon", subtitle: "Simple explanations", icon: MessageCircle, color: "text-green-500" },
                        { title: "Transparent", subtitle: "Clear, upfront pricing", icon: ShieldAlert, color: "text-orange-500" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="bg-white p-5 rounded-3xl mb-5 shadow-sm border border-gray-100 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                                <item.icon className={item.color} size={32} />
                            </div>
                            <h3 className="font-bold text-blue-950 text-lg mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-500 font-medium">{item.subtitle}</p>
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
            
            <Testimonials />
            
            <FAQ />

            {/* Final Contact CTA */}
            <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl border border-blue-800">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Need Help with Your Home Tech?</h2>
                            <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                                Don't let technology frustrate you anymore. Get in touch today for friendly, local help that comes to you.
                            </p>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                                <div className="space-y-8">
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-6">Contact Options</h3>
                                        <div className="space-y-6">
                                            <a href="tel:07343079390" className="flex items-center gap-5 group">
                                                <div className="bg-blue-600 p-4 rounded-2xl group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                                                    <Phone className="text-white" size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-blue-300 text-sm font-bold uppercase tracking-wider">Call Directly</p>
                                                    <p className="text-xl text-white font-black">0734 307 9390</p>
                                                </div>
                                            </a>
                                            <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                                                <div className="bg-green-600 p-4 rounded-2xl group-hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20">
                                                    <MessageCircle className="text-white" size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-green-300 text-sm font-bold uppercase tracking-wider">WhatsApp Me</p>
                                                    <p className="text-xl text-white font-black">Quick Response</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-br from-blue-600/20 to-green-600/10 p-8 rounded-[2.5rem] border border-white/5">
                                        <p className="text-blue-100 font-medium leading-relaxed italic">
                                            "I aim to respond to all enquiries within 2 hours. Looking forward to helping you get your tech sorted!"
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative z-20">
                                    <h3 className="text-3xl font-black text-blue-950 mb-8">Send a Message</h3>
                                    <form action="https://formsubmit.co/f3e77d17624af15bfa5f71ec63951c35" method="POST" className="space-y-6">
                                        <input type="text" name="_honey" style={{ display: 'none' }} />
                                        <input type="hidden" name="_captcha" value="false" />
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                                <input type="text" id="name" name="name" required className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all bg-gray-50/50 text-gray-900 font-medium" placeholder="John Smith" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                                <input type="email" id="email" name="email" required className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all bg-gray-50/50 text-gray-900 font-medium" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone <span className="text-gray-400 font-normal">(Optional)</span></label>
                                            <input type="tel" id="phone" name="phone" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all bg-gray-50/50 text-gray-900 font-medium" placeholder="07XXX XXXXXX" />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">How can I help?</label>
                                            <textarea id="message" name="message" rows={4} required className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all resize-none bg-gray-50/50 text-gray-900 font-medium" placeholder="Tell me about your tech issue..."></textarea>
                                        </div>

                                        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all active:scale-[0.98] shadow-xl shadow-blue-600/20 flex justify-center items-center gap-3 text-xl">
                                            Send Message <ArrowRight size={24} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
