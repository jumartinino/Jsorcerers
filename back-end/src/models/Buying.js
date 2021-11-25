const DataTypes = require("sequelize");
const { model } = require("../config/sequelize");
const sequelize = require("../config/sequelize");

const Buying = sequelize.define('Buying', {
    
    tracking_code: {
        type: DataTypes.STRING
    }

});

Buying.associate = function(models){

    Buying.belongsTo(models.Cart);

}

module.exports = Buying;