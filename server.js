require('dotenv').config();
const express = require('express');
const app = express();
const handleIncomingFile = require('./utils/handleIncomingFile');
const connectToDatabase = require('./config/connectToDatabase');
const createGMI = require('./utils/createGMI');
const createXML = require('./utils/createXml');
const PORT = process.env.PORT;
const ADDS_INPUT_FILE = './xml-to-xaml/input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml';
const GMI_OUTPUT_DIR = './xml-to-xaml/output/GMI_MIDB_OUTPUT/Composites/';

const ADDS_OUTPUT_DIR = './xaml-to-xml/output/';

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Interface Running');
})

const facCompositeRouter = require('./routes/facComposites');

app.use('/facComposites', facCompositeRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

handleIncomingFile(ADDS_INPUT_FILE, `${GMI_OUTPUT_DIR}FAC_UPDATE_NEW_xaml.txt`);

createGMI(`${GMI_OUTPUT_DIR}FAC_UPDATE_NEW_xaml.txt`,`${GMI_OUTPUT_DIR}COMPLETE_GMI_UPDATE.txt`); 

createXML(`${GMI_OUTPUT_DIR}COMPLETE_GMI_UPDATE.txt`, `${ADDS_OUTPUT_DIR}COMPLETE_GMI_UPDATE.xml`);
