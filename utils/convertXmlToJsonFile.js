const xml2js = require('xml2js');
const util = require('util');
const parsexmlToJs = new xml2js.Parser();
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

// WIP
function convertXmlToJsonFile(xmlStr, fileName){
    parsexmlToJs.parseString(xmlStr, async function(err, data){
        try {
        const json = await JSON.stringify(data, null, 4)
        const obj = JSON.parse(json)
        const formatJsonStr = util.inspect(obj, showHidden=false, depth=12, colorize=true);

        await writeOutputFile(`${fileName}_json.txt`, formatJsonStr)
        console.log('Done');
        return obj
        } catch (error) {
            console.error(error)
        }

    })
}

module.exports = convertXmlToJsonFile