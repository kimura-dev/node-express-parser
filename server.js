const express = require('express');
const app = express();
const arrangeInputFile = require('./utils/arrangeInputFile')
const connectToDatabase = require('./utils/connectToDatabase')

/* Connect Database */
connectToDatabase()

/* Configure server to accept JSON */
app.use(express.json())

/* Setup rotues */
const facCompositeRouter = require('./routes/facComposites')
app.use('/facComposites', facCompositeRouter)

/* Setup server to listen on port 5000 */
app.listen(5000, () => console.log("Server started..."))

// /* Interact with input files */
arrangeInputFile('./input/ADDS_AMS_INPUT/Composities/FACUpdate.xml')
