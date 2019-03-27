var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src("./Aula 4")
    .pipe(webserver({
      host:"localhost",
      port:8020,
      livereload: true,
      directoryListing: false,
      open: true,
      /*fallback:"hello.js"*/
    }));
});