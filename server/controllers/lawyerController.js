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

}

module.exports = new LawyerController()