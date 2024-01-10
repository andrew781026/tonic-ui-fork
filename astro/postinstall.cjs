const fs = require('fs');

const filePath = './node_modules/@astrojs/starlight/components/TableOfContents/starlight-toc.ts';
const js = fs.readFileSync(filePath).toString();

// console.log(css.replace(regex,''));
fs.writeFileSync(filePath,js.replace('new IntersectionObserver(setCurrent, { rootMargin: this.getRootMargin() });','new IntersectionObserver(setCurrent, { rootMargin: "0px",threshold: 1.0, root: document.querySelector(".content-panel + .content-panel") });'));
