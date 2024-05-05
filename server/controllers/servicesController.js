const uuid = require('uuid')
const path = require ('path')
const {Services, ServicesInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServicesController {
    async create(req, res, next){
        try {
            const {name, price, description} = req.body

            const service = await Services.create({name, price, description})

            return res.json(service)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
    
    async getAll (req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }

    async delServices (req, res){
        const {id} = req.body
        const deleted = await Services.destroy({
            where: {id: id}
        })
        return res.json({message: 'Удаление произолшло успешно!'})

    }

    async getOne(req, res) {
        const {id} = req.params
        const services = await Services.findOne(
            {
                where: {id: id},
            }
        )
        return res.json(services)
    }

    

}

module.exports = new ServicesController()