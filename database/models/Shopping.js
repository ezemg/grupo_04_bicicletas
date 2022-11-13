<<<<<<< HEAD
module.exports = function (sequelize, dataTypes){
    let alias ="shopping";
    let cols ={
        id_shopping:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.STRING
        },
        amount:{
            type: dataTypes.INTEGER
        }

    }
    let config={
        tableName:'shopping',
        timestamps: false 
    }    

    let Shop = sequelize.define(alias, cols, config);
   
    Shop.associate = function(models){

        Shop.belongsTo(models.Users,{
            as:"shopping",
            foreignKey:'id_user'
        });
        Shop.belongsToMany(models.Products,{
            as:"Products",
            through:'products_shopping',
            foreignKey:'id_shopping',
            otherKey:'id_products',
            timestamps:false
        });
    }

    return Shop;
=======
module.exports = (sequelize, dataTypes) => {

    let alias = 'Shoppings';

    let cols = {

        id_shopping: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },

        name: {
            type: dataTypes.STRING
        },

        price: {
            type: dataTypes.FLOAT
        },

        amount: {
            type: dataTypes.INTEGER
        },

        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }

        // Revisar longitud de descripcion en DB y luego pasar a modelos. 255 es muy poco
    }

    let config = {
        tableName: 'shopping',
        timestamps: false
    }


    const Shopping = sequelize.define(alias, cols, config);

    Shopping.associate = (models) => {

        Shopping.belongsTo(models.Users, {
            as: 'User',
            foreignKey: 'id_user'
        })

        Shopping.belongsToMany(models.Products, {
            as: 'Products',
            through: 'products_shopping',
            foreignKey: 'id_shopping',
            otherKey: 'id_products',
            timestamps: false
        })
    }

    return Shopping

>>>>>>> 2c2c921838e2de4ef741d74d90680403d9215b17
}