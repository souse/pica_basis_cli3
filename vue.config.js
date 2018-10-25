module.exports = {
  // productionSourceMap: false,
  lintOnSave: undefined,
  css: {
    // modules: true,
    loaderOptions: {}
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));
  }
};
