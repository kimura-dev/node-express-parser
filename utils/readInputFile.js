const fs = require('fs');

let count = 0;

 function readInputFile(filePath) {
   count++
  try {
    const fd = fs.openSync(filePath, 'rs')
    const file =  fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
    const fileToString = file.toString()
    console.log('File read successful' + " " + count)
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

module.exports = readInputFile