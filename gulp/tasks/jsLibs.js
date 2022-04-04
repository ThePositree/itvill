export const jsLibs = () => {
  return app.gulp.src(app.path.src.jsLibs)
    .pipe(app.gulp.dest(app.path.build.jsLibs))
}