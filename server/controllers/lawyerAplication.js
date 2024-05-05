const {LawyerAplication, Services} = require('../models/models')
const ApiError = require('../error/ApiError');

class AplicationController {
    async create(req, res){
        const {aplicationId, userId} = req.body
        const lawyer = await LawyerAplication.create({aplicationId, userId})
        return res.json(lawyer)
    }
    async getAll(req, res){
        const lawyer = await LawyerAplication.findAll()
        return res.json(lawyer)
    }

    async getOne(req, res) {
        const {id} = req.params
        const aplication = await LawyerAplication.findOne(
            {
                where: {id: id},
            }
        )
        return res.json(aplication)
    }

    async delLawyerAplication (req, res){
        const {id} = req.body
        const deleted = await LawyerAplication.destroy({
            where: {id: id}
        })
        return res.json({message: 'Удаление произолшло успешно!'})
    }

    async changeUserId(req, res) {
        const {id, userId} = req.body
        const updated = await  LawyerAplication.update({userId: userId}, {where: {id: id}})
        const aplication = await LawyerAplication.findOne({where: {id: id}})
        return res.json(aplication)
    }


}

module.exports = new AplicationController()