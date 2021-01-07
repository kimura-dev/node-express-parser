const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')

const xmlUpdateHeader = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><prodSrvc:responseUpdateComposite xmlns:gmi="urn:midb:gmi:gov" xmlns:prodSrvc="urn:midb-productionService"><prodSrvc:UPDATED_COMPOSITES>`

const xmlUpdateFooter = `</UPDATE_COMPOSITES>			</prodSrvc:UPDATED_COMPOSITES></prodSrvc:responseUpdateComposite></soapenv:Body></soapenv:Envelope>`

const xmlPrimaryInsertHeader = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Body><prodSrvc:responseInsertComposite xmlns:gmi="urn:midb:gmi:gov" xmlns:prodSrvc="urn:midb-productionService"><prodSrvc:PRIMARY_COMPOSITE>`

const xmlPrimaryInsertFooter = `</prodSrvc:PRIMARY_COMPOSITE></prodSrvc:responseInsertComposite></soapenv:Body></soapenv:Envelope>`

function replaceAll(data, search, replace) {
    return data.split(search).join(replace);
}

// ?? change UPDATED_COMPOSITES => PRIMARY_COMPOSITES ??

async function createXML(inputFile, outputFile){
    const str = await readInputFile(inputFile)
    const first = replaceAll(str, "</gmi:", "Close_Tag")
    const second = replaceAll(first, "<gmi:", "Open_Tag")
    const third = replaceAll(second, "Open_Tag", "<")
    const fourth = replaceAll(third, "Close_Tag", "</")
    const end = replaceAll(fourth, "AV_SITE_ID", "SITE_ORIGINATOR")
    const complete = `${end}`
    console.log(complete)
    console.log('======================')
    writeOutputFile(outputFile, complete)
    return complete;
}

module.exports = createXML