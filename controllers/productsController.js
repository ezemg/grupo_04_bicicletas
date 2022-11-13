const fs = require('fs');
<<<<<<< HEAD
const path = require('path');
const { Association } = require('sequelize');
const db = require("../database/models")
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
=======
const path = require('path')
const db = require('../database/models')

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17

const productsController = {


     // Index de productos - listar todos     
<<<<<<< HEAD
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
=======
     listar: async (req, res) => {

          try {
               let products = await db.Products.findAll({
                    include: [
                         { association: 'category' },
                         { association: 'shoppings' }
                    ]
               })

               // console.log(productos[1].shoppings)
               res.render('products/listado', { products })

          } catch (error) {
               console.log({ error })
          }


     },

     // Detalle de un producto
     detalle: async (req, res) => {

          try {
               let producto = await db.Products.findByPk(
                    req.params.id,
                    {
                         include: [
                              { association: 'category' },
                              { association: 'shoppings' }
                         ]
                    }
               )

               res.render('products/detalle', { producto })
          } catch (error) {
               console.log({ error })
          }

     },

     // Crear nuevo producto - Obtener formulario
     nuevoProducto: async (req, res) => {

          try {
               let categories = await db.Categories.findAll()

               // console.log(productos[1].shoppings)
               res.render('products/nuevoProducto', { categories })

          } catch (error) {
               console.log({ error })

          }
>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
     },
       

     // Crear nuevo producto - Función para guardar nuevo producto

<<<<<<< HEAD
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
=======
     guardar: async (req, res) => {

          try {
               let productoNuevo = await db.Products.create(
                    {
                         id_products: Number(String(Date.now()).slice(6)),
                         name: req.body.name,
                         description: req.body.description,
                         image: req.file ? req.file.filename : 'default-image.jpg',
                         price: req.body.price,
                         category_id: req.body.category
                    },
               )
               res.redirect('/products')
>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
          }

          catch (error) {
               console.log(error)
          }
<<<<<<< HEAD

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
=======
     },

     // Editar producto existente - Obtener formulario
     editar: async (req, res) => {

          try {
               let productoAEditar = await db.Products.findByPk(req.params.id);

               let categories = await db.Categories.findAll();

               res.render('products/editarProducto', { productoAEditar, categories })
          }
          catch (error) {
               console.log({ error })
          }
     },

     // Editar producto - Actualizar información producto
     actualizar: async (req, res) => {

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17

          try {

               let producto = await db.Products.findByPk(req.params.id)

               console.log('========================================')
               console.log(producto.image)
               console.log('========================================')

               let productoNuevo = await db.Products.update(
                    {
                         name: req.body.name,
                         description: req.body.description,
                         image: req.file ? req.file.filename : producto.image,
                         price: req.body.price,
                         category_id: req.body.category
                    }, {
                    where: {
                         id_products: req.params.id
                    }
               })

               let productoEditado = await db.Products.findByPk(req.params.id)

<<<<<<< HEAD
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
=======
               
               if (producto && producto.image != 'default-image.jpg' && productoEditado.image != producto.image) {

                    fs.unlinkSync("./public/images/productos/" + producto.image)
               } 
               res.redirect("/products/producto/" + req.params.id)
          }
          catch (error) {
               console.log(error)
          }
     },

     eliminar: async (req, res) => {
>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17

          try {
               let productoAEliminar = await db.Products.findByPk(req.params.id)

               if (productoAEliminar && productoAEliminar.image != 'default-image.jpg') {
                    fs.unlinkSync("./public/images/productos/" + productoAEliminar.image)
               }
          }

          catch (error) {
               console.log(error)
          }

<<<<<<< HEAD
          res.redirect('/products')
               */
=======

          try {

               let eliminarProducto = await db.Products.destroy(
                    {
                         where: {
                              id_products: req.params.id
                         }
                    })

               res.redirect('/products')
          }
          catch (error) {
               console.log(error)
          }

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
     },

     // Carrito de comras - Acceder a vista de carrito
     carrito: (req, res) => {
          res.render('products/carrito')
     },

}

module.exports = productsController