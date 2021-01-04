const xml2js = require('xml2js')
const util = require('util');
const writeOutputFile = require('./writeOutputFile')
const parsexmlToJs = new xml2js.Parser();

function xml2Js(xmlStr){
    parsexmlToJs.parseString(xmlStr, async function(err, data){
        try {
        const json = await JSON.stringify(data, null, 4)
        // console.log("stringified: " + json)
        // console.log("=======================================")
        const obj = JSON.parse(json)
        // const formatObj = util.inspect(obj, showHidden=false, depth=12, colorize=true);
        // const completeObj = JSON.parse(formatObj);
        console.log(obj);
        console.log('Done');
        return obj
        } catch (error) {
            
        }
        
    })
}

module.exports = xml2Js