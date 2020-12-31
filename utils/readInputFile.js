const fs = require('fs').promises;
const writeOutputFile = require('./writeOutputFile')

async function readInputFile(filePath) {
  try {
    const file = await fs.readFile(filePath)
    const fileToString = file.toString()
    // console.log("fileToString search = "+ fileToString.search('</EQP_COMPOSITES>'))
    // console.log("fileToString search = "+ fileToString.search('</RMK_COMPOSITES>'))
    console.log('File read successfully')
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

module.exports = readInputFile
