// Update public/llm.txt: add missing local-service pages + main pages.
const fs = require('fs');
const path = require('path');
const FILE = path.join(process.cwd(), 'public', 'llm.txt');

const towns = fs.readdirSync(path.join(process.cwd(), 'content', 'locations'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();

const SERVICES = [
    ['wifi-installation', 'Wi-Fi Installation'],
    ['network-cabling', 'Network Cabling'],
    ['cctv-installation', 'Security / CCTV'],
];

let local = `\n## Dedicated Local Service Pages\n
We publish dedicated local service pages for every town/hub and service combination (Wi-Fi installation, network cabling and 4K CCTV):\n\n`;
for (const town of towns) {
    for (const [slug, label] of SERVICES) {
        local += `- ${titleCase(town)} - ${label} (${town}/${slug}): https://www.buckstechhelp.co.uk/locations/${town}/${slug}\n`;
    }
}

local += `\n## Main Pages & Company Information\n`;
local += `- About Us: https://www.buckstechhelp.co.uk/about\n`;
local += `- Contact Us: https://www.buckstechhelp.co.uk/contact\n`;
local += `- Trade Partners (sub-contracting & referrals for builders, electricians and garden room companies): https://www.buckstechhelp.co.uk/trade-partners\n`;

let txt = fs.readFileSync(FILE, 'utf8');
// Insert before "## Pricing & Process"
txt = txt.replace('## Pricing & Process', local + '\n## Pricing & Process');
fs.writeFileSync(FILE, txt, 'utf8');
console.log('UPDATED');

function titleCase(s) {
    return s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}