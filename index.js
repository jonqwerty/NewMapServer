require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const placeController = require('./controllers/placeController')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))


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