require('dotenv').config()
const express = require('express');
const app = express();
const arrangeIncomingFile = require('./utils/arrangeIncomingFile')
const connectToDatabase = require('./utils/connectToDatabase')
const writeOutputFile = require('./utils/writeOutputFile');
const xml2Js = require('./utils/convertXmlToJsonFile');
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

app.use('/facComposites', facCompositeRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))

arrangeIncomingFile('./input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml', './output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE');

