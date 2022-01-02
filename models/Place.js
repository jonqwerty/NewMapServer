const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')



const place = new mongoose.Schema({
    lat:{
        type: Number,
        required: true
    },
    lng:{
        type: Number,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    fileName:{
        type: String,
        required: true
    },
    contentType:{
        type: String,
        required: true
    },
    imageBase64:{
        type: String,
        required: true
    }
})

module.exports=Place=mongoose.model('Places', place)