import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware: Returns HTTP 410 Gone for retired content.
 *
 * The guide "Help Older Relatives with Technology" is no longer available
 * and will not be recreated. Returning a proper 410 (rather than a 301
 * redirect or a 404) signals to search engines that the URL should be
 * dropped from their index.
 *
 * The on-brand HTML page is served directly from middleware because Edge
 * Middleware runs before the route handler and cannot render React server
 * components — it returns a complete HTML document instead.
 */

const RETIRED_PATH = '/guides/help-older-relatives-with-technology';

// ---------------------------------------------------------------------------
// On-brand HTML for the 410 page.
// Mirrors the design tokens and structure used across the site
// (see app/not-found.tsx, components/Header.tsx, components/Footer.tsx).
// ---------------------------------------------------------------------------

const GONE_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Content Retired | Bucks Tech Help</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="This guide has been retired by Bucks Tech Help and will not be recreated. Visit our homepage for current services and guides." />
    <link rel="canonical" href="https://www.buckstechhelp.co.uk/guides" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #020617;
            --bg-card: #0f172a;
            --text: #e2e8f0;
            --text-muted: #94a3b8;
            --border: #1e293b;
            --blue-400: #38adf8;
            --blue-500: #0e91e9;
            --blue-600: #0274c7;
            --blue-700: #025ca1;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { font-size: 16px; scroll-behavior: smooth; }
        body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        ::selection { background: rgba(14, 145, 233, 0.25); color: #ffffff; }
        .header {
            position: sticky; top: 0; z-index: 50;
            background: rgba(2, 6, 23, 0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
        }
        .header-container {
            max-width: 80rem; margin: 0 auto; padding: 0 1rem;
            height: 3.5rem; display: flex; align-items: center; justify-content: space-between;
        }
        .logo { height: 2.5rem; width: auto; }
        .nav-desktop {
            display: none; gap: 2rem; font-size: 0.875rem; font-weight: 600;
        }
        .nav-desktop a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .nav-desktop a:hover { color: var(--text); }
        @media (min-width: 640px) { .nav-desktop { display: flex; } }
        main {
            flex: 1; display: flex; flex-direction: column;
            justify-content: center; align-items: center;
            padding: 4rem 1rem; text-align: center;
        }
        .badge {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: rgba(56, 173, 248, 0.1);
            color: var(--blue-400);
            border: 1px solid rgba(56, 173, 248, 0.2);
            padding: 0.5rem 1.25rem; border-radius: 9999px;
            font-size: 0.875rem; font-weight: 700;
            margin-bottom: 2rem;
        }
        h1 {
            font-size: 2.25rem; line-height: 1.1; font-weight: 900;
            color: var(--text); margin-bottom: 1.5rem; letter-spacing: 0.025em;
        }
        @media (min-width: 640px) { h1 { font-size: 3rem; } }
        @media (min-width: 768px) { h1 { font-size: 3.75rem; } }
        h1 .accent { color: var(--blue-400); }
        p.lead {
            font-size: 1.125rem; color: var(--text-muted);
            font-weight: 500; line-height: 1.7;
            max-width: 32rem; margin: 0 auto 2.5rem;
        }
        .cta-group {
            display: flex; flex-direction: column; gap: 1rem;
            align-items: center; margin-bottom: 2rem;
        }
        @media (min-width: 640px) { .cta-group { flex-direction: row; } }
        .btn {
            display: inline-flex; align-items: center; gap: 0.5rem;
            padding: 1rem 2rem; border-radius: 1.25rem;
            font-weight: 900; text-decoration: none;
            transition: all 0.2s; font-size: 1rem;
        }
        .btn-primary {
            background: linear-gradient(to right, var(--blue-500), var(--blue-700));
            color: var(--text); border: none;
            box-shadow: 0 0 20px rgba(14, 145, 233, 0.2);
        }
        .btn-primary:hover {
            transform: scale(1.03);
            box-shadow: 0 0 25px rgba(14, 145, 233, 0.3);
        }
        .btn-secondary {
            background: var(--bg-card); color: var(--text);
            border: 1px solid var(--border);
        }
        .btn-secondary:hover { background: var(--border); }
        .footer {
            border-top: 1px solid var(--border);
            padding: 2rem 1rem;
        }
        .footer-container {
            max-width: 80rem; margin: 0 auto;
            display: flex; flex-direction: column;
            align-items: center; gap: 1rem;
            font-size: 0.875rem; color: var(--text-muted);
        }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-links a {
            color: var(--text-muted); text-decoration: none;
            transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--text); }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-container">
            <a href="/" class="shrink-0" aria-label="Bucks Tech Help home">
                <img src="/images/logo.png" alt="Bucks Tech Help" class="logo" />
            </a>
            <nav class="nav-desktop">
                <a href="/about">About Us</a>
                <a href="/guides">Guides</a>
                <a href="/#faq">FAQ</a>
            </nav>
        </div>
    </header>

    <main>
        <div class="badge">410 &mdash; Gone</div>
        <h1>Content <span class="accent">Retired</span></h1>
        <p class="lead">
            This guide has been retired and will not be recreated. The information it contained
            is no longer maintained or accurate, so it has been removed from our site.
        </p>
        <div class="cta-group">
            <a href="/" class="btn btn-primary">Back to Homepage</a>
            <a href="/guides" class="btn btn-secondary">View All Guides</a>
        </div>
    </main>

    <footer class="footer">
        <div class="footer-container">
            <p>&copy; 2025 Bucks Tech Help. All rights reserved.</p>
            <div class="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookie-policy">Cookie Policy</a>
            </div>
        </div>
    </footer>
</body>
</html>`;


// ---------------------------------------------------------------------------
// Middleware handler
// ---------------------------------------------------------------------------

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Return 410 Gone for the specific retired guide URL.
    if (pathname === RETIRED_PATH) {
        return new NextResponse(GONE_PAGE_HTML, {
            status: 410,
            statusText: 'Gone',
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                // Prevent caching so search engines see the 410 promptly.
                'Cache-Control': 'no-store, max-age=0',
                // Tell crawlers: don't index this page, but follow links on it.
                'X-Robots-Tag': 'noindex, follow',
            },
        });
    }

    // All other requests proceed normally.
    return NextResponse.next();
}

// Restrict the middleware to the retired guide path only — this keeps the
// Edge Middleware runtime from executing on every request across the site.
export const config = {
    matcher: ['/guides/help-older-relatives-with-technology'],
};

