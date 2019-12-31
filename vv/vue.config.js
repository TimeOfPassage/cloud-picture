const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

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
  css: {
    loaderOptions: {
      less: {
        //参考：https://github.com/youzan/vant/blob/dev/src/style/var.less，重写其内样式，即可定制主题
        modifyVars: {
          //'text-color': '#c3c3c3',
          //'border-color': '#ebedf0',
          //'active-color': '#f2f3f5',
          //'background-color': '#f7f8fa',
          //'background-color-light': '#fafafa'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*']
          })
        ]
      }
    }
  },
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