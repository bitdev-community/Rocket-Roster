/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ignacioaldama'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
