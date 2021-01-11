const fs = require('fs');

let count = 0;

function writeOutputFile(fileName, data) {
  count++
  try {
     fs.writeFileSync(fileName, data);
    console.log('File write successful ' + count)
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = writeOutputFile
