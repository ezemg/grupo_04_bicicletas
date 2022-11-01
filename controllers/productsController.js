const fs = require('fs');
const path = require('path');
const { Association } = require('sequelize');
const db = require("../database/models")
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

     // Index de productos - listar todos     
     listar: (req, res) => {
          db.Products.findAll()
          .then(function(resultado){
               res.render('products/listado', { products:resultado })
          })
          //res.render('products/listado', { products })
     },

     // Detalle de un producto
     detalle: (req, res) => {
          db.Products.findByPk( req.params.id,{
               include:[{association: "Category"},{association: "shopping"}]
          })
          .then(function(resultado){
               
               res.render('products/detalle', { producto:resultado })
          })

          /*const producto = products.find((p) => p.id == req.params.id);
          res.render('products/detalle', { producto })*/
     },

     // Crear nuevo producto - Obtener formulario
     
     nuevoProducto: (req, res) => {             // Crear nuevo producto (base de datos) 
              
          db.Category.findAll()
               .then(Category =>{
                   
                    return res.render("products/nuevoProducto", {Category:Category});                
                    
                     
               })
            //res.render('products/nuevoProducto')
     },
       

     // Crear nuevo producto - Función para guardar nuevo producto

     guardar: (req, res) => {
          db.Products.create({
               
               name: req.body.name,
               description: req.body.description,
               image: 'default-image.jpg',
               price: req.body.price,
               category_id: req.body.category
               
               
               
          });   
              res.redirect('/products');         
                    
          /*
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

          res.redirect('/products')*/
     },

     // Editar producto existente - Obtener formulario
     editar: (req, res) => {
        
          let pedidoProducto =db.Products.findByPk(req.params.id);
          let pedidoCategoria = db.Category.findAll();
          
          Promise.all([pedidoProducto,pedidoCategoria])
          .then (function([producto, categoria]) {
            
               return res.render('products/editarProducto', { productoAEditar:producto, categoria:categoria})
          })
         /*     
          const producto = products.find((p) => p.id == req.params.id);
          res.render('products/editarProducto', { productoAEditar:producto });*/
     },

     // Editar producto - Actualizar información producto
     actualizar: (req, res) => {
          db.Products.update({
               
               name: req.body.name,
               description: req.body.description,
               image: 'default-image.jpg',
               price: req.body.price,
               category_id: req.body.category
               
               
               
          },
          {
          where: {id_products:req.params.id}

          });
          res.redirect("/products/producto/" + req.params.id)    
             
          
          /*
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
          */
     },

     eliminar: (req, res) => {
          db.Products.destroy({
               where:{ id_products:req.params.id}
          })
          res.redirect('/products')
          /*
          let producto = products.find((p) => p.id == req.params.id);

          products = products.filter((p) => p.id != req.params.id);



          if (producto && producto.image != 'default-image.jpg') {
               fs.unlinkSync("./public/images/productos/" + producto.image)
          }

          const data = JSON.stringify(products, null, " ");
          fs.writeFileSync(productsFilePath, data);

          res.redirect('/products')
               */
     },

     // Carrito de comras - Acceder a vista de carrito
     carrito: (req, res) => {
          res.render('products/carrito')
     },

}

module.exports = productsController