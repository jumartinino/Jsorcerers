const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Buying = sequelize.define('Buying', {
    
    tracking_code: {
        type: DataTypes.STRING
    }

});



module.exports = Buying;