const path = require('path');
const { body } = require('express-validator');
const User = require('../models/User')

const validacionesEdicionProductosMiddleware = [
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


]

module.exports = validacionesEdicionProductosMiddleware