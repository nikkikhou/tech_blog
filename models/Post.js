const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init(
  {
    // defined columns in post
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;