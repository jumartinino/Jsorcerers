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



module.exports = Post;