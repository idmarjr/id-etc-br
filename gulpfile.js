"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Location variables
const sassInput = './sass/**/*.scss';
const sassOutput = './css/';
const jsInput = './js/**/*.js'
const distJS = './dist/js'
const dist = './dist/';

// Sass output options
let sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

function scssCompile() {
	return gulp
	.src(sassInput)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(postcss( [ autoprefixer() ] ))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(sassOutput))
};

function jsCompile() {
	return gulp
	.src(jsInput)
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest(distJS))
};

function distCompile() {
	return gulp
	.src(sassInput)
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(postcss([ autoprefixer(), cssnano() ]))
	.pipe(gulp.dest(dist))
};

function watch() {
	return gulp
	.watch(sassInput, scssCompile)
	.on('change', function(path) {
		console.log(`File ${path} was changed, running tasks...`);
	});
};

exports.jsCompile = jsCompile;
exports.dist = distCompile;
exports.watch = watch;