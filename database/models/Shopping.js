module.exports = function (sequelize, dataTypes){
    let alias ="shopping";
    let cols ={
        shopping_id:{
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
        Shop.belongsToMany(models.Products,{
            as:"Products",
            throught:'products_shopping',
            foreignKey:'shopping_id',
            otherKey:'product_id',
            timestamps:false
        });
    }

    return Shop;
}