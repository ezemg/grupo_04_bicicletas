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
}