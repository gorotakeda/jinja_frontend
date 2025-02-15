/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tanstack/react-query']
  }
};

export default nextConfig;
