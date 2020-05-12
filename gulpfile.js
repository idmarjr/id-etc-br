"use strict";
const { series, parallel } = require('gulp');

const gulp = require('gulp');
const plumber = require("gulp-plumber");
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');

// Location variables
const scssInput = './scss/**/*.scss';
const jsInput = './js/**/*.js'
const scssOutput = './dist/css/';
const distJS = './dist/js'

function clean() {
	return del(['./dist/']);
}

function copyFilesToBuild() {
	const files = [
		'index.html',
		'service-worker.js',
		'manifest.json'
	];

	return gulp
	.src(files, {base: '.'})
	.pipe(gulp.dest('./dist/'))
};

function scssCompile() {
	const sassOptions = {
		errLogToConsole: true,
		outputStyle: 'expanded'
	};

	return gulp
	.src(scssInput)
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(postcss( [ autoprefixer(), cssnano() ] ))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(scssOutput))
};

function jsCompile() {
	return gulp
	.src(jsInput)
	.pipe(plumber())
	.pipe(concat('app.js'))
	.pipe(terser())
	.pipe(gulp.dest(distJS))
};

function imagesOptimize() {
	const imageOptimization = [
		imagemin.gifsicle({ interlaced: true }),
		imagemin.mozjpeg({ progressive: true }),
		imagemin.optipng({ optimizationLevel: 5 }),
		imagemin.svgo({
			plugins: [
				{
					removeViewBox: false,
					collapseGroups: true
				}
			]
		})
	];

	return gulp
	.src('./img/**/*')
	.pipe(newer('./dist/img/'))
	.pipe(imagemin(imageOptimization))
	.pipe(gulp.dest('./dist/img/'))
}

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
exports.images = imagesOptimize;

exports.default = series(
	clean,
	parallel(scssCompile, jsCompile),
	watch
);