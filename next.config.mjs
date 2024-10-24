import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

export default withPWA(nextConfig);
