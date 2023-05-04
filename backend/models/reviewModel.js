const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    firstName: { type: String, maxLength: 30, required: true,},
    lastName: { type: String, maxLength: 30, required: true,},
    comment: { type: String, maxLength: 250, required:true },
    datePosted: { type: Date, default: Date.now, required: true },
})

module.exports = mongoose.model('Review', reviewSchema)