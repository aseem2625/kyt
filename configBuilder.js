var path = require('path')
var fs = require('fs')
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./config/webpack.config.js');

module.exports = function (configPath, port) {

  var configFile = path.join(process.cwd(),configPath);
  if (fs.existsSync(configFile)) {
    const customConfig = require(configFile);
    return merge.smart(baseConfig(port), customConfig, {
        plugins: [
          new webpack.HotModuleReplacementPlugin()
        ]
    });
  }

  return baseConfig;
}
