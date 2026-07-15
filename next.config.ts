import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .mdx files (blog post bodies in src/content/blog) be imported as
  // components; .tsx pages still resolve first.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
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
      // Language memory: a returning visitor who last chose 中文 is sent from the
      // root to /zh. Crawlers and first-time visitors arrive without the cookie
      // and always get the English root, so indexing is unaffected. Temporary
      // (307) because it is content-negotiated, not a permanent move.
      {
        source: "/",
        has: [{ type: "cookie", key: "lang", value: "zh" }],
        destination: "/zh",
        permanent: false,
      },

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

// Plugin names are passed as strings so they work under Turbopack (functions
// can't cross into the Rust compiler). remark-gfm adds tables, task lists,
// strikethrough, and autolinks to post markdown.
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"]],
  },
});

export default withMDX(nextConfig);
