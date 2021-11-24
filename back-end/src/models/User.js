const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    hash: {
		type: DataTypes.STRING,
        allowNull: false
	},

	salt: {
		type: DataTypes.STRING,
        allowNull: false
	},

    endereco:{

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
    User.belongsToMany(models.Question, {through: "madeQuestion", as: "userQuestioning"});
    User.hasOne(models.Photo)

}

module.exports = User;