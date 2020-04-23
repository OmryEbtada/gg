const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');



gulp.task('pug', async function () {
    gulp.src('pug/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('connect', async () => {
    connect.server({
        root: 'dist',
        livereload: true,
    });
});

gulp.task('watch', async function () {
    
    gulp.watch(['pug/*.pug', 'gulpfile.js'], gulp.series('pug'));
});

gulp.task('default', gulp.series('connect', 'watch'))



/**
 * @src (str|array)
 * **
 * **
 * **
 * @dest output Folder
 * 
 */