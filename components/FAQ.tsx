import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQ() {
    return (
        <section id="faq" className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Common questions about the service.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-blue-900 flex gap-3 mb-3">
                                <HelpCircle className="text-green-600 flex-shrink-0" size={24} />
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 leading-relaxed pl-9">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-blue-900 flex gap-3 mb-3">
                            <HelpCircle className="text-green-600 flex-shrink-0" size={24} />
                            Do I need to know my passwords?
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-9">
                            For many jobs, yes. If you need help with email, Apple ID, Google, Netflix, Wi-Fi or Microsoft accounts, you may need access to your passwords. I can guide you through recovery if needed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
