let saludo = function saludar(req, res, next) {
    console.log('hola mundo!')
    next()
}

module.exports = saludo