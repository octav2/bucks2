import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import AboutFAQ from '@/components/AboutFAQ';
import { getPageBySlug } from '@/lib/pages';
import { businessDetails } from '@/lib/data';
import Link from 'next/link';
import {
    Wifi, Cable, Cctv, ShieldCheck, HardHat, FileCheck, Landmark, Video,
    Home, TreePine, Building2, ArrowRight,
} from 'lucide-react';

const baseUrl = 'https://www.buckstechhelp.co.uk';

export async function generateMetadata(): Promise<Metadata> {
    const page = getPageBySlug('about');
    const fm = page?.frontmatter;
    const title = fm?.metaTitle ?? 'About Us | Network Engineers & Tech Specialists | Bucks Tech Help';
    const description = fm?.metaDescription ?? 'Learn about Bucks Tech Help: Certified network cabling contractors, enterprise Wi-Fi engineers, and 4K CCTV specialists serving Buckinghamshire.';
    return {
        title: { absolute: title },
        description,
        alternates: { canonical: `${baseUrl}/about` },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/about`,
            locale: 'en_GB',
            type: 'website',
        },
    };
}

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
const standards = [
    {
        icon: Cable,
        title: '100% Solid Copper Cables',
        desc: 'We never use cheap Copper Clad Aluminium (CCA). All runs use pure solid-copper Cat6/Cat6a or Steel Wire Armored (SWA) cables engineered for true 10Gbps headroom.',
    },
    {
        icon: FileCheck,
        title: 'Fluke Certified Testing',
        desc: 'Every network drop is tested and verified using commercial Fluke cable analyzers to guarantee zero signal attenuation or packet loss before handover.',
    },
    {
        icon: Landmark,
        title: 'Non-Invasive Architectural Routing',
        desc: 'Specialized routing through loft voids, cellar conduits and behind skirtings, preserving character properties and Grade II listed homes without ugly surface trunking.',
    },
    {
        icon: Video,
        title: 'Zero-Subscription Security',
        desc: 'Local on-premise NVR storage giving you full continuous 4K camera monitoring with direct smartphone access and zero ongoing monthly fees.',
    },
];

const clientGroups = [
    {
        icon: Home,
        title: 'Period Homes & Listed Estates',
        towns: ['Beaconsfield', 'Amersham Old Town', 'Great Missenden', 'Penn', 'Chalfont St Giles', 'Berkhamsted'],
    },
    {
        icon: TreePine,
        title: 'Garden Offices & Outbuildings',
        towns: ['Remote workers in Chesham', 'Hazlemere', 'Gerrards Cross', 'Bourne End', 'Wendover', 'Tring'],
    },
    {
        icon: Building2,
        title: 'Commercial Offices & Medical Surgeries',
        towns: ['High Wycombe', 'Aylesbury', 'Marlow', 'Stoke Poges', 'Chalfont St Peter', 'Princes Risborough'],
    },
];

const aboutFaqs = [
    {
        question: 'Are you certified network cabling installers in Buckinghamshire?',
        answer: 'Yes. Bucks Tech Help provides certified Cat6 and Cat6a structured cabling, managed PoE network setup, and enterprise Wi-Fi installations across all HP and SL postcode sectors in South and Central Bucks.',
    },
    {
        question: 'Do you offer a guarantee on your network installations?',
        answer: 'Yes. All structural Cat6 cable runs and access point deployments come with our 100% Coverage Guarantee and verified Fluke performance certification mapping.',
    },
    {
        question: 'How do you quote for large residential or commercial network projects?',
        answer: 'We conduct a comprehensive digital property audit, assessing wall density, cable paths, and bandwidth demands. You receive a fixed, transparent proposal starting from £1,500 with no hidden extras.',
    },
];

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Bucks Tech Help',
    url: `${baseUrl}/about`,
    mainEntity: {
        '@type': 'Organization',
        name: 'Bucks Tech Help',
        url: baseUrl,
        telephone: '07343079390',
        email: 'hello@buckstechhelp.co.uk',
        description: 'Certified network & cabling infrastructure specialists in Buckinghamshire. Hardwired Ubiquiti UniFi Wi-Fi, Cat6 structured cabling and subscription-free 4K IP CCTV.',
        areaServed: ['Beaconsfield', 'Amersham', 'Chesham', 'Gerrards Cross', 'High Wycombe', 'Marlow', 'Aylesbury', 'Chalfont St Giles', 'Wendover', 'Princes Risborough', 'Berkhamsted', 'Tring'],
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 pb-28 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, faqSchema]) }}
            />
            <Header />
<section className="relative overflow-hidden bg-slate-950 py-24 md:py-32 px-4">
                <div className="absolute top-0 right-0 -translate-y-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 px-5 py-2 rounded-full text-sm font-bold mb-8">
                        About Bucks Tech Help
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.08] text-balance">
                        Buckinghamshire&apos;s Network &amp; Cabling <span className="text-blue-400">Infrastructure Specialists</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        We are Buckinghamshire&apos;s trusted network cabling contractors, enterprise Wi-Fi engineers, and 4K CCTV installation
                        specialists — designing, installing and certifying hardwired Ubiquiti UniFi Wi-Fi 7, certified Cat6 structured cabling,
                        and subscription-free 4K IP CCTV for homes, estates, garden offices, and businesses across South Buckinghamshire.
                    </p>
                </div>
            </section>
<section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Why most home &amp; office networks fail</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">Most &quot;fast&quot; networks are quietly broken</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            The problem is rarely your broadband line — it&apos;s the way signal travels through the building. In Buckinghamshire&apos;s
                            period homes and garden studios, thick Chiltern flint walls, solid brick and modern foil-backed cavity insulation
                            block Wi-Fi before it reaches your rooms. Add cheap plug-in mesh boosters that repeat signal over the air, and you
                            lose up to 80% of your broadband speed, with constant drop-outs, buffering and dead zones. We fix the building
                            itself — not the symptom.
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
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Engineering &amp; installation standards</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Commercial-Grade Standards on Every Project</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            We hold every installation to specifications you would expect from a data-centre build — certified materials,
                            verified performance and archival routing that respects your property.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {standards.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div key={i} className="bg-slate-900/70 border border-slate-800 p-8 rounded-3xl hover:border-cyan-600/40 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-gradient-to-br from-cyan-500 to-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-600/20">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
<section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Who we serve</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Who We Serve Across Buckinghamshire</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            From character homes and garden studios to busy commercial sites, we tailor infrastructure to how your property is
                            built and how you work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {clientGroups.map((g, i) => {
                            const Icon = g.icon;
                            return (
                                <div key={i} className="bg-slate-950/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-600/40 transition-all duration-300">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4">{g.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {g.towns.map((t) => (
                                            <span key={t} className="text-sm font-semibold text-slate-300 bg-slate-800/70 border border-slate-700 px-3 py-1.5 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
<AboutFAQ faqs={aboutFaqs} />

            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Ready to build infrastructure that actually performs?</h2>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                        Tell us about your property in under two minutes. You&apos;ll receive a preliminary scope and fixed, transparent price
                        by email within 24 hours.
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