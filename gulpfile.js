/* eslint-disable */
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('babel-register');
var source = require('vinyl-source-stream');

var path = {
  ALL:['./components/*.js','index.html']
}

gulp.task('watch', function(){
  gulp.watch(path.ALL,['transform']);
})


gulp.task('transform', function () {
  return browserify("./components/app.js")
        .transform("babelify", { global: true, presets: ["es2015", "react"], ignore: ['**/node_modules'] })
        .bundle()
        .on("error", function (err) { throw "Error : " + err.message })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['watch']);
