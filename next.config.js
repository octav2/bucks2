/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent clickjacking — addresses the "No frame control policy found" warning
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Safe referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable sensitive permissions
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // HSTS with includeSubDomains and preload — addresses the Medium warnings
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Cross-Origin Opener Policy — addresses the "No COOP header found" warning
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Cross-Origin Resource Policy
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy top-level town routes -> /locations/[slug]
      { source: '/aylesbury', destination: '/locations/aylesbury', permanent: true },
      { source: '/amersham', destination: '/locations/amersham', permanent: true },
      { source: '/beaconsfield', destination: '/locations/beaconsfield', permanent: true },
      { source: '/chesham', destination: '/locations/chesham', permanent: true },
      { source: '/gerrards-cross', destination: '/locations/gerrards-cross', permanent: true },
      { source: '/high-wycombe', destination: '/locations/high-wycombe', permanent: true },
      { source: '/marlow', destination: '/locations/marlow', permanent: true },
      { source: '/hazlemere', destination: '/locations/hazlemere', permanent: true },
      { source: '/great-missenden', destination: '/locations/great-missenden', permanent: true },
      { source: '/bourne-end', destination: '/locations/bourne-end', permanent: true },
      { source: '/penn', destination: '/locations/penn', permanent: true },
      { source: '/stoke-poges', destination: '/locations/stoke-poges', permanent: true },
      { source: '/chalfont-st-peter', destination: '/locations/chalfont-st-peter', permanent: true },
      // Serve the GEO llms.txt file (canonical location used by AI crawlers)
      { source: '/llms.txt', destination: '/llm.txt', permanent: true },
      // Obsolete legacy service routes -> core offerings
      { source: '/services/computer-laptop-support', destination: '/services/commercial-cabling', permanent: true },
      { source: '/services/tech-support', destination: '/services/whole-home-wifi', permanent: true },
      // Old indexed BT Wi-Fi guide URL -> new guide
      { source: '/guides/improve-bt-wifi-speed-old-houses', destination: '/guides/fix-slow-bt-wifi-old-house', permanent: true },
      // Old indexed Wi-Fi dead zones guide URL -> new guide
      { source: '/guides/how-to-fix-wifi-dead-zones', destination: '/guides/wifi-extender-vs-mesh-vs-hardwired', permanent: true },
    ];
  },
};

module.exports = nextConfig
