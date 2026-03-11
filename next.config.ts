import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [ new URL('https://phimimg.com/**') ],
  },
};

export default nextConfig;
