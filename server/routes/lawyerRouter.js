const Router = require('express')
const router = new Router()
const lawyerController = require('../controllers/lawyerController')

router.post('/', lawyerController.create)
router.get('/', lawyerController.getAll)

module.exports = router