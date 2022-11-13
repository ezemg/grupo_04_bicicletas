module.exports = function (sequelize, dataTypes){
    let alias ="Products";
    let cols ={
        id_products:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.DECIMAL
        },
        category_id:{
            type: dataTypes.INTEGER
        }
    }
    let config={
        tableName:'Products',
        timestamps: false 
    }    

    let Product = sequelize.define(alias, cols, config);

   Product.associate = function(models){
        Product.belongsTo(models.Category,{
            as:"Category",
            foreignKey:'category_id'
        })
        Product.belongsToMany(models.shopping,{
            as:"shopping",
            through:'products_shopping',
            foreignKey:'id_products',
            otherKey:'id_shopping',
            timestamps:false
        });
    }

    return Product;
}