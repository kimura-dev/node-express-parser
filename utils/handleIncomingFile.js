const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')

function removeXmlHeaderAndFooter(dataStr){
    if(typeof dataStr === 'string'){
        const begin = dataStr.search("<UPDATE_COMPOSITES")
        const end = dataStr.search('<USER_INFO>')
        const newStr = dataStr.substring(begin, end)
        return newStr
    } else {
        console.log(`Item must be of type string`)
    }
}

function handleIncomingFile(inputFile, outputFile){
    try {
        const fileContentStr =  readInputFile(inputFile);
        const newStr =  removeXmlHeaderAndFooter(fileContentStr);
        writeOutputFile(outputFile, newStr)

        return newStr;
    } catch (error) {
        throw new Error(`Got an error inside handleIncomingFile(): ${error.message}`)
    }
}

module.exports = handleIncomingFile