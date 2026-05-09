import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Cookie Policy | Bucks Tech Help',
    description: 'Cookie Policy for Bucks Tech Help.',
};

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. What are cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How we use cookies</h2>
                    <p>
                        We use cookies to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Understand and save user's preferences for future visits.</li>
                        <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf (such as Google Analytics).</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Types of cookies we use</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> These are required for the operation of our website.</li>
                        <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Managing cookies</h2>
                    <p>
                        You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Look at your browser's Help Menu to learn the correct way to modify your cookies.
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
