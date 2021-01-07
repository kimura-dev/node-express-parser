require('dotenv').config();
const express = require('express');
const app = express();
const handleIncomingFile = require('./utils/handleIncomingFile');
const connectToDatabase = require('./config/connectToDatabase');
const createGMI = require('./utils/createGMI');
const PORT = process.env.PORT;
const INPUT_FILE = './input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml';
const OUTPUT_FILE = './output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE_NEW';

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Interface Running');
})

const facCompositeRouter = require('./routes/facComposites');

app.use('/facComposites', facCompositeRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

handleIncomingFile(INPUT_FILE, OUTPUT_FILE);

createGMI(); 