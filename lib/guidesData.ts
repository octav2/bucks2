export interface GuideData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDesc: string;
    date: string;
    readTime: string;
    content: string; // Markdown or HTML string for simplicity, or we can just render paragraphs
}

export const guidesData: Record<string, GuideData> = {
    "how-to-spot-email-scams": {
        slug: "how-to-spot-email-scams",
        title: "How to Spot Fake Emails and Scams: A Guide for Seniors",
        metaTitle: "How to Spot Fake Emails and Scams | Bucks Tech Help",
        metaDesc: "Learn how to spot phishing emails, fake bank alerts, and common scams with our simple guide tailored for seniors in Buckinghamshire.",
        date: "May 10, 2026",
        readTime: "4 min read",
        content: `
Fake emails and scams are becoming more common and sophisticated. For many people, especially older adults, opening an email can feel like stepping onto a minefield. At Bucks Tech Help, we see these issues daily across Buckinghamshire.

Here is a simple, stress-free guide to spotting fake emails (phishing):

### 1. Check the Sender's Address
Look closely at the email address, not just the name. A scammer might use the name "PayPal Support," but the email address might be "security-alert@random-domain.xyz". If it doesn't end in "@paypal.com", it is a scam.

### 2. Urgent or Threatening Language
Scammers want you to panic. They use phrases like "Your account will be suspended" or "Immediate action required." Legitimate banks and companies will never pressure you to act within 24 hours via a random email.

### 3. Suspicious Links
Never click on links directly inside an email if you aren't 100% sure. Instead, if you get an email from your bank, open your web browser, type in your bank's website address yourself, and log in securely.

### 4. Poor Spelling and Grammar
Many scams originate overseas. If the email has strange phrasing, bizarre capitalization, or poor spelling, delete it immediately.

If you are ever unsure, do not click anything. Call Bucks Tech Help for a friendly, non-judgmental security check!
        `
    },
    "improve-bt-wifi-speed-old-houses": {
        slug: "improve-bt-wifi-speed-old-houses",
        title: "How to Improve BT Wi-Fi Speeds in Old Buckinghamshire Houses",
        metaTitle: "Improve BT Wi-Fi in Old Houses | Bucks Tech Help",
        metaDesc: "Struggling with slow BT Wi-Fi in an older house? Learn simple tips to boost your internet speed and eliminate dead zones.",
        date: "May 14, 2026",
        readTime: "5 min read",
        content: `
Many houses across Buckinghamshire, especially in older towns like Amersham and Great Missenden, have thick brick walls or modern foil-lined insulation. These materials are fantastic for keeping heat in, but they completely destroy Wi-Fi signals.

If you are struggling with a BT Smart Hub (or Sky/Virgin router) that drops out upstairs or in the kitchen, here are some actionable tips:

### 1. Elevate Your Router
Never put your router on the floor or hide it behind the TV. Wi-Fi signals travel best when they have a clear line of sight. Place your router on a shelf or a high table.

### 2. Keep Away from Interferences
Keep your router away from microwaves, cordless phones, baby monitors, and large metal objects like refrigerators. These appliances can disrupt the radio frequencies your router uses.

### 3. Consider a Mesh Wi-Fi System
If thick walls are your problem, a single router will never be enough. A Mesh Wi-Fi system uses multiple "nodes" placed around your house. They talk to each other seamlessly, meaning you stay connected whether you are in the living room, the loft, or the garden.

If you're tired of dropped video calls and buffering smart TVs, Bucks Tech Help specializes in installing reliable Mesh Wi-Fi systems tailored to your home's unique layout.
        `
    }
};
