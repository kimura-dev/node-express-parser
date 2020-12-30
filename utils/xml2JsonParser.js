const xml2js = require('xml2js')

const parsexmlToJs = new xml2js.Parser();

async function xml2Json(xmlStr){
    
    // console.log("outputFile search = "+ outputFile.search('</EQP_COMPOSITES>'))
    // console.log("outputFile search = "+ outputFile.search('</RMK_COMPOSITES>'))
    
    parsexmlToJs.parseString(xmlStr, async function(err, data){
        const json = await JSON.stringify(data)
        // console.log("stringified: " + json)
        // console.log("=======================================")
        // console.log(JSON.parse(json))
        console.log('Done')
        return json
    })
}

module.exports = xml2Json