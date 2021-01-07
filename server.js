require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./config/connectToDatabase');
const completeConversionProcess = require('./utils/completeConversionProcess')
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

completeConversionProcess(ADDS_INPUT_FILE, GMI_OUTPUT_DIR, ADDS_OUTPUT_DIR)
