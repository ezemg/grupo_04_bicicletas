const fs = require('fs');
const path = require('path')

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

     // Index de productos - listar todos     
     listar: (req, res) => {
          res.render('products/listado', { products })
     },

     // Detalle de un producto
     detalle: (req, res) => {
          const producto = products.find((p) => p.id == req.params.id);
          res.render('products/detalle', { producto })
     },

     // Crear nuevo producto - Obtener formulario
     nuevoProducto: (req, res) => {
          res.render('products/nuevoProducto')
     },

     // Crear nuevo producto - Función para guardar nuevo producto

     guardar: (req, res) => {

          let productoNuevo = {
               id: Date.now(),
               name: req.body.name,
               description: req.body.description,
               category: req.body.category,
               image: 'default-image.jpg',
               price: req.body.price,
          }

          if (req.file) {
               productoNuevo.image = req.file.filename;
          }

          products.push(productoNuevo);

          let data = JSON.stringify(products, null, " ");

          fs.writeFileSync(productsFilePath, data);

          res.redirect('/products')
     },

     // Editar producto existente - Obtener formulario
     editar: (req, res) => {
          const producto = products.find((p) => p.id == req.params.id);
          res.render('products/editarProducto', { productoAEditar: producto });
     },

     // Editar producto - Actualizar información producto
     actualizar: (req, res) => {

          products.forEach((p) => {
               if (p.id == req.params.id) {
                    p.name = req.body.name;
                    p.description = req.body.description;
                    p.category = req.body.category;
                    p.price = req.body.price;

                    if (req.file) {
                         fs.unlinkSync("./public/images/productos/" + p.image);
                         p.image = req.file.filename
                    }
               }
          })

          const data = JSON.stringify(products, null, "");
          fs.writeFileSync(productsFilePath, data);

          res.redirect("/products/producto/" + req.params.id)

     },

     eliminar: (req, res) => {
          let producto = products.find((p) => p.id == req.params.id);

          products = products.filter((p) => p.id != req.params.id);



          if (producto && producto.image != 'default-image.jpg') {
               fs.unlinkSync("./public/images/productos/" + producto.image)
          }

          const data = JSON.stringify(products, null, " ");
          fs.writeFileSync(productsFilePath, data);

          res.redirect('/products')

     },

     // Carrito de comras - Acceder a vista de carrito
     carrito: (req, res) => {
          res.render('products/carrito')
     },

}

module.exports = productsController