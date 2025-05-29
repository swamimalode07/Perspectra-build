import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Skip TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Skip ESLint build errors
    ignoreDuringBuilds: true,
  },
  // You can add other options here as needed
};

export default nextConfig;
