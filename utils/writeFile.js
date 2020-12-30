const fs = require('fs').promises;

async function makeOutputFile(data, fileName) {
  try {
    await fs.writeFile('facComposite.txt', data);
    console.log('File written successfully!')
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = makeOutputFile
