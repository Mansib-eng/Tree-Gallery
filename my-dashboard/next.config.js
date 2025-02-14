/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable app directory
    serverComponentsExternalPackages: ['@prisma/client'], // Optional: use for Prisma or similar
  },
  images: {
    domains: ['your-image-domain.com'], // Replace with actual domains if loading external images
  },
  webpack(config) {
    config.resolve.fallback = { fs: false, net: false, tls: false }; // Resolve common Next.js webpack issues
    return config;
  },
};

module.exports = nextConfig;