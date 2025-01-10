/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    URL: 'https://cooptex.360degreeinfo.biz/api/public/api/admin', // Change only the domain part, keeping "/api/admin" intact
    storageURL: 'https://cooptex.360degreeinfo.biz/api/public' // change only the laravel primary domain
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",

        permanent: true,
      },
    ];
  },
  images: {
   remotePatterns: [
      {
        protocol: "https",
        hostname: "cooptex.360degreeinfo.biz",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
