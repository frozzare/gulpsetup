/**
 * Require modules.
 */

var path = require('path');

/**
 * Config.
 */

var dest   = './dist/';
var src    = './src/assets/';
var config = {

  /**
   * Sass configuration.
   */

  sass: {
    src: src + 'scss/**/*.{sass,scss}',
    dest: dest + 'css/',
    settings: {
      sourceComments: 'map'
    }
  },

  /**
   * Scripts configuration.
   */

  scripts: {
    babel: {
      main: src + 'js/main.js',
      src: src + 'js/packages'
    },
    dest: dest + 'js',
    files: []
  }

};

module.exports = config;
