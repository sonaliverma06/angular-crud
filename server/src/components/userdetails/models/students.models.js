const { DataTypes } = require("sequelize");

const { connection } = require("../../../connection/connection");
const { BlogModel } = require("../../blog/models/blog.models");
const UserModel = connection.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    freezeTableName: true,
    timestamps: false,
    paranoid: true,
    underscored: true,
  }
);


UserModel.hasMany(BlogModel,{
    foreignKey: "user_id",
})
setTimeout(() => {
  BlogModel.belongsTo(UserModel, { foreignKey: "user_id" });
}, 0);

module.exports = { UserModel };
