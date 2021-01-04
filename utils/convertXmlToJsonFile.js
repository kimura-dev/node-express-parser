const xml2js = require('xml2js');
const util = require('util');
const parsexmlToJs = new xml2js.Parser();
const typeChecker = require('./typeChecker');
var inspect = require('eyes').inspector({maxLength: false})
const writeOutputFile = require('./writeOutputFile');

function logObjProps(obj){
    if(typeof obj === 'object'){
        let newObj = {};
        let items = 0;
        for (let prop of Object.keys(obj)){
            items ++
            console.log(`property ${items} on ${obj} = ${prop}`)
            newObj[prop] = obj[prop];
        }
        console.log(newObj);
        return newObj;
    }
    else {
        console.log("Item passed is not an object");
    }
}

function convertXmlToJsonFile(xmlStr, fileName){
    parsexmlToJs.parseString(xmlStr, async function(err, data){
        try {
        const json = await JSON.stringify(data, null, 4)
        // console.log("stringified: " + json)
        // console.log("=======================================")
        // typeChecker('json', json, 'returned from xml2js()')
        const obj = JSON.parse(json)
        // logObjProps(obj)
        // typeChecker('obj', obj, "inside xml2Js")
        // // console.log(obj)
        const formatJsonStr = util.inspect(obj, showHidden=false, depth=12, colorize=true);
        console.log(formatJsonStr)
        typeChecker('formatObj', formatJsonStr, 'inside xml2Js')
        writeOutputFile(`${fileName}_json.txt`, formatJsonStr)
        // inspect(json)
        console.log('Done');
        return obj
        } catch (error) {
            console.error(error)
        }

    })
}

module.exports = convertXmlToJsonFile