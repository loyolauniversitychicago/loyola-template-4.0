//
const browserSync = require('browser-sync').create();
// const requireDir = require('require-dir');


const gulp = require('gulp');
const gulpIf = require('gulp-if');
// const jshint = require('gulp-jshint');
const fileinclude = require('gulp-file-include');
const useref = require('gulp-useref');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
// const postcss = require('gulp-postcss')
// const concat = require('gulp-concat');
// const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');
// const cssnano = require('gulp-cssnano');
// const gulpSequence = require('gulp-sequence');

const config = {
  devDir: './development',
  deployDir: './deploy',
};

const { src, dest, series, parallel, watch } = require('gulp');

// enables file inclusion
function htmlInclude() {
    return gulp.src(['./development/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./deploy'));
    cb();
};

function sassFramework() {
    return gulp
    .src(config.devDir + '/scss/scss-framework/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
    cb();
};

function sassGrid() {
    return gulp
    .src(config.devDir + '/scss/scss-grid/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
    cb();
};

function sassTypography() {
    return gulp
    .src(config.devDir + '/scss/scss-typography/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
    cb();
};

function sassPanels() {
    return gulp
    .src(config.devDir + '/scss/scss-panels/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
    cb();
};

function referencePaths() {
    return gulp
    .src('./development/*.html')
    .pipe(useref())
		.pipe(gulp.dest(config.deployDir));
    cb();
};

function indexBuild() {
  var target = gulp.src('./development/*.html');
  var sources = gulp.src(['./deploy/js/**/*.js', './deploy/css/**/*.css'], {read: false});
 	return target.pipe(inject(sources, {ignorePath: 'deploy/', addRootSlash: false}))
 	.pipe(gulpIf('*.html', fileinclude({prefix: '@@', basepath: '@file'})))
	.pipe(gulp.dest(config.deployDir));
  cb();
};

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchFiles() {
  browserSync.init({
    server: {
        baseDir: "./deploy"
    }
  });
  watch('./development/**/*.html', gulp.series('indexBuild', 'browserSyncReload'));
  watch(config.devDir + '/scss/**/*.scss', gulp.series(parallel('sassFramework', 'sassGrid', 'sassTypography', 'sassPanels'), 'browserSyncReload'));
  watch(config.devDir + '/js/**/*.js', gulp.series('browserSyncReload'));
};

exports.default = series(
  parallel(sassFramework, sassGrid, sassTypography, sassPanels),
  referencePaths,
  indexBuild,
  watchFiles,
  browserSyncReload
);
exports.indexBuild = indexBuild;
exports.referencePaths = referencePaths;
exports.sassFramework = sassFramework;
exports.sassGrid = sassGrid;
exports.sassTypography = sassTypography;
exports.sassPanels = sassPanels;
exports.watchFiles = watchFiles;
exports.browserSync = browserSync;
exports.browserSyncReload = browserSyncReload;
