const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/newPortfolio/'
      : '/',
  transpileDependencies: true,
  lintOnSave: false
})
