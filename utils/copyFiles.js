const ncp = require('ncp').ncp;

ncp.limit = 16;

const copyFiles = (source, destination) => new Promise((resolve, reject) => {
  ncp(source, destination, function (err) {
    if (err) reject(err);
    else resolve();
  });
})

const runCopy = async () => {
  await copyFiles('gen/lib', 'dist/lib');
  await copyFiles('gen/themes', 'dist/themes');
  await copyFiles('gen/error', 'dist/error');
  await copyFiles('gen/index.js', 'dist/index.js');
  await copyFiles('gen/js', 'dist/js');
  await copyFiles('src/img', 'dist/img');
  await copyFiles('src/svg', 'dist/svg');
}

runCopy()
  .catch(console.error);
