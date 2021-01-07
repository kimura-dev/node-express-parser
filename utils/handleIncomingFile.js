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

async function handleIncomingFile(inputFile, outputFile){
    try {
        const fileContentStr = await readInputFile(inputFile);
        const newStr = removeXmlHeaderAndFooter(fileContentStr);
        writeOutputFile(`${outputFile}_xaml.txt`, newStr)
        return newStr;
    } catch (error) {
        console.error(error);
    }
}

module.exports = handleIncomingFile