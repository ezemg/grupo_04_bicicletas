var express = require('express');
var router = express.Router();

//router.get('/', function(req, res) {
  //res.render('products/detalle');});
//const productosController = require('../controllers/productsController');
//router.get('/detalle', productosController.detalle);

//router.get('/carrito', productosController.carrito);
//module.exports = router;

const productsController = require('../controllers/productsController')

router.get('/', productsController.detalle)
 
router.get('/carrito', productsController.carrito);
router.get('/nuevoProducto', productsController.nuevoProducto);
router.get('/editarProducto', productsController.editarProducto);

module.exports = router;