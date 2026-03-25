import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  basePath: "/vendybites",
};

export default nextConfig;
