var express = require('express');
var router = express.Router();


const homeController = require('../controllers/mainController');
router.get('/', homeController.index);


module.exports = router;
