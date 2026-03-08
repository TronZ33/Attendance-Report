import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Force rebuild - cache buster: v3
  experimental: {
    // Invalidate cache
  },
};

export default nextConfig;
