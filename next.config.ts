import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    // allow the built-in optimizer to serve modern formats
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
