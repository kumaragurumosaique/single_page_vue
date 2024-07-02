// In your vue.config.js or webpack.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        "assert": require.resolve("assert/")
      }
    }
  }
};
