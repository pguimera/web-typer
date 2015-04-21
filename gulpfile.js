'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function (){
    return gulp.src('./src/webTyper.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist'));
});

// Minify
gulp.task('default', ['minify']);
