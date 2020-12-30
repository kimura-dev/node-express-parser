const express = require('express')
const router = express.Router()
const FacComposite = require('../model/FacComposite')

// Get ALL
router.get('/', async (req, res) => {
    try {
        // Get all facComposites
        const facComposites = await FacComposite.find()
        res.send(facComposites)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})
// Get ONE
router.get('/:id', getFacComposite, (req, res) => {
    // res.send(req.params.id)
    // res.send(res.facComposite.name)
    res.json(res.facComposite)
})
// Create ONE
router.post('/', async (req, res) => {
    const facComposite = new FacComposite({
        FAC: req.body.FAC,
        subscribed: req.body.subscribed
    })

    try {
        // Insert into DB
        const newFacComposite = await facComposite.save()
        res.status(201).json(newFacComposite) /** 201- Created */
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// Update ONE
router.patch('/:id', getFacComposite, async (req, res) => {
    if(req.body.FAC !== null){
        res.facComposite.FAC = req.body.FAC
    }
    if(req.body.subscribed !== null){
        res.facComposite.subscribed = req.body.subscribed
    }

    try {
        const updateFacComposite = await res.facComposite.save()
        res.json(updateFacComposite)
    } catch (error) {
        res.status(400).json({message: error.essage})
    }
})
// Delete ONE
router.delete('/:id', getFacComposite, async (req, res) => {
    try {
        await res.facComposite.remove()
        res.json({message: `Successfully deleted facComposite: ${res.facComposite.FAC}`})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

/*  Middleware  */
async function getFacComposite(req, res, next){
    let facComposite;
    try {
        facComposite = await FacComposite.findById(req.params.id)
        if(facComposite === null){
            return res.status(404).json({message: "Cannot find Fac Composite"}) /** 404 - Could not find */
        }
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
    /* 
        Creates variable facComposite on the res object. 
        Allows you to call res.facComposite in other function and it will be the same facComposite as is in this function. 
    */
    res.facComposite = facComposite
    next()
}


module.exports = router