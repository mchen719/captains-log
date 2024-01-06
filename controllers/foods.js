const Food = require('../models/food')

//New
exports.newFoodLog = (req, res) => {
    res.render('foods/New')
}

//Create
exports.createFoodLog = async (req, res) => {
    try {
        const createdFoodLog = await Food.create(req.body)
        res.redirect(`/foods/${createdFoodLog._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//Index
exports.indexFoodLogs = async (req, res) => {
    try {
        const foundFoodLogs = await Food.find({})
        res.render('foods/Index', {
            foods: foundFoodLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//Show
exports.showFoodLogs = async (req, res) => { 
    try {
        const foundFoodLog = await Food.findOne({_id: req.params.id})
        res.render('foods/Show', {
            food: foundFoodLog
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}