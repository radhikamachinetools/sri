/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // Your NestJS backend port
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
