import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guidesData } from '@/lib/guidesData';
import { businessDetails } from '@/lib/data';
import { ArrowLeft, ArrowRight, Phone, MessageCircle, Clock, User, ShieldAlert, Wifi, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';

export async function generateStaticParams() {
    return Object.keys(guidesData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const guide = guidesData[params.slug];
    if (!guide) return {};

    return {
        title: guide.metaTitle,
        description: guide.metaDesc,
        alternates: {
            canonical: `https://www.buckstechhelp.co.uk/guides/${params.slug}`
        }
    };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
    const guide = guidesData[params.slug];
    if (!guide) return notFound();

    // Get other guides for the "Related Articles" section
    const otherGuides = Object.values(guidesData).filter(g => g.slug !== params.slug);

    // Dynamic styles based on category
    const getCategoryStyles = (category: string) => {
        switch (category.toLowerCase()) {
            case 'online security':
                return {
                    pill: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                    icon: <ShieldAlert className="text-emerald-600" size={18} />,
                    heroBg: 'from-emerald-950 via-slate-900 to-slate-900',
                    accentColor: 'text-emerald-400'
                };
            case 'home internet':
                return {
                    pill: 'bg-blue-50 text-blue-700 border-blue-100',
                    icon: <Wifi className="text-blue-600" size={18} />,
                    heroBg: 'from-blue-950 via-slate-900 to-slate-900',
                    accentColor: 'text-blue-400'
                };
            default:
                return {
                    pill: 'bg-indigo-50 text-indigo-700 border-indigo-100',
                    icon: <Bookmark className="text-indigo-600" size={18} />,
                    heroBg: 'from-indigo-950 via-slate-900 to-slate-900',
                    accentColor: 'text-indigo-400'
                };
        }
    };

    const catStyles = getCategoryStyles(guide.category);

    // Helper to parse content into beautiful React elements
    const renderParsedContent = (content: string) => {
        const paragraphs = content.split('\n\n');
        return paragraphs.map((para, idx) => {
            const trimmed = para.trim();
            if (!trimmed) return null;

            // Handle Subheadings (###)
            if (trimmed.startsWith('###')) {
                const headingText = trimmed.replace('### ', '');
                
                // If it is a crucial warning section (HMRC / Scammed / Bank details)
                if (headingText.toLowerCase().includes('crucial') || headingText.toLowerCase().includes('scammed')) {
                    return (
                        <div key={idx} className="bg-red-50/70 border-l-4 border-red-500 rounded-r-3xl p-6 md:p-8 mt-10 mb-6 shadow-sm">
                            <div className="flex gap-3 items-center mb-3">
                                <ShieldAlert size={28} className="text-red-650 text-red-650 text-red-600 flex-shrink-0" />
                                <h3 className="text-xl md:text-2xl font-black text-red-950 tracking-tight">{headingText}</h3>
                            </div>
                            <div className="text-red-950/90 text-base leading-relaxed">
                                {paragraphs[idx + 1] ? renderParsedContent(paragraphs[idx + 1]) : null}
                            </div>
                        </div>
                    );
                }

                return (
                    <h3 key={idx} className="text-2xl md:text-3xl font-extrabold text-blue-950 mt-12 mb-5 tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-6 bg-gradient-to-b from-blue-600 to-emerald-500 rounded-full inline-block"></span>
                        {headingText}
                    </h3>
                );
            }

            // Skip paragraph if it was already rendered inside the alert box above
            const prevTrimmed = paragraphs[idx - 1]?.trim() || '';
            if (prevTrimmed.startsWith('###') && (prevTrimmed.toLowerCase().includes('crucial') || prevTrimmed.toLowerCase().includes('scammed'))) {
                return null;
            }

            // Handle Lists / Bullet points starting with *
            if (trimmed.startsWith('*')) {
                const listItems = trimmed.split('\n').filter(Boolean);
                return (
                    <ul key={idx} className="space-y-4 my-6 pl-1">
                        {listItems.map((item, itemIdx) => {
                            const bulletText = item.replace('* ', '');
                            
                            // Check if bullet point is bold
                            if (bulletText.includes('**')) {
                                const parts = bulletText.split('**');
                                // parts[0] is usually empty, parts[1] is bold text, parts[2] is normal text
                                const boldPart = parts[1] || '';
                                const normalPart = parts[2] || '';
                                return (
                                    <li key={itemIdx} className="flex gap-3 text-slate-700 text-lg leading-relaxed">
                                        <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                                        <span>
                                            <strong className="text-slate-900 font-extrabold">{boldPart}</strong>
                                            {normalPart}
                                        </span>
                                    </li>
                                );
                            }

                            return (
                                <li key={itemIdx} className="flex gap-3 text-slate-700 text-lg leading-relaxed">
                                    <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                    <span>{bulletText}</span>
                                </li>
                            );
                        })}
                    </ul>
                );
            }

            // Handle Numbered list starting with 1., 2.
            if (/^\d+\./.test(trimmed)) {
                const listItems = trimmed.split('\n').filter(Boolean);
                return (
                    <ol key={idx} className="space-y-6 my-8 pl-1">
                        {listItems.map((item, itemIdx) => {
                            // Extract number and text
                            const match = item.match(/^(\d+)\.\s(.*)/);
                            const number = match ? match[1] : (itemIdx + 1).toString();
                            const text = match ? match[2] : item;

                            // Handle bold tags in text
                            let formattedText: React.ReactNode = text;
                            if (text.includes('**')) {
                                const parts = text.split('**');
                                formattedText = (
                                    <span>
                                        <strong className="text-slate-900 font-extrabold">{parts[1] || ''}</strong>
                                        {parts[2] || ''}
                                    </span>
                                );
                            }

                            return (
                                <li key={itemIdx} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-blue-950 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm mt-0.5">
                                        {number}
                                    </div>
                                    <span className="text-slate-700 text-lg leading-relaxed flex-1">
                                        {formattedText}
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                );
            }

            // Standard Paragraph
            let formattedParagraph: React.ReactNode = trimmed;
            if (trimmed.includes('**')) {
                const parts = trimmed.split('**');
                // Alternates: parts[0] (normal), parts[1] (bold), parts[2] (normal)...
                formattedParagraph = parts.map((part, pIdx) => {
                    if (pIdx % 2 === 1) {
                        return <strong key={pIdx} className="text-slate-900 font-extrabold">{part}</strong>;
                    }
                    return part;
                });
            }

            return <p key={idx} className="mb-6 text-slate-700 text-lg leading-relaxed font-medium">{formattedParagraph}</p>;
        });
    };

    return (
        <div className="min-h-screen bg-slate-50/50 text-gray-850 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* Immersive Article Header Hero */}
            <section className={`relative overflow-hidden bg-gradient-to-b ${catStyles.heroBg} text-white py-20 md:py-28 px-4`}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                
                <div className="max-w-3xl mx-auto relative z-10">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-bold text-sm mb-8 group transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Guides
                    </Link>

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-white/10 bg-white/5 text-blue-200`}>
                            {catStyles.icon}
                            {guide.category}
                        </span>
                        <div className="flex items-center gap-3 text-sm text-slate-350 text-gray-300 font-medium">
                            <span className="flex items-center gap-1"><Clock size={14} />{guide.readTime}</span>
                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                            <span>{guide.date}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
                        {guide.title}
                    </h1>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-900 text-sm font-black shadow-inner">
                            BH
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm leading-none mb-1">{guide.author}</p>
                            <p className="text-slate-400 text-xs leading-none">Home Technology Specialists</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Immersive Layout: Main Content + Right Sticky Booking Box */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                    
                    {/* Article Content Area */}
                    <article className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-14 shadow-sm">
                        <div className="text-slate-800">
                            {renderParsedContent(guide.content)}
                        </div>

                        {/* Author Bio Box */}
                        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-50/50 rounded-3xl p-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 to-blue-950 flex items-center justify-center text-white font-black text-2xl shadow-md flex-shrink-0">
                                BT
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Written by the {guide.author}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm font-medium mb-3">
                                    We are dedicated to helping Buckinghamshire residents get the most out of their home electronics, Wi-Fi, systems, and smart tech without the stress or confusing technical jargon.
                                </p>
                                <div className="flex justify-center md:justify-start gap-4 text-xs font-bold text-blue-600">
                                    <Link href="/services" className="hover:underline flex items-center gap-1">Our Services <ChevronRight size={12} /></Link>
                                    <span className="text-slate-350 text-gray-300">|</span>
                                    <Link href="/#faq" className="hover:underline flex items-center gap-1">Frequently Asked Questions <ChevronRight size={12} /></Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Sticky Booking Box */}
                    <aside className="w-full lg:w-[360px] flex-shrink-0">
                        <div className="sticky top-8 space-y-8">
                            {/* Fast Direct Booking Box */}
                            <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
                                <h3 className="text-2xl font-black mb-4 relative z-10">Need a Helping Hand?</h3>
                                <p className="text-blue-100 text-sm leading-relaxed mb-6 font-medium relative z-10">
                                    Don't struggle with slow setups or security concerns. We provide patient, face-to-face home IT support right at your kitchen table.
                                </p>
                                <div className="space-y-4">
                                    <a 
                                        href={`tel:${businessDetails.phone.replace(/\s+/g, '')}`} 
                                        className="w-full bg-white text-blue-950 hover:bg-slate-50 transition-all font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
                                    >
                                        <Phone size={16} /> Call {businessDetails.phone}
                                    </a>
                                    <a 
                                        href={businessDetails.whatsappLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 transition-all font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
                                    >
                                        <MessageCircle size={16} /> WhatsApp Us
                                    </a>
                                </div>
                                <div className="mt-6 text-center">
                                    <span className="text-[11px] text-blue-200 uppercase font-bold tracking-wider">★ Patient, friendly & jargon-free</span>
                                </div>
                            </div>

                            {/* Service Coverage Mini Card */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <h4 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-blue-600" /> Evening & Weekends
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                    We offer highly flexible appointment hours to suit your schedule, including late evenings and weekend visits at no extra cost.
                                </p>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>

            {/* Related Articles Segment */}
            {otherGuides.length > 0 && (
                <section className="py-20 px-4 bg-white border-t border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-black text-blue-950 mb-10 tracking-tight text-center md:text-left">Other Helpful Tech Guides</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {otherGuides.map((guide, index) => (
                                <Link 
                                    href={`/guides/${guide.slug}`} 
                                    key={index} 
                                    className="group flex flex-col md:flex-row items-stretch bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden p-6 md:p-8"
                                >
                                    <div className="flex-grow flex flex-col justify-between pr-4">
                                        <div>
                                            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-2 block">{guide.category}</span>
                                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                                {guide.title}
                                            </h4>
                                            <p className="text-gray-550 text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {guide.metaDesc}
                                            </p>
                                        </div>
                                        <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                                            Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
