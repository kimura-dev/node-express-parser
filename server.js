require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectToDatabase = require('./config/connectToDatabase');
const completeConversionProcess = require('./utils/completeConversionProcess')
const PORT = process.env.PORT;
const DIR_MAPPING = require('./dirMapping')

connectToDatabase();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'))
app.use(fileUpload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

const facCompositeRouter = require('./routes/facComposites');
const uploadsRouter = require('./routes/uploads');

app.use('/facComposites', facCompositeRouter);
app.use('/', uploadsRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

completeConversionProcess(
    DIR_MAPPING.ADDS_INPUT_FILE, 
    DIR_MAPPING.GMI_OUTPUT_DIR, 
    DIR_MAPPING.ADDS_OUTPUT_DIR
);
