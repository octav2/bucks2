import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

/**
 * Minimal header used exclusively on the /quote route.
 * Contains only the logo (linking home) — no nav links, no CTA, no mobile menu.
 * Keeps the same sticky bar styling as the main Header so the UI feels
 * intentional rather than broken.
 */
export default function QuoteHeader() {
    return (
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70">
            <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-center items-center">
                <Link href="/" className="flex items-center py-1 shrink-0" aria-label="Bucks Tech Help — back to homepage">
                    <Logo className="h-12" priority />
                </Link>
            </div>
        </header>
    );
}
