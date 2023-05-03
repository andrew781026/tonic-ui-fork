const glob = require("glob")
const fs = require("fs")
const {PassThrough} = require("stream")
const {execSync} = require('child_process');

const args = process.argv.slice(2)
const [src, dest] = args

const mergeFiles = (
  files,
  output,
) => {

  const writable = fs.createWriteStream(output)

  let source = PassThrough()

  source.pipe(writable)

  const newFiles = [...files]
  const writeOneFile = (file, nextFile) => {
    const readable = fs.createReadStream(file, {encoding: "utf8"})
    readable.pipe(source, {end: false})
    readable.on("end", () => {
      source.write("\n")
      if (nextFile) writeOneFile(nextFile, newFiles.pop()) // 造成一個遞迴
      else writable.end()
    })
  }

  writeOneFile(newFiles.pop(), newFiles.pop())

  // sequence pipe files to source
  // files.forEach((file) => {
  //   const readable = fs.createReadStream(file, { encoding: "utf8" })
  //   readable.pipe(source, { end: false })
  //   readable.on("end", () => source.write("\n"))
  // })

  source.on("end", () => writable.end())
  source.on("error", err => console.error(err))
}

const cat = (src, dest) => {
  const isWin = process.platform === "win32";
  if (isWin) execSync(`type ${src} > ${dest}`)
  else execSync(`cat ${src} > ${dest}`)
}

const newSrc = src.replace(/'/g, "")
const newDest = dest.replace(/'/g, "")
mergeFiles(glob.sync(newSrc), newDest)
// cat(src, dest)
