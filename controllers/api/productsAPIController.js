const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const productsAPIController = {
    'list': (req, res) => {
        db.Products.findAll()
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                res.json(respuesta)
            })
    },
    'detalle':  (req, res) => {

        
              db.Products.findByPk(
                  req.params.id,
                  {
                       include: [
                            { association: 'category' },
                            { association: 'shoppings' }
                       ]
                  }
             )  
             .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: 'api/product'
                    },
                    data: product
                }
                res.json(respuesta)
            })        

   }
}

module.exports = productsAPIController