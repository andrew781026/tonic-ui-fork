const gulp = require('gulp');
const path = require('path');
const glob = require('glob');
const postcss = require('postcss');
const fs = require('fs');
const {PassThrough} = require('stream');
const postcssConfig = require("./src/base/postcss.config");

const mergeFiles = (
    files,
    output
) => {
    const writable = fs.createWriteStream(output);

    let source = PassThrough();

    source.pipe(writable);

    files.forEach((file) => {
        const readable = fs.createReadStream(file, {encoding: 'utf8'});
        readable.pipe(source, {end: false});
        readable.on('end', () => source.write('\n'));
    });

    source.on('end', () => writable.end());
    source.on('error', err => console.error(err));
}

gulp.task('default', function (cb) {
    // place code for your default task here

    cb();
});

gulp.task('base', function () {

    // "prebase": "postcss --config src/base src/base/*.css --base src --dir dist",
    const preBase = (cssFiles) => {
        const postcssConfig = require('./src/base/postcss.config.js');

        const baseDir = 'src/base';
        const outputDir = 'dist';

        cssFiles.forEach((file) => {
            const inputPath = path.join(baseDir, file);
            const outputPath = path.join(outputDir, file);

            fs.mkdirSync(path.dirname(outputPath), { recursive: true });

            const css = fs.readFileSync(inputPath, 'utf8');

            postcss(postcssConfig.plugins)
                .process(css, {
                    from: inputPath,
                    to: outputPath,
                })
                .then((result) => {
                    fs.writeFileSync(outputPath, result.css);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    const baseDir = 'src/base';
    const outputDir = 'dist';
    const srcFiles = glob.sync(`${baseDir}/*.[css,scss]`);
    preBase();



    /*
     *  "prebase": "postcss --config src/base src/base/*.css --base src --dir dist",
     *  "base": "cat dist/base/*.css > dist/base.css",
     *  "postbase": "prejss-cli dist/base.css --format commonjs",
     * */


    const dirFiles = glob.sync(`${outputDir}/*.css`);
    mergeFiles(dirFiles);

});

gulp.task('build', function (cb) {
    // place code for your default task here
    console.log('hello world')
    cb();
});

gulp.task('build', function (cb) {
    // place code for your default task here
    console.log('hello world')
    cb();
});
