import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import Link from 'next/link';
import { Wifi, Cable, Cctv, ShieldCheck, HardHat, ArrowRight } from 'lucide-react';

const baseUrl = 'https://www.buckstechhelp.co.uk';

export const metadata: Metadata = {
    title: 'About Us | Bucks Tech Help — Enterprise Wi-Fi, Cabling & CCTV Installer Buckinghamshire',
    description: 'Bucks Tech Help is a Buckinghamshire network & cabling infrastructure company. Certified Ubiquiti UniFi & TP-Link Omada installers delivering hardwired Wi-Fi, Cat6 structured cabling and 4K IP CCTV for large homes, garden offices and businesses.',
    alternates: { canonical: `${baseUrl}/about` },
};

const pillars = [
    {
        icon: Wifi,
        title: 'Hardwired, not patched',
        desc: 'We reject plug-in boosters. Every project uses dedicated Cat6 cable backhauls and ceiling access points, so signal is delivered at full broadband speed — not halved over the air.',
    },
    {
        icon: Cable,
        title: 'Structured & certified',
        desc: 'Every run is planned, terminated, labelled and certified. We leave behind tidy containment, documentation and a network that is built to last and easy to extend.',
    },
    {
        icon: Cctv,
        title: 'Owned outright',
        desc: 'Our CCTV and networks carry no recurring fees. Footage stays on your own NVR and your systems work for you — with no subscription lock-in.',
    },
    {
        icon: ShieldCheck,
        title: 'Transparent pricing',
        desc: 'Quotes are scoped against a digital site audit and priced from £1,500 for Wi-Fi, £2,000 for Cat6 cabling and £1,800 for 4K IP CCTV — fixed and transparent before we start.',
    },
    {
        icon: HardHat,
        title: 'Low disruption',
        desc: 'We respect your home and workspace. Cabling is routed through lofts and voids, work is left tidy, and installs are planned around your day.',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 pb-28 md:pb-0">
            <Header />

            <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32 px-4">
                <div className="absolute top-0 right-0 -translate-y-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 px-5 py-2 rounded-full text-sm font-bold mb-8">
                        <Wifi size={16} /> About Bucks Tech Help
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.08] text-balance">
                        The Buckinghamshire Network &amp; Cabling <span className="text-blue-400">Infrastructure Team</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        We design, install and certify enterprise-grade systems that most consumer retailers simply can&apos;t — hardwired Wi-Fi,
                        structured Cat6 cabling and subscription-free 4K IP CCTV for the region&apos;s large homes, garden offices and businesses.
                    </p>
                </div>
            </section>
<section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Why we exist</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">Most &quot;fast&quot; home networks are quietly broken</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            The problem is rarely the broadband line — it&apos;s the way the signal travels through the building. Brick walls, foil
                            insulation, and cheap plug-in boosters silently cut your speed and cause the drop-outs, buffering and dead zones you
                            put up with every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div key={i} className="bg-slate-800/60 border border-slate-700 p-8 rounded-3xl hover:border-blue-600/40 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Working across South &amp; Central Buckinghamshire</h2>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                        From Beaconsfield and Amersham to High Wycombe, Marlow and Aylesbury, we help homeowners and business owners stop
                        tolerating poor connectivity and build infrastructure that performs like an enterprise network.
                    </p>
                    <Link
                        href="/quote"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all hover:scale-[1.03] shadow-2xl shadow-blue-600/30"
                    >
                        Get My Free Quote Audit <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            <Footer />
            <MobileStickyCTA />
        </div>
    );
}
