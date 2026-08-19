/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Legacy photography is 600px wide at most — asking for larger variants
    // only wastes build time and produces upscaled, softer files.
    imageSizes: [96, 128, 192, 256, 320, 384],
    deviceSizes: [400, 600, 828, 1080],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // The old stub route; the real page now lives at its Greek slug.
      { source: '/contact', destination: '/epikoinonia', permanent: true },
    ];
  },
};

export default nextConfig;
