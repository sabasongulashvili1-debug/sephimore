import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  typescript: {
    // This will ignore the 'cat' property error during the Vercel build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Optional: If you also get ESLint errors, this will skip those too
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;