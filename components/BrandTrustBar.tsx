import React from 'react';

const brands = ['Ubiquiti UniFi', 'UniFi Protect', 'UniFi Wi-Fi 7', 'UniFi Access'];

export default function BrandTrustBar() {
    return (
        <div className="mt-12 w-full max-w-4xl mx-auto">
            <div className="bg-slate-900/70 backdrop-blur border border-cyan-500/20 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-2 text-center">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-cyan-400 shrink-0">
                    Ubiquiti UniFi Enterprise Ecosystem
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-bold text-slate-200">
                    {brands.map((brand, i) => (
                        <span key={brand} className="inline-flex items-center gap-2.5">
                            {i > 0 && <span className="text-slate-600">|</span>}
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
