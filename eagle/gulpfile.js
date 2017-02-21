var gulp = require('gulp'),
    changed = require('gulp-changed'),
    ts = require('gulp-typescript'),
    del = require('del'),
    path = require('path'),
    using = require('gulp-using'),
    exec = require('child_process').exec;
    sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject("src/tsconfig.json");

gulp.task('transpile', function () {
  var tsResult = gulp.src('src/**/*.ts')
                   .pipe(changed('public', { extension: '.js' }))
                   .pipe(using({prefix:'Transpiling file', path:'cwd', color:'green', filesize:false}))
                   .pipe(sourcemaps.init())
//                   .pipe(tsProject());
//                   .pipe(tsProject(ts.reporter.defaultReporter()));
//                   .pipe(tsProject(ts.reporter.fullReporter(true)));
                   .pipe(tsProject(ts.reporter.longReporter()));

  // attribute sourceRoot not needed, because sourcemaps writes the
  // complete source code into map file (in attribute sourcesContent)
  var result = tsResult.js
                 //.pipe(sourcemaps.write('./', { sourceRoot: 'src' } ))
                 .pipe(sourcemaps.write('./')) 
                 .pipe(gulp.dest('public'));
  return result;
});

gulp.task('clean', function () {
  console.log('deleting public/ng2 and public/html');
  return del(['public/ng2', 'public/html']);
});

gulp.task('start', [ 'build' ], function (cb) {
  exec('node public/js/main.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('copy', function () {
     gulp
      .src('src/ng2/**/*.html')
      .pipe(changed('public/html', { extension: '.html' }))
      .pipe(using({prefix:'Copying file', path:'cwd', color:'blue', filesize:false}))
      .pipe(gulp.dest('public/html/'));
});

gulp.task('cleanAndBuild', [ 'clean' ], function () {
  gulp.start('build');
});

gulp.task('build', ['copy', 'transpile'], function () {
  console.log('   ... build results written to ' + path.join(__dirname, '/public/ng2'));
});

gulp.task('run', ['build']);
gulp.task('default', ['run']);