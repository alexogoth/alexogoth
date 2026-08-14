import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kmenmaqivkxvprfxaegp.supabase.co",
      },
    ],
  },
};

export default nextConfig;