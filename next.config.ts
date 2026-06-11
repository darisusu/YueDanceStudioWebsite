import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  images: {
    unoptimized: isGithubActions,
    formats: ['image/avif', 'image/webp'],
  },
  basePath: isGithubActions ? "/YueDanceStudioWebsite" : "",
  assetPrefix: isGithubActions ? "/YueDanceStudioWebsite" : "",
  experimental: {
    viewTransition: true,
  },
  // 301 redirects preserving Google Search Console rankings during the
  // Wix → Next.js migration. Old Wix URLs (incl. /en/ locale prefixes and
  // non-standard slugs) are mapped to their new routes.
  // NOTE: redirects() is ignored under `output: "export"` (the GitHub Pages
  // build path); these only take effect on the Vercel/Node deployment.
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
