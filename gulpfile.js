var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'), 
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat');

gulp.task('sass', function(){ 
    return gulp.src('src/scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(gulp.dest('src/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('scripts', function(){ 
    return gulp.src(['src/js/**/*.js', '!src/js/scripts.js']) 
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() {
    browserSync({ 
        server: { 
            baseDir: 'src'
        },
        notify: false 
    });
});



gulp.task('watch', ['browser-sync', 'sass','scripts'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['scripts']);
});



gulp.task('clean', function() {
    return del.sync('dist');
});



gulp.task('img', function() {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('build/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([ 'src/css/**/*'])
    .pipe(cssnano())
    .pipe(gulp.dest('build/css'))

    var buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))

    var buildJs = gulp.src('src/js/scripts.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))

    var buildLibs = gulp.src('src/libs/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('build/libs'))

    var buildHtml = gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'));

});

gulp.task('browser-build', function() {
    browserSync({ 
        server: { 
            baseDir: 'build'
        },
        notify: false 
    });
});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);