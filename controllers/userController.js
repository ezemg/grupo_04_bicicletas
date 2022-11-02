const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models')



const User = require('../models/User');

const userController = {

    // Acceso a formulario de Login
    login: (req, res) => {
        return res.render('users/login');
    },

    // Proceso de formulario de login 
    loginProcess: async (req, res) => {

        try {

            let userToLogin = await db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })


            if (userToLogin) {

                let isOkPassword = bcrypt.compareSync(req.body.contrasena, userToLogin.password);

                if (isOkPassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    if (req.session.userLogged.id_user_category == 2) {
                        req.session.admin = userToLogin
                        
                    } else if (req.session.userLogged.id_user_category == 1) {
                        req.session.guest = userToLogin
                    }

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

        } catch (error) {
            console.log(error)
        }

    },

    // Acceso a formulario de registro
    register: (req, res) => {
        return res.render('users/registro')
    },
    // Proceso de formulario de registro 
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        try {
            let usuarioInDB = await db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (usuarioInDB) {
                return res.render('users/registro', {
                    errors: {
                        email: { msg: 'Este email ya esta registrado' }
                    },
                    oldData: req.body
                }
                )
            }

            let userToCreate = await db.Users.create(
                {
                    id: Number(String(Date.now()).slice(6)),
                    id_user_category: 1,
                    name: req.body.nombre,
                    last_name: req.body.apellido,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.contrasena, 10),
                    avatar: req.file.filename
                })

        } catch (error) {
            console.log(error)
        }

        return res.redirect('/users/login')
    },

    //Acceso a perfil del usuario logeado
    profile: (req, res) => {
        console.log(req.session.userLogged)
        res.render('users/profile', {
            admin: req.session.admin,
            guest: req.session.guest,
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