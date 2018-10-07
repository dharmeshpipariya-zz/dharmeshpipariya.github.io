'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cachebust = require('gulp-cache-bust');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(cachebust({ type: 'timestamp' }))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('img', function () {
  return gulp.src('./assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function () {
  gulp.src('./assets/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('js', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./*.html', ['html']);
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task('serve', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('build', ['html', 'sass', 'img', 'fonts', 'js']);

gulp.task('default', ['serve', 'html', 'sass', 'img', 'fonts', 'js', 'watch']);
