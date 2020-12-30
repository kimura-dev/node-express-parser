const xmlSpecialChars = require('./xmlSpecialChars');

const fs = require('fs').promises;
const writeOutputFile = require('./writeOutputFile')

async function readInputFile(filePath) {
  try {
    const file = fs.readFile(filePath)
    const fileToString = file.toString()
    // console.log(fileToString)
    // console.log("type returned from readInputFile = " + typeof fileToString)
    // const writteneFile = await writeOutputFile(fileToString)
    // console.log(writteneFile)
    return fileToString
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

// async function readInputFile(filePath) {
//   if(filePath !== null && filePath !== 'undefined'){
//     try {
//       const data = await fs.readFile(filePath);
//       console.log("File read succesfully")
//       console.log(data.toString());
//       return data.toString()
//     } catch (error) {
//       console.error(`Got an error trying to read the file: ${error.message}`);
//     }
//   } else {
//     console.log("Unable to read file fron readInputFile()")
//   }
// }



module.exports = readInputFile
