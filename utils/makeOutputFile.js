const fs = require('fs').promises;

async function makeOutputFile(data, fileName) {
  try {
    await fs.writeFile('./output/anotherFullComposite.txt', data);
    console.log('File written successfully!')
    // console.log("typeof data makeOutputfile returns = "+typeof data)
    // console.log("this is makeOutputFile data: " + data)
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

module.exports = makeOutputFile
