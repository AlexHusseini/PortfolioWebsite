/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [], // Add domains if you're loading images from external services
  },
};

module.exports = nextConfig; 