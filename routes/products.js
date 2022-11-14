const express = require('express');

const router = express.Router();

const multer = require('multer')
// MIDDLEWARES //
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validacionesProductosMiddleware = require('../middlewares/validacionesProductosMiddleware');
const validacionesEdicionProductosMiddleware = require('../middlewares/validacionesEdicionProductosMiddleware')
const upload = require('../middlewares/multerProductMiddleware')



// CONTROLADOR //

const productsController = require('../controllers/productsController')
// RUTAS //

// Listar todos los productos
router.get("/", productsController.listar);

// Detalle de un producto específico
router.get("/producto/:id", productsController.detalle);

// Acceder a formulario nuevo producto
router.get("/nuevo-producto", authMiddleware, productsController.nuevoProducto);

// router.get("/nuevo-producto", productsController.nuevoProducto);
// Guardar producto nuevo 
router.post("/nuevo-producto", upload.single('fotoProducto'), validacionesProductosMiddleware, productsController.guardar);

// Acceder a formulario de edición de productos
router.get('/edit/:id', authMiddleware, productsController.editar);

// router.get('/edit/:id', productsController.editar);
// Editar un producto
router.put("/edit/:id", upload.single('fotoProducto'), validacionesEdicionProductosMiddleware, productsController.actualizar)


// Eliminar un producto
router.delete('/delete/:id', authMiddleware, productsController.eliminar)

// router.delete('/delete/:id', productsController.eliminar)

// Carrito de compras
router.get('/carrito', authMiddleware, productsController.carrito);

// router.get('/carrito', productsController.carrito);

module.exports = router;