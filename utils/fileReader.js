const xmlSpecialChars = require('./xmlSpecialChars');

const fs = require('fs').promises;

async function fileReader(filePath) {
  if(filePath !== null && filePath !== 'undeifned'){
    try {
      const data = await fs.readFile(filePath);
      console.log("File read succesfully")
      // console.log(data.toString());
      return data.toString()
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }
}



module.exports = fileReader
