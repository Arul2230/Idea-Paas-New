const gulp = require('gulp');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const wait = require('gulp-wait');
const sass = require('gulp-sass');


// RUN: gulp css --option theme1|2|3
gulp.task('css', () => {
  let sassStream;
  const theme = process.argv[4];
  sassStream = gulp.src(['./src/**/*.scss', '!./src/_theme*.scss', '!./src/themeConstants.scss'], {
    base: "./"
  })
  return sassStream
    .pipe(wait(3000))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(`build/static/css/${theme}/`))
});

// RUN: gulp default --option theme1|2|3
gulp.task('default', gulp.series('css'));
