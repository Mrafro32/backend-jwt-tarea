const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { crearUser, loginUser, datosUser } = require('../controllers/usersController')


router.post('/login', loginUser)
router.post('/', crearUser)


router.get('/datos', protect, datosUser)

module.exports = router