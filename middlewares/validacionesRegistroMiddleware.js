const path = require('path');
const { body } = require('express-validator');

const validacionesRegistroMiddleware = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Deebes escribir un correo valido'),
    body('contrasena').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmarContrasena').notEmpty().withMessage('Tienes que escribir una contraseña'),
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