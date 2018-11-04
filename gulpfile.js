const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass');
  tinypng = require('gulp-tinypng-compress'),
  netlify = require('gulp-netlify')

// Sass Task
gulp.task('sass', function() {
  return gulp
    .src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// Image Task
  gulp.task('image', function () {
    gulp.src('img/*')
        .pipe(tinypng({
            key: 'API_KEY',
            sigFile: 'images/.tinypng-sigs',
            log: false
        }))
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());
});

// Heroku
gulp.task('serveprod', function() {
  connect.server({
    root: '/Users/jonathanhaines/Desktop/Code/2018/constructiveco',
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

// Serve Task
gulp.task('serve', ['sass', 'image'], function() {
  browserSync.init({
    server: './src'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['img/*'], ['image']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
