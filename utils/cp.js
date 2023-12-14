const fs = require('fs');
const path = require('path');
const glob = require('glob');

const argv = require('minimist')(process.argv.slice(2));
// $ node utils/cp.js --src 'src/colors' --dest 'dist/colors'
// { _: [], src: "'src/colors'", dest: "'dist/colors'" }

const {src, dest} = argv;
const copyFile = (src, dest) => {
  if (!fs.existsSync(path.dirname(dest))) fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.writeFileSync(dest, fs.readFileSync(src).toString());
};

const copyFolder = (srcFolder, destFolder) => {
  const srcFiles = glob.sync('**/*', {cwd: srcFolder});
  srcFiles.forEach((file) => {
    if (fs.lstatSync(`${srcFolder}/${file}`).isDirectory()) copyFolder(`${srcFolder}/${file}`, `${destFolder}/${file}`);
    else copyFile(`${srcFolder}/${file}`, `${destFolder}/${file}`)
  });
};

if (fs.lstatSync(src).isDirectory()) copyFolder(src, dest);
else copyFile(src, dest);
