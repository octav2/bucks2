import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/ServiceCTA';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { estimateReadMinutes, formatBlogDate, type BlogPost } from '@/lib/blog';

interface Props {
    post: BlogPost;
    related?: BlogPost[];
}

export default function BlogPostLayout({ post, related }: Props) {
    const { frontmatter: fm, html, jsonLd } = post;
    const readTime = estimateReadMinutes(html);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <Header />

            <main>
                {/* HERO */}
                <section className="py-16 md:py-20 px-4 bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
                    <div className="relative max-w-4xl mx-auto text-center">
                        <nav className="text-sm text-slate-400 font-medium mb-6 flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
                            <span>/</span>
                            <span className="text-slate-200">{fm.title}</span>
                        </nav>
                        <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-5">Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight text-balance">{fm.title}</h1>
                        {fm.excerpt && (
                            <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">{fm.excerpt}</p>
                        )}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
                            {fm.published && (
                                <span className="inline-flex items-center gap-2">
                                    <Calendar size={16} className="text-blue-400" /> {formatBlogDate(fm.published)}
                                </span>
                            )}
                            <span className="inline-flex items-center gap-2">
                                <Clock size={16} className="text-blue-400" /> {readTime} min read
                            </span>
                        </div>
                    </div>
                </section>

                {/* ARTICLE */}
                <section className="py-12 md:py-16 px-4 bg-slate-900 border-y border-slate-800">
                    <div className="max-w-3xl mx-auto">
                        <article
                            className="markdown-body text-lg text-slate-300 leading-relaxed font-medium"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </section>

                {/* RELATED GUIDES */}
                {related && related.length > 0 && (
                    <section className="py-16 px-4 bg-slate-950">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight text-center">More Guides</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {related.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/guides/${p.slug}`}
                                        className="group flex flex-col gap-3 bg-slate-900/60 border border-slate-800 p-6 rounded-3xl hover:border-blue-600/40 hover:bg-slate-900 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">
                                            {formatBlogDate(p.frontmatter.published)}
                                        </span>
                                        <h3 className="font-black text-white group-hover:text-blue-300 transition-colors text-xl">
                                            {p.frontmatter.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium line-clamp-2">
                                            {p.frontmatter.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm mt-auto">
                                            Read guide <ArrowRight size={16} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <ServiceCTA />
            </main>

            <Footer />
        </div>
    );
}