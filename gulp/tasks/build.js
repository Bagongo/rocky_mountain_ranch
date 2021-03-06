var gulp = require('gulp'),
imageMin = require('gulp-imageMin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task("previewDist", function(){
	browserSync.init({
	    notify: false,
	    server: {
	      baseDir: "docs"
	    }
	});
});

gulp.task("deleteDistFolder", function(){
	return del("./docs");
});

gulp.task("moveFonts", ["deleteDistFolder"], function(){
	return gulp.src("./app/assets/fonts/**/*").
		pipe(gulp.dest("./docs/assets/fonts"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function(){
	return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
		.pipe(imageMin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder", "styles", "scripts"], function(){
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function(){return rev();}, function(){return cssnano();}],
		js: [function(){return rev();}, function(){return uglify();}]
	}))
	.pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDistFolder", "moveFonts", "optimizeImages", "usemin"]); 

