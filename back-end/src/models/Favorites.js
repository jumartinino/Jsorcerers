const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Favorites = sequelize.define('Favorites', {
    
    

});

Favorites.associate = function(models){

    Favorites.belongsToMany(models.Product, {through: "ProductList"});
    Favorites.belongsTo(models.User);

}

module.exports = Favorites;