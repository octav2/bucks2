import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
    title: 'Cookie Policy | Bucks Tech Help',
    description: 'Cookie Policy for Bucks Tech Help. How we use essential cookies and session storage for the /quote enquiry form and analytics on buckstechhelp.co.uk.',
    alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicy() {
    return (
        <LegalLayout title="Cookie Policy">
            <p className="text-sm text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">01</span> What are Cookies?</h2>
                <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely
                    used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">02</span> How We Use Cookies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Keep our website secure and fully functional.</li>
                    <li>Support the multi-step /quote enquiry form (see below).</li>
                    <li>Understand how visitors use our site so we can improve it.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">03</span> Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong className="text-white">Essential Cookies &amp; Session Storage:</strong> These are required for the operation of our
                        website. In particular, the multi-step /quote enquiry form uses essential session storage to temporarily hold your quote
                        details as you move between steps, so your information is not lost before you submit. These cannot be switched off.
                    </li>
                    <li>
                        <strong className="text-white">Analytical / Performance Cookies:</strong> Used by trusted third-party services such as Google
                        Analytics to recognise and count visitors and to see how visitors move around our website, allowing us to improve the way
                        it works.
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-cyan-400">04</span> Managing Cookies</h2>
                <p>
                    You can choose to have your browser warn you each time a cookie is being set, or you can choose to turn off all cookies.
                    You do this through your browser settings, and you can clear cookies or session data at any time. Note that disabling
                    essential cookies or session storage may prevent the /quote enquiry form from working correctly.
                </p>
            </div>
        </LegalLayout>
    );
}