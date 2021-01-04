const fs = require('fs').promises;

async function writeOutputFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log(`File written successfully!`)
    console.log(`Returning data of type: ${typeof data} from writeOutputFile()`)
    return data
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

// need function to be triggered everytime new file/s come to input dir

// parse through the input file pathname, 
    // a) to get the file type
        // 1) to know what file type to turn it into
        // 2) to know what to name the output file

module.exports = writeOutputFile
