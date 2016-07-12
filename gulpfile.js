// include gulp
var gulp = require('gulp');

//include plug-ins
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

// JS hint tasks
gulp.task('jshint', function() {
	gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// browser-sync tasks
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./*.html').on('change', browserSync.reload);
})

//concatScripts tasks
gulp.task('concatScripts', function() {
						//whatever js files you have in the project
	gulp.src(['jquery.js', 'reveal.js', 'main.js', 'script.js', 'a.js', 'b.js'])
								// name of file to append js to
		.pipe(concat("app.js"))
								//destination directory
		.pipe(gulp.dest('js'));
})

// default gulp task
gulp.task('default', ['jshint', 'browser-sync', 'concatScripts'], function(){});
