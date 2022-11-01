const { Generator } = require('randomly-id-generator');

const idGenerator = new Generator().generate()

console.log(idGenerator)


listar: async (req, res) => {

    try {
        // let productos = await db.Products.findAll(
        //      {
        //           include: [
        //                {
        //                     association: 'Category',
        //                     association: 'shoppings',
        //                     raw: true,
        //                     nest: true
        //                }
        //           ]
        //      }
        // )

        // let shoppings = await db.Shoppings.findAll({
        //      include: [
        //           { association: 'User' },
        //           { association: 'Products' }
        //      ]
        // })

        let users = await db.Users.findAll({
            include: [
                { association: 'userCategory' },
                { association: 'Shopping' }
            ]
        })

        console.log('===============================')

        console.log('===============================')
        // console.log(productos[1].shoppings)
        res.render('products/listado', { products })

    } catch (error) {
        console.log({ error })
    }


}