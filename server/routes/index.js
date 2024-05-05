const Router = require('express')
const router = new Router()
const servicesRouter = require('./servicesRouter')
const userRouter = require('./userRouter')
const aplicationRouter = require('./aplicationRouter')
const typeRouter = require('./lawyerRouter')


router.use('/user', userRouter)
router.use('/lawyer', typeRouter)
router.use('/aplication', aplicationRouter)
router.use('/services', servicesRouter)

module.exports = router