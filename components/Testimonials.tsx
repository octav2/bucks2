import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Margaret P.",
            location: "High Wycombe",
            text: "He sorted out my printer that hasn't worked properly for months. He explained everything without using confusing jargon. Very patient and turned up exactly when he said he would. Will definitely call him again if the TV plays up."
        },
        {
            name: "David T.",
            location: "Amersham",
            text: "Brilliant service. I couldn't get my new laptop to connect to the Wi-Fi upstairs at all. He came over the same week, sorted the connection out and even checked my phone was connected too."
        },
        {
            name: "Susan M.",
            location: "Beaconsfield",
            text: "I was getting so many scam emails and didn't know what was safe to click anymore. He did a full check of my iPad and sat down to show me what to look out for. Gave me a lot of peace of mind. Highly recommend."
        }
    ];

    return (
        <section className="bg-blue-50 py-20 px-4 border-y border-blue-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-4 tracking-tight">What Locals Say</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Real feedback from people we've helped across Buckinghamshire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative">
                            <div className="flex gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg mb-8 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500 font-medium">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
