"use strict";
const { series, parallel } = require('gulp');

const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Location variables
const scssInput = './sass/**/*.scss';
const jsInput = './js/**/*.js'
const sassOutput = './dist/css/';
const distJS = './dist/js'

// Sass output options
let sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

function scssCompile() {
	return gulp
	.src(scssInput)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(postcss( [ autoprefixer(), cssnano() ] ))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(sassOutput))
};

function jsCompile() {
	return gulp
	.src(jsInput)
	.pipe(concat('app.js'))
	.pipe(terser())
	.pipe(gulp.dest(distJS))
};

function watch() {
	return gulp
	.watch(
		[scssInput, jsInput],
		parallel(scssCompile, jsCompile)
	)
	.on('change', function(path) {
		console.log(`File ${path} was changed, running tasks...`);
	});
};

// Export tasks
exports.scssCompile = scssCompile;
exports.jsCompile = jsCompile;

exports.default = series(
	parallel(scssCompile, jsCompile),
	watch
);