const fs = require('fs')
const db = require('../database/models')




let idGenerator = async () => {
    try {
        let allProducts = await db.Products.findAll()
        let lastProduct = await allProducts.pop()
        return lastProduct.dataValues.id_products + 1
    } catch (error) {
        console.log(error)
    }
}

