/** @type {import('next').NextConfig} */
const nextConfig = {
  // source.unsplash.com is not a valid domain for images

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
