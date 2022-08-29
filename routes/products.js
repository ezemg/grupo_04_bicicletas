var express = require('express');
var router = express.Router();


const productsController = require('../controllers/productsController')

router.get('/detalle', productsController.detalle) 
router.get('/carrito', productsController.carrito);
router.get('/nuevoProducto', productsController.nuevoProducto);
router.get('/editarProducto', productsController.editarProducto);

module.exports = router;