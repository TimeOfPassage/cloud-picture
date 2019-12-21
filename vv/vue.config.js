const path = require('path');

module.exports = {
  publicPath: './',
  outputDir: '../www',
  lintOnSave: false,
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
    } else {
      config.mode = 'development'
    }
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  },
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8081,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/backendproxy': {
        target: 'http://localhost:1234/api',
        changeOrigin: true,
        pathRewrite: {
          '^/backendproxy': ''
        }
      }
    }
  },
  pluginOptions: {}
}