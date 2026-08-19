// lib/servicesData.ts
// Three high-ticket infrastructure services for the agency rebrand.
import { Wifi, Cable, Cctv } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    shortTitle: string;
    metaTitle: string;
    metaDesc: string;
    icon: any;
    keywords: string[];
    heroPill: string;
    heroBullets: string[];
    intro: string;
    longDescription: string;
    features: string[];
    process: string[];
    engagement: string;
}

export const servicesData: Record<string, ServiceData> = {
    "whole-home-wifi": {
        slug: "whole-home-wifi",
        title: "Enterprise Whole-Home Connectivity Architecture",
        shortTitle: "Enterprise Wi-Fi 7 Architecture",
        metaTitle: "Ubiquiti UniFi Wi-Fi 7 Installer Buckinghamshire | Whole-Home Wi-Fi",
        metaDesc: "Ubiquiti UniFi Wi-Fi 7 installer in Buckinghamshire. Enterprise whole-home connectivity architecture with hardwired Cat6a backbone and zero visible cabling for estates, period properties and garden offices.",
        icon: Wifi,
        keywords: [
            "Ubiquiti UniFi installer Buckinghamshire",
            "UniFi Wi-Fi 7 installer",
            "garden office internet setup Chesham",
            "whole home Wi-Fi Beaconsfield",
            "enterprise Wi-Fi High Wycombe",
            "UniFi no dead zones",
        ],
        heroPill: "Enterprise Wi-Fi · Zero Dead Zones",
        heroBullets: [
            "Hardwired Ubiquiti UniFi U7 Pro access points",
            "Every room and garden building with full-speed coverage",
            "No more dropped Zoom calls, buffering or dead spots",
        ],
        intro: "If your large home or garden office has dead zones, weak signal or constant drop-outs, a single consumer router is the problem. We design and install hardwired enterprise Ubiquiti UniFi architecture that blankets the entire property.",
        longDescription: "We engineer whole-property and garden room Wi-Fi using professional Ubiquiti UniFi equipment. Unlike plug-in boosters, our systems are wired back to a central UniFi Multi-Gigabit PoE+ switch and UniFi Cloud Gateway, so every access point delivers full gigabit throughput instead of halving your speed. We survey the building, position UniFi U7 Pro access points for optimal coverage, run discrete Cat6a structured cabling, and hand over a controlled, manageable network with a single free app. Ideal for large period homes, extended properties, garden studios and annexes.",
        features: [
            "Full RF survey & floor-by-floor coverage design",
            "Ubiquiti UniFi U7 Pro Wi-Fi 7 access point installation",
            "Discrete Cat6a backbone cabling to every access point",
            "UniFi Cloud Gateway & Multi-Gigabit PoE+ deployment",
            "Guest network, VLANs & parental controls configured",
            "Garden room, cabin & annex connectivity",
            "Zero-latency speed testing in every room and full handover walkthrough",
        ],
        process: [
            "Online quote audit & property review",
            "Optional on-site RF site survey",
            "Structured cabling & access point installation",
            "Full testing, optimisation & handover",
        ],
        engagement: "Whole-property Wi-Fi and garden room installations typically from £1,500, with larger estates and multi-building sites from £2,500.",
    },

    "commercial-cabling": {
        slug: "commercial-cabling",
        title: "High-Density Data Infrastructure & Enterprise Rack Architecture",
        shortTitle: "Cat6a Data Infrastructure",
        metaTitle: "High-Density Data Infrastructure & Rack Architecture Buckinghamshire | Commercial Data Cabling",
        metaDesc: "Certified Cat6a structured cabling, custom server rack builds and high-density network backbones for commercial premises, office parks and estates across Buckinghamshire.",
        icon: Cable,
        keywords: [
            "high-density data infrastructure Buckinghamshire",
            "Cat6a cabling installer Amersham",
            "server rack architecture",
            "commercial network installation High Wycombe",
            "Fluke certified cabling",
        ],
        heroPill: "Structured Cabling · Rack Installation",
        heroBullets: [
            "Fluke-certified Cat6/Cat6a infrastructure",
            "Custom wall-mounted & floor-standing rack builds",
            "Zero-latency, 10G-ready, fully documented",
        ],
        intro: "Fast, reliable commercial networks are built on high-density data infrastructure. We design, install and certify Cat6a backbones, patch panel engineering and rack architecture that keep your business fast, organised and ready to scale.",
        longDescription: "Wi-Fi alone can't guarantee the performance and resilience a modern business needs. We deliver high-density data infrastructure that gives every desk, camera and access point a dependable, low-latency wired connection. Our technicians run and terminate certified Cat6 and Cat6a through clean containment, dress every cable into color-coded patch panels, build custom wall-mounted and floor-standing server racks, and Fluke-certify each channel. The result is a professional, forward-compatible architecture that supports gigabit and 10-gigabit services, high-density PoE security, zero-latency VoIP and simple future expansion.",
        features: [
            "Cat6 & Cat6a structured cabling design and installation",
            "Patch panels, network racks & structured containment",
            "Managed PoE switches & cabinet cooling",
            "Fibre backbone for multi-floor or multi-building sites",
            "Full cable labelling & certified test results",
            "Copper & fibre termination with documentation",
        ],
        process: [
            "Online quote audit & scope review",
            "On-site survey & structured design",
            "Cabling, termination & rack installation",
            "Certification, labelling & as-built documentation",
        ],
        engagement: "Commercial infrastructure projects start from £2,000, including full site survey, certified Cat6a deployment, patch panel termination, rack assembly and Fluke channel performance testing. Large rollouts depend on drop count, distance and site survey.",
    },

    "smart-security": {
        slug: "smart-security",
        title: "Subscription-Free 4K Property Perimeter Security & Smart Access",
        shortTitle: "4K Ubiquiti Security & Access",
        metaTitle: "Subscription-Free UniFi Protect 4K Security Buckinghamshire | No Monthly Fees Access Control",
        metaDesc: "Hardwired Ubiquiti UniFi Protect 4K AI security systems and smart video access control for homes and estates across Buckinghamshire. Zero monthly subscription fees.",
        icon: Cctv,
        keywords: [
            "UniFi Protect installation Buckinghamshire",
            "Ubiquiti Protect 4K security Beaconsfield",
            "4K CCTV no subscription",
            "subscription-free security system",
            "video access control installer",
        ],
        heroPill: "4K IP CCTV · No Monthly Fees",
        heroBullets: [
            "100% subscription-free local 4K storage",
            "UniFi AI human, vehicle & plate recognition",
            "Single app: Wi-Fi, CCTV & door entry",
        ],
        intro: "Protect your property with hardwired Ubiquiti UniFi Protect 4K AI security and smart video access control — 100% subscription-free, owned outright, with no cloud lock-in and no recurring costs.",
        longDescription: "Our perimeter security installations use Ubiquiti UniFi Protect hardware — 4K/2K PoE AI optical cameras, an on-premise UniFi Protect NVR, and UniFi video doorbell & intercom access control — so your footage is stored securely and locally on your own estate and viewable from anywhere through a single free app. Every device is hardwired over Cat6a PoE for uninterrupted, low-latency coverage. We integrate UniFi AI detection, multi-user permissions and video access control to fit how your home, estate or business actually operates.",
        features: [
            "Ubiquiti UniFi G5 / AI 4K & 2K PoE camera installation",
            "On-premise UniFi Protect NVR storage — no monthly fees",
            "UniFi AI human, vehicle & license plate recognition",
            "UniFi Doorbell Pro & smart video intercom access control",
            "Single-app control of Wi-Fi, CCTV & door entry",
            "Hardwired Cat6a PoE with weather-sealed enclosures",
        ],
        process: [
            "Online security audit & perimeter review",
            "UniFi camera placement & storage sizing",
            "Hardwired Cat6a PoE installation & UniFi Protect configuration",
            "Single-app setup & end-user onboarding",
        ],
        engagement: "Turnkey perimeter security packages start from £1,800, including full security audit, hardwired PoE Cat6a deployment, UniFi Protect NVR storage setup, 4K AI optical camera installation and smartphone app setup. Larger estates depend on camera count, storage and site survey.",
    },
};

export const serviceSlugs = Object.keys(servicesData);
