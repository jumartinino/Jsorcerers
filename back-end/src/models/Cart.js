const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cart = sequelize.define('Cart');

const Cart_Content = sequelize.define('Cart_Content', {
    
    item_qtt: {

        type: DataTypes.INTEGER,
        allowNull: false

    }

});

Cart.associate = function(models){

    Cart.belongsTo(models.User);
    Cart.hasMany(models.Cart_Content);
    Cart.hasOne(models.Buying);

}

Cart_Content.associate = function(models){

    Cart_Content.belongsTo(models.Cart);
    Cart_Content.belongsTo(models.Product);

}

module.exports = Cart;
module.exports = Cart_Content;