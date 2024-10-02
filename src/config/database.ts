import path from "path";
import { Sequelize } from "sequelize";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const uri =
  "postgres://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  "@" +
  process.env.DB_HOST +
  ":" +
  process.env.DB_PORT +
  "/" +
  process.env.DB_NAME;

const connectSequelize = () => {
  return new Sequelize(uri, {
    logging: false,
    dialect: "postgres", 
    dialectOptions: {
      parseNumeric: true,
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: false,
      // },
    },
  });
};

export { connectSequelize, Sequelize };
