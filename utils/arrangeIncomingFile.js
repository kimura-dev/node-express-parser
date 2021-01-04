const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const convertXmlToJsonFile = require('./convertXmlToJsonFile')
const typeChecker = require('./typeChecker')

function removeXmlHeaderAndFooter(dataStr){
    //take in string data
    if(typeof dataStr === 'string'){
        // console.log('inside if statement')
        // begin
        const begin = dataStr.search("<UPDATE_COMPOSITES")
        // of string to parse
        // end
        const end = dataStr.search('<USER_INFO>')

        const newStr = dataStr.substring(begin, end)
        // console.log(newStr)
        return newStr
    } else {
        console.log('Not a String')
    }
}
/* 
    1) could return newStr from arrangeIncomingFile()
    then
    2) create a const to hold the value of invoking arrangeIncomingFile
    3) Pass that variable xml2Js function

    * Hoping that we get nice json out of xml2Js invocation
 */

async function arrangeIncomingFile(inputFile, outputFile){
    try {
        const fileContentStr = await readInputFile(inputFile);
        
        const newStr = await removeXmlHeaderAndFooter(fileContentStr);
        // console.log(newStr);
        // console.log('=======================================');
        // typeChecker('newStr', newStr, 'Inside arranegIncomingFile');
        // return newStr;
        const obj = await convertXmlToJsonFile(newStr, outputFile)
        console.log(obj)

        // return obj;
    } catch (error) {
        console.error(error);
    }
}

module.exports = arrangeIncomingFile