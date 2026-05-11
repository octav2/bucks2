import React from 'react';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/lib/data';

export default function AreasCovered() {
    return (
        <section className="py-16 px-4 bg-white border-y border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Areas Covered</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Bucks Tech Help provides home technology support across Buckinghamshire and nearby areas. If you are nearby but not listed, just ask.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {serviceAreas.map((area, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-700">
                                    <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                                    <span className="text-sm font-medium">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-md bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Looking for a specific town?</h3>
                        <p className="text-gray-600 mb-6 text-center text-sm">
                            I specialize in helping residents across South Bucks with patient, local support.
                        </p>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <ul className="space-y-2">
                                <li className="text-blue-700 font-bold flex items-center gap-2">✓ High Wycombe & Marlow</li>
                                <li className="text-blue-700 font-bold flex items-center gap-2">✓ Amersham & Chesham</li>
                                <li className="text-blue-700 font-bold flex items-center gap-2">✓ Beaconsfield & Gerrards Cross</li>
                                <li className="text-blue-700 font-bold flex items-center gap-2">✓ The Chalfonts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
