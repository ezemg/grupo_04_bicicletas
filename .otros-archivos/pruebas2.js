const validator = require('validator')



let password = 'hola12345678'
let password2 = 'hola12345678'

let esIgual = validator.equals(password, password2)
let esLarga = validator.isLength(password, { min: 10 })
// let contiene = validator.contains(password, 'z').withMessage('Hola!')

console.log(RegExp())


// function validacion() {
//     return { esIgual, esLarga }


// }
// console.log(validacion())
// console.log(validacion())

const { body } = require('express-validator');



// console.log(body('password').isLength(8).withMessage('hola').bail())


// console.log(body())