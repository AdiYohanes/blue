/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/app/api/:path*', // Adjust the destination path
      },
    ];
  },
};

export default nextConfig;

  
