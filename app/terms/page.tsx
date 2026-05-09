import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | Bucks Tech Help',
    description: 'Terms of Service for Bucks Tech Help.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
                    <p>
                        Bucks Tech Help provides at-home technology support services across Buckinghamshire. The specific details of services, pricing, and coverage areas are provided on our website and may be updated from time to time.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Booking and Cancellation</h2>
                    <p>
                        Appointments are subject to availability. If you need to cancel or reschedule, we kindly request that you provide as much notice as possible.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>
                        While we strive to provide the best possible service, we are not liable for any data loss, hardware failure, or other issues that may arise before, during, or after our visit. We strongly recommend backing up your data before any technical support session.
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
