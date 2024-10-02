const app = require("express").Router();
import userRoutes from "./userRoutes";


app.use("/user", userRoutes);

module.exports = app;
