"use strict";
const { series, parallel } = require('gulp');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
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
const imgInput = './img/**/*'

const scssDevOutput = './css/';
const distJS = './dist/js/'
const imgOutput = './dist/img/'

////////////////////////////////////////////////////////////////////////////////
// Clean build/ folder task
////////////////////////////////////////////////////////////////////////////////
function clean() {
	return del(['./dist/', './css/']);
}

////////////////////////////////////////////////////////////////////////////////
// Copy individual files to build/ folder
////////////////////////////////////////////////////////////////////////////////
function copyFilesToBuild() {
	const files = [
		'index.html',
		'service-worker.js',
		'manifest.json',
		'./css/**/*'
	];

	return gulp
	.src(files, {base: '.'})
	.pipe(gulp.dest('./dist/'))
};

////////////////////////////////////////////////////////////////////////////////
// Compile CSS task
////////////////////////////////////////////////////////////////////////////////
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
	.pipe(gulp.dest(scssDevOutput))
};

////////////////////////////////////////////////////////////////////////////////
// Compile JS task
////////////////////////////////////////////////////////////////////////////////
function jsCompile() {
	return gulp
	.src(jsInput)
	.pipe(plumber())
	.pipe(concat('app.js'))
	.pipe(terser())
	.pipe(gulp.dest(distJS))
};

////////////////////////////////////////////////////////////////////////////////
// Optimize images
////////////////////////////////////////////////////////////////////////////////
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
	.src(imgInput)
	.pipe(newer(imgOutput))
	.pipe(imagemin(imageOptimization))
	.pipe(gulp.dest(imgOutput))
}

////////////////////////////////////////////////////////////////////////////////
// Watch task
////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
// Export tasks
////////////////////////////////////////////////////////////////////////////////
exports.clean = clean;
exports.scssCompile = scssCompile;
exports.jsCompile = jsCompile;
exports.images = imagesOptimize;

// Default task
exports.default = series(
	clean,
	parallel(scssCompile, jsCompile),
	watch
);

// Build for deploy task
exports.build = series(
	clean,
	parallel(scssCompile, jsCompile, imagesOptimize, copyFilesToBuild),
)