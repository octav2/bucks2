'use client';

import React from 'react';

/**
 * Renders a mailto link to the business email without embedding the raw
 * address in the server-rendered HTML. The full address is only assembled
 * client-side (after hydration), so spam-harvesting bots that scrape static
 * markup cannot read it.
 *
 * Before hydration we fall back to a link to the /contact page, which also
 * helps route human visitors to the contact form.
 */
export default function EmailLink({ className = '' }: { className?: string }) {
    const [email, setEmail] = React.useState<string | null>(null);

    React.useEffect(() => {
        // Assembled from fragments so the complete address never appears as plaintext.
        setEmail(['hello', 'buckstechhelp.co.uk'].join('@'));
    }, []);

    if (!email) {
        return (
            <a href="/contact" className={className} aria-label="Contact Bucks Tech Help via email or the contact form">
                Email Us
            </a>
        );
    }

    return (
        <a href={`mailto:${email}`} className={className} aria-label={`Email Bucks Tech Help at ${email}`}>
            {email}
        </a>
    );
}