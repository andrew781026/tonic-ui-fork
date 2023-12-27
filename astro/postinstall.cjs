const fs = require('fs');

const filePath = './node_modules/@astrojs/starlight/style/markdown.css';
const css = fs.readFileSync(filePath).toString();

// [\s\S]* = any char | a*? = not greedy
const regex = /^\.sl-markdown-content[\s\S]*:not\(a, strong, em, del, span, input, code\)[\s\S]*?\{[\s\S]*?}$/gm

// console.log(css.replace(regex,''));
fs.writeFileSync(filePath,css.replace(regex,''));
