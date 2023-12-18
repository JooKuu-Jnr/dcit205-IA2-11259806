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
        othernames: {
            type: String,
            required: true
        },
        gender:{
            type: String,
            required:true
        },

        phoneNumber: {
            type:Number,
            required: true
        },

        residentialAddress: {
            type: String,
            required: true
        },

        emergencyName:{
            type: String,
            required: true
        },

        contact:{
            name: String,
            required: true
        }

        relationshipWithPatient:{
            type: String,
            required: true
        },

        







    }
)