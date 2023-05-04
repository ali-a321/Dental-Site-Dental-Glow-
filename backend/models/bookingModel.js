const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
        patientName: {
          type: String,
          maxLength: 50,
          required: true,
        },
        patientEmail: {
          type: String,
          maxLength: 50,
          required: true,
        },
        patientPhone: {
          type: Number,
          maxLength: 10,
          required: true,
        },
        message:{
          type: String,
          maxLength: 200,
          required: true,
        },

  
    });


module.exports = mongoose.model('Book', bookSchema)