const DataTypes = require("sequelize");
const { models } = require("../config/sequelize");
const sequelize = require("../config/sequelize");
const Post = require("./Post");
const User = require("./User");

const Question = sequelize.define('Question', {
    
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },

    answer: {
        type: DataTypes.STRING
    }
});

Question.associate = function(models){

    Question.hasOne(models.User);
    Question.belongsTo(models.Post);

}

module.exports = Question;