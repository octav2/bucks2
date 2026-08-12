// lib/data.ts
// Central business data — rebranded for a high-ticket local infrastructure agency.

export const businessDetails = {
    name: "Bucks Tech Help",
    email: "hello@buckstechhelp.co.uk",
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
];

// Core towns featured on the homepage coverage map / location hubs.
export const coreTowns = ["Beaconsfield", "Amersham", "Chesham", "Gerrards Cross", "High Wycombe"];

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
];
