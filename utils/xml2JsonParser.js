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

function xml2Js(xmlStr){
     parsexmlToJs.parseString(xmlStr, async function(err, data){
        try {
        const json = await JSON.stringify(data, null, 4)
        // typeChecker('json', json, "inside xml2Js")
        console.log(json)
        // writeOutputFile('./output/GMI_MIDB_OUTPUT/Composites/_composite_json.json', json)
        // console.log("stringified: " + json)
        // console.log("=======================================")
        // const obj = JSON.parse(json)
        // logObjProps(obj)
        // typeChecker('obj', obj, "inside xml2Js")
        // console.log(obj)
        // const formatObj = util.inspect(obj, showHidden=false, depth=12, colorize=true);
        // typeChecker('formatObj', formatObj, 'inside xml2Js')
        // console.log(formatObj)
        // inspect(json)
        console.log('Done');
        // return obj
        } catch (error) {
            console.error(error)
        }
    })
}

module.exports = xml2Js