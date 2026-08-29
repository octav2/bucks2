// app/api/indexnow/route.ts
// IndexNow real-time indexing submission endpoint.
// POSTs changed/updated URLs to the IndexNow protocol so search engines
// (Bing, Yandex, Seznam, Naver, etc.) can crawl them immediately.
//
// Host / key values:
//   - Host:          www.buckstechhelp.co.uk
//   - Key:           bf4d3fc6245146afae40ec0afe5031e0
//   - Key Location:  https://www.buckstechhelp.co.uk/bf4d3fc6245146afae40ec0afe5031e0.txt
//   - Endpoint:      https://api.indexnow.org/IndexNow

import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/servicesData';
import { getAllLocationSlugs } from '@/lib/locations';
import { getAllLocationServiceSlugs } from '@/lib/locationServices';

// Ensure this route is always executed at request time (never statically cached).
export const dynamic = 'force-dynamic';

export const runtime = 'nodejs';

const INDEXNOW_HOST = 'www.buckstechhelp.co.uk';
const INDEXNOW_KEY = 'bf4d3fc6245146afae40ec0afe5031e0';
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const PROTOCOL = 'https';

// Default URL list: all public, indexable pages on the site, auto-discovered
// from the same content sources /sitemap.xml uses. This keeps the list in sync
// whenever town hubs or location/service pages are added or removed, so a POST
// with no body submits every live URL (Bing then crawls them all).
function defaultPaths(): string[] {
    const servicePaths = Object.keys(servicesData).map((slug) => `/services/${slug}`);
    const locationPaths = getAllLocationSlugs().map((slug) => `/locations/${slug}`);
    const locationServicePaths = getAllLocationServiceSlugs().map(({ slug }) => `/locations/${slug}`);
    return [
        '/',
        '/about',
        '/quote',
        '/trade-partners',
        '/contact',
        ...servicePaths,
        ...locationPaths,
        ...locationServicePaths,
    ];
}

function toAbsoluteUrl(url: string): string | null {
    const trimmed = (url || '').trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    return `${PROTOCOL}://${INDEXNOW_HOST}${path}`;
}

export async function POST(request: Request) {
    try {
        let requestedUrls: string[] = defaultPaths();

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