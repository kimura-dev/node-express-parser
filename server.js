require('dotenv').config();
const express = require('express');
const app = express();
const handleIncomingFile = require('./utils/handleIncomingFile');
const connectToDatabase = require('./config/connectToDatabase');
const createGMI = require('./utils/createGMI');
const PORT = process.env.PORT;
const XML_TO_XAML_INPUT_FILE = './xml-to-xaml/input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml';
const XML_TO_XAML_OUTPUT_FILE = './xml-to-xaml/output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE_NEW';

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Interface Running');
})

const facCompositeRouter = require('./routes/facComposites');

app.use('/facComposites', facCompositeRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

handleIncomingFile(XML_TO_XAML_INPUT_FILE, XML_TO_XAML_OUTPUT_FILE);

createGMI(); 

// input/output for mdal, and input/output for adds, they will be dynamicaly gnerated and then blown away. No presistance.
// we need mdal coming to mcat and mcat going to adds
// we have adds coming to mcat and mcat going to mdal
// from mdal create xml, strip out gmi
// clean xml with header and footer and send back to adds.
// currently take xml from adds to xaml to mdal