require('dotenv').config()
const express = require('express');
const app = express();
const arrangeIncomingFile = require('./utils/arrangeIncomingFile')
const connectToDatabase = require('./utils/connectToDatabase')
const dotenv = require('dotenv');
const PORT = process.env.PORT;

/* Connect Database */
connectToDatabase()

/* Configure server to accept JSON */
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API Interface Running')
})

const facCompositeRouter = require('./routes/facComposites');
const writeOutputFile = require('./utils/writeOutputFile');
const xml2Js = require('./utils/xml2JsonParser');
app.use('/facComposites', facCompositeRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))

async function createXmlString(){
    const xmlStr = await arrangeIncomingFile('./input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml', './output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE');
    // console.log(xmlStr);
    // console.log('===============================')

    return xmlStr;
}

const xmlStr = createXmlString();

async function createJson(){
    const json = xml2Js(xmlStr)
console.log(json)
}
createJson()

// /* Interact with input file */


// async function createJsonTxtFile(filename, data){
//     await writeOutputFile(filename, data)
// }

// createJsonTxtFile('./output/GMI_MIDB_OUTPUT/Composites/FAC_UODATE_XML.txt')

