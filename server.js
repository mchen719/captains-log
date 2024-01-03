require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Log = require('./models/log')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})

//New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

//Create
app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    try {
        const createdLog = await Log.create(req.body)
        res.send(createdLog)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


app.listen(PORT, () => {
    console.log(`Connected to Port${PORT}`)
})