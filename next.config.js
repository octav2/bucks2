/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // Obsolete legacy service routes -> core offerings
      { source: '/services/computer-laptop-support', destination: '/services/commercial-cabling', permanent: true },
      { source: '/services/tech-support', destination: '/services/whole-home-wifi', permanent: true },
    ];
  },
};

module.exports = nextConfig
