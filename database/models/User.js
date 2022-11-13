<<<<<<< HEAD
module.exports = function (sequelize, dataTypes){
    let alias ="Users";
    let cols ={
       
    }
    let config={
        tableName:'user',
        timestamps: false 
    }    
    let User = sequelize.define(alias, cols, config);
    
    User.associate = function(models){
        
        User.belongsTo(models.UsersCategory,{
            as:"UsersCategory",
            foreignKey:'id_user_category'
        })
        User.hasMany(models.shopping,{
            as:"shopping",
            foreignKey:'id_user'
        });
    }
    
=======
module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,

        },

        id_user_category: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING
        },

        last_name: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        password: {
            type: dataTypes.STRING
        },

        avatar: {
            type: dataTypes.STRING
        }

        // Revisar longitud de descripcion en DB y luego pasar a modelos. 255 es muy poco
    }

    let config = {
        tableName: 'user',
        timestamps: false
    }


    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {

        User.belongsTo(models.UserCategories, {
            as: 'userCategory',
            foreignKey: 'id_user_category'
        })

        User.hasMany(models.Shoppings, {
            as: 'Shopping',
            foreignKey: 'id_user'
        })
    }

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
    return User

}