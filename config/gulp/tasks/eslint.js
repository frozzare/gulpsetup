/**
 * Require modules.
 */

var gulp   = require('gulp');
var config = require('../config');
var eslint = require('gulp-eslint');

/**
 * Eslint task.
 */

gulp.task('lint', function () {
  return gulp.src([
      config.scripts.babel.src
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
