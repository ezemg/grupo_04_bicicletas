const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const usersAPIController = {
  list: async (req, res) => {
    try {
      let usuarios = await db.Users.findAll({
        include: [{ association: "userCategory" }],
      });

      let categoriasUsuarios = await db.UserCategories.findAll({
        include: [{ association: "user" }],
      });

      let respuesta = {
        status: 200,
        count: usuarios.length,
        url: "/api/usuarios",
        users: usuarios.map(e => {
          return {
            id: e.id,
            first_name: e.name,
            last_name: e.last_name,
            email: e.email,
            avatar: e.avatar,
            detail: `/api/users/${e.id}`,
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
      let usuario = await db.Users.findByPk(req.params.id, {
        include: [{ association: "userCategory" }],
      });

      let respuesta = {
        status: 200,
        data: {
          id: usuario.id,
          first_name: usuario.name,
          last_name: usuario.last_name,
          email: usuario.email,
        },
        url: `/api/users/${usuario.id}`,
        image_url: `/images/users/${usuario.avatar}`,
      };

      res.json(respuesta);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usersAPIController;
