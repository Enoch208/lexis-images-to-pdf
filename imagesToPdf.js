let muhammara = require('muhammara')
const streamToPromise = require("stream-to-promise")

async function imagesToPdf (paths, resultPath) {
  if (!Array.isArray(paths) || paths.length === 0) {
    throw new Error("Must have at least one path in array")
  }
  const pdfWriter = muhammara.createWriter(resultPath)
  paths.forEach(path => {
    const {width, height} = pdfWriter.getImageDimensions(path)
    const page = pdfWriter.createPage(0, 0, width, height)
    pdfWriter.startPageContentContext(page).drawImage(0, 0, path)
    pdfWriter.writePage(page)
  })
  pdfWriter.end()
  await streamToPromise(pdfWriter)
  return resultPath
}

module.exports = imagesToPdf
