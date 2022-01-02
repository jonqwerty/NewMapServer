const uuid = require('uuid')
const path = require('path')
const Place = require('../models/Place')
const fs = require('fs')


class PlaceController {
    async create(req, res) {

        return res.json({positions: places})
    }

    async getAll(req, res) {

        return res.json({message: 's working'})
    }
}

module.exports = new PlaceController()