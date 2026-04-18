const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  images: {
    unoptimized: isGithubActions,
  },
  basePath: isGithubActions ? '/YueDanceStudioWebsite' : '',
  assetPrefix: isGithubActions ? '/YueDanceStudioWebsite' : '',
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
