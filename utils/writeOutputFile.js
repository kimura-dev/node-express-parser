const fs = require('fs').promises;

async function writeOutputFile(fileName, data) {
  try {
    const written = await fs.writeFile(fileName, data);
    console.log('File write successful')
    return written
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = writeOutputFile
