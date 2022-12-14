const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Post = sequelize.define('Post', {
    
    avg_rating: {

        type: DataTypes.FLOAT,
        allowNull: false

    },

    avaliable_qtt: {

        type: DataTypes.INTEGER,
        allowNull: false

    }

});

Post.associate = function(models){

    Post.belongsTo(models.Product);
    Post.belongsTo(models.User_Shop);
    Post.hasMany(models.Question);
    Post.hasMany(models.Comment);

}

module.exports = Post;