/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.kotsistravel.gr' },
    ],
  },
};

export default nextConfig;
