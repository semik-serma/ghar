/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard for any hostname
      },
      {
        protocol: 'http',
        hostname: '**', // If you ever need http (rare)
      },
    ],
  },
}

export default nextConfig;