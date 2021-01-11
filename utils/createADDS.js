const readInputFile = require('./readInputFile')
const writeOutputFile = require('./writeOutputFile')

function replaceAll(data, search, replace) {
    return data.split(search).join(replace);
}

// ?? change UPDATED_COMPOSITES => PRIMARY_COMPOSITES ??
function createADDS(inputFile, outputFile){
    try {
        const str =  readInputFile(inputFile)
        const first = replaceAll(str, "</gmi:", "Close_Tag")
        const second = replaceAll(first, "<gmi:", "Open_Tag")
        const third = replaceAll(second, "Open_Tag", "<")
        const fourth = replaceAll(third, "Close_Tag", "</")
        const end = replaceAll(fourth, "AV_SITE_ID", "SITE_ORIGINATOR")
        const complete = `${end}`
        writeOutputFile(outputFile, complete)
        return complete;
    } catch (error) {
        console.error(`Got an error inside of createADDS(): ${error.name} ${error.message}`)
    }
   
}

module.exports = createADDS