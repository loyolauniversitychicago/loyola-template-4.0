var gulp = require('gulp');
var gulpIf = require('gulp-if');
var jshint = require('gulp-jshint');
var fileinclude = require('gulp-file-include');
var useref = require('gulp-useref');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpSequence = require('gulp-sequence');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');

requireDir('./gulp-tasks');
// maps directories
var config = {
    devDir: './development',
    deployDir: './deploy',
		T4Dir: './T4',
};
// checks js
gulp.task('lint', function() {
  return gulp.src('./development/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
// concat and minify js
gulp.task('minify', function(){
  return gulp.src('./development/js/*.js')
    .pipe(gulp.dest(config.deployDir + '/js'))
    //.pipe(rename('all.min.js'))
//  .pipe(uglify())
    .pipe(gulp.dest(config.deployDir + '/js'));
});
// enables file inclusion
gulp.task('fileinclude', function() {
  gulp.src(['./development/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('./deploy'));
});
// looks for sass in dev scss > scss-grid writes sourcemaps sends to deploy css
gulp.task('sass-grid', function() {
    return gulp.src(config.devDir + '/scss/scss-grid/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
});
// looks for sass in dev scss > scss-framework writes sourcemaps sends to deploy css
gulp.task('sass-framework', function() {
    return gulp.src(config.devDir + '/scss/scss-framework/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
});
// looks for sass in dev scss > scss-typography writes sourcemaps sends to deploy css
gulp.task('sass-typography', function() {
    return gulp.src(config.devDir + '/scss/scss-typography/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
});
// looks for sass in dev scss > scss-typography writes sourcemaps sends to deploy css
gulp.task('sass-panels', function() {
    return gulp.src(config.devDir + '/scss/scss-panels/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest(config.deployDir + '/css'));
});
// moves all dev fonts to deploy
gulp.task('fonts', function() {
    return gulp.src(config.devDir + '/fonts/**/*')
    .pipe(gulp.dest(config.deployDir + '/fonts'));
});
// optimise css and js from dev to deploy
gulp.task('useref', function() {
  return gulp.src('./development/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest(config.deployDir));
});
// writes reference paths
gulp.task('index', ['useref'], function () {
  var target = gulp.src('./development/*.html');
  var sources = gulp.src(['./deploy/js/**/*.js', './deploy/css/**/*.css'], {read: false});
 	return target.pipe(inject(sources, {ignorePath: 'deploy/', addRootSlash: false}))
 	.pipe(gulpIf('*.html', fileinclude({prefix: '@@', basepath: '@file'})))
	.pipe(gulp.dest(config.deployDir));
});
// reloads any time html is updated
gulp.task('html-watch', ['index'], function() {
    browserSync.reload();
});
// reloads any time sass-framwork files are updated
gulp.task('sass-grid-watch', ['sass-grid'], function() {
    browserSync.reload();
});
// reloads any time sass-framwork files are updated
gulp.task('sass-framework-watch', ['sass-framework'], function() {
    browserSync.reload();
});
// reloads any time sass-typography files are updated
gulp.task('sass-typography-watch', ['sass-typography'], function() {
    browserSync.reload();
});
// reloads any time sass-panels files are updated
gulp.task('sass-panels-watch', ['sass-panels'], function() {
    browserSync.reload();
});
// reloads any time js is updated
gulp.task('js-watch', ['minify'], function() {
    browserSync.reload();
});
// run tasks
gulp.task('serve', ['lint', 'sass-grid', 'sass-framework', 'sass-typography', 'sass-panels', 'index', 'minify'], function () {
    // serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./deploy"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('./development/**/*.html', ['html-watch']);
    gulp.watch(config.devDir + '/scss/scss-grid/**/*.scss', ['sass-grid-watch']);
    gulp.watch(config.devDir + '/scss/scss-framework/**/*.scss', ['sass-framework-watch']);
    gulp.watch(config.devDir + '/scss/scss-typography/**/*.scss', ['sass-typography-watch']);
    gulp.watch(config.devDir + '/scss/scss-panels/**/*.scss', ['sass-panels-watch']);
		gulp.watch(config.devDir + '/js/**/*.js', ['js-watch']);
});
// sequence tasks - including the gulp-tasks directory
gulp.task('default', gulpSequence(['serve', 'fonts'], 't4_media', 't4_css', 't4_nav'));


//END GULP.JS
