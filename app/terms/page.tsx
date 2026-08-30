import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Bucks Tech Help, enterprise network cabling, whole-home Wi-Fi and 4K IP CCTV installations across Buckinghamshire.',
    alternates: { canonical: '/terms' },
};

export default function TermsOfService() {
    return (
        <LegalLayout title="Terms of Service" path="/terms">
            <p className="text-sm text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">01</span> Acceptance of Terms</h2>
                <p>
                    By engaging Bucks Tech Help or using our website, you accept and agree to be bound by these Terms of Service. If you do not
                    agree to any part of these terms, please do not use our services.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">02</span> Description of Service</h2>
                <p>
                    Bucks Tech Help provides enterprise network cabling, whole-home Wi-Fi, and 4K IP CCTV installations across Buckinghamshire.
                    Our services include digital property audits, structured Cat6/Cat6a cabling, managed PoE network setup, access point
                    deployment and subscription-free security systems for large homes, garden offices and businesses. The specific details of
                    services, pricing and coverage areas are provided on our website and may be updated from time to time.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">03</span> Quotations, Pricing &amp; Payment</h2>
                <p>
                    Quotations are provided following a digital property audit and are fixed and transparent unless the project scope changes.
                    Payment terms are confirmed in writing before installation begins. Any additional works agreed during installation will be
                    quoted and approved before proceeding.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">04</span> Installation &amp; Site Access</h2>
                <p>
                    You agree to provide reasonable site access for surveys and installation work. We take every care to preserve your property
                    and use non-invasive routing where possible, but areas worked on may require making good by a third party. We are not liable
                    for pre-existing building defects or damage caused by third-party contractors.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">05</span> Limitation of Liability</h2>
                <p>
                    While we take every care with our installations, we are not liable for any pre-existing faults, data loss, or issues arising
                    from third-party equipment, routers or internet service providers. We strongly recommend backing up any data before
                    installation work begins.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">06</span> Governing Law</h2>
                <p>These Terms are governed by the laws of England and Wales.</p>
            </div>
        </LegalLayout>
    );
}