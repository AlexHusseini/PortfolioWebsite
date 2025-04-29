/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  experimental: {
    // Enables the styled-jsx plugin
    styledJsx: true,
  },
  images: {
    unoptimized: true,
    domains: [], // Add domains if you're loading images from external services
  },
};

module.exports = nextConfig; 