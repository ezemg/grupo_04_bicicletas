const path = require('path');
const { body } = require('express-validator');
const User = require('../models/User')

const validacionesProductosMiddleware = [
    body('name')
        .notEmpty()
        .withMessage('Debes nombrar al producto').bail()
        .isLength({ min: 5 })
        .withMessage('El nombre del producto deberá tener al menos 5 caracteres'),

    body('description')
        .notEmpty()
        .withMessage('Tienes que escribir una descripción para el producto')
        .bail()
        .isLength({ min: 20 })
        .withMessage('La descripción del producto deberá tener al menos 20 caracteres'),


    body('fotoProducto').custom((value, { req }) => {
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

        return true

    })

]

module.exports = validacionesProductosMiddleware