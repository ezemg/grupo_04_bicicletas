const express = require('express');
const router = express.Router();

// CONTROLADOR //
const productsController = require('../controllers/productsController')

// MIDDLEWARES //
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerProductMiddleware')

// RUTAS //

// Listar todos los productos
router.get("/", productsController.listar);

// Detalle de un producto específico
router.get("/producto/:id", productsController.detalle);

// Acceder a formulario nuevo producto
router.get("/nuevo-producto", authMiddleware, productsController.nuevoProducto);

<<<<<<< HEAD
=======
// router.get("/nuevo-producto", productsController.nuevoProducto);
>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
// Guardar producto nuevo
router.post("/nuevo-producto", upload.single("fotoProducto"), productsController.guardar);

// Acceder a formulario de edición de productos
router.get('/edit/:id', authMiddleware, productsController.editar);

// router.get('/edit/:id', productsController.editar);
// Editar un producto
router.put("/edit/:id", upload.single("fotoProducto"), productsController.actualizar)


// Eliminar un producto
router.delete('/delete/:id', authMiddleware, productsController.eliminar)

// router.delete('/delete/:id', productsController.eliminar)

// Carrito de compras
router.get('/carrito', authMiddleware, productsController.carrito);

// router.get('/carrito', productsController.carrito);

module.exports = router;