const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }
    async delType (req, res){
        const {name} = req.body
        const deleted = await Type.destroy({
            where: {name: name} 
        })
        return res.json({message: 'Удаление произолшло успешно!'})

    }

}

module.exports = new TypeController()