import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

class User extends Model {
  // model definition
  public id!: string;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public is_deleted!: boolean;
  public updated_at!: Date;
  public created_at!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },   
    first_name: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    last_name: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },

    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },


    // other fields
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
    freezeTableName: true,
  }
);


export default User;
