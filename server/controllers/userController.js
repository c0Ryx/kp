const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, fullName, phone, role) => {
    return jwt.sign(
        {id, fullName, phone, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {fullName, password, phone, role} = req.body
        if (!fullName || !password || !phone) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const candidate = await User.findOne({where: {phone: phone}})

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким телефоном уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({fullName, phone, role, password: hashPassword})
        if (role !== 'USER') {
            return res.json({"message": 'cool'})
        }
        const token = generateJwt(user.id, user.phone, user.role)
        return res.json({token})
    }

    async addNewWorker(req, res) {
        const {fullName, password, phone, role} = req.body
        if (!fullName || !password || !phone) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const candidate = await User.findOne({where: {phone: phone}})

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким телефоном уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({fullName, phone, role, password: hashPassword})

        return res.json(user)
    }

    async login (req, res, next){
        const {phone, password} = req.body
        const user = await User.findOne({where: {phone: phone}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.fullName, user.phone, user.role)
        return res.json({token})
    }

    async auth (req, res, next){
        const token = generateJwt(req.user.id, req.user.fullName, req.user.phone, req.user.role)
        return res.json({token})
    }

    async deleteuser (req, res){
        const {id} = req.body
        const deleted = await User.destroy({
            where: {id: id}
        })
        return res.json({message: 'Удаление произошло успешно!'})
    }

    async logout(req, res) {
        const {id} = req.body
        const deleteToken = await User.update ({token: null}, {where:{id: id}})
        return res.json('succes')
    }

    async getAllLawyers(req, res, next){

        const users = await User.findAll({where: {role: 'LAWYER'}})
        return res.json(users)
    }
}

module.exports = new UserController()