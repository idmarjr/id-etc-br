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

// Input location variables
const scssInput = './scss/**/*.scss';
const jsInput = './js/**/*.js'
const imgInput = './img/**/*'

// Output location variables
const cssAssets = './assets/css/';
const jsAssets = './assets/js/';
const imgAssets = './assets/img/'

////////////////////////////////////////////////////////////////////////////////
// Delete build/ and assets/ folders
////////////////////////////////////////////////////////////////////////////////
function clean() {
	return del(['./dist/', './assets/']);
}

////////////////////////////////////////////////////////////////////////////////
// Copy files to build/
////////////////////////////////////////////////////////////////////////////////
function copyFilesToBuild() {
	const files = [
		'index.html',
		'service-worker.js',
		'manifest.json',
		'./assets/**/*'
	];

	return gulp
	.src(files, {base: '.'})
	.pipe(gulp.dest('./dist/'))
};

////////////////////////////////////////////////////////////////////////////////
// Copy external CSS dependencies
////////////////////////////////////////////////////////////////////////////////
function copyCssDependencies() {
	const CssDependenciesList = [
		'./node_modules/ac-css-reset/dist/ac-css-reset.css'
	];

	return gulp
	.src(CssDependenciesList)
	.pipe(gulp.dest(cssAssets))
};

////////////////////////////////////////////////////////////////////////////////
// Copy external JS dependencies
////////////////////////////////////////////////////////////////////////////////
function copyJsDependencies() {
	const jsDependenciesList = [
		'./node_modules/html5shiv/dist/html5shiv.min.js'
	];

	return gulp
	.src(jsDependenciesList)
	.pipe(gulp.dest(jsAssets))
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
	.pipe(gulp.dest(cssAssets))
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
	.pipe(gulp.dest(jsAssets))
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
	.pipe(newer(imgAssets))
	.pipe(imagemin(imageOptimization))
	.pipe(gulp.dest(imgAssets))
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

// Default task
exports.default = series(
	clean,
	parallel(
		copyCssDependencies,
		copyJsDependencies,
		scssCompile,
		jsCompile,
		imagesOptimize
	),
	watch
);

// Build for deploy task
exports.build = series(
	clean,
	parallel(
		copyCssDependencies,
		copyJsDependencies,
		scssCompile,
		jsCompile,
		imagesOptimize
	),
	copyFilesToBuild
)