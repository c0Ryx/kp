const Router = require('express')
const router = new Router()
const lawyerController = require('../controllers/aplicationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', lawyerController.create)
router.get('/', lawyerController.getAll)
router.get('/:id', lawyerController.getOne)
router.put('/updServiceId', checkRole('ADMIN'), lawyerController.changeServiceId)
router.put('/updUserId', checkRole('ADMIN'), lawyerController.changeUserId)
router.delete('/', lawyerController.delLawyer)

module.exports = router