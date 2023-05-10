const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

router.get("/", productsAPIController.list);

router.get("/categories", productsAPIController.categoriesList);
router.get("/listacompras", productsAPIController.listaCompras);
router.get("/:id", productsAPIController.detalle);

module.exports = router;
