import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack uses the project folder as the root when multiple lockfiles exist
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
