import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { getLocationBySlug } from '@/lib/locations';
import { ClipboardCheck, ShieldCheck, Mail, MapPin } from 'lucide-react';

const baseUrl = 'https://www.buckstechhelp.co.uk';

const quoteWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Request a Property Network Audit',
    url: `${baseUrl}/quote`,
    isPartOf: { '@type': 'WebSite', '@id': baseUrl },
};

const quoteBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Request a Quote', item: `${baseUrl}/quote` },
    ],
};

export async function generateMetadata({ searchParams }: { searchParams: { location?: string } }): Promise<Metadata> {
    const location = searchParams?.location ? getLocationBySlug(searchParams.location) : null;
    return {
        // Static, concise title regardless of the ?location= search parameter so
        // long town names (e.g. Chalfont St Peter, Great Missenden) never inflate
        // the final rendered <title> tag. The root layout template appends the brand.
        title: 'Request a Property Network Audit',
        description: location
            ? `Complete our 2-minute quote audit for your ${location.name} property. Enterprise Wi-Fi, Cat6 cabling or 4K IP CCTV. Preliminary scope within 24 hours.`
            : 'Complete our 2-minute quote audit for enterprise Wi-Fi, Cat6 cabling or 4K IP CCTV in Buckinghamshire. Receive a preliminary scope and fixed price within 24 hours. No call needed.',
        alternates: { canonical: location ? `${baseUrl}/quote?location=${location.slug}` : `${baseUrl}/quote` },
    };
}

export default function QuotePage({ searchParams }: { searchParams: { location?: string } }) {
    const location = searchParams?.location ? getLocationBySlug(searchParams.location) : null;
    const townName = location?.name || '';

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([quoteWebPageSchema, quoteBreadcrumbSchema]) }}
            />
            <Header />

            <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28 px-4">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                        <ClipboardCheck size={16} /> Free Quote Audit · No Call Needed
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Build A Network That <span className="text-blue-400">Actually Works</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Tell us about your property in under 2 minutes and receive a preliminary scope and fixed price by email within 24 hours.
                    </p>
                    {townName && (
                        <div className="mt-6 flex justify-center">
                            <span className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm font-bold text-slate-200">
                                <MapPin size={16} className="text-blue-400" /> Preparing your {townName} network audit
                            </span>
                        </div>
                    )}
                </div>
            </section>

            <section className="px-4 pb-24">
                <QuoteForm locationSlug={location?.slug} townName={townName} />
            </section>

            {/* Trust strip */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                        <ShieldCheck size={28} className="text-blue-400 mx-auto mb-3" />
                        <p className="text-white font-bold">No obligation</p>
                        <p className="text-sm text-slate-400 font-medium mt-1">Freely walk away after your quote.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                        <Mail size={28} className="text-blue-400 mx-auto mb-3" />
                        <p className="text-white font-bold">24-hour scope</p>
                        <p className="text-sm text-slate-400 font-medium mt-1">Email your preliminary scope within a day.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                        <ShieldCheck size={28} className="text-blue-400 mx-auto mb-3" />
                        <p className="text-white font-bold">Fixed pricing</p>
                        <p className="text-sm text-slate-400 font-medium mt-1">Transparent quotes from £1,500+.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
