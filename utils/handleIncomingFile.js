const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const convertXmlToJsonFile = require('./convertXmlToJsonFile')
const typeChecker = require('./typeChecker')

function removeXmlHeaderAndFooter(dataStr){
    //take in string data
    if(typeof dataStr === 'string'){
        const begin = dataStr.search("<UPDATE_COMPOSITES")
        const end = dataStr.search('<USER_INFO>')
        const newStr = dataStr.substring(begin, end)
        return newStr
    } else {
        console.log(`Item must be of type string`)
    }
}

async function handleIncomingFile(inputFile, outputFile){
    try {
        const fileContentStr = await readInputFile(inputFile);
        
        const newStr = await removeXmlHeaderAndFooter(fileContentStr);
        // console.log(newStr);
        // console.log('=======================================')
        // return newStr;
        const obj = await convertXmlToJsonFile(newStr, outputFile)
        console.log(obj)

        return obj;
    } catch (error) {
        console.error(error);
    }
}

module.exports = handleIncomingFile