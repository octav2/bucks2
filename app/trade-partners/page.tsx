import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import MicroTrust from '@/components/MicroTrust';
import Link from 'next/link';
import {
    Zap,
    Building2,
    TreePine,
    Wifi,
    Cctv,
    ClipboardCheck,
    FileCheck,
    ShieldCheck,
    Users,
    MessagesSquare,
} from 'lucide-react';

const baseUrl = 'https://www.buckstechhelp.co.uk';

export const metadata: Metadata = {
    title: 'Trade Partners | Network Cabling Sub-Contractors | Bucks Tech Help',
    description: 'Become a Bucks Tech Help trade partner. Specialist data cabling, enterprise Wi-Fi and 4K CCTV sub-contracting for electricians, builders and garden room companies across Buckinghamshire.',
    alternates: { canonical: `${baseUrl}/trade-partners` },
    openGraph: {
        title: 'Trade Partners | Bucks Tech Help',
        description: 'Specialist data cabling & network infrastructure for building professionals across Buckinghamshire.',
        url: `${baseUrl}/trade-partners`,
        siteName: 'Bucks Tech Help',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trade Partners | Bucks Tech Help',
        description: 'Specialist data cabling & network infrastructure for building professionals.',
    },
};

const tradePartnersSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Become a Bucks Tech Help Trade Partner',
    url: `${baseUrl}/trade-partners`,
    isPartOf: { '@type': 'WebSite', '@id': baseUrl },
    description: 'Specialist data cabling, enterprise network infrastructure and subscription-free 4K CCTV for electricians, builders and garden room companies.',
};

const problemGroups = [
    {
        icon: Zap,
        title: 'For Electricians',
        desc: 'Data cabling requires specialised testing equipment, rack termination and network configuration that eats into your high-voltage AC schedule.',
    },
    {
        icon: Building2,
        title: 'For Main Contractors & Builders',
        desc: 'Poor wireless coverage or bad cable termination leads to client complaints after handover, delaying final project sign-off and retentions.',
    },
    {
        icon: TreePine,
        title: 'For Garden Room Builders',
        desc: 'Clients expect seamless Gigabit internet the day their garden studio is built, but standard Wi-Fi extenders fail over long distances and through insulated walls.',
    },
];

const supportServices = [
    {
        icon: FileCheck,
        title: 'Fluke-Certified Cabling',
        text: 'We supply and install solid-copper Cat6 and Cat6a runs, complete with printed Fluke certification reports for your client handover pack.',
    },
    {
        icon: Wifi,
        title: 'Enterprise Wi-Fi & Switching',
        text: 'We spec and deploy rack-mounted Ubiquiti UniFi hardware designed for period homes, thick brick walls and modern extension wings.',
    },
    {
        icon: Cctv,
        title: 'Subscription-Free 4K CCTV',
        text: 'Integrated local-storage security networks with zero monthly fees for your end client.',
    },
    {
        icon: ClipboardCheck,
        title: 'Direct Project Support',
        text: 'We review site plans, calculate cable drops, build tidy 19-inch patch racks and configure the software end-to-end.',
    },
];

const waysToWork = [
    {
        step: '01',
        title: 'Design & Supply Partnership (Referral)',
        text: 'You introduce us to your client for the data and Wi-Fi package. We quote and deliver the project directly, paying you a direct trade referral commission upon completion.',
    },
    {
        step: '02',
        title: 'Specialist Sub-Contract Integration',
        text: 'We provide you with a fixed-price trade quote for labour and materials. You include our scope within your overall contract to the client and manage the margin yourself.',
    },
    {
        step: '03',
        title: 'First-Fix / Second-Fix Support',
        text: 'Your team pulls the Cat6 cables during first-fix based on our floorplan spec. Our engineering team comes in for second-fix to terminate racks, install access points, test and commission.',
    },
];

const siteCommitments = [
    {
        icon: ShieldCheck,
        title: 'Punctual & Tidy',
        text: 'Clean work areas, neatly dressed cable runs and strict adherence to site RAMS and safety guidelines.',
    },
    {
        icon: FileCheck,
        title: 'Documented Standards',
        text: 'Every cable port is labelled, mapped and Fluke-tested before handover.',
    },
    {
        icon: MessagesSquare,
        title: 'Zero Client Friction',
        text: 'Clear handover documentation so the end customer knows exactly how their system works without bothering you for ongoing support.',
    },
];

export default function TradePartnersPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tradePartnersSchema) }}
            />
            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <Building2 size={16} /> Trade Partners
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                        Become a Bucks Tech Help <span className="text-blue-400">Trade Partner</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                        The data cabling &amp; enterprise network infrastructure specialist for high-end residential and commercial projects across Buckinghamshire.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>
{/* PROBLEM */}
            <section className="py-20 px-4 bg-slate-900 border-b border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">The Trade Problem We Solve</h2>
                    <p className="text-slate-400 text-lg max-w-3xl mb-12 font-medium">
                        When building or renovating high-specification properties, network infrastructure is often an afterthought — until the client moves in and the Wi-Fi drops.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {problemGroups.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="group bg-slate-950/60 border border-slate-800 hover:border-blue-600/40 p-8 rounded-3xl transition-colors duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6">
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

            {/* SUPPORT */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-5xl mx-auto">
                    <span className="flex justify-center"><span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></span></span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight text-center">How We Support Your Projects</h2>
                    <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12 font-medium">
                        We act as your dedicated network infrastructure specialists — you manage the primary build or electrical installation; our engineering team handles the technical network backbone.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {supportServices.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.title} className="group flex items-start gap-4 bg-slate-900/70 border border-slate-800 hover:border-blue-600/40 p-6 rounded-2xl transition-colors duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white mb-1.5 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
{/* WAYS TO WORK */}
            <section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Three Ways To Work With Us</h2>
                    <p className="text-slate-400 text-lg mb-12 font-medium">Flexible trade collaboration options to suit how you like to run a project.</p>
                    <div className="space-y-5">
                        {waysToWork.map((w) => (
                            <div key={w.step} className="group bg-slate-950/50 border border-slate-800 hover:border-blue-600/40 p-7 md:p-8 rounded-3xl transition-colors duration-300">
                                <div className="flex items-center gap-5">
                                    <span className="text-4xl md:text-5xl font-black text-blue-500/70 group-hover:text-blue-400 transition-colors">{w.step}</span>
                                    <div>
                                        <h3 className="text-xl font-black text-white mb-1.5">{w.title}</h3>
                                        <p className="text-slate-400 font-medium leading-relaxed">{w.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SITE COMMITMENT */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-5xl mx-auto">
                    <span className="flex justify-center"><span className="block w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></span></span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight text-center">Our Site Commitment</h2>
                    <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12 font-medium">
                        When our engineers are on site, we protect your brand and client relationships.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {siteCommitments.map((c) => {
                            const Icon = c.icon;
                            return (
                                <div key={c.title} className="group bg-slate-900/60 border border-slate-800 hover:border-blue-600/40 p-8 rounded-3xl text-center transition-colors duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-5">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{c.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{c.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
{/* GET STARTED CTA */}
            <section className="py-16 px-4 bg-slate-950">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 text-blue-100 font-bold mb-4"><Users size={18} /> Partner With Us</span>
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight">Partner With Us on Your Next Build</h2>
                        <p className="text-blue-100 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
                            Have an upcoming project in Beaconsfield, Amersham, Marlow or surrounding areas? Get in touch with our team to discuss floorplans, technical scopes or trade pricing.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                            Contact Our Team
                        </Link>
                        <div className="mt-6">
                            <MicroTrust />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileStickyCTA />
        </div>
    );
}