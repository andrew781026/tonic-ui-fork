// const postcss = require('postcss')
// const postcssJs = require('postcss-js')
//
// const css  = '--text-color: #DD3A0A; @media screen { z-index: 1; color: var(--text-color) }'
// const root = postcss.parse(css)
//
// console.log(postcssJs.objectify(root))

const postcssJs = require('postcss-js')
const postcss = require('postcss')
const fs = require('fs')

const args = process.argv.slice(2)
const [src, dest] = args

fs.readFile(src, (err, css) => {
  if (err) throw err
  const root = postcss.parse(css)
  fs.writeFileSync(dest, 'module.exports =' + JSON.stringify(postcssJs.objectify(root)))
})
