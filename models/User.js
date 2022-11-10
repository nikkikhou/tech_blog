const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
  {
    // defined columns in comment
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
    modelName: "user",
  }
);

module.exports = User;