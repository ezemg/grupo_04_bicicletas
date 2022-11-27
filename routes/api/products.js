const express = require('express')
const router = express.Router()
const productsAPIController = require('../../controllers/api/productsAPIController')

router.get('/', productsAPIController.list)
router.get('/', productsAPIController.detalle)
router.get("/:id", productsAPIController.detalle);
module.exports = router