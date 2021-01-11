const fs = require('fs');

let count = 0;

 function readInputFile(fileName) {
   count++
  try {
    const file =  fs.readFileSync(fileName, {encoding: 'utf8', flag: 'r'})
    const fileToString = file.toString()
    console.log('File read successful' + " " + count)
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.name} ${error.message}`)
  }
}

module.exports = readInputFile