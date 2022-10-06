var express = require('express');
var router = express.Router();

// MIDDLEWARES //
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validacionesRegistroMiddleware = require('../middlewares/validacionesRegistroMiddleware');
const uploadFile = require('../middlewares/multerRegisterMiddleware')

// CONTROLADOR //
const usuariosController = require('../controllers/userController');
const userController = require('../controllers/userController');


//Formulario login
router.get('/login', guestMiddleware, usuariosController.login);
//Procesar Login 
router.post('/login', usuariosController.loginProcess);

//Formulario registro
router.get('/register', guestMiddleware, usuariosController.register);
//Procesar el Registro
router.post('/register', uploadFile.single('avatar'), validacionesRegistroMiddleware, usuariosController.processRegister);

//Perfil de Usuario
router.get('/profile', authMiddleware, usuariosController.profile);

// Logout
router.get('/logout', usuariosController.logout)


module.exports = router;


