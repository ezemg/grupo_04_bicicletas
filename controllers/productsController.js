
const productsController = {
    detalle: (req, res) => {
        res.render('products/detalle')
    },

    carrito: (req, res) => {
         res.render('products/carrito')
    },
    nuevoProducto: (req, res) => {
         res.render('products/nuevoProducto')
    },
    editarProducto: (req, res) => {
         res.render('products/editarProducto')
    }

}

module.exports = productsController