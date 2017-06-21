var gulp = require('gulp');
var gutil = require('gulp-util');
//var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var webserver = require('gulp-webserver');

var paths = {
    //sass: ['./scss/**/*.scss'],
    sass: ['./www/scss/**/*.scss'],
    web: ['./www/']
};

gulp.task('sass', function (done) {
    gulp.src(paths.sass)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('webserver', function () {
    gulp.src(paths.web)
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8003
        }));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

//gulp.task('default', ['watch', 'webserver']);
gulp.task('default', ['watch']);