'use strict'

// Import Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Expenditure = require('./models/expenditure')

// Create Instances
const app = express()
const router = express.Router()

// Set our port to predetermined number or 3001
const port = process.env.API_PORT || 3001;

// Database configuration
mongoose.connect('mongodb://localhost/budget')

// Configure API to use BP to look for JSON data in the req body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// TO prevent CORS errors, we will set our headers to allow CORS with middleware like so
// TODO: Is there a better way to design this to avoid enabling CORS from all domains????
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
    // and remove caching so we get the most up-to-date info
    res.setHeader('Cache-Control', 'no-cache')
 next()
})

// Set route path & intialize the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!' })
})

// Adding expenditures route
router.route('/expenditures')
    .get(function (req, res) {
        Expenditure.find(function (err, expenditures) {
            if (err) {
                res.send(err)
            }
            res.json(expenditures)
        })
    })
    .post(function (req, res) {
        let expenditure = new Expenditure();
        // Body-parser gives us access to the req.body
        expenditure.text = req.body.text;
        expenditure.cost = req.body.cost;
        expenditure.save(function (err) {
            if (err) {
                res.send(err)
            }
            res.json({ message: 'Expenditure successfully added.'})
        })
    })

// Use the router configuration when we call /api
app.use('/api', router)

// Start the server and listen for requests
app.listen(port, function() {
    console.log(`API listening on port ${port}...`)
})