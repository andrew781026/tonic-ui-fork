const ncp = require('ncp').ncp;

ncp.limit = 16;

const copyFiles = (source, destination) => new Promise((resolve, reject) => {
  ncp(source, destination, function (err) {
    if (err) reject(err);
    else resolve();
  });
})

// npm run cp:error && npm run cp:themes && npm run cp:lib && npm run cp:root
// "cp:lib": "node utils/cp.js --src src/lib --dest dist/lib",
//   "cp:themes": "node utils/cp.js --src src/themes --dest dist/themes",
//   "cp:error": "node utils/cp.js --src src/error --dest dist/error",
//   "cp:root": "node utils/cp.js --src src/index.js --dest dist/index.js",
copyFiles('gen/lib', 'dist/lib')
  .then(
    () => copyFiles('gen/themes', 'dist/themes'),
    console.error
  )
  .then(
    () => copyFiles('gen/error', 'dist/error'),
    console.error
  )
  .then(
    () => copyFiles('gen/index.js', 'dist/index.js'),
    console.error
  )
