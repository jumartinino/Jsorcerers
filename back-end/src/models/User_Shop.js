const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User_Shop = sequelize.define('User_Shop', {
    
    profile_pic: {
        type: DataTypes.BLOB,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User_Shop.associate = function(models) {

    User_Shop.belongsToMany(models.Post, {through: 'IsFromUser', as:'ShopFromUser'});
    User_Shop.belongsTo(models.User);

}

module.exports = User_Shop;