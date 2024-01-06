const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    Title: {type: String, require: true },
    Breakfast: String, 
    Lunch: String, 
    Dinner: String
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food