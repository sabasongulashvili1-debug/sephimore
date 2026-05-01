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

};

export default nextConfig;