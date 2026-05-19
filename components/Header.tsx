import React from 'react';
import { Wrench, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center group py-1">
                    <Image 
                        src="/logo.png" 
                        alt="Bucks Tech Help" 
                        width={200}
                        height={80}
                        className="h-16 md:h-20 w-auto object-contain transition-all group-hover:scale-105 duration-500" 
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/#services" className="hover:text-blue-900 text-[11px] tracking-widest uppercase">Services</Link>
                    <Link href="/#pricing" className="hover:text-blue-900 text-[11px] tracking-widest uppercase">Pricing</Link>
                    <Link href="/guides" className="hover:text-blue-900 text-[11px] tracking-widest uppercase">Tech Guides</Link>
                    <Link href="/#contact" className="hover:text-blue-900 text-[11px] tracking-widest uppercase">Contact</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        href="tel:07343079390"
                        className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                    >
                        Call Me
                    </a>
                    <a
                        href="https://wa.me/447343079390"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                        <MessageCircle size={18} />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </header>
    );
}
