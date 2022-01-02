const uuid = require('uuid')
const path = require('path')
const Place = require('../models/Place')
const fs = require('fs')


class PlaceController {
    async create(req, res) {
        const {lat, lng, info} = await  req.body
        const {image} = await   req.files
        console.log(image)
       
        let fileName = uuid.v4() + ".jpg"
        await image.mv(path.resolve(__dirname, '..', 'static', fileName))

        let img =  fs.readFileSync(`./static/${fileName}`)
        console.log(img)
        const encode_image = img.toString('base64')
       
        let finalImg = {
           lat: lat,
           lng: lng,
           info: info,
           fileName:  fileName,
           contentType: image.mimetype,
           imageBase64: encode_image
       }
     
        const place = new Place(finalImg)
        await place.save()
        
        return res.json(place)
    }

    async getAll(req, res) {

        let places
        places = await Place.find() 
               
        return res.json({positions: places})
    }
}

module.exports = new PlaceController()