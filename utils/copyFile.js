const fs = require('fs');
const path = require('path');

copyFile = (src, dest) => {
  if (!fs.existsSync(path.dirname(dest))) fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.writeFileSync(dest, fs.readFileSync(src).toString());
};

module.exports = copyFile;
