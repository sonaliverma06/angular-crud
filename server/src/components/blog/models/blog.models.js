const { DataTypes } = require("sequelize");
const { connection } = require("../../../connection/connection");
const { UserModel } = require("../../userdetails/models/students.models");
const BlogModel = connection.define(
  "blog",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_id",
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "blog",
    freezeTableName: true,
    timestamps: false,
    paranoid: true,
    underscored: true,
  }
);


module.exports = { BlogModel };
