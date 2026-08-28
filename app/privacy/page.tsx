import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import EmailLink from '@/components/EmailLink';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Bucks Tech Help — enterprise network cabling, whole-home Wi-Fi and 4K IP CCTV installations across Buckinghamshire. How we collect, use and protect your data.',
    alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Privacy Policy" path="/privacy">
            <p className="text-sm text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">01</span> Introduction</h2>
                <p>
                    Welcome to Bucks Tech Help, a Buckinghamshire-based network &amp; cabling infrastructure company. We design, install and
                    certify enterprise-grade network cabling, whole-home Wi-Fi and 4K IP CCTV systems for large homes, garden offices and
                    businesses. We respect your privacy and are committed to protecting your personal data in line with UK GDPR and the Data
                    Protection Act 2018.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">02</span> The Data We Collect About You</h2>
                <p>We may collect, use, store and transfer the following kinds of personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">Identity Data</strong> — first and last name, and company name.</li>
                    <li><strong className="text-white">Contact Data</strong> — email address, telephone number, and service/installation address.</li>
                    <li><strong className="text-white">Technical Data</strong> — internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    <li><strong className="text-white">Project Data</strong> — property details, site survey notes and network requirements relevant to your infrastructure project.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">03</span> How We Use Your Personal Data</h2>
                <p>We use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>To prepare quotations and proposals for network, cabling and CCTV installations.</li>
                    <li>To perform the contract we are about to enter into or have entered into with you.</li>
                    <li>To communicate with you about your project and provide ongoing support.</li>
                    <li>To meet our legal and regulatory obligations.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">04</span> Data Controller &amp; Contact</h2>
                <p>
                    The data controller responsible for your personal data is Bucks Tech Help. For any privacy-related requests, or if you have
                    questions about this privacy policy or how we handle your data, please contact our data controller at:
                </p>
                <p>
                    <EmailLink className="text-cyan-400 hover:text-cyan-300 font-semibold" />
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">05</span> Your Rights</h2>
                <p>
                    You have the right to access, correct, delete or restrict the processing of your personal data, and to object to
                    processing. To exercise any of these rights, please contact us using the details above.
                </p>
            </div>
        </LegalLayout>
    );
}