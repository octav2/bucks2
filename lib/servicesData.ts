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
        shortTitle: "Whole-Home Wi-Fi",
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
        shortTitle: "Data Infrastructure & Racks",
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
        heroPill: "Data Infrastructure · Rack Architecture",
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
        title: "Commercial-Grade 4K IP CCTV & Access Control",
        shortTitle: "IP CCTV & Access Control",
        metaTitle: "4K IP CCTV Installation Buckinghamshire | No Monthly Fees Access Control",
        metaDesc: "Commercial-grade 4K IP CCTV and access control installation across Buckinghamshire. Subscription-free, owned-outright camera systems for homes, estates and businesses. No monthly fees.",
        icon: Cctv,
        keywords: [
            "4K IP CCTV installation Buckinghamshire",
            "CCTV installer Beaconsfield",
            "access control system installer",
            "no subscription CCTV",
            "IP camera installation High Wycombe",
        ],
        heroPill: "4K IP CCTV · No Monthly Fees",
        heroBullets: [
            "Owned-outright commercial-grade 4K IP cameras",
            "Subscription-free on-site NVR storage & remote viewing",
            "Access control & intercom integration",
        ],
        intro: "Protect your property and people with commercial-grade 4K IP CCTV and access control — owned outright, with no monthly subscription fees, no cloud lock-in and no recurring costs.",
        longDescription: "Our security installations use professional 4K IP cameras and on-site NVR storage, so your footage is stored securely on your own premises and viewable from anywhere through a free, subscription-free app. Systems are built on the same wired network infrastructure we install, delivering reliable, high-resolution, low-latency coverage. We integrate remote access, multi-user permissions and access control — from keypads to intercoms — to fit how your home, estate or business actually operates.",
        features: [
            "Commercial-grade 4K IP camera installation",
            "On-site NVR storage with subscription-free remote viewing",
            "Wired PoE connection for maximum reliability",
            "Floodlight & motion-detection camera options",
            "Access control, keypads & video intercom integration",
            "Multi-user permissions & secure mobile access",
        ],
        process: [
            "Online quote audit & perimeter review",
            "Camera placement design & storage sizing",
            "Wired installation & system configuration",
            "Remote-view setup & end-user training",
        ],
        engagement: "Commercial-grade 4K IP CCTV and access-control projects typically start from £1,800, with larger estates dependent on camera count, storage and site survey.",
    },
};

export const serviceSlugs = Object.keys(servicesData);
