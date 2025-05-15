const fs = require('fs');
const componentV4 = {};

const argv = require('minimist')(process.argv.slice(2));
// $ node utils/cp.js --src 'src/colors' --dest 'dist/colors'
// { _: [], src: "'src/colors'", dest: "'dist/colors'" }

const {dist} = argv;
const input = fs.readFileSync(`${dist}/component.js`,{ encoding: 'utf8' }); // require(`${dist}/component.js`);
const componentInfo = JSON.parse(input.replace('module.exports =',''));

for (const [key, value] of Object.entries(componentInfo)) {
  if (key.startsWith('@media')) continue;
  else componentV4[key] = value;
}

fs.writeFileSync(`${dist}/component-v4.js`,'module.exports ='+ JSON.stringify(componentV4), { encoding: 'utf8' });
