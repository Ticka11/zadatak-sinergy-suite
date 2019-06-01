var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var bowerFiles = require('main-bower-files');

/* sass tasks */
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});
gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', ['sass']);
});


gulp.task('index', function () {
    var target = gulp.src('./app/app.html');
    var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});

    return target
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(sources))
        .pipe(gulp.dest('./app/'));
});

gulp.task('default', function() {
    runSequence('sass', 'index');
});