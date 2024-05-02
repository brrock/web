const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss')

gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('src/output'));
  });
  gulp.task('purgecss', () => {
    return gulp.src('src/**/*.css')
        .pipe(purgecss({
            content: ['src/**/*.njk']
        }))
        .pipe(gulp.dest('src/'))
})