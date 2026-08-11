// lib/locationsData.ts
// Hyper-local SEO data for the network infrastructure agency location hubs.

export interface LocationData {
    slug: string;
    name: string;
    nearby: string[];
    metaTitle: string;
    metaDesc: string;
    headline: string;
    intro: string;
    details: string[];
    localServices: string[];
    faqs: { question: string; answer: string }[];
    geo: { latitude: number; longitude: number };
}

export const locationsData: Record<string, LocationData> = {
    beaconsfield: {
        slug: "beaconsfield",
        name: "Beaconsfield",
        nearby: ["Gerrards Cross", "Seer Green", "Holtspur", "Penn", "Stoke Poges", "Forty Green"],
        metaTitle: "Ubiquiti UniFi & Network Cabling Installer Beaconsfield | Enterprise Wi-Fi & CCTV",
        metaDesc: "Enterprise Wi-Fi, Cat6 cabling and 4K IP CCTV installer in Beaconsfield. Hardwired Ubiquiti UniFi networks for large homes and offices across Beaconsfield Old Town & Seer Green. Zero dead zones, no monthly fees.",
        headline: "Enterprise Wi-Fi & Structured Cabling in Beaconsfield",
        intro: "Beaconsfield's large period homes, annexes and garden studios often sit beyond the reach of a single router. We install hardwired Ubiquiti UniFi and Omada networks that deliver seamless Gigabit coverage across every room, outbuilding and business in Beaconsfield Old Town, Holtspur and Seer Green.",
        details: [
            "Whole-property & garden room Wi-Fi with zero dead zones",
            "Cat6 / Cat6a structured cabling for Beaconsfield offices",
            "Commercial-grade 4K IP CCTV, subscription-free",
            "Quoted from £1,500 for whole-home wireless projects",
        ],
        localServices: ["Whole-Home Wi-Fi", "Structured Cabling", "IP CCTV & Access Control"],
        faqs: [
            { question: "Do you cover Beaconsfield Old Town and Seer Green?", answer: "Yes — we install across all of Beaconsfield, including the Old Town, Holtspur, Seer Green and surrounding villages like Penn and Forty Green." },
            { question: "Can you wire Wi-Fi through solid wall construction?", answer: "Yes. Structural surveys let us route cabling neatly through solid walls, floor voids and containment with minimal disruption and a fully tidy finish." },
        ],
        geo: { latitude: 51.6119, longitude: -0.6428 },
    },

    amersham: {
        slug: "amersham",
        name: "Amersham",
        nearby: ["Amersham Old Town", "Chesham Bois", "Little Chalfont", "Chalfont St Giles", "Woodrow", "Coleshill"],
        metaTitle: "Home Network Cabling & Garden Office Internet Amersham | UniFi Installer",
        metaDesc: "Garden office internet setup & home network cabling in Amersham. Hardwired Ubiquiti UniFi Wi-Fi, Cat6 cabling and 4K CCTV for large Amersham homes, Old Town and Chesham Bois. No dead zones, no monthly fees.",
        headline: "Garden Office & Whole-Home Networks in Amersham",
        intro: "From garden offices in Amersham to multi-room period homes in the Old Town and Chesham Bois, we connect properties that standard Wi-Fi fails. Our hardwired UniFi and Omada systems bring reliable Gigabit connectivity to every desk, room and outbuilding.",
        details: [
            "Garden office & home office internet installation",
            "Hardwired whole-property Wi-Fi, no dead zones",
            "Home & office Cat6 structured cabling",
            "Subscription-free 4K IP CCTV & access control",
        ],
        localServices: ["Whole-Home Wi-Fi", "Structured Cabling", "IP CCTV & Access Control"],
        faqs: [
            { question: "Can you install internet in my garden office in Amersham?", answer: "Yes. We run a wired connection from your router to your garden office and install an access point, delivering full-speed, reliable connectivity exactly where you work." },
            { question: "Do you serve Amersham Old Town and Chesham Bois?", answer: "Yes — we cover all of Amersham including the Old Town, New Town, Chesham Bois, Little Chalfont and Woodrow." },
        ],
        geo: { latitude: 51.6738, longitude: -0.6075 },
    },

    "high-wycombe": {
        slug: "high-wycombe",
        name: "High Wycombe",
        nearby: ["Hazlemere", "Hughenden Valley", "Tylers Green", "Loudwater", "Wooburn Green", "Bourne End"],
        metaTitle: "Ubiquiti UniFi & Office Cabling High Wycombe | Enterprise Wi-Fi & CCTV Installer",
        metaDesc: "Ubiquiti UniFi enterprise Wi-Fi, Cat6 office cabling and 4K IP CCTV installer in High Wycombe. Structured network installation for homes, garden offices and businesses across High Wycombe & Hazlemere.",
        headline: "Enterprise Wi-Fi & Office Cabling in High Wycombe",
        intro: "For homes and businesses across High Wycombe, Hazlemere and Tylers Green, we design and install professional networks: hardwired UniFi Wi-Fi, structured Cat6 office cabling and commercial-grade, subscription-free 4K CCTV.",
        details: [
            "Hardwired enterprise Wi-Fi for large homes & offices",
            "Cat6 / Cat6a structured cabling & rack installations",
            "4K IP CCTV & access control with no monthly fees",
            "Projects from £1,500, surveys included",
        ],
        localServices: ["Whole-Home Wi-Fi", "Structured Cabling", "IP CCTV & Access Control"],
        faqs: [
            { question: "Can you upgrade the Wi-Fi in my High Wycombe office?", answer: "Yes. We install structured cabling and enterprise access points for offices across High Wycombe, delivering fast, reliable and scalable connectivity for your whole team." },
            { question: "Which High Wycombe areas do you cover?", answer: "All of High Wycombe plus Hazlemere, Hughenden Valley, Tylers Green, Loudwater, Wooburn Green and Bourne End." },
        ],
        geo: { latitude: 51.6287, longitude: -0.7482 },
    },
};

export const locationSlugs = Object.keys(locationsData);
