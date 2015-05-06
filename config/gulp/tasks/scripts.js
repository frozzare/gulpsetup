/**
 * Require modules.
 */

var gulp         = require('gulp');
var concat       = require('gulp-concat');
var config       = require('../config');
var header       = require('../header');
var size         = require('gulp-size');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

/**
 * ES5 scripts task.
 */

gulp.task('scripts', ['babel'], function () {
  return gulp.src(config.scripts.files)
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(header())
    .pipe(size())
    .pipe(gulp.dest(config.scripts.dest));
});
