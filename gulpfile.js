const gulp = require('gulp');
const path = require('path');
const glob = require('glob');
const postcss = require('postcss');
const fs = require('fs');
const {PassThrough} = require('stream');
const postcssJs = require("postcss-js");

const functions = {
  compileFiles: ({src, dist, config}) => {
    return new Promise((resolve, reject) => {

      const srcFiles = glob.sync(src);
      const postcssConfig = require(config);
      let jobs = srcFiles.length;

      if (jobs === 0) resolve();
      else srcFiles.forEach((file) => {
        const inputPath = path.join(file);
        const outputPath = path.join(dist, path.basename(file));

        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        const css = fs.readFileSync(inputPath, 'utf8');

        postcss(postcssConfig.plugins)
          .process(css, {from: inputPath, to: outputPath})
          .then((result) => fs.writeFileSync(outputPath, result.css))
          .catch((error) => reject(error))
          .finally(() => (--jobs === 0) && resolve());
      });
    });
  },
  mergeFiles: (src, dest) => {

    return new Promise((resolve, reject) => {

      const writable = fs.createWriteStream(dest)
      writable.on("error", err => reject(err))

      const source = PassThrough()
      source.pipe(writable)

      const newFiles = glob.sync(src);
      const writeOneFile = (file, nextFile) => {

        const readable = fs.createReadStream(file, {encoding: "utf8"})
        readable.pipe(source, {end: false})
        readable.on("end", () => {
          source.write("\n")
          if (nextFile) writeOneFile(nextFile, newFiles.pop()) // iterate
          else writable.end() && resolve()
        })
      }

      writeOneFile(newFiles.pop(), newFiles.pop())

      source.on("end", () => writable.end())
      source.on("error", err => console.error(err))
    })
  },
  cssToObj: (src, dest) => {
    return new Promise((resolve, reject) => {
      fs.readFile(src, (err, css) => {
        if (err) reject(err)
        const root = postcss.parse(css)
        const cssObj = postcssJs.objectify(root)
        const data = 'module.exports =' + JSON.stringify(cssObj)
        fs.writeFileSync(dest, data)
        resolve(data)
      })
    });
  }
}

gulp.task('default', function (cb) {
  // place code for your default task here

  cb();
});

gulp.task('base', async () => {

  /*
   *  "prebase": "postcss --config src/base src/base/*.css --base src --dir dist",
   *  "base": "node utils/mergeFile.js 'dist/base/*.css' 'dist/base.css'",
   *  "postbase": "node utils/cssToObj.js dist/base.css dist/base.js",
   * */

  const configDir = 'src/base';
  const src = 'src/base/*.{css,scss}';
  const dist = 'dist/base';
  const config = `./${configDir}/postcss.config.js`

  await functions.compileFiles({src, dist, config});
  await functions.mergeFiles(`${dist}/*.css`, `${dist}.css`);
  await functions.cssToObj(`${dist}.css`, `${dist}.js`);
});

gulp.task('components', async () => {



  const configDir = 'src/components';
  const src = 'src/components/**/*.{css,scss}';
  const dist = 'dist/components';
  const config = `./${configDir}/postcss.config.js`

  await functions.compileFiles({src, dist, config});
  await functions.mergeFiles(`${dist}/*.css`, `${dist}.css`);
  await functions.cssToObj(`${dist}.css`, `${dist}.js`);


  cb();
});

gulp.task('full', function (cb) {
  // place code for your default task here
  console.log('hello world')
  cb();
});

gulp.task('build', function (cb) {
  // place code for your default task here
  console.log('hello world')
  cb();
});
