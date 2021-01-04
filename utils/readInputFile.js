const fs = require('fs').promises;

async function readInputFile(filePath) {
  try {
    const file = await fs.readFile(filePath)
    const fileToString = file.toString()

    console.log('File read successfully')
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

module.exports = readInputFile

/* Potential Queries */
//=======================================================
//  fileToString.search('</EQP_COMPOSITES>'))
//  fileToString.search('</RMK_COMPOSITES>'))