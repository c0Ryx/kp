const Router = require('express')
const router = new Router()
const typeController = require('../controllers/lawyerAplication')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/delType', typeController.delType)


module.exports = router