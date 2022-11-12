const path = require('path');
const { body, check } = require('express-validator');

const validacionesRegistroMiddleware = [
    body('nombre')
        .notEmpty().withMessage('Tienes que escribir un nombre').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos'),

    body('apellido')
        .notEmpty()
        .withMessage('Tienes que escribir un apellido')
        .bail(),

    // .matches(/^(.*[a-z].*)$/).withMessage('Password must contain at least one lowercase letter')
    // .matches(/^(.*[A-Z].*)$/).withMessage('Password must contain at least one uppercase letter')
    // .matches(/^(.*\d.*)$/).withMessage('Password must contain at least one digit'),

    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Debes escribir un correo valido'),

    body('contrasena')
        .notEmpty()
        .withMessage('Tienes que escribir una contraseña')
        .bail()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .withMessage('La contraseña debe tener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial')
        .bail()
        .isLength({ min: 8, max: 32 }).withMessage('La contraseña debe tener un minimo de 8 caracteres y un maximo de 32 caracteres'),


    body('confirmarContrasena')
        .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
        .custom(async (confirmarContrasena, { req }) => {
            const contrasena = req.body.contrasena
            if (contrasena !== confirmarContrasena) {
                throw new Error('Las contraseñas deben coincidir')
            }
        })
    ,

    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let aceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtensions = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtensions)) {
                throw new Error(`La extensiones validas son ${aceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })

]

module.exports = validacionesRegistroMiddleware