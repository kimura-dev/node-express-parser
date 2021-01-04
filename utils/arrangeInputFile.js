const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const xml2Js = require('./xml2JsonParser')


async function arrangeInputFile(fileName){
    const file = await readInputFile(fileName)
    const outputFile = await writeOutputFile(file)
    // console.log(outputFile)
    const jsObj = await xml2Js(outputFile)
    console.log(jsObj)
}

module.exports = arrangeInputFile