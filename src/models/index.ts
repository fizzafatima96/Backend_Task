import { connectSequelize } from "../config/database";

const sequelize = connectSequelize();

sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected");
  
  })
  .catch((err: any) => {
    console.log(err);
    process.exit(1);
  });

export { sequelize };
