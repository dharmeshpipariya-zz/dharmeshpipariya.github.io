'use strict';

var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gulpSassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
var gulpIf = require('gulp-if');
var gulpCleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cachebust = require('gulp-cache-bust');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var minifyCss = false;
var paths = {
  src: './',
  dest: './dest/',
  icons: './',
  fonts: './'
};

// Helper Tasks
function cleanTask(src) {
  return gulp.src(src, { read: false }).pipe(clean());
}

function styleLint(src) {
  return gulp.src(src)
    .pipe(gulpSassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': true
      },
      rules: {
        'no-color-keywords': 0,
        'no-color-literals': 0,
        'no-duplicate-properties': 0,
        'no-ids': 0,
        'no-transition-all': 0,
        'no-vendor-prefixes': 0,
        'force-element-nesting': 0,
        'force-pseudo-nesting': 0,
        'nesting-depth': 0,
        'property-sort-order': 0
      },
      configFile: 'sass-lint.yml'
    }))
    .pipe(gulpSassLint.format())
    .pipe(gulpSassLint.failOnError());
}

function copyTask(src, dest) {
  return gulp.src(src).pipe(gulp.dest(dest));
}

function buildSCSS(src, dest) {
  return gulp.src(src)
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(autoprefixer())
    .pipe(gulpIf(minifyCss, gulpCleanCss({ rebase: false })))
    .pipe(gulp.dest(dest));
}

function createIconFont(src, dest, config) {
  return gulp.src(src)
    .pipe(iconfontCss({
      fontName: config.fontName,
      cssClass: config.cssClass,
      path: config.path,
      targetPath: config.targetPath,
      fontPath: config.fontPath,
      cacheBuster: new Date().getTime()
    }))
    .pipe(iconfont({
      fontName: config.fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest(dest));
}


gulp.task('clean', function () {
  return cleanTask(paths.dest);
});

gulp.task('iconfont', function () {
  let config = {
    fontName: 'iconfont',
    cssClass: 'fi',
    path: './assets/scss/_iconfontPlaceholder.scss',
    targetPath: '../scss/_iconfont.scss',
    fontPath: '../fonts/'
  };
  return createIconFont('./assets/icons/*.svg', './assets/fonts', config);
});

gulp.task('stylelint', function () {
  return styleLint(['./assets/scss/**/*.scss', '!./assets/scss/**/_iconfontPlaceholder.scss']);
});

gulp.task('scss', function () {
  return buildSCSS('./assets/scss/**/*.scss', './dist/css');
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
  return copyTask('./assets/fonts/**/*.{eot,ttf,woff,woff2}', './dist/fonts');
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
  gulp.watch('./*.html', gulp.series('html'));
  gulp.watch('./assets/scss/**/*.scss', gulp.series('scss'));
  gulp.watch('./assets/js/**/*.js', gulp.series('js'));
});

gulp.task('serve', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('build', gulp.series('stylelint', 'html', 'scss', 'img', 'fonts', 'js'));

gulp.task('default', gulp.series('serve', 'build', 'watch'));
