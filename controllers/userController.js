const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const userController = {

    // Acceso a formulario de Login
    login: (req, res) => {
        return res.render('users/login');
    },

    // Proceso de formulario de login 
    loginProcess: (req, res) => {

        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkPassword = bcrypt.compareSync(req.body.contrasena, userToLogin.contrasena);
            if (isOkPassword) {
                delete userToLogin.contrasena;
                delete userToLogin.confirmarContrasena;
                req.session.userLogged = userToLogin;

                if (req.body.recordar) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }

                return res.redirect('/users/profile')
            }

            return res.render('users/login', {
                errors: {
                    email: {
                        msg: "las credenciales son invalidas"
                    }
                }
            })
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: "El email no se encuentra registrado"
                }
            }
        })
    },

    // Acceso a formulario de registro
    register: (req, res) => {
        return res.render('users/registro')
    },
    // Proceso de formulario de registro 
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {

            return res.render('users/registro', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });

        }

        let userToCreate = {
            ...req.body,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            confirmarContrasena: bcrypt.hashSync(req.body.contrasena, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/users/login')
    },

    //Acceso a perfil del usuario logeado
    profile: (req, res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });

    },

    //Logout de sesion y destrucción de cookie
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }

}

module.exports = userController