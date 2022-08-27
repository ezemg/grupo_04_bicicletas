//const productsController = {
   
    //carrito:(req,res)=> {return res.render('products/carrito')},

    //detalle:(req,res)=> {return res.render('detalle')},

//}

//module.exports = productsController;

const productsController = {
    detalle: (req, res) => {
        return res.render('products/detalle')
    },

    carrito: (req, res) => {
        return res.render('products/carrito')
    }    
}

module.exports = productsController