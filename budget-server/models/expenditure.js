'use strict'

// Import dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create new instance of mongoose.schema
// Schema takes an object that shows the shape of db entries
const ExpenditureSchema = new Schema({
    text: String,
    cost: Number
})

module.exports = mongoose.model('Expenditure', ExpenditureSchema)