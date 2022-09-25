var express = require('express');
var router = express.Router();



const path = require('path')
const multer = require('multer');

const { body } = require ('express-validator');

const storage = multer.diskStorage({
  destination: (req,file, cb) =>{
    cb(null, './public/images/users');
  },
  filename: (req, file, cb) =>{
    let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null,filename);
  }

})

const uploadFile = multer ({storage});
 

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});
const usuariosController = require('../controllers/userController');
const userController = require('../controllers/userController');

const validations = [
   body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
   body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
   body('usuario').notEmpty().withMessage('Tienes que escribir un usuario'),
   body('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Deebes escribir un correo valido'),
   body('contrasena').notEmpty().withMessage('Tienes que escribir una contraseña'),
   body('confirmarContrasena').notEmpty().withMessage('Tienes que escribir una contraseña'),
   body('avatar').custom((value, { req })=>{
      let file = req.file;
      let aceptedExtensions = ['.jpg','.png','.gif','.webp'];
      
      if (!file){
        throw new Error ('Tienes que subir una imagen');
      }else{
        let fileExtensions = path.extname(file.originalname);
        if (!aceptedExtensions.includes(fileExtensions)){
          throw new Error (`La extensiones validas son ${aceptedExtensions.join(', ')}`);
        }
      }
     
      return true;
   })
 
]

//Formulario login
router.get('/login', usuariosController.login);

//Procesar Login 
router.post('/login',usuariosController.loginProcess);

//Formulario registro

router.get('/register', usuariosController.register);

//Procesar el Registro

router.post('/register',uploadFile.single('avatar'), validations ,usuariosController.processRegister);

//Perfil de Usuario

//router.get('/profile/:userId', usuariosController.profile);


module.exports = router;


