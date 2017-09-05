'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('img', function () {
  gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function () {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('serve', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('default', ['serve', 'html', 'sass', 'img', 'fonts', 'js', 'watch']);
