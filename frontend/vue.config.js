const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/static/dist/"
      : "http://0.0.0.0:8080",
  outputDir: "../static/dist/",
  indexPath: "../../templates/base-vue.html",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hot: "only",
    static: {
      publicPath: "http://0.0.0.0:8080",
    },
    headers: {
      "Access-Control-Allow-Origin": ["*"],
    },
    devMiddleware: {
      writeToDisk: (filePath) => filePath.endsWith("index.html"),
      headers: { "Acess-Control-Allow-Origin": "*" },
      publicPath: "http://localhost:8080",
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
