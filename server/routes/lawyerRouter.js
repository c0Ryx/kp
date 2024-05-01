const Router = require('express')
const router = new Router()
const lawyerController = require('../controllers/lawyerController')

router.post('/', lawyerController.create)
router.get('/', lawyerController.getAll)
router.delete('/delLawyer', lawyerController.delLawyer)

module.exports = router