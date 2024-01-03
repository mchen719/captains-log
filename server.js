require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Log = require('./models/log')
const logControllers = require('./controllers/logs')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})

// New
app.get('/logs/new', logControllers.newLog)

// Create
app.post('/logs', logControllers.createLog)

//Index
app.get('/logs', logControllers.indexLog)

// Show 
app.get('/logs/:id', logControllers.showLog)

// Delete
app.delete('/logs/:id', logControllers.deleteLog)

// Edit 
app.get('/logs/:id/edit', logControllers.editLog)

// Update
app.put('/logs/:id', logControllers.updateLog)

app.listen(PORT, () => {
    console.log(`Connected to Port${PORT}`)
})