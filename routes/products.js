const express = require('express');
const router = express.Router();

// MULTER //
const multer = require('multer')

let storage = multer.diskStorage({
    
    destination: function (req, file, cb){
        cb(null, "public/images/productos");
    },
    
    filename: function (req, file, cb){
        console.log({file})
        cb(null, Date.now() + "" + file.originalname)
    }
});

const upload = multer({storage})

// CONTROLADOR //

const productsController = require('../controllers/productsController')

// RUTAS //

// Listar todos los productos
router.get("/", productsController.listar);

// Detalle de un producto específico
router.get("/producto/:id", productsController.detalle); 

// Acceder a formulario nuevo producto
router.get("/nuevo-producto", productsController.nuevoProducto);
// Guardar producto nuevo
router.post("/nuevo-producto", upload.single("fotoProducto") ,productsController.guardar);

// Acceder a formulario de edición de productos
router.get('/edit/:id', productsController.editar);
// Editar un producto
router.put("/edit/:id", upload.single("fotoProducto"), productsController.actualizar)


// Eliminar un producto
router.delete('/delete/:id', productsController.eliminar)

// Carrito de compras
router.get('/carrito', productsController.carrito);




module.exports = router;