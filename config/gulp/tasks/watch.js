/**
 * Require modules
 */

var gulp   = require('gulp');
var config = require('../config');

/**
 * Watch task.
 */

gulp.task('watch', function () {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.scripts.babel.src, ['scripts']);
});
