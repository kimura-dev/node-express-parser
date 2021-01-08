const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    try {
        if(req.files){
            console.log(req.files)
            const file = req.files.file
            const fileName = file.name
            console.log(fileName)
            file.mv(__dirname.replace("/routes","/") + 'xml-to-xaml/input/ADDS_AMS_INPUT/test/' + fileName)
            res.send(file.data.toString('utf-8'))
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
    
})

module.exports = router;
