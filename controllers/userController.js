

const userController = {
    login: (req, res) => {
        return res.render('users/login')
    },

    register: (req, res) => {
        return res.render('users/registro')
    }    
}

module.exports = userController