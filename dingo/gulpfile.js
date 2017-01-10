var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("src/tsconfig.json");
var del = require('del');
var exec = require('child_process').exec;
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

gulp.task('build', function () {
  var tsResult = tsProject
                   .src()
                   .pipe(sourcemaps.init())
                   .pipe(tsProject());

  // attribute sourceRoot not needed, because sourcemaps writes the
  // complete source code into map file (in attribute sourcesContent)
  var result = tsResult.js
                 //.pipe(sourcemaps.write('./', { sourceRoot: 'src' } ))
                 .pipe(sourcemaps.write('./')) 
                 .pipe(gulp.dest('public/app/'));
  console.log('   ... build results written to ' + path.join(__dirname, '/public/app'));
  return result;
});

gulp.task('clean', function () {
  return del(['public/js/*']);
});

gulp.task('start', [ 'build' ], function (cb) {
  exec('node public/js/main.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('run', ['build']);
gulp.task('default', ['run']);


