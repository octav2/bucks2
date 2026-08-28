import React from 'react';
import { Mail, ArrowRight, Phone, MapPin } from 'lucide-react';
import { businessDetails, serviceAreas } from '@/lib/data';
import Link from 'next/link';
import Logo from '@/components/Logo';
import EmailLink from '@/components/EmailLink';

export default function Footer() {
    // Fixed service display names + their canonical routes
    const footerServices = [
        { label: 'Whole-Home & Garden Room Wi-Fi', href: '/services/whole-home-wifi' },
        { label: 'Commercial Cat6/Cat6a Cabling', href: '/services/commercial-cabling' },
        { label: '4K IP CCTV & Smart Access Control', href: '/services/smart-security' },
    ];

    return (
        <footer className="bg-slate-950 text-slate-300 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr] gap-12 mb-14">
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="inline-flex shrink-0" aria-label="Bucks Tech Help — back to homepage">
                            <Logo className="h-12" />
                        </Link>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Certified network cabling contractors, enterprise Wi-Fi 7 installation, and subscription-free 4K CCTV security systems across Buckinghamshire.
                        </p>
                        <div className="text-slate-400 text-sm font-medium space-y-3">
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-blue-400" />
                                <a href={`tel:+44${businessDetails.phone.slice(1)}`} className="hover:text-white">
                                    +44 {businessDetails.phone.slice(1, 5)} {businessDetails.phone.slice(5)}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-blue-400" />
                                <EmailLink className="hover:text-white" />
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-blue-400 mt-0.5" />
                                <span>High Wycombe, Buckinghamshire, UK</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h3>
                        <ul className="space-y-4 font-medium">
                            {footerServices.map((s) => (
                                <li key={s.href}>
                                    <Link href={s.href} className="hover:text-white transition-colors">
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/quote" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                    Request Property Audit <ArrowRight size={14} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                    Contact Us <ArrowRight size={14} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/trade-partners" className="hover:text-white transition-colors">
                                    Trade Partners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Serving South & Central Bucks</h3>
                        <div className="grid grid-cols-3 gap-3 text-xs overflow-hidden">
                            {serviceAreas.map((town) => {
                                const townSlug = town.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <Link key={town} href={`/locations/${townSlug}`} className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-600/50 text-slate-300 hover:text-white text-center rounded-full py-2.5 whitespace-nowrap overflow-hidden text-ellipsis transition-all">
                                        {town}
                                    </Link>
                                );
                            })}
                        </div>
                        <p className="text-slate-400 text-xs font-medium mt-5">Covering South & Central Bucks.</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium">
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