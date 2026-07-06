import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    viewTransition: true,
  },
  // 301 redirects preserving Google Search Console rankings during the
  // Wix → Next.js migration. Old Wix URLs (incl. /en/ locale prefixes and
  // non-standard slugs) are mapped to their new routes. The site is deployed
  // on Vercel (Node), so these always run.
  async redirects() {
    return [
      // Courses (highest traffic)
      { source: "/en/classes", destination: "/courses", statusCode: 301 },

      // Home variants
      { source: "/home-1", destination: "/", statusCode: 301 },
      { source: "/en/home-1", destination: "/", statusCode: 301 },
      { source: "/homepage", destination: "/", statusCode: 301 },

      // About
      { source: "/about-us", destination: "/about", statusCode: 301 },

      // Contact (/contact exists on the new site)
      { source: "/en/contact", destination: "/contact", statusCode: 301 },

      // Instructors (old "team-4" page → single instructors page)
      { source: "/en/team-4", destination: "/instructors", statusCode: 301 },
      { source: "/team-4", destination: "/instructors", statusCode: 301 },

      // Schedule
      { source: "/en/schedule", destination: "/schedule", statusCode: 301 },
    ];
  },
};

export default nextConfig;
