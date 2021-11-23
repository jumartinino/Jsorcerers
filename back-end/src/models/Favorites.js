const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Favorites = sequelize.define('Favorites', {
    
    

});

Favorites.associate = function(models){

    Favorites.hasMany(models.Product);
    Favorites.belongsTo(models.User);

}

module.exports = Favorites;