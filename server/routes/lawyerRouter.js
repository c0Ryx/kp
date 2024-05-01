const Router = require('express')
const router = new Router()
const lawyerController = require('../controllers/lawyerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), lawyerController.create)
router.get('/', lawyerController.getAll)
router.delete('/delLawyer', lawyerController.delLawyer)

module.exports = router