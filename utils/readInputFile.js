const fs = require('fs');

async function readInputFile(filePath) {
  try {
    const fd = fs.openSync(filePath, 'rs')
    const file = await fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
    const fileToString = file.toString()
    console.log('File read successful')
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

module.exports = readInputFile