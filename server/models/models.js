const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
 })

 const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    
 })

 const BasketServices = sequelize.define('basket_services',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    
 })

 const Services = sequelize.define('services',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    
 })

 const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
 })

 const Lawyer = sequelize.define('lawyer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
    
 })

 const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
 })

 const TypeLawyer = sequelize.define('type_lawyer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
 })

 User.hasOne(Basket)
 Basket.belongsTo(User)

 User.hasMany(Rating)
 Rating.belongsTo(User)

 Basket.hasMany(BasketServices)
 BasketServices.belongsTo(Basket)

 Type.hasMany(Services)
 Services.belongsTo(Type)

 Lawyer.hasMany(Services)
 Services.belongsTo(Lawyer)

 Services.hasMany(Rating)
 Rating.belongsTo(Services)

 Services.hasMany(BasketServices)
 BasketServices.belongsTo(Services)

 Type.belongsToMany(Lawyer, {through: TypeLawyer})
 Lawyer.belongsToMany(Type, {through: TypeLawyer})

 module.exports = {
    User, 
    Basket,
    BasketServices,
    Services,
    Type,
    Lawyer,
    Rating,
    TypeLawyer
 }