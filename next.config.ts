import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
