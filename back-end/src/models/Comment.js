const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define('Comment', {
    
    content: {

        type: DataTypes.STRING,
        allowNull: false

    }

});



module.exports = Comment;