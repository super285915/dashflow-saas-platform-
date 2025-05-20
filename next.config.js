/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'images.pexels.com'],
    unoptimized: true, // Add this for Netlify compatibility
  },
  output: 'standalone', // Add this for better Netlify support
};

module.exports = nextConfig;