const publicPath =
  process.env.NODE_ENV === "production"
    ? "/static/dist/"
    : "http://0.0.0.0:8080";

module.exports = {
  publicPath,
  outputDir: "../static/dist/",
  indexPath: "../../templates/base-vue.html",
  devServer: {
    port: 8080,
    hot: "only",
    headers: {
      "Access-Control-Allow-Origin": ["*"],
    },
    watchFiles: {
      options: {
        usePolling: true,
      },
    },
    devMiddleware: {
      writeToDisk: (filePath) => filePath.endsWith("index.html"),
      headers: { "Acess-Control-Allow-Origin": "*" },
      publicPath,
    },
  },
};
