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
    
    return User

}