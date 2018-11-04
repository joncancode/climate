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

// Netlify
gulp.task('deploy', function () {
  gulp.src('./public/**/*')
    .pipe(netlify({
      site_id: '1461a221-a1d3-4588-9545-5c8fc9ca3320',
      access_token: '2ce68af73b145a6aa86ccc51296b680edc8a053ddac3e9ee14c1edfce08d27d3'
    }))
})

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
