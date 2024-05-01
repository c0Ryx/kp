const Router = require('express')
const router = new Router()
const servicesController = require('../controllers/servicesController')

router.post('/create', servicesController.create)
router.get('/getAll', servicesController.getAll)
router.delete('/delServices', servicesController.delServices)
router.put('/changeServicesCount', servicesController.changeServicesCount)

module.exports = router