'use strict'

// Import dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Expenditure from './expenditure-model';

// Create new instance of mongoose.schema
// Schema takes an object that shows the shape of db entries
const CategorySchema = new Schema({
    name: String,
    budget: Number
})

module.exports = mongoose.model('Category', CategorySchema)