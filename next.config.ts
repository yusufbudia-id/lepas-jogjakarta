import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16.3.x + Vercel adapter currently conflicts with standalone output.
  // Vercel does not need .next/standalone, so disable it only on Vercel.
  output: process.env.VERCEL ? undefined : "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Redirect untuk mengatasi error 404 dari URL /home di Google Search Console
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
