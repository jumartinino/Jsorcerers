const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Photo = sequelize.define("Photo", {
		path: {
			type: DataTypes.STRING,
			allowNull: false
		}
});

Photo.associate = function(models){
	Photo.belongsTo(models.Product);
    Photo.belongsTo(models.User);
    Photo.belongsTo(models.User_Shop);
}
module.exports = Photo;