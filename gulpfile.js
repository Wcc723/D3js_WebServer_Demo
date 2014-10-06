var gulp = require('gulp'),
	webserver = require('gulp-webserver')

gulp.task('webserver', function() {
  gulp.src('app') //起始目錄
    .pipe(webserver({
    	host: '0.0.0.0', //host設定'0.0.0.0'，就可以用內網檢視
    	port: 10000, //設定一個沒在使用的port
      livereload: true, //auto refresh
      open: true //執行gulp時自動開啟browser
    }));
});

gulp.task('default', ['webserver']);

