const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
 })

 const Services = sequelize.define('services',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
 })

const Aplication = sequelize.define('aplications',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    serviceId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
})

const LawyerAplication = sequelize.define('lawyerAplications', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    aplicationId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
})


Services.hasMany(Aplication)
Aplication.belongsTo(Services)

User.hasMany(Aplication)
Aplication.belongsTo(User)

Aplication.hasMany(LawyerAplication)
LawyerAplication.belongsTo(Aplication)

User.hasMany(LawyerAplication)
LawyerAplication.belongsTo(User)


 module.exports = {
    User,
    Services,
    Aplication,
    LawyerAplication
 }