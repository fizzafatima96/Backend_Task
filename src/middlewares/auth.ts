// import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
const dotenv = require("dotenv");
dotenv.config();
import { verifyToken } from "../utils/jwt.utils";
import ErrorHandler from "../utils/ErrorHandler";

export const authenticateJWT = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
console.log(authHeader , "auth");

  if (authHeader) {
    const token = authHeader.split(" ")[1]; 
    const user: any = verifyToken(token, process.env.JWT_SECRET || "");
    console.log(user, "userssss");
    if (user.status === 401) {
      return next(new ErrorHandler(user.message, user.status));
    }
    req.user = user;
    console.log(user, "user");
    next();

  } else {
    return next(
      new ErrorHandler("Authorization header missing, please login!", 401)
    );
  }
};
