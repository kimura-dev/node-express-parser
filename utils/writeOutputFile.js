const fs = require('fs').promises;

async function writeOutputFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log(`File written successfully!`)
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = writeOutputFile
