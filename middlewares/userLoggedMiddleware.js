const User = require('../models/User')

function userLoggedMiddleware(req, res, next) {


    res.locals.isLogged = false;
    res.locals.admin = false;
    res.locals.guest = false;

    let emailInCookie = req.cookies.userEmail;

    let userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    if (req.session && req.session.admin) {
        res.locals.admin = true
    }

    if (req.session && req.session.guest) {
        res.locals.guest = true
    }

    next();
}
module.exports = userLoggedMiddleware;