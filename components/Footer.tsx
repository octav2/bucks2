import React from 'react';
import { Wifi, Mail, ArrowRight } from 'lucide-react';
import { serviceAreas, businessDetails } from '@/lib/data';
import { servicesData } from '@/lib/servicesData';
import { getAllLocations } from '@/lib/locations';
import Link from 'next/link';

export default function Footer() {
    const serviceList = Object.values(servicesData);
        const locationList = getAllLocations().map((l) => ({ slug: l.slug, name: l.name }));

    return (
        <footer className="bg-slate-950 text-slate-300 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                                <Wifi size={22} />
                            </div>
                            <span className="text-white text-lg font-black tracking-tight">Bucks Tech Help</span>
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
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Locations</h4>
                        <ul className="space-y-4 font-medium">
                            {locationList.map((loc) => (
                                <li key={loc.slug}>
                                    <Link href={`/locations/${loc.slug}`} className="hover:text-white transition-colors">
                                        Network Installations in {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Coverage</h4>
                        <p className="text-slate-400 text-sm mb-5 font-medium">Serving South &amp; Central Bucks:</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {serviceAreas.map((area, i) => (
                                <span key={i} className="bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-full transition-colors border border-slate-800">
                                    {area}
                                </span>
                            ))}
                        </div>
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

