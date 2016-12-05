var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm'); // npm install gulp-jspm 
 
gulp.task('default', function(){
    return gulp.src('src/scripts/app.js')
        .pipe(gulp_jspm())
        .pipe(gulp.dest('build/'));
});