var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

//tarea sass
gulp.task('sass', function(){
  //fuente de los archivos
  gulp.src('**/*.scss', {cwd: 'src/scss'})
    .pipe(sourcemaps.init())
    .pipe(
    	sass({
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle: 'expanded'
	    }).on('error', sass.logError)
	  )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('maps'))

	   //destino de los archivos
	   .pipe( gulp.dest('build/css/' ))
     .pipe(cssmin())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('build/css/'));
});
