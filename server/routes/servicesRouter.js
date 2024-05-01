const Router = require('express')
const router = new Router()
const servicesController = require('../controllers/servicesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), servicesController.create)
router.get('/getAll', servicesController.getAll)
router.get('/:id', servicesController.getOne)
router.delete('/delServices', servicesController.delServices)
router.put('/changeServicesCount', servicesController.changeServicesCount)

module.exports = router