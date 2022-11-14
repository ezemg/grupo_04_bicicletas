const fs = require('fs');
const path = require('path')
const db = require('../database/models')
const { validationResult } = require('express-validator');
const busboy = require('connect-busboy')


const productsController = {

     // Index de productos - listar todos     
     listar: async (req, res) => {

          try {
               let products = await db.Products.findAll({
                    include: [
                         { association: 'category' },
                         { association: 'shoppings' }
                    ]
               })

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

               res.render('products/nuevoProducto', { categories })

          } catch (error) {
               console.log({ error })

          }
     },

     // Crear nuevo producto - Función para guardar nuevo producto

     guardar: async (req, res) => {

          const resultValidation = validationResult(req);


          if (resultValidation.errors.length > 0) {

               try {
                    let categories = await db.Categories.findAll()

                    res.render(
                         'products/nuevoProducto',
                         {
                              categories: categories,
                              errors: resultValidation.mapped(),
                              oldData: req.body
                         })
               } catch (error) {
                    console.log(error)
               }

          } else {

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
               } catch (error) {
                    console.log(error)
               }

          }

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

          const resultValidation = validationResult(req)

          if (resultValidation.errors.length > 0) {

               try {
                    let productoAEditar = await db.Products.findByPk(req.params.id);

                    let categories = await db.Categories.findAll();

                    res.render('products/editarProducto',
                         {
                              productoAEditar,
                              categories,
                              errors: resultValidation.mapped(),
                              oldData: req.body
                         })
               }

               catch (error) {

                    console.log({ error })
               }

          } else {

               try {

                    let producto = await db.Products.findByPk(req.params.id)


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


                    if (producto && producto.image != 'default-image.jpg' && productoEditado.image != producto.image) {

                         fs.unlinkSync("./public/images/productos/" + producto.image)
                    }
                    res.redirect("/products/producto/" + req.params.id)
               }
               catch (error) {
                    console.log(error)
               }

          }

     },

     eliminar: async (req, res) => {

          try {
               let productoAEliminar = await db.Products.findByPk(req.params.id)

               if (productoAEliminar && productoAEliminar.image != 'default-image.jpg') {
                    fs.unlinkSync("./public/images/productos/" + productoAEliminar.image)
               }
          }

          catch (error) {
               console.log(error)
          }


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

     },

     // Carrito de comras - Acceder a vista de carrito
     carrito: (req, res) => {
          res.render('products/carrito')
     },

}

module.exports = productsController