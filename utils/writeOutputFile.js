const fs = require('fs').promises;

async function writeOutputFile(data, fileName) {
  try {
    await fs.writeFile('./output/GMI_MIDB_OUTPUT/Composites/theBrandNewFullComposite.txt', data);
    console.log('File written successfully!')
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

// console.log("outputFile search = "+ outputFile.search('</EQP_COMPOSITES>'))
// console.log("outputFile search = "+ outputFile.search('</RMK_COMPOSITES>'))

module.exports = writeOutputFile
