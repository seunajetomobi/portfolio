/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images with Next.js Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable compression
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Redirect non-www to www (optional)
  // async redirects() {
  //   return [];
  // },

  // Rewrite rules (optional)
  // async rewrites() {
  //   return [];
  // },
};

module.exports = nextConfig;
