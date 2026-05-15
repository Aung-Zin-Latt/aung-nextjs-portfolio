import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Silence monorepo-style lockfile warning when multiple package-lock files exist above this app */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
