process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {
        skipWaiting: true,
        navigateFallback: "/index.html",
      }
    }
  };