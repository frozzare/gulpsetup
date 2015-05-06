/**
 * Require modules.
 */

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var config       = require('../config');
var concat       = require('gulp-concat');
var cssmin       = require('gulp-cssmin');
var header       = require('../header');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

/**
 * Sass task.
 */

gulp.task('sass', function () {
  return gulp.src([
      config.sass.src
    ])
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.settings))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browser: ['last 2 version'] }))
    .pipe(cssmin())
    .pipe(header())
    .pipe(gulp.dest(config.sass.dest));
});

/*

gulp.task('sass', function() {
  return gulp.src([config.sass.src, src + 'css/components/*.css'])
    .pipe(concat(
      'style.min.css'
    ))
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.settings))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(cssmin())
    .pipe(header(banner, {
      package: pkg
    }))
    .pipe(gulp.dest(config.sass.dest));
});

 */
