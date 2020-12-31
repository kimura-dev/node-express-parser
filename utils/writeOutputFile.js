const fs = require('fs').promises;

async function writeOutputFile(data) {
  try {
    await fs.writeFile('./output/GMI_MIDB_OUTPUT/Composites/theBrandNewFullComposite.txt', data);
    console.log('File written successfully!')
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = writeOutputFile
