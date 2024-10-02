import express from "express";
require("dotenv").config();
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Disposition");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Credentials", "true");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());


app.use("/dev/api", require("./routes/index"));

// if (process.env.NODE_ENV === "test") {
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// }


app.listen(3002, () => console.log("Server is running on port 3002"));

