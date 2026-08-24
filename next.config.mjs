/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // fully static site — no server, deployable anywhere
  images: {
    unoptimized: true, // static export can't use Vercel's image optimization API
  },
};

export default nextConfig;
