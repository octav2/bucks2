import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MicroTrust from '@/components/MicroTrust';
import { getAllLocationSlugs, getLocationBySlug, type LocationContent } from '@/lib/locations';
import { businessDetails } from '@/lib/data';
import { Wifi, Cable, Cctv, CheckCircle2, ArrowRight, MapPin, Home, HelpCircle, Briefcase } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllLocationSlugs().map((slug) => ({ slug }));
}

interface Props {
    params: { slug: string };
}

const domain = 'https://www.buckstechhelp.co.uk';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = getLocationBySlug(params.slug);
    if (!location) return {};
    const town = location.name;
    const url = `${domain}/locations/${location.slug}`;
    return {
        title: `Wi-Fi Installation & Ubiquiti Architecture in ${town} | Bucks Tech Help`,
        description: `Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a cabling, and 4K CCTV architecture in ${town}. Engineered for period homes, luxury estates, and commercial premises.`,
        alternates: { canonical: url },
        openGraph: {
            title: `Enterprise Property Connectivity Architecture in ${town}`,
            description: `Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a cabling, and 4K CCTV architecture in ${town}. Engineered for period homes, luxury estates, and commercial premises.`,
            type: 'website',
            locale: 'en_GB',
            url,
            siteName: businessDetails.name,
        },
    };
}

const heroHighlights = [
    'Hardwired Enterprise Wi-Fi',
    'Cat6 / Cat6a Cabling',
    'Subscription-Free 4K CCTV',
    'Projects From £1,500',
];

interface ServiceCard {
    icon: any;
    title: string;
    description: string;
    price: string;
    href: string;
    cta: string;
}

const localServiceCards: ServiceCard[] = [
    { icon: Wifi, title: 'Enterprise Whole-Home Wi-Fi 7 Architecture', description: 'Hardwired Ubiquiti UniFi Wi-Fi 7 backbones engineered to eliminate dead zones across period homes, luxury estates, and garden offices in Buckinghamshire.', price: 'From Â£1,500', href: '/services/whole-home-wifi', cta: 'Explore Wi-Fi' },
    { icon: Cable, title: 'High-Density Data Infrastructure & Rack Architecture', description: 'Cat6a structured cabling, patch panels, and rack installations for demanding homes, offices, and estates.', price: 'From Â£2,000', href: '/services/commercial-cabling', cta: 'Explore Cabling' },
    { icon: Cctv, title: 'Subscription-Free 4K Property Security', description: 'Owned-outright 4K IP CCTV and smart access control installed on your wired Ubiquiti UniFi backbone.', price: 'From Â£1,800', href: '/services/smart-security', cta: 'Explore Security' },
];

const caseStudyIcons: Record<string, any> = {
    'Property Type': Home,
    'The Challenge': Briefcase,
    'Our Solution': Wifi,
    'Verified Result': CheckCircle2,
};

// Unique, location-differentiated hero badge titles for each town hub.
const heroBadgeText: Record<string, string> = {
    beaconsfield: 'Gated Estate & Period Home Networks',
    amersham: 'Garden Studio & Period Home Networks',
    chesham: 'Garden Office & Barn Connectivity',
    'gerrards-cross': 'High-Spec Home & CCTV Cabling',
    'high-wycombe': 'Commercial Data & Office Cabling',
    marlow: 'Riverside Property & Outdoor Wi-Fi',
    'stoke-poges': 'Semi-Rural Estate Security & Wi-Fi',
    aylesbury: 'Townhouse & Commercial Data Drops',
    hazlemere: 'Loft Extension & Home Office Wi-Fi',
    'great-missenden': 'Chiltern Cottage & Barn Infrastructure',
    'bourne-end': 'Thameside Home & Security Cabling',
    penn: 'Country Residence Network Infrastructure',
    'chalfont-st-peter': 'Village Home & High Street Cabling',
};

export default function LocationPage({ params }: Props) {
    const location = getLocationBySlug(params.slug);
    if (!location) return notFound();

    const town = location.name;
    const allLocations = getAllLocationSlugs().map(getLocationBySlug).filter((l): l is LocationContent => l !== null);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Bucks Tech Help - ${town}`,
        url: `${domain}/locations/${location.slug}`,
        priceRange: 'Â£1500-Â£5000',
        areaServed: `${town}, Buckinghamshire`,
        provider: 'Bucks Tech Help',
        description: `Hardwired Ubiquiti UniFi Wi-Fi 7, Cat6a cabling, and 4K CCTV architecture in ${town}. Engineered for period homes, luxury estates, and commercial premises.`,
        serviceType: 'Enterprise Property Connectivity Architecture',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: location.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };

    const quoteHref = `/quote?location=${location.slug}`;

        return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Script id={`location-schema-${location.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, faqSchema]) }} />

            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex justify-center mb-6">
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <MapPin size={16} /> {heroBadgeText[location.slug] ?? `Network & Cabling Installations in ${town}`}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-center">
                        Enterprise Property Connectivity Architecture in {town}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center leading-relaxed font-medium mb-10">
                        Looking for hardwired Wi-Fi installation, Cat6a network cabling, or 4K CCTV in {town}? We engineer enterprise-grade Ubiquiti UniFi backbones built to eliminate dead zones across period homes, luxury estates, and garden offices in {town}.
                    </p>
                    <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {heroHighlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 bg-slate-900/70 border border-slate-800 p-4 rounded-xl">
                                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-200 text-sm font-medium">{h}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link href={quoteHref} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                            Request {town} Property Audit <ArrowRight size={20} />
                                                </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 1: SERVICES AVAILABLE IN [TOWNNAME] */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight text-center">Services Available in {town}</h2>
                    <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12 font-medium">Professional network infrastructure for {town} homes, garden offices and businesses.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {localServiceCards.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.href} className="group bg-slate-800/60 border border-slate-700 p-7 rounded-3xl hover:border-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5">
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6 flex-1">{s.description}</p>
                                    <p className="text-lg font-bold text-blue-400 mb-2">{s.price}</p>
                                    <Link href={s.href} className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                                        {s.cta} in {town} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: LOCAL KNOWLEDGE & PROPERTY INFRASTRUCTURE */}
            <section className="py-20 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-3">Local Knowledge</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Local Knowledge &amp; Property Infrastructure in {town}</h2>
                                        <div className="markdown-body text-lg text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: location.localKnowledgeHtml }} />
                </div>
            </section>

            {/* SECTION 3: FEATURED LOCAL CASE STUDY */}
            {location.caseStudy.length > 0 && (
                <section className="py-20 px-4 bg-slate-950">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">Featured {town} Case Study</h2>
                        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <div className="space-y-6">
                                {location.caseStudy.map((item, i) => {
                                    const Icon = caseStudyIcons[item.label] ?? CheckCircle2;
                                    return (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center">
                                                <Icon size={22} />
                                            </div>
                                            <div>
                                                <h3 className="text-cyan-400 font-black uppercase tracking-wider text-sm mb-1.5">{item.label}</h3>
                                                <p className="text-slate-200 font-medium leading-relaxed">{item.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                                </section>
            )}

            {/* SECTION 4: LOCAL FAQS ACCORDION */}
            <section className="py-20 px-4 bg-slate-950">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight text-center">FAQs for {town}</h2>
                    <div className="space-y-4">
                        {location.faqs.map((faq, i) => (
                            <details key={i} className="group bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
                                <summary className="w-full flex items-center justify-between gap-4 cursor-pointer text-left p-6 hover:bg-slate-800/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                    <span className="font-bold text-white text-lg flex gap-3 items-center">
                                        <HelpCircle className="text-blue-400 flex-shrink-0" size={22} /> {faq.question}
                                    </span>
                                    <span className="text-blue-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="text-slate-400 leading-relaxed pl-6 pr-6 pb-6 font-medium">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: NEARBY AREAS WE COVER */}
            <section className="py-16 px-4 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight text-center">All Buckinghamshire Locations We Cover</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {allLocations.map((l) => (
                            <Link key={l.slug} href={`/locations/${l.slug}`} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-600/50 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all">
                                {l.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: FINAL CTA BANNER */}
            <section className="py-16 px-4 bg-slate-950">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight">Ready for a {town} Network Installation?</h2>
                        <p className="text-blue-100 text-lg mb-9 max-w-xl mx-auto leading-relaxed">Complete our 2-minute quote audit and receive a preliminary scope within 24 hours.</p>
                        <Link href={quoteHref} className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                            Start My Free Quote Audit <ArrowRight size={22} />
                        </Link>
                        <div className="mt-6">
                            <MicroTrust />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}


