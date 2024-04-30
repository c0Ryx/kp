const Router = require('express')
const router = new Router()
const servicesController = require('../controllers/servicesController')

router.post('/', servicesController.create)
router.get('/', servicesController.getAll)
router.get('/:id', servicesController.getOne)

module.exports = router