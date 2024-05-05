const Router = require('express')
const router = new Router()
const typeController = require('../controllers/lawyerAplication')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('LAWYER'), typeController.create)
router.get('/', typeController.getAll)
router.get('/:id', typeController.getOne)
router.delete('/delAplication', typeController.delLawyerAplication)
router.put('/', checkRole('ADMIN'), typeController.changeUserId)


module.exports = router