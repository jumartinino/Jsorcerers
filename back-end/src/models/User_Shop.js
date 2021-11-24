const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");

const User_Shop = sequelize.define('User_Shop', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User_Shop.associate = function(models) {

    User_Shop.belongsToMany(models.Post, {through: 'IsFromUser', as:'ShopFromUser'});
    User_Shop.belongsTo(models.User);
    User_Shop.hasOne(models.Photo)

}

module.exports = User_Shop;