var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var $ = require('jquery');


gulp.task('script', function(cb){
	// tarea script
	gulp.src('src/js/*.js')

		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function() {
	gulp.src(['src/sass/main.scss', 'src/css/*.css'])

	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css'));
	// tarea style
});

gulp.task('images', function() {
	// tarea images
	gulp.src('src/img/**/*')

		.pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['images', 'style', 'script']);
