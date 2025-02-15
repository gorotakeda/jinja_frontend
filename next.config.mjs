/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: false
  },
  swcMinify: true
};

export default nextConfig;
