const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authmiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/add', userController.addNewWorker)
router.get('/auth', authMiddleware, userController.auth)
router.post('/logout', userController.logout)
router.delete('/delUser', userController.deleteuser)
router.get('/getLawyers', userController.getAllLawyers)

module.exports = router