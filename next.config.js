const withImages = require('next-images')
const SeoGeneratorPlugin = require('./utils/SeoGeneratorPlugin')
const util = require('util')

module.exports = withImages({
  webpack(config, options) {
    if (options.isServer) {
      config.plugins.push(new SeoGeneratorPlugin())
    }

    return config
  },
})
