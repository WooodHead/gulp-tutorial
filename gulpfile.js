var gulp=require('gulp');
var gutil=require('gulp-util');
var jshint=require('gulp-jshint');
var sass=require('gulp-sass');

gulp.task('default',['watch'],function(){
	return gutil.log('Gulp is running!');
});

gulp.task('copyHtml',[],function(){
gulp.src('source/*.html').pipe(gulp.dest('public'));
});
gulp.task('jshint',[],function(){
	return gulp.src('source/javascript/**/*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css',function(){
	return gulp.src('source/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('watch',function(){

	gulp.watch('source/javascript/**/*.js',['jshint']);
	gulp.watch('source/scss/**/*.scss',['build-css']);
});
