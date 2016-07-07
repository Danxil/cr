/// <binding />
'use strict';
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var del = require('del');
var webpack = require('webpack');

var config = require('./gulpconfig.json');
var tsOptions = require('./tsconfig.json').compilerOptions;
var webpackConfig = require('./webpack.config');

var tsPaths = [
  config.bases.src + '**/*.ts',
  config.bases.src + '**/*.tsx',
]


var serverTsPaths = tsPaths.concat(['!' + webpackConfig.entry])

gulp.task('default', [
  'build',
  'copy:watch',
  'views:watch'
]);

gulp.task('build', [
  'views',
  'copy'
]);

gulp.task('clean', function (cb) {
  del.sync([config.bases.dist + '/*'], {force: true});
  cb();
});

gulp.task('copy', function () {
  return gulp.src(config.path.copy, {read: true})
    .pipe(gulp.dest(config.bases.dist))
});

gulp.task('copy', function () {
  return gulp.src(config.path.copy)
    .pipe(gulp.dest(config.bases.dist))
});

gulp.task('copy:watch', function () {
  return gulp.watch(config.path.copy, ['copy']);
});

gulp.task('views', function () {
  return gulp.src(config.path.views)
    .pipe(gulp.dest(config.bases.dist))
});

gulp.task('views:watch', function () {
  return gulp.watch(config.path.views, ['views']);
});

gulp.task('client:ts', function (callback) {
  return webpack(webpackConfig, function(err, status) {
    if (err) throw err;

    callback();
  })
});

gulp.task('server:ts', function () {
  console.log(serverTsPaths)

  return gulp.src(serverTsPaths)
    .pipe(plug.plumber())
    .pipe(plug.sourcemaps.init())
    .pipe(plug.typescript(tsOptions))
    .pipe(plug.sourcemaps.write('./'))
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('ts:watch', function () {
  return gulp.watch(tsPaths, ['server:ts', 'client:ts']);
});
