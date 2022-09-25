var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});
const usuariosController = require('../controllers/userController')

router.get('/login', usuariosController.login);


module.exports = router;


