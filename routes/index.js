var express = require('express');
var router = express.Router();


//router.get('/', function(req, res) {
 // res.render('index');
//});



const homeController = require('../controllers/mainController');
router.get('/', homeController.index);


module.exports = router;
