const uuid = require('uuid')
const path = require ('path')
const {Services} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServicesController {
    async create(req, res, next){
        try {
            const {name, price, lawyerId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const services = await Services.create({name, price, lawyerId, typeId, img: fileName})
            return res.json(services)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
    async getAll(req, res){
        
        
    }
    async getOne(req, res) {

    }

}

module.exports = new ServicesController()