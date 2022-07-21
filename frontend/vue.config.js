module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/static/dist/"
      : "http://0.0.0.0:8080",
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
      publicPath: "http://localhost:8080",
    },
  },
};
