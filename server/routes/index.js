const Router = require('express')
const router = new Router()
const servicesRouter = require('./servicesRouter')
const userRouter = require('./userRouter')
const lawyerRouter = require('./lawyerRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/lawyer', lawyerRouter)
router.use('/services', servicesRouter)

module.exports = router