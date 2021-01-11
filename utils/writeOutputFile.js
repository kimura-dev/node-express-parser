const fs = require('fs');

async function writeOutputFile(fileName, data) {
  try {
    await fs.writeFileSync(fileName, data);
    console.log('File write successful')
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = writeOutputFile
