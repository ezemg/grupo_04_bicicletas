const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models')

const validacionesLoginMiddleware = [
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email!')
        .bail()
        .isEmail()
        .withMessage('Debes escribir un correo valido')
        .bail()
        .custom(async (email, { req }) => {
            let userToLogin = await db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (userToLogin == null) {
                throw new Error('No se encuentra el mail en nuestros registros')
            }
        }),

    body('contrasena')
        .notEmpty().withMessage('Debes escribir una contraseña')
]

module.exports = validacionesLoginMiddleware