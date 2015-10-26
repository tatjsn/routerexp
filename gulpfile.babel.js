import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

const reload = browserSync.reload;

gulp.task('js', () =>
  gulp.src('src/js/entry.js')
      .pipe(webpackStream({
        module: {
          loaders: [
            { test : /\.js$/, exclude: /node_modules/, loader: 'babel' }
          ]
        },
        output: {
          filename: 'bundle.js'
        }
      }, webpack))
      .pipe(gulp.dest('dist')));

gulp.task('html', () =>
  gulp.src('src/html/**/*.html')
      .pipe(gulp.dest('dist')));

gulp.task('js-watch', ['js'], reload);
gulp.task('html-watch', ['html'], reload);

gulp.task('serve', ['js', 'html'], () => {
  browserSync({
    server: { baseDir: 'dist', middleware: [historyApiFallback()] },
    notify: false
  });

  gulp.watch(['src/**/*.js', '!**/.*'], ['js-watch']);
  gulp.watch(['src/**/*.html', '!**/.*'], ['html-watch']);
});
