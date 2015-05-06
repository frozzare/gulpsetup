/**
 * Require modules.
 */

var gulp         = require('gulp');
var browserify   = require('browserify');
var babelify     = require('babelify');
var config       = require('../config');
var source       = require('vinyl-source-stream');

/**
 * ES6 with Babel.
 */

gulp.task('babel', function () {
  return browserify({
    entries: config.scripts.babel.main,
    debug: true
  })
  .transform(babelify.configure({
    resolveModuleSource: function (relativeSourcePath) {
      var parts = relativeSourcePath.split('/');
      var file  = parts.pop();
      var first = parts.shift();
      var path  = parts.join('/');

      path = (path.length ? path + '/' : '');

      if (!first) {
        first = file;
      }

      return require('path').join(__dirname, config.scripts.babel.src, first, path, file);
    }
  }))
  .bundle()
  .pipe(source('main.min.js'))
  .pipe(gulp.dest(config.scripts.dest));
});
