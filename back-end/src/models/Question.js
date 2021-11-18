const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Question = sequelize.define('Question', {
    
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },

    answer: {
        type: DataTypes.STRING
    }
});



module.exports = Question;