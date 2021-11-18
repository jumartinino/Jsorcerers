const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    
    profile_pic: {
        type: DataTypes.BLOB,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {

        type: DataTypes.STRING,
        allowNull: false
    },

    data_nasc:{

        type: DataTypes.DATEONLY,
        allowNull: false

    },

    is_mod: {

        type: DataTypes.BOOLEAN,
        allowNull: false

    }
});

User.associate = function(models) {

    User.hasMany(models.Cart);
    User.hasOne(models.Favorites);
    User.hasMany(models.User_Shop);
    User.belongsToMany(models.Comment, {through: "Commented", as:"userCommenting"});
    User.belongsToMany(models.Question, {through: "madeQuestion", as: "userQuestioning"})

}

module.exports = User;