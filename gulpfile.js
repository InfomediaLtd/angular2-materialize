var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var tsc = require('gulp-typescript');
var exec = require('child_process').exec;

var paths = {
    dist: './dist',
    sourceFiles: ['./src/*'],
    toDelete: ['./dist/index.ts','./dist/custom-event-polyfill.ts','./dist/materialize-directive.ts','./dist/materialize-module.ts','./dist/src','./dist/app','./dist/test'],
    distSourcesFiles: ['./dist/src/*']
};

gulp.task('clean', function () {
    return gulp.src(paths.dist, {read: false}).pipe(rimraf({force: true}));
});

gulp.task('copySources', function(){
    return gulp.src(paths.sourceFiles).pipe(gulp.dest(paths.dist));
});

gulp.task('tsc', function () {
    var tsProject = tsc.createProject('tsconfig.json', {outDir:"dist",declaration:true});
    var tsResult = tsProject.src().pipe(tsc(tsProject));
    tsResult.pipe(gulp.dest(paths.dist));
    return tsResult.dts.pipe(gulp.dest(paths.dist));
});

gulp.task('ngc', function (cb) {
  exec('ngc -p tsconfig-ngc.json', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('copy', function(){
    return gulp.src(paths.distSourcesFiles).pipe(gulp.dest(paths.dist));
});

gulp.task('cleanup', function () {
    return gulp.src(paths.toDelete, {read: false}).pipe(rimraf({force: true}));
});

// entry point - run tasks in a sequence
gulp.task('default', function (callback) {
    runSequence(
        'clean',
        'copySources',
        'ngc',
        'copy',
        'cleanup',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});
