var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('task-name', function() {
  // Stuff here
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function () {
  return gulp.src('app/scss/global.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/style.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});