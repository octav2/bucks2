import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Bucks Tech Help',
    description: 'Privacy Policy for Bucks Tech Help.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Bucks Tech Help. We respect your privacy and are committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                        and tell you about your privacy rights.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. The data we collect about you</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, last name.</li>
                        <li><strong>Contact Data</strong> includes email address, telephone numbers, and service address.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How we use your personal data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Contact us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </p>
                    
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2">
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
