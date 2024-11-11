// const fs = require("fs");
// const path = require("path");

const nextConfig = {
  distDir: "./build",
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },

  // devServer: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, "ssl/key.pem")), // Đường dẫn tới key.pem
  //     cert: fs.readFileSync(path.resolve(__dirname, "ssl/cert.pem")), // Đường dẫn tới cert.pem
  //   },
  //   port: 4001, // Port đã chỉ định
  // },
};

module.exports = nextConfig;
