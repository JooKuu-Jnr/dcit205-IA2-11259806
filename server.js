const express = require('express')
const mongoose = require('mongoose')
const Patient = require ('./models/patientModel')
const app = express ()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (req, res) =>{
    res.send('Hello Dcit205')
})

app.get('/blog', (req, res) =>{
    res.send('Hello,could not  install npm due to no fault of mine')
})

// get data from database
app.get('/patients', async(req, res)=>{
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

