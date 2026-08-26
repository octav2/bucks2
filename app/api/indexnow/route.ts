// app/api/indexnow/route.ts
// IndexNow real-time indexing submission endpoint.
// POSTs changed/updated URLs to the IndexNow protocol so search engines
// (Bing, Yandex, Seznam, Naver, etc.) can crawl them immediately.
//
// Host / key values:
//   - Host:          www.buckstechhelp.co.uk
//   - Key:           a9d419681beb49c69307323829aff689
//   - Key Location:  https://www.buckstechhelp.co.uk/a9d419681beb49c69307323829aff689.txt
//   - Endpoint:      https://api.indexnow.org/IndexNow

import { NextResponse } from 'next/server';

// Ensure this route is always executed at request time (never statically cached).
export const dynamic = 'force-dynamic';

export const runtime = 'nodejs';

const INDEXNOW_HOST = 'www.buckstechhelp.co.uk';
const INDEXNOW_KEY = 'a9d419681beb49c69307323829aff689';
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const PROTOCOL = 'https';

// Default URL list: homepage, /about, all 13 town pages and 3 core services.
const DEFAULT_PATHS: string[] = [
    '/',
    '/about',
    // 18 local town hub pages
    '/locations/amersham',
    '/locations/aylesbury',
    '/locations/beaconsfield',
    '/locations/bourne-end',
    '/locations/chalfont-st-peter',
    '/locations/chesham',
    '/locations/gerrards-cross',
    '/locations/great-missenden',
    '/locations/hazlemere',
    '/locations/high-wycombe',
    '/locations/marlow',
    '/locations/penn',
    '/locations/stoke-poges',
    '/locations/chalfont-st-giles',
    '/locations/wendover',
    '/locations/princes-risborough',
    '/locations/berkhamsted',
    '/locations/tring',
    // 3 core service pages
    '/services/whole-home-wifi',
    '/services/commercial-cabling',
    '/services/smart-security',
    // Dedicated local service pages (/locations/[town]/[service])
    '/locations/beaconsfield/wifi-installation',
    '/locations/beaconsfield/network-cabling',
    '/locations/beaconsfield/cctv-installation',
];

function toAbsoluteUrl(url: string): string | null {
    const trimmed = (url || '').trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    return `${PROTOCOL}://${INDEXNOW_HOST}${path}`;
}

export async function POST(request: Request) {
    try {
        let requestedUrls: string[] = DEFAULT_PATHS;

        // Optional JSON body: { "urls": ["https://...", "/path", ...] }
        // If omitted, the default URL list is submitted instead.
        try {
            const body = await request.json();
            if (Array.isArray(body?.urls)) {
                requestedUrls = body.urls;
            }
        } catch {
            // No (or non-JSON) body -> fall back to the default URL list.
        }

        const urlList = Array.from(
            new Set(requestedUrls.map(toAbsoluteUrl).filter((u): u is string => u !== null))
        );

        if (urlList.length === 0) {
            return NextResponse.json({ ok: false, error: 'No URLs provided' }, { status: 400 });
        }

        const payload = {
            host: INDEXNOW_HOST,
            key: INDEXNOW_KEY,
            keyLocation: KEY_LOCATION,
            urlList,
        };

        const upstream = await fetch(INDEXNOW_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(payload),
        });

        const upstreamText = await upstream.text();

        if (upstream.ok) {
            return NextResponse.json(
                {
                    ok: true,
                    status: upstream.status,
                    submitted: urlList.length,
                    key: INDEXNOW_KEY,
                    keyLocation: KEY_LOCATION,
                    urls: urlList,
                },
                { status: upstream.status }
            );
        }

        return NextResponse.json(
            { ok: false, status: upstream.status, error: upstreamText || upstream.statusText },
            { status: upstream.status }
        );
    } catch {
        return NextResponse.json({ ok: false, error: 'IndexNow submission failed' }, { status: 500 });
    }
}