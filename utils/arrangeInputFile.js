const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const xml2Json = require('./xml2JsonParser')


async function arrangeInputFile(fileName){
    const file = await readInputFile(fileName)

    const outputFile = await writeOutputFile(file)
    console.log(outputFile)

    // const json = await xml2Json(outputFile)
    // console.log(json)
}

module.exports = arrangeInputFile