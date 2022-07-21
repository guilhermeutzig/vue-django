const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: "http://0.0.0.0:8080",
  outputDir: "./dist/",
  devServer: {
    host: "0.0.0.0",
    static: {
      publicPath: "http://0.0.0.0:8080",
    },
    port: 8080,
    https: false,
    hot: "only",
    headers: {
      "Access-Control-Allow-Origin": ["*"],
    },
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
    config.plugin("BundleTracker").use(BundleTracker, [
      {
        filename: "./webpack-stats.json",
      },
    ]);
    config.resolve.alias.set("__STATIC__", "static");
  },
};
