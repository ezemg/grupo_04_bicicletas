const {validationResult}=require ('express-validator');
const User= require('../models/User');
const bcrypt= require('bcryptjs');

const userController = {
    processRegister: (req,res)=> {       
       const resultValidation = validationResult(req);
        
       if (resultValidation.errors.length > 0) {
        return res.render('users/registro',{
            errors: resultValidation.mapped(),
            oldData: req.body
        });   
       }
       let userInDB = User.findByField ('email', req.body.email);

       if (userInDB){
      
            return res.render('users/registro',{
                errors: {
                    email:{
                        msg:'Este email ya esta registrado'
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

       return res.redirect ('/users/login')


       
    },

    loginProcess:(req, res) =>{
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkPassword = bcrypt.compareSync(req.body.contrasena, userToLogin.contrasena)
            if (isOkPassword){
                return res.redirect('/products/carrito')
            }
            return res.render ('users/login',{
                errors:{
                    email:{
                        msg:"las credenciales son invalidas"
                    }
                }
            })
        }
        return res.render ('users/login',{
            errors:{
                email:{
                    msg:"El email no se encuentra registrado"
                }
            }
        })
    },

    login: (req, res) => {
        return res.render('users/login')

       
    },

    register: (req, res) => {
        return res.render('users/registro')   
        
    }    
}

module.exports = userController