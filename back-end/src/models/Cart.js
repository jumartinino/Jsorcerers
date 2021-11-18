const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cart = sequelize.define('Cart', {
    
    

});

const Cart_Content = sequelize.define('Cart_Content', {
    
    item_qtt: {

        type: DataTypes.INTEGER,
        allowNull: false

    }

});

module.exports = Cart;
module.exports = Cart_Content;