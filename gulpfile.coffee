# dependencies
gulp        = require 'gulp'
notify      = require 'gulp-notify'
rename      = require 'gulp-rename'
uglify      = require 'gulp-uglify'
plumber     = require 'gulp-plumber'
filesize    = require 'gulp-filesize'
coffee      = require 'gulp-coffee'
wrap        = require 'gulp-wrap-umd'
sourcemaps  = require 'gulp-sourcemaps'
del         = require 'del'

# paths
paths       = {}
paths.base  = '.'
paths.src   = "#{paths.base}/src"
paths.dist  = "#{paths.base}/dist"
paths.bower = "#{paths.base}/bower_components"
paths.npm   = "#{paths.base}/node_modules"


# error handling
handleError = (err) ->
  notify.onError(
    title: 'Gulp Error'
    message: "#{err.message}"
  )(err)
  @emit 'end'


# clean dist folder
gulp.task 'clean', (done) ->
  del paths.dist, done


# compile, wrap and minify script
gulp.task 'script', ['clean'], ->
  gulp
    .src "#{paths.src}/index.coffee"
    .pipe plumber handleError
    .pipe sourcemaps.init()
    .pipe coffee
      bare: true
    .pipe wrap
      deps: ['angular']
      exports: 'undefined'
      namespace: 'angularValidateImageUrl'
    .pipe sourcemaps.write()
    .pipe rename
      extname: '.js'
    .pipe gulp.dest paths.dist
    .pipe filesize()
    .pipe uglify()
    .pipe rename
      extname: '.min.js'
    .pipe gulp.dest paths.dist
    .pipe filesize()


# develop: call with 'gulp' on command line
gulp.task 'default', ['script'], ->
  gulp.watch "#{paths.src}/**/*.coffee", ['script']
