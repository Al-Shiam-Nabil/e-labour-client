/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",

        pathname: "/**",
      }, {
        protocol: "https",
        hostname: "**",
      
        pathname: "/**",
        
      },
    ],
  },
};

module.exports = nextConfig;
