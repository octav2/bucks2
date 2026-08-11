# Implementation Plan — Bucks Tech Help → Local Infrastructure Agency

## Objective
Refactor `buckstechhelp.co.uk` away from micro-fix computer services (£65 printer/iPad help)
into a high-ticket local infrastructure agency selling £1,500–£4,000+ Enterprise Wi-Fi,
Structured Cat6 Cabling, and IP CCTV Infrastructure across Buckinghamshire.

Brand identity is **retained** as "Bucks Tech Help" but fully re-scoped to large-scale
network & cabling infrastructure.

## 1. Content / Branding changes
- Removed: "printer setup", "virus removal", "iPad help", "Smart TV app fixes",
  "digital MOTs", hourly pricing under £100, and the old disclaimer
  *"We do not carry out hardwiring, drilling, or cabling."*
- New homepage headline:
  *"Seamless Gigabit Wi-Fi & Structured Network Cabling for Large Homes, Garden Offices & Businesses across Buckinghamshire."*
- Hardwiring, drilling and cabling are now **core services** (not disclaimed).

## 2. Page architecture
| Route | Purpose |
|-------|---------|
| `/` | Agency landing page — hero, value props, 3 service cards, coverage (6 towns), social proof placeholders |
| `/services/whole-home-wifi` | Whole-Property & Garden Room Wi-Fi (UniFi / Omada, zero dead zones) |
| `/services/commercial-cabling` | Commercial Cat6/Cat6a Structured Cabling & Rack Installations |
| `/services/smart-security` | Commercial-Grade 4K IP CCTV & Access Control (no monthly fees) |
| `/locations/beaconsfield` | Hyper-local SEO hub |
| `/locations/amersham` | Hyper-local SEO hub |
| `/locations/high-wycombe` | Hyper-local SEO hub |
| `/quote` | Multi-step interactive lead-qualification form |

## 3. Interactive Quote form (`/quote`)
4 steps held in React state:
1. Property Type (Detached House / Office / Farm or Estate / Commercial Unit)
2. Primary Challenge (Wi-Fi Dead Zones / Garden Room Connection / Office Cabling / CCTV)
3. Estimated Budget Bracket (£1,500–£2,500 / £2,500–£5,000 / £5,000+)
4. Contact details + optional floorplan/photo upload

On submit → confirmation: *"Thank you. Our engineering team is reviewing your property
layout and will email your preliminary scope within 24 hours."*
No published incoming phone number on the form.

## 4. Component hierarchy
```
RootLayout (app/layout.tsx)
└── Header (components/Header.tsx)           — new nav + Quote CTA, premium dark styling
└── <Page content>
    ├── Hero
    ├── ValueProps
    ├── Services (components/Services.tsx)   — 3 agency cards
    ├── WhoWeServe (components/WhoIHelp.tsx) — retargeted
    ├── HowItWorks (components/HowItWorks.tsx)
    ├── CoverageMap (components/CoverageMap.tsx) — NEW
    ├── SocialProof (components/Testimonials.tsx) — agency placeholders
    ├── FAQ (components/FAQ.tsx)             — agency Q&A
    └── ServiceCTA (components/ServiceCTA.tsx)   — NEW
└── QuoteForm (components/QuoteForm.tsx)     — NEW client component (app/quote)
└── Footer (components/Footer.tsx)
```

## 5. Data layer (`lib/`)
- `lib/data.ts` — rebranded `businessDetails`, `serviceAreas`, rewritten `faqs`.
- `lib/servicesData.ts` — 3 agency services with long-tail SEO metadata.
- `lib/locationsData.ts` — NEW: Beaconsfield / Amersham / High Wycombe local hubs.
- `lib/schema.ts` — NEW: JSON-LD helpers (TelecommunicationsContractor / LocalBusiness / Service / FAQPage).

## 6. SEO & Schema
- `app/layout.tsx` — new long-tail title/description/keywords/OG; replace old JSON-LD
  with `TelecommunicationsContractor` / `LocalBusiness`.
- Per-page `generateMetadata` + JSON-LD on all new pages.
- `app/sitemap.ts` — 3 services + 3 locations + guides.

## 7. Theme
Dark-blue / slate premium enterprise theme. Responsive, zero layout shift.

## 8. Verification
- `npm run build` and `next lint` — zero errors.
- `npm run dev` + HTTP fetch of all routes to confirm status/H1/meta/schema/form render.
