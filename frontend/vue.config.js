const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: "/static/dist/",
  outputDir: "../static/dist/",
  indexPath: "../../templates/base-vue.html",
  devServer: {
    port: 8080,
    hot: "only",
    headers: {
      "Access-Control-Allow-Origin": ["*"],
    },
    devMiddleware: {
      writeToDisk: (filePath) => filePath.endsWith("index.html"),
      headers: { "Acess-Control-Allow-Origin": "*" },
    },
  },
};
