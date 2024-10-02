"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
   
    static associate(models) {
    }
  }
  users.init(
    {
      email: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password :DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,
      updated_at: DataTypes.DATE,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );
  return users;
};
