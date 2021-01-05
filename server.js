require('dotenv').config()
const express = require('express');
const app = express();
const handleIncomingFile = require('./utils/handleIncomingFile')
const connectToDatabase = require('./utils/connectToDatabase')
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

handleIncomingFile('./input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml', './output/GMI_MIDB_OUTPUT/Composites/FAC_UPDATE');