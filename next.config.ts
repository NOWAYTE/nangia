import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'embed-ssl.wistia.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
