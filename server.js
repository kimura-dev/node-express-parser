require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileReader = require('./utils/fileReader')
const makeOutputFile = require('./utils/makeOutputFile')
const xml2js = require('xml2js')

/* Connect to DB */
// ================================================
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to database"))
// ====================================================

/* Configure server to accept JSON */
// ===========================================
app.use(express.json())

/* Setup rotues */
const facCompositeRouter = require('./routes/facComposites')
app.use('/facComposites', facCompositeRouter)
// ============================================

app.listen(5000, () => console.log("Server started..."))

async function convertFileToString(fileName){
    const file = await fileReader(fileName)
    return file
}

async function readAndWriteFile(fileName){
    const data = await convertFileToString(fileName)
    return makeOutputFile(data)
}

async function xml2Json(fileName){
    try {
        const parsexmlToJs = new xml2js.Parser();
        const outputFile = await readAndWriteFile(fileName)
        console.log("outputFile search = "+ outputFile.search('</EQP_COMPOSITES>'))
        console.log("outputFile search = "+ outputFile.search('</RMK_COMPOSITES>'))
        parsexmlToJs.parseString(outputFile, function(err, data){
            const json = JSON.stringify(data)
            console.log("stringified: " + json)
            console.log(JSON.parse(json))
            console.log('Done')
            return json
        })
    } catch (error) {
        console.log("something wrong")
    }
}

const useableJson = xml2Json('./output/GMI_MIDB_OUTPUT/Composites/fullComposite.txt')

// console.log(useableJson)