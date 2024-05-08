/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/en',
          permanent: true,
        },
      ];
    },
  };
  


export default nextConfig;
