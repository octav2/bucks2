// lib/data.ts
// Central business data, rebranded for a high-ticket local infrastructure agency.

export const businessDetails = {
    name: "Bucks Tech Help",
    email: "hello@buckstechhelp.co.uk",
    phone: "07343079390",
    domain: "https://www.buckstechhelp.co.uk",
    logo: "https://www.buckstechhelp.co.uk/logo.png",
    tagline: "Enterprise Wi-Fi, Structured Cabling & IP CCTV Infrastructure across Buckinghamshire",
    priceRange: "££££",
    address: {
        addressLocality: "High Wycombe",
        addressRegion: "Buckinghamshire",
        addressCountry: "GB",
    },
    geo: {
        latitude: 51.6287,
        longitude: -0.7482,
    },
};

// Core network-infrastructure towns (plus surrounding support hubs).
export const serviceAreas = [
    "Beaconsfield",
    "Amersham",
    "Chesham",
    "Gerrards Cross",
    "High Wycombe",
    "Marlow",
    "Hazlemere",
    "Great Missenden",
    "Bourne End",
    "Penn",
    "Stoke Poges",
    "Chalfont St Peter",
    "Aylesbury",
    "Chalfont St Giles",
    "Wendover",
    "Princes Risborough",
    "Berkhamsted",
    "Tring",
];

// Core towns featured on the homepage coverage map / location hubs.
export const coreTowns = ["Beaconsfield", "Amersham", "Chesham", "Gerrards Cross", "High Wycombe"];

// Google Business Profile listing (numeric CID used by Google Maps).
// KEEP IN SYNC with your Google Business Profile, this is the profile ID.
export const googleBusinessProfile = {
    cid: "4290901885882219405",
    name: "Bucks Tech Help",
    // Standard Google Maps lookup URL keyed on the CID.
    url: "https://www.google.com/maps?cid=4290901885882219405",
};

export const faqs = [
    {
        question: "How much does a hardwired enterprise network installation cost in Buckinghamshire?",
        answer: "Our complete enterprise installations start from £1,500 for whole-home Wi-Fi systems, £2,000 for Cat6 structured cabling, and £1,800 for 4K IP CCTV. Every project includes a digital site audit, commercial-grade hardware, and fixed transparent pricing.",
    },
    {
        question: "Can you connect internet to a garden office or outbuilding?",
        answer: "Yes. We specialize in garden office internet setup across Buckinghamshire using steel-wire armored (SWA) Cat6 Ethernet cabling. This provides un-throttled Gigabit speeds directly from your main router switch to your workspace.",
    },
    {
        question: "Do your 4K IP CCTV systems require a monthly cloud subscription?",
        answer: "No. All our commercial-grade CCTV installations feature onboard local storage on a secure Network Video Recorder (NVR). You get 24/7 continuous 4K recording and remote smartphone access with zero recurring monthly fees.",
    },
    {
        question: "Why are hardwired Ubiquiti UniFi access points better than wireless mesh boosters?",
        answer: "Plug-in mesh boosters repeat signals over the air, losing up to 80% of their speed through thick brick walls or modern foil insulation. As certified Ubiquiti UniFi installers, we run dedicated Cat6 cable backhauls to ceiling access points, guaranteeing full broadband speeds in every room.",
    },
    {
        question: "Do you certify your network cabling installations?",
        answer: "Yes. Every structured cabling project is Fluke-certified and documented end-to-end. We test every drop against Cat6/Cat6a standards and hand over a full testing report, labelled patch panel and tidy, low-disruption containment.",
    },
    {
        question: "Can Wi-Fi, cabling and CCTV be installed in one project?",
        answer: "Absolutely. We design single-vendor Ubiquiti ecosystems that combine hardwired Wi-Fi, structured Cat6a cabling and PoE 4K CCTV with smart access control, all managed from one app, with zero monthly subscription fees.",
    },
];
