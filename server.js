require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
const connectToDatabase = require('./config/connectToDatabase');
const completeConversionProcess = require('./utils/completeConversionProcess')
const PORT = process.env.PORT;
const ADDS_INPUT_FILE = './xml-to-xaml/input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml';
const GMI_OUTPUT_DIR = './xml-to-xaml/output/GMI_MIDB_OUTPUT/Composites/';
const ADDS_OUTPUT_DIR = './xaml-to-xml/output/';

connectToDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'))
morgan.token("timed", "A new :method request for :url was received. " + 
"It took :total-time[2] milliseconds to be resolved with a :status status")
app.use(fileUpload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

const facCompositeRouter = require('./routes/facComposites');
const uploadsRouter = require('./routes/uploads');

app.use('/facComposites', facCompositeRouter);
app.use('/', uploadsRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

completeConversionProcess(ADDS_INPUT_FILE, GMI_OUTPUT_DIR, ADDS_OUTPUT_DIR)