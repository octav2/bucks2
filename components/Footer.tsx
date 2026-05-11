import React from 'react';
import { Wrench, Phone, MessageCircle, MapPin } from 'lucide-react';
import { serviceAreas, businessDetails } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-blue-100 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center group mb-4">
                            <Image 
                                src="/logo.png" 
                                alt="Bucks Tech Help" 
                                width={200}
                                height={64}
                                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                            />
                        </Link>
                        <p className="text-blue-200 leading-relaxed font-medium">
                            Patient, local home technology support across Buckinghamshire. I focus on helping you get things working without the stress or jargon.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-2.5 rounded-full hover:bg-green-500 transition-all hover:scale-110 shadow-lg shadow-green-600/20" title="WhatsApp Me">
                                <MessageCircle size={18} />
                            </a>
                            <a href={`sms:${businessDetails.phone.replace(/\s+/g, '')}`} className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-500 transition-all hover:scale-110 shadow-lg shadow-blue-600/20" title="Send an SMS">
                                <Phone size={18} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Quick Links</h4>
                        <ul className="space-y-4 font-medium">
                            <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Service Areas</h4>
                        <p className="text-sm text-blue-200 mb-6 font-medium">Covering towns across South Bucks, including:</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {serviceAreas.slice(0, 10).map((area, i) => (
                                <Link key={i} href={`/${area.toLowerCase().replace(/\s+/g, '-')}`} className="bg-blue-900 hover:bg-blue-800 px-3 py-1.5 rounded-full transition-colors border border-blue-800">
                                    {area}
                                </Link>
                            ))}
                            <span className="px-3 py-1.5 opacity-50">...and more</span>
                        </div>
                    </div>
                </div>
                
                <div className="pt-10 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-400 font-medium">
                    <p>&copy; {new Date().getFullYear()} {businessDetails.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
