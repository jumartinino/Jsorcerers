const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    
    photo: {
        type: DataTypes.BLOB,
        allowNull: false
    },

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



module.exports = Product;