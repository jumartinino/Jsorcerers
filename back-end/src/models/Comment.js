const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");

const Comment = sequelize.define('Comment', {
    
    content: {

        type: DataTypes.STRING,
        allowNull: false

    }

});

Comment.associate = function(models){

    Comment.belongsTo(models.User);
    Comment.belongsTo(models.Post);

}

module.exports = Comment;