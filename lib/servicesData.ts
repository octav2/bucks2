import { Wifi, Printer, Smartphone, Laptop, Tv, ShieldAlert } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDesc: string;
    icon: any;
    keywords: string[];
    intro: string;
    longDescription: string;
    features: string[];
    pricing: string;
}

export const servicesData: Record<string, ServiceData> = {
    "computer-laptop-support": {
        slug: "computer-laptop-support",
        title: "Local IT Support & Computer Help",
        metaTitle: "Local IT Support & Computer Help | Bucks Tech Help",
        metaDesc: "Get patient home IT support near you. Friendly computer technician for Windows laptops, MacBook help, slow computer speed ups, and email troubleshooting.",
        icon: Laptop,
        keywords: ["IT support near me", "computer technician near me", "computer help near me", "computer services", "speed up laptop"],
        intro: "Looking for friendly, patient IT support near me? If you need a reliable computer technician near me in Buckinghamshire to help resolve laptop frustrations, slow systems, or software issues, Bucks Tech Help is at your service.",
        longDescription: "Technology should support your daily life, not cause endless frustration. I provide dedicated computer help near me, offering comprehensive home computer services tailored directly to your needs. From helping speed up laptop performance to configuring secure email accounts and handling critical Windows or MacBook updates, I specialize in resolving your technical challenges in a patient, step-by-step manner. I explain everything clearly without confusing technical jargon, so you feel confident using your devices.",
        features: [
            "Speeding up slow laptops & computer checks",
            "Email account setup & troubleshooting",
            "Windows & MacBook system updates",
            "Microsoft 365, Word, Excel & Outlook configuration",
            "OneDrive & iCloud cloud storage setup",
            "File & photo backup and organization",
            "Basic security checks & application installs",
            "Remote IT support for quick software fixes"
        ],
        pricing: "Home visits from £65 for the first hour, then £35 per additional 30 minutes. Most computer software problems can be completely diagnosed and resolved within the first hour."
    },
    "home-printer-setup-help": {
        slug: "home-printer-setup-help",
        title: "Home Printer Help & Wireless Setup",
        metaTitle: "Home Printer Help & Wireless Setup | Bucks Tech Help",
        metaDesc: "Reliable home printer help and wireless setup. Fix printer offline issues, connect printers to phones/tablets, and get Canon, Brother, and HP setup assistance.",
        icon: Printer,
        keywords: ["Canon printer help", "help with Brother printer", "HP printer setup", "printer offline fix"],
        intro: "Dealing with an offline printer or a frustrating setup process? Get expert home printer help and wireless setup services that come directly to your door to get you printing smoothly.",
        longDescription: "Wireless printers are notoriously difficult and frustrating to configure, often losing connection without warning. If you need dedicated Canon printer help, direct HP printer setup, or specialized help with Brother printer models, I can resolve your connection issues once and for all. I'll provide a durable printer offline fix, connect all of your home devices (laptops, iPads, and smartphones) to your printer, and show you exactly how to print, scan, and copy without stress.",
        features: [
            "Wireless printer setup and initial configuration",
            "Direct printer offline fix & queue clearing",
            "HP printer setup & HP Smart app configuration",
            "Canon printer help, scanner setup & software updates",
            "Help with Brother printer models & local connection troubleshooting",
            "Printing setup from iPhone, iPad, Android, Windows, or Mac",
            "Reconnecting printers after a home Wi-Fi or router change",
            "Scanner app configuration and document organization"
        ],
        pricing: "Home visits from £65 for printer troubleshooting and setup. Simple, upfront pricing with no hidden fees."
    },
    "wifi-internet-setup": {
        slug: "wifi-internet-setup",
        title: "Home Wi-Fi Setup & Internet Troubleshooting",
        metaTitle: "Home Wi-Fi Setup & Internet Troubleshooting | Bucks Tech Help",
        metaDesc: "Struggling with slow internet? Professional home Wi-Fi setup service, mesh Wi-Fi setup, and local home network installation near me in Buckinghamshire.",
        icon: Wifi,
        keywords: ["Wi-Fi setup service", "fix slow internet", "home network installation near me", "mesh Wi-Fi setup"],
        intro: "Is a slow, spotty, or dropping internet connection disrupting your home? Bucks Tech Help offers a professional home Wi-Fi setup service and advanced internet troubleshooting near you.",
        longDescription: "Whether you need to fix slow internet connections, eliminate annoying dead zones in your kitchen, or require a robust home network installation near me, I provide practical, plug-and-play tech support. I specialize in complete mesh Wi-Fi setup and router optimization to deliver lightning-fast, seamless coverage across your entire property, including garden rooms and upstairs bedrooms. I work directly with your existing internet service provider (BT, Sky, Virgin Media, TalkTalk, EE) to maximize your speed.",
        features: [
            "New router setup and Wi-Fi network optimization",
            "Mesh Wi-Fi setup to eliminate dead zones completely",
            "Troubleshooting slow internet & Wi-Fi dropping issues",
            "Reconnecting smart home devices after router replacement",
            "Testing network speeds in different rooms of your home",
            "Setting up strong, memorable, yet secure Wi-Fi passwords",
            "Diagnosing signal blockages and optimal router placement"
        ],
        pricing: "Wi-Fi diagnosis and router setup from £75. Advanced mesh Wi-Fi system setup and multi-room optimization from £150."
    },
    "phone-tablet-setup": {
        slug: "phone-tablet-setup",
        title: "New Phone & Tablet Setup Help",
        metaTitle: "New Phone & Tablet Setup Help | Bucks Tech Help",
        metaDesc: "Get patient iPad setup help near me. Professional iPhone data transfer service, tablet setup for seniors, and new device configuration in Bucks.",
        icon: Smartphone,
        keywords: ["iPad setup help near me", "iPhone data transfer service", "tablet setup for seniors", "new device setup"],
        intro: "Recently bought a new smartphone or tablet and feel overwhelmed by the configuration? Get patient, step-by-step new device setup help right in the comfort of your home.",
        longDescription: "Setting up a new phone or tablet can be stressful, especially when it comes to preserving your precious contacts, photos, and messages. I provide dedicated iPad setup help near me and a reliable iPhone data transfer service to ensure all your data is safely moved from your old device to your new one. I specialize in friendly tablet setup for seniors, taking the time to explain how gestures work, customizing text sizes for easy reading, setting up essential apps like WhatsApp, and showing you how to stay in touch with family.",
        features: [
            "New device setup & custom system configuration",
            "Secure iPhone data transfer service (contacts, photos, messages)",
            "iPad setup help near me & iPad/Android tablet data migration",
            "Tailored tablet setup for seniors with clear, simple explanations",
            "Setting up email accounts, calendars, and contacts syncing",
            "Installing essential communication apps (WhatsApp, FaceTime, Zoom)",
            "Configuring automatic cloud photo backups (iCloud/Google Photos)",
            "Adjusting accessibility settings for visual clarity and loud audio"
        ],
        pricing: "New device setup and full data transfer appointments typically start from £85, allowing ample time for clear, step-by-step guidance."
    },
    "smart-tv-setup": {
        slug: "smart-tv-setup",
        title: "Smart TV Setup & App Installation",
        metaTitle: "Smart TV Setup & App Installation | Bucks Tech Help",
        metaDesc: "Professional Smart TV setup service. Get TV Wi-Fi connection help, Netflix setup, and expert help setting up Fire Stick and streaming apps.",
        icon: Tv,
        keywords: ["Smart TV setup service", "TV Wi-Fi connection help", "help setting up Fire Stick", "Netflix setup"],
        intro: "Frustrated with your TV settings, streaming apps, or remote controls? My professional Smart TV setup service in Buckinghamshire makes home entertainment simple and enjoyable.",
        longDescription: "Modern television sets are essentially powerful computers, requiring Wi-Fi connections, user accounts, and continuous software updates. If you need TV Wi-Fi connection help, Netflix setup, or patient help setting up Fire Stick, Apple TV, or Google Chromecast systems, I can get your entertainment setup working beautifully. I will organize your remotes, explain how to search for your favorite shows, configure free catch-up apps like BBC iPlayer and ITVX, and ensure you feel in total control.",
        features: [
            "New Smart TV setup, stand attachment & initial configuration",
            "Robust TV Wi-Fi connection help & signal troubleshooting",
            "Netflix setup, Amazon Prime Video, Disney+, & Apple TV login",
            "Configuring free catch-up apps (BBC iPlayer, ITVX, Channel 4)",
            "Help setting up Fire Stick, Roku, or Apple TV devices",
            "Tuning digital channels & configuring sound bars",
            "Simplifying and explaining television remote controls"
        ],
        pricing: "Smart TV setup and streaming app installation from £75. Includes testing and a complete user walkthrough."
    },
    "computer-security-scam-checks": {
        slug: "computer-security-scam-checks",
        title: "Home Computer Security & Scam Checks",
        metaTitle: "Home Computer Security & Scam Checks | Bucks Tech Help",
        metaDesc: "Get professional computer virus removal near me. Home computer security checks, password security reviews, and patient email scam help.",
        icon: ShieldAlert,
        keywords: ["computer virus removal near me", "home computer security check", "email scam help", "password security"],
        intro: "Worried about suspicious emails, bank messages, browser pop-ups, or potential viruses? I provide patient, non-judgmental support to secure your devices and give you peace of mind.",
        longDescription: "Online security threats are increasingly sophisticated, often targeting home users with convincing scam emails, text alerts, and frightening browser pop-ups. I offer a comprehensive home computer security check to audit your passwords, install reliable protective software, and provide computer virus removal near me if your device has already been infected. I also deliver patient, supportive email scam help to review suspicious activities and teach you simple, practical rules to stay perfectly safe online.",
        features: [
            "Comprehensive home computer security check & diagnostic search",
            "Professional computer virus removal near me & malware clean-ups",
            "Expert email scam help & auditing of suspicious message links",
            "Password security review & setup of secure password organizers",
            "Setting up two-factor authentication (2FA) on critical accounts",
            "Configuring secure web browsers & blocking annoying pop-up ads",
            "Clear advice on identifying fake bank alerts or delivery scams",
            "DBS-checked, highly confidential, and trustworthy assistance"
        ],
        pricing: "Security checks, scam assessments, and virus removal visits start from £75. Full 2-hour complete Digital MOT checkups are £140."
    }
};
