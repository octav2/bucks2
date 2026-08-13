import React from 'react';

interface Props {
    compact?: boolean;
}

const trustItems = [
    { icon: '🔧', label: 'Ubiquiti UniFi Specialists' },
    { icon: '📜', label: 'Fluke Certified Cabling' },
    { icon: '🔒', label: '100% Subscription-Free Hardware' },
];

export default function MicroTrust({ compact = false }: Props) {
    return (
        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-bold text-slate-300 ${compact ? 'text-xs gap-x-3' : 'text-sm'}`}>
            {trustItems.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                </span>
            ))}
        </div>
    );
}