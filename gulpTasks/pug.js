// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpPug = require('gulp-pug');

const pug = () => {
  return src(path.pug.src)
    .pipe(plumber())
    .pipe(gulpPug())
    .pipe(dest(path.pug.dest))

}
module.exports = pug;
