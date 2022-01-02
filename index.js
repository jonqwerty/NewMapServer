require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const placeController = require('./controllers/placeController')


const app = express()
const PORT = process.env.PORT || 5000



app.get('/', placeController.getAll )


app.post('/', placeController.create)


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`=== Server started on port ${PORT} ===`)
        })

    } catch (e) {
        console.log(e)
    }
}

start() 