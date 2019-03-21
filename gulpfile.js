const gulp = require('gulp');
const sass  = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
    return gulp.src('./assets/scss/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./'));
});

// Watch Task
gulp.task('watch', function() {
     gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
 });
