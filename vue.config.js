module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/abstracts/_variables.scss";`,
      },
    },
  },
};
