import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { businessDetails } from '@/lib/data';
import { servicesData } from '@/lib/servicesData';
import { getAllLocations } from '@/lib/locations';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
    const serviceList = Object.values(servicesData);
        const locationList = getAllLocations().map((l) => ({ slug: l.slug, name: l.name }));

    return (
        <footer className="bg-slate-950 text-slate-300 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="inline-flex shrink-0" aria-label="Bucks Tech Help home">
                            <Logo className="h-11" />
                        </Link>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Enterprise Wi-Fi, structured cabling and IP CCTV infrastructure for large homes, garden offices and businesses across Buckinghamshire.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                            <Mail size={16} className="text-blue-400" />
                            <a href={`mailto:${businessDetails.email}`} className="hover:text-white">{businessDetails.email}</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
                        <ul className="space-y-4 font-medium">
                            {serviceList.map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                                        {service.shortTitle}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/quote" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                    Get a Quote <ArrowRight size={14} />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Serving South &amp; Central Bucks</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            {locationList.map((loc) => (
                                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-600/50 text-slate-300 hover:text-white text-center py-2.5 rounded-full transition-all">
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                        <p className="text-slate-500 text-xs font-medium mt-5">Covering South &amp; Central Bucks including Marlow, Hazlemere, Great Missenden, Bourne End, Penn, Stoke Poges, Chalfont St Peter and Aylesbury villages.</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
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

