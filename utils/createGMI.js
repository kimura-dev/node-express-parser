const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')

const gmiHeader = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><prodSrvc:responseUpdateComposite xmlns:gmi="urn:midb:gmi:gov" xmlns:prodSrvc="urn:midb-productionService"><prodSrvc:UPDATED_COMPOSITES>`

const gmiFooter = `</prodSrvc:UPDATED_COMPOSITES></prodSrvc:responseUpdateComposite></soapenv:Body></soapenv:Envelope>`

function replaceAll(data, search, replace) {
    return data.split(search).join(replace);
}

async function createGMI(inputFile, outputFile){
    // Read
    const str = await readInputFile(inputFile)
    // Parse
    const first = replaceAll(str, "</", "Close_Tag")
    const second = replaceAll(first, "<", "Open_Tag")
    const third = replaceAll(second, "Open_Tag", "<gmi:")
    const fourth = replaceAll(third, "Close_Tag", "</gmi:")
    const end =  replaceAll(fourth, "SITE_ORIGINATOR", "AV_SITE_ID")
    const complete = `${gmiHeader}${end}${gmiFooter}`
    // Create
    writeOutputFile(outputFile, complete)
    return complete;
}

module.exports = createGMI
