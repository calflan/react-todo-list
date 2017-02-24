// Assign gulp dependencies to the variable 'gulp'
var gulp = require('gulp');

// Assign gulp's sass comiling dependencies to the variable 'sass'
var sass = require('gulp-sass');

// Assign css minifier to the variable 'cssmin'
var cssmin = require('gulp-cssmin');

// Assign gulp's renaming dependencies to the variable 'rename'
var rename = require('gulp-rename');

// Assign the sass file that is to be compiled, to the variable 'input'
var input = 'css/sass.scss'

/*
* Assign the directory 'css' (which is where the
* resulting minified css file will be outputted),
* to the variable 'output'
*/
var output = 'css';

// Assign error logs to the the variable 'errors'
var errors = {
	// Log errors in the console
	errLogToConsole: true,
	// Display expanded errors
	outputStyle: 'expanded'
};


/*
* This task will run the 'default' task along with the
* 'sass' task below (even when the default task does
* not contain anything).
*/
gulp.task('default', ['sass'])


/*
* This task is ran to compile the sass file into a
* minified css file, so that it can be read by the HTML.
*
* It takes the 'input' variable and compiles the sass it
* contains. Then it minifies and stores the resulting CSS in the 'output'
* variable.
*/
gulp.task('sass', function() {
	return gulp
   // Find `sass.scss` file in the `css/` folder
   .src(input)

   // Run Sass on file and log any errors
   .pipe(sass(errors).on('error', sass.logError))

   // Run 'gulp-cssmin' on the file to minify the outputting css
   .pipe(cssmin())

   // Append the suffix '.min' to the file to show that this is the minified version
   .pipe(rename({suffix: '.min'}))

   // Write the resulting CSS in the output destination
   .pipe(gulp.dest(output));

});
