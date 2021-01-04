const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')
const xml2Js = require('./xml2JsonParser')
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
        // typeChecker('newStr', newStr, 'Inside arranegIncoming');
        return newStr;
        // const json = await xml2Js(newStr)
        // console.log(json)
        // const outputFileContent = await writeOutputFile(`${outputFile}`, newStr);
        // const json = JSON.stringify(outputFileContents)
        // console.log(json)
        // const obj = await xml2Js(outputFileContents)
        // console.log(obj)
        // return obj;
    } catch (error) {
        console.error(error);
    }
}

module.exports = arrangeIncomingFile