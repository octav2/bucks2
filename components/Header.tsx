import React from 'react';
import { Wrench, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                    <Wrench className="text-green-600" />
                    <span>Bucks Tech Help</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/#services" className="hover:text-blue-900">Services</Link>
                    <Link href="/#pricing" className="hover:text-blue-900">Pricing</Link>
                    <Link href="/#contact" className="hover:text-blue-900">Contact</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        href="tel:07000000000"
                        className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                    >
                        Call Me
                    </a>
                    <a
                        href="https://wa.me/447000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                        <MessageCircle size={18} />
                        WhatsApp Me
                    </a>
                </div>
            </div>
        </header>
    );
}
