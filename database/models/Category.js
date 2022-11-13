<<<<<<< HEAD
module.exports = function (sequelize, dataTypes){
    let alias ="Category";
    let cols ={
        category_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        }
    }
    let config={
        tableName:'category',
        timestamps: false 
    }    

    let Category = sequelize.define(alias, cols, config);
   
    Category.associate = function(models){
        Category.hasMany(models.Products,{
            as:"Products",
            foreignKey:'category_id'
        })
    }
    
    return Category;
=======
module.exports = (sequelize, dataTypes) => {

    let alias = 'Categories';

    let cols = {

        category_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },

        name: {
            type: dataTypes.STRING
        },

        // Revisar longitud de descripcion en DB y luego pasar a modelos. 255 es muy poco
    }

    let config = {
        tableName: 'category',
        timestamps: false
    }


    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {

        Category.hasMany(models.Products, {
            as: 'Product',
            foreignKey: 'category_id'
        })
    }

    return Category

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
}