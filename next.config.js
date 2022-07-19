const path = require("path");

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
