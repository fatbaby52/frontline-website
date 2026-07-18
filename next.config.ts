import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern image formats for better performance
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // The hero fleet photo renders at quality 85; Next 16 requires
    // every quality used to be declared here.
    qualities: [75, 85],
  },
  // Optimize for production
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
