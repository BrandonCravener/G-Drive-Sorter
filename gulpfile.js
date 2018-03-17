const del = require('del')
const gulp = require('gulp')
const glob = require('glob')
const pump = require('pump')
const tsify = require('tsify')
const sass = require('gulp-sass')
const eslint = require('gulp-eslint')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify-es').default

del.sync('dist')

gulp.task('sass', cb => {
  pump([
    gulp.src('./src/css/**/*.scss'),
    sourcemaps.init(),
    sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError),
    sourcemaps.write(),
    gulp.dest('./dist/css')
  ],
  cb)
})

gulp.task('typescript', ['lint'], cb => {
  let tsfiles = glob.sync('./src/js/**/*.ts')
  let jsfiles = glob.sync('./src/js/**/*.js')
  let files = tsfiles.concat(jsfiles)
  pump([
    browserify({
      basedir: '.',
      debug: true,
      entries: files,
      cache: {},
      packageCache: {}
    })
      .plugin(tsify)
      .bundle(),
    source('index.min.js'),
    buffer(),
    uglify(),
    gulp.dest('./dist/js')
  ],
  cb)
})

gulp.task('lint', cb => {
  pump([
    gulp.src(['./src/js/**/*.js', './src/js/**/*.ts']),
    eslint({
      fix: true
    }),
    eslint.format(),
    eslint.failAfterError()
  ],
  cb)
})

gulp.task('default', ['sass', 'typescript'], () => {
  return gulp.src('./static/**/*')
    .pipe(gulp.dest('./dist/'))
})
