import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guidesData } from '@/lib/guidesData';
import { businessDetails } from '@/lib/data';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

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

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* Hero Section */}
            <section className="bg-blue-50 py-16 md:py-24 px-4 border-b border-blue-100">
                <div className="max-w-3xl mx-auto">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm mb-8 group transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Guides
                    </Link>
                    
                    <div className="flex items-center gap-3 text-sm text-blue-600 font-bold tracking-wider uppercase mb-6">
                        <span>{guide.date}</span>
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                        <span>{guide.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-6 leading-tight tracking-tight">
                        {guide.title}
                    </h1>
                </div>
            </section>

            {/* Guide Content */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-lg text-gray-700 font-medium leading-relaxed">
                        {guide.content.split('\n\n').map((paragraph, idx) => {
                            const trimmed = paragraph.trim();
                            if (!trimmed) return null;
                            if (trimmed.startsWith('###')) {
                                return <h3 key={idx} className="text-2xl font-bold text-blue-950 mt-10 mb-4">{trimmed.replace('### ', '')}</h3>
                            }
                            return <p key={idx} className="mb-6">{trimmed}</p>
                        })}
                    </div>

                    <div className="mt-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 text-center">
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Need personalized help?</h3>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            If you're still stuck, we offer patient, jargon-free home visits across Buckinghamshire. Let's get it sorted together.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="tel:07343079390" className="w-full sm:w-auto bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-md flex items-center justify-center gap-2">
                                <Phone size={18} /> Call {businessDetails.phone}
                            </a>
                            <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2">
                                <MessageCircle size={18} /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
