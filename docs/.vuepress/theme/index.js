const path = require('path')

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  return {
    extend: '@vuepress/theme-default',
    plugins: [require(path.resolve(__dirname, './plugins/dynamic-metadata.js'))]
  }
}
