const mongoose = require('mongoose')
const { stringify } = require('querystring')

const patientSchema = mongoose.Schema(
    {
        patientID: {
            type: Number,
            unique: true,
            required: true
        },
        
        surname: {
            type: String,
            required: true,
        },


    }
)