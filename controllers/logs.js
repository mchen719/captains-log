const Log = require('../models/log')

// New
exports.newLog = (req, res) => {
    res.render('logs/New')
}

// Create
exports.createLog = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    try {
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

//Index
exports.indexLog = async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

// Show 
exports.showLog = async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

// Delete
exports.deleteLog = async (req, res) => {
    try {
        await Log.findOneAndDelete({'_id': req.params.id}).then(() =>{
            res.redirect('/logs')
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

// Edit 
exports.editLog = async (req,res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('logs/Edit', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

// Update
exports.updateLog = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    try {
        await Log.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(() => {
            res.redirect(`/logs/${req.params.id}`)
        })  
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}