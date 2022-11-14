const path = require('path');
const { body } = require('express-validator');
const User = require('../models/User')

const validacionesRegistroMiddleware = [
    body('nombre')
        .notEmpty()
        .withMessage('Tienes que escribir un nombre').bail()
        .isLength({ min: 2 })
        .withMessage('El nombre debe tener al menos dos caracteres'),

    body('apellido')
        .notEmpty()
        .withMessage('Tienes que escribir un apellido')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El apellido debe tener al menos dos caracteres'),

    body('email')
        .notEmpty()
        .withMessage('Tienes que escribir un email').bail()
        .isEmail()
        .withMessage('Debes escribir un correo valido'),

    // La validacion de existencia de mail en DB esta en el controller

    body('contrasena')
        .notEmpty()
        .withMessage('Tienes que escribir una contraseña')
        .bail()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .withMessage('La contraseña debe tener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial')
        .bail()
        .isLength({ min: 8, max: 32 })
        .withMessage('La contraseña debe tener un minimo de 8 caracteres y un maximo de 32 caracteres'),


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

        console.log("===========================")
        console.log(file)
        console.log("===========================")

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