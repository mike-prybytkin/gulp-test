const {
  src,
  dest
} = require('gulp');
const changed = require('gulp-changed');
const ttf2woff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');

module.exports = function ttf(done) {
  return src('src/fonts/**/*.ttf')
    .pipe(changed('build/assets/fonts', {
      extension: '.woff2',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff2())
    .pipe(dest('build/assets/fonts'))
  done();
}