module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  devServer: {
    port: 8088,
    // 设置跨域
    proxy: {
      '/v2/*': {
        target: 'http://api.douban.com',
        ws: true,
        changOrigin: true,
        secure: false
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }
  }
}
