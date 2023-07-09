/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@learnbit-react'],
  webpack: (config) => {
    config.snapshot.managedPaths = [
      /^(?!.*[\\/]node_modules[\\/](?:@learnbit-react)[\\/])(.+[\\/]node_modules[\\/])/,
    ];

    return config;
  },
  images: {
    domains: [
      'images2.imgbox.com',
      'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com',
    ],
  },
};

module.exports = nextConfig;
