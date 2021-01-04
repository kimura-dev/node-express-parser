const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const xml2Js = require('./xml2JsonParser')


async function arrangeIncomingFile(inputFile, outputFile){
    try {
        const fileContents = await readInputFile(inputFile);
        const outputFileContents = await writeOutputFile(outputFile, fileContents);
        const obj = await xml2Js(outputFileContents)
        // console.log(obj)
        // return obj;
    } catch (error) {
        console.error(error);
    }
}

module.exports = arrangeIncomingFile