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
    
    async getAll (req, res) {
        const services = await Services.findAll()
        return res.json(services) 

    }

    async delServices (req, res){
        const {name} = req.body
        const deleted = await Services.destroy({
            where: {name: name} 
        })
        return res.json({message: 'Удаление произолшло успешно!'})

    }

    async changeServicesCount (req, res){
        const {name, price} = req.body
        const updated = await Services.update({price: price},{where: {name: name}})
        return res.json(updated)

    }

    

}

module.exports = new ServicesController()