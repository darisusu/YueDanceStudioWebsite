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
};

export default nextConfig;
