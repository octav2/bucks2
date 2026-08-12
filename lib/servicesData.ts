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
        title: "Whole-Property & Garden Room Wi-Fi",
        shortTitle: "Whole-Home Wi-Fi",
        metaTitle: "Ubiquiti UniFi & TP-Link Omada Installer Buckinghamshire | Whole-Home Wi-Fi",
        metaDesc: "Ubiquiti UniFi & TP-Link Omada installer in Buckinghamshire. Hardwired whole-property and garden room Wi-Fi with zero dead zones for large homes across Beaconsfield, Amersham, Chesham & High Wycombe.",
        icon: Wifi,
        keywords: [
            "Ubiquiti UniFi installer Buckinghamshire",
            "TP-Link Omada installer",
            "garden office internet setup Chesham",
            "whole home Wi-Fi Beaconsfield",
            "enterprise Wi-Fi High Wycombe",
            "mesh Wi-Fi no dead zones",
        ],
        heroPill: "Enterprise Wi-Fi · Zero Dead Zones",
        heroBullets: [
            "Hardwired Ubiquiti UniFi & TP-Link Omada access points",
            "Every room and garden building with full-speed coverage",
            "No more dropped Zoom calls, buffering or dead spots",
        ],
        intro: "If your large home or garden office has dead zones, weak signal or constant drop-outs, a single consumer router is the problem. We design and install hardwired enterprise Wi-Fi that blankets the entire property.",
        longDescription: "We engineer whole-property and garden room Wi-Fi using professional Ubiquiti UniFi and TP-Link Omada equipment. Unlike plug-in boosters, our systems are wired back to a central switch, so every access point delivers full Gigabit throughput instead of halving your speed. We survey the building, position access points for optimal coverage, run structured cabling, and hand over a controlled, manageable network with a single app. Ideal for large period homes, extended properties, garden studios and annexes.",
        features: [
            "Full RF survey & floor-by-floor coverage design",
            "Ubiquiti UniFi or TP-Link Omada access point installation",
            "Cat6 backhaul cabling to every access point",
            "Central managed switch & PoE deployment",
            "Guest network, VLANs & parental controls configured",
            "Garden room, cabin & annex connectivity",
            "Speed testing in every room and full handover walkthrough",
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
        title: "Commercial Cat6 Cat6a Structured Cabling & Rack Installations",
        shortTitle: "Structured Cabling",
        metaTitle: "Commercial Cat6 & Cat6a Structured Cabling Buckinghamshire | Office Network Installation",
        metaDesc: "Commercial Cat6 & Cat6a structured cabling, patch panels and rack installations for offices across Buckinghamshire. Certified, tidy, fully tested office network cabling with 10-Gigabit readiness.",
        icon: Cable,
        keywords: [
            "structured cabling Buckinghamshire",
            "Cat6 cabling installer Amersham",
            "Cat6a office network cabling",
            "commercial network installation High Wycombe",
            "server rack installation",
        ],
        heroPill: "Structured Cabling · Rack Installation",
        heroBullets: [
            "Certified Cat6 & Cat6a structured cabling",
            "Patch panels, racks & managed switches installed",
            "Tidy, labelled, fully tested — 10-Gig ready",
        ],
        intro: "Reliable office networks are built on quality cabling. We design and install structured Cat6 and Cat6a cabling, patch panels and racks that keep your business fast, organised and ready to scale.",
        longDescription: "Wi-Fi alone can't guarantee the performance and resilience a modern office needs. We deliver structured cabling installations that give every desk, camera and access point a dependable, low-latency wired connection. Our technicians run and terminate Cat6 and Cat6a through clean containment, dress every cable into patch panels, install network racks and managed switches, and certify each run. The result is a professional, forward-compatible network that supports gigabit and 10-gigabit services and simple future expansion.",
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
        engagement: "Commercial Cat6/Cat6a structured cabling projects typically start from £2,000, with larger rollouts dependent on drop count, distance and site survey.",
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
