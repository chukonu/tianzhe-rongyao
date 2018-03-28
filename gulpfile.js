var gulp = require('gulp');
var closureCompiler = require('google-closure-compiler').gulp();
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

function clean() {
	return del('./dist/**/*');
}

function html() {
	return gulp.src(['./index.html']).pipe(gulp.dest('./dist/'));
}

function styles() {
	return gulp.src(['./styles/**/*', '!./styles/*.css']).pipe(gulp.dest('./dist/styles/'));
}

function concatCss() {
	var css = [
		'./node_modules/material-design-lite/material.min.css',
		'./styles/*.css'
	];
	return gulp.src(css).pipe(concat('app.css')).pipe(gulp.dest('./dist/styles/'));
}

function vendors() {
	var vendors = [
		'./node_modules/angular/angular.min.js',
		'./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
		'./node_modules/mobile-drag-drop/index.min.js',
		'./node_modules/material-design-lite/material.min.js'
	];
	return gulp.src(vendors).pipe(concat('vendors.js')).pipe(gulp.dest('./dist/'));
}

function compileJs() {
	return gulp.src(['./src/_*.js', './src/*.js'], { base: './' })
		.pipe(closureCompiler({
			compilation_level: 'SIMPLE',
			warning_level: 'DEFAULT',
			language_in: 'ECMASCRIPT6_STRICT',
			language_out: 'ECMASCRIPT5_STRICT',
			output_wrapper: '(function(){\n%output%\n}).call(this)',
			js_output_file: 'app.js'
		}))
		.pipe(gulp.dest('./dist/'));
}

function compileJsWithSourceMaps() {
	return gulp.src(['./src/_*.js', './src/*.js'], { base: './' })
		.pipe(sourcemaps.init())
		.pipe(closureCompiler({
			compilation_level: 'SIMPLE',
			warning_level: 'DEFAULT',
			language_in: 'ECMASCRIPT6_STRICT',
			language_out: 'ECMASCRIPT5_STRICT',
			output_wrapper: '(function(){\n%output%\n}).call(this)',
			js_output_file: 'app.js'
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('./dist/'));
}

var dev = gulp.series(clean, gulp.parallel(html, concatCss, styles, vendors, compileJsWithSourceMaps));
var dist = gulp.series(clean, gulp.parallel(html, concatCss, styles, vendors, compileJs));

gulp.task('dev', dev);
gulp.task('default', dist);
