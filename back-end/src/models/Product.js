const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {

        type: DataTypes.FLOAT,
        allowNull: false

    },

    description: {

        type: DataTypes.STRING

    }

});

Product.associate = function(models){

    Product.hasMany(models.Cart_Content);
    Product.hasMany(models.Favorites);
    Product.hasOne(models.Post);
    Product.belongsToMany(models.Photo, {through: "Photo-Product"})

}

module.exports = Product;