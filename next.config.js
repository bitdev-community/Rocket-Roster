const {
  excludeFromSnapshot,
} = require('@teambit/webpack.modules.exclude-from-snapshot');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ignacioaldama'],
  webpack: (config) => {
    /* config.snapshot.managedPaths = [
      /^(?!.*[\\/]node_modules[\\/](?:@ignacioaldama)[\\/])(.+[\\/]node_modules[\\/])/,
    ]; */

    config = excludeFromSnapshot(config, ['@ignacioaldama']);

    return config;
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'images2.imgbox.com',
      'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com',
    ],
  },
};

module.exports = nextConfig;
