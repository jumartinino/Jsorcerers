const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Photo = sequelize.define("Photo", {
		path: {
			type: DataTypes.STRING,
			allowNull: false
		}
});

Photo.associate = function(models){
	Photo.hasOne(models.Product);
    Photo.hasOne(models.User);
    Photo.hasOne(models.User_Shop);
}
module.exports = Photo;