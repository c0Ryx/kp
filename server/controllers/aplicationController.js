const {Aplication, Services} = require('../models/models')
const ApiError = require('../error/ApiError');

class AplicationController {
    async create(req, res){
        const {serviceId, userId, price} = req.body
        const lawyer = await Aplication.create({serviceId, userId, price})
        return res.json(lawyer)
    }
    async getAll(req, res){
        const lawyer = await Aplication.findAll()
        return res.json(lawyer)
    }

    async getOne(req, res) {
        const {id} = req.params
        const aplication = await Aplication.findOne(
            {
                where: {id: id},
            }
        )
        return res.json(aplication)
    }

    async delLawyer (req, res){
        const {id} = req.body
        const deleted = await Aplication.destroy({
            where: {id: id}
        })
        return res.json({message: 'Удаление произолшло успешно!'})
    }

    async changeServiceId(req, res) {
        const {id, serviceId} = req.body
        const updated = await  Aplication.update({serviceId: serviceId}, {where: {id: id}})
        const aplication = await Aplication.findOne({where: {id: id}})
        return res.json(aplication)
    }

    async changeUserId(req, res) {
        const {id, userId} = req.body
        const updated = await  Aplication.update({userId:userId}, {where: {id: id}})
        const aplication = await Aplication.findOne({where: {id: id}})
        return res.json(aplication)
    }

}

module.exports = new AplicationController()