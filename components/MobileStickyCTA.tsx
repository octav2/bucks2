import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MicroTrust from '@/components/MicroTrust';

export default function MobileStickyCTA() {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.45)] px-4 pt-3 pb-3">
            <Link
                href="/quote"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-black text-lg shadow-xl shadow-cyan-600/30 active:scale-[0.99] transition-transform"
            >
                Request Property Audit <ArrowRight size={20} />
            </Link>
            <div className="mt-2.5">
                <MicroTrust compact />
            </div>
        </div>
    );
}
