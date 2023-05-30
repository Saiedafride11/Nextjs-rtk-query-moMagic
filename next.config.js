/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "media.istockphoto.com",
      "demoapus2.com",
      "github.com",
      "dummyimage.com",
      "fakestoreapi.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  optimizeFonts: true,
};

module.exports = nextConfig

