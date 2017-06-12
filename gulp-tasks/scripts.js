var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var util = require('gulp-util');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task('scripts', function(){
  return gulp.src( ['angular.js','custom.js'] , {cwd: 'src/javascript'} )
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['babili']}))
    .pipe(concat('final.js'))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('build/js'))
    .on('error', function (err) {
      util.log(util.colors.red('[Error]'),
      err.toString());
    })
});
