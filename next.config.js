/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
        search: '',
      },
         {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
        search: '',
      },
         {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
