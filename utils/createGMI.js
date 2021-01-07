const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')

const gmiHeader = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><prodSrvc:responseUpdateComposite xmlns:gmi="urn:midb:gmi:gov" xmlns:prodSrvc="urn:midb-productionService"><prodSrvc:UPDATED_COMPOSITES>`

const gmiFooter = `</prodSrvc:UPDATED_COMPOSITES></prodSrvc:responseUpdateComposite></soapenv:Body></soapenv:Envelope>`

// async function replaceAll(data, search, replace) {
//     const newStr = await data.split(search).join(replace);
//     return newStr;
// }

function replaceAll(data, search, replace) {
    return data.split(search).join(replace);
   
}

// function tagPicker(XMLString) {
//     const input = XMLString;
//     /* 
//         matches an opening angle bracket, followed by one or
//         more characters that aren't opening or closing brackets, followed by a closing angle bracket.
//     */
//     const reTagCatcher = /(<.[^(><.)]+>)/g;
//     const output = XMLString.match(reTagCatcher);
//     return output;
// }

// const gmiMap = {
//     "</": "Close_Tag",
//     "<": "Open_Tag",
//     "Open_Tag": "<gmi:",
//     "Close_Tag":"</gmi:",
//     "SITE_ORIGINATOR": "AV_SITE_ID",
// }

// async function parseFile(fileName, fn){
//     let stream = fs.createReadStream(fileName, {encoding: "utf-8"})
//     for await(let chunk of stream){
//         fn(chunk)
//     }
// }

// const gmiArray = [{"</": "Close_Tag"}, {"<": "Open_Tag"}, {"Open_Tag": "<gmi:"}, {"Close_Tag":"</gmi:"},{"SITE_ORIGINATOR": "AV_SITE_ID"} ]
// const gmiMapping = [["</", "Close_Tag"], ["<", "Open_Tag"], ["Open_Tag", "<gmi:"], ["Close_Tag","</gmi:"],["SITE_ORIGINATOR", "AV_SITE_ID"] ]

// async function createGMI(replaceAll, gmiMapping){
//     console.log(gmiMapping)
//     // const newRest = rest[0]
//     const str = await readInputFile('./output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE_NEW_xaml.txt')
//     let output = ``;
//     for (let [key, value] of gmiMapping){
//         console.log(key + " , " +  value)
//         let newOutput = await replaceAll(str, key,  value)
//         output += newOutput
//     }
//     console.log(output)
//     const complete = `${gmiHeader}${output}${gmiFooter}`
//     writeOutputFile(`./output/GMI_MIDB_OUTPUT/Composites/GMI_MAP_COMPLETE_FAC_UPDATE_INTO_GMI.txt`, complete)
// }

async function createGMI(){
    const str = await readInputFile('./output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE_NEW_xaml.txt')
    const first = replaceAll(str, "</", "Close_Tag")
    const second = replaceAll(first, "<", "Open_Tag")
    const third = replaceAll(second, "Open_Tag", "<gmi:")
    const fourth = replaceAll(third, "Close_Tag", "</gmi:")
    const end = replaceAll(fourth, "SITE_ORIGINATOR", "AV_SITE_ID")
    const complete = `${gmiHeader}${end}${gmiFooter}`
    console.log(complete)
    console.log('======================')
    writeOutputFile('./output/GMI_MIDB_OUTPUT/Composites/COMPLETE_OUTPUT_GMI.txt', complete)
    return complete;
}

module.exports = createGMI
