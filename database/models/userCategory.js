module.exports = function (sequelize, dataTypes){
    let alias ="UsersCategory";
    let cols ={
       
    }
    let config={
        tableName:'user_category',
        timestamps: false 
    } 

    let UsersCategory = sequelize.define(alias, cols, config);
    /*
    UsersCategory.associate = function(models){
        UsersCategory.hasMany(models.user,{
            as:"User",
            foreignKey:'id_user_category'
        })
     
    }
  */
    return UsersCategory

}