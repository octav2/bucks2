import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { businessDetails } from '@/lib/data';

const baseUrl = 'https://www.buckstechhelp.co.uk';

const contactWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Bucks Tech Help',
    url: `${baseUrl}/contact`,
    isPartOf: { '@type': 'WebSite', '@id': baseUrl },
};

export const metadata: Metadata = {
    title: { absolute: 'Contact Us | Bucks Tech Help' },
    description: 'Get in touch with Bucks Tech Help for enterprise Wi-Fi, Cat6 cabling, and 4K IP CCTV installations in Buckinghamshire.',
    alternates: { canonical: `${baseUrl}/contact` },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactWebPageSchema) }}
            />
            <Header />

            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Get In <span className="text-blue-400">Touch</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Have a question about our services? Send us a message and our team will get back to you as soon as possible.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold mb-1">Email</p>
                                        <a href={`mailto:${businessDetails.email}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                                            {businessDetails.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Phone size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold mb-1">Phone</p>
                                        <a href={`tel:${businessDetails.phone.replace(/\s+/g, '')}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                                            {businessDetails.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold mb-1">Coverage Area</p>
                                        <p className="text-slate-300 font-medium">
                                            South & Central Buckinghamshire
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
