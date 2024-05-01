const {Lawyer} = require('../models/models')
const ApiError = require('../error/ApiError');

class LawyerController {
    async create(req, res){
        const {name} = req.body
        const lawyer = await Lawyer.create({name})
        return res.json(lawyer)
    }
    async getAll(req, res){
        const lawyer = await Lawyer.findAll()
        return res.json(lawyer)
    }
    async delLawyer (req, res){
        const {name} = req.body
        const deleted = await Lawyer.destroy({
            where: {name: name} 
        })
        return res.json({message: 'Удаление произолшло успешно!'})

    }

}

module.exports = new LawyerController()