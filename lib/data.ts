// lib/data.ts
// Central business data — rebranded for a high-ticket local infrastructure agency.

export const businessDetails = {
    name: "Bucks Tech Help",
    phone: "0734 307 9390",
    phoneClean: "07343079390",
    intlPhone: "+447343079390",
    whatsappLink: "https://wa.me/447343079390",
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
];

// Core towns featured on the homepage coverage map / location hubs.
export const coreTowns = ["Beaconsfield", "Amersham", "Chesham", "Gerrards Cross", "High Wycombe"];

export const faqs = [
    {
        question: "Why do your network installations start from £1,500?",
        answer: "Unlike consumer wireless mesh pods that temporarily patch signals over air, we install permanent, commercial-grade infrastructure. Our starting package includes enterprise hardware (Ubiquiti/TP-Link Omada), hardwired Cat6 cable runs routed through lofts/voids, full system configuration, and a 100% Zero-Dead-Zone Guarantee.",
    },
    {
        question: "Do you carry out hardwiring, drilling and cabling?",
        answer: "Yes. Structured Cat6/Cat6a cabling, wall/floor drilling, containment and full network installation are our core specialism. Every project is planned, tidy and fully tested before handover.",
    },
    {
        question: "What is the difference between Cat6 and Cat6a cabling?",
        answer: "Cat6 supports Gigabit to 10-Gigabit over shorter runs, while Cat6a is screened to deliver 10-Gigabit reliably at full distance with better resistance to interference. We design your cabling to the correct category for the network you need today and the one you'll want tomorrow.",
    },
    {
        question: "Why use Ubiquiti UniFi or TP-Link Omada instead of a standard router?",
        answer: "Consumer 'all-in-one' routers can't reliably blanket a large home or garden office. We deploy hardwired access points from UniFi or Omada so every room gets consistent, high-capacity coverage with no dead zones and no signal drop-offs.",
    },
    {
        question: "Do your CCTV systems require monthly subscription fees?",
        answer: "No. Our 4K IP CCTV and access-control solutions are owned outright. Footage is stored on your own NVR or on-site storage, with a secure, subscription-free remote viewing app. No recurring costs, no cloud lock-in.",
    },
    {
        question: "What budget should I expect for an installation?",
        answer: "Whole-property Wi-Fi and garden room projects typically start around £1,500. Commercial structured cabling and full IP CCTV installations are commonly between £2,500 and £5,000+, depending on scale, survey and specification.",
    },
    {
        question: "How does the survey and quoting process work?",
        answer: "You complete our online quote audit, we review your property layout, then email a preliminary scope and fixed price within 24 hours. If required, we arrange a site survey before final installation.",
    },
];
