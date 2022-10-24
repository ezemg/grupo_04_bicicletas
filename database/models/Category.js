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
        tableName:'Category',
        timestamps: false 
    }    

    let Category = sequelize.difine(alias, cols, config);
    Category.associate = function(models){
        Category.hasMany(models.Products,{
            as:"Products",
            foreignKey:'category_id'
        })
    }
    return Category;
}