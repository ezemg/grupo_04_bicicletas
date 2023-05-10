const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const productsAPIController = {
  list: async (req, res) => {
    try {
      let products = await db.Products.findAll({
        include: [{ association: "category" }, { association: "shoppings" }],
      });

      let categories = await db.Categories.findAll({
        include: [{ association: "Product" }],
      });

      console.log(categories);

      let respuesta = {
        status: 200,
        count: products.length,
        //Ver como iterar sobre este array y devolver un objeto
        countByCategory: categories.reduce(
          (acc, cur) => ({ ...acc, [cur.name]: cur.Product.length }),
          {}
        ),
        url: "/api/products",
        products: products.map(e => {
          return {
            id: e.id_products,
            name: e.name,
            description: e.description,
            image: e.image,
            price: e.price,
            category: e.category,
            url: `/api/products/${e.id_products}`,
          };
        }),
      };

      res.json(respuesta);
    } catch (error) {
      console.log({ error });
    }
  },

  categoriesList: async (req, res) => {
    try {
      let categories = await db.Categories.findAll({
        include: [{ association: "Product" }],
      });

      let respuesta = {
        status: 200,
        count: categories.length,
        url: "/api/products/categories",

        categories: categories.map(e => {
          return {
            id: e.category_id,
            name: e.name,
            products: e.Product.length,
          };
        }),
      };
      res.json(respuesta);
    } catch (error) {
      console.log({ error });
    }
  },

  detalle: async (req, res) => {
    try {
      let product = await db.Products.findByPk(req.params.id, {
        include: [{ association: "category" }, { association: "shoppings" }],
      });

      let respuesta = {
        status: 200,
        data: {
          id: product.id_products,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          category: product.category,
        },
        url: `/api/products/${product.id_products}`,
        image_url: `/images/productos/${product.image}`,
      };

      res.json(respuesta);
    } catch (error) {
      console.log(error);
    }
  },

  listaCompras: async (req, res) => {
    try {
      let shoppings = await db.Shoppings.findAll({
        include: [
          { association: "User" },
          { association: "ShoppingStatus" },
          { association: "Products" },
        ],
      });

      console.log(shoppings);
      let respuesta = {
        status: 200,
        count: shoppings.length,
        //Ver como iterar sobre este array y devolver un objeto
        url: "/api/products/listacompras",
        shoppings: shoppings.map(e => {
          return {
            id: e.id_shopping,
            estado: e.ShoppingStatus.name,
            precio: e.price,
            usuario: `${e.User.name} ${e.User.last_name}`,
            url: `/api/products/compras/${e.id_shopping}`,
          };
        }),
      };

      res.json(respuesta);
    } catch (error) {
      console.log({ error });
    }
  },
};

module.exports = productsAPIController;
