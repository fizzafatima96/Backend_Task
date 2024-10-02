import jwt from "jsonwebtoken";
import User from "../models/user";

export const generateToken = (
  id: string,
  email: string,
  secret: string,
  expiresIn: string
) => {
  console.log(secret, "secret");

  return jwt.sign(
    {
      id,
      email,
    },
    secret,
    { expiresIn }
  );
};



export const verifyToken = (token: string, secret: string) => {
  try {
    console.log(token, "token");

    return jwt.verify(token, secret);
  } catch (e: any) {
    console.log(e, "eeeee", e.name);
    let response;

    if (e.name === "TokenExpiredError") {
      response = {
        message: "Token expired, please login again!",
        status: 401,
      };
    } else if (e.name === "JsonWebTokenError") {
      response = {
        message: "Invalid token, please login!",
        status: 401,
      };
    } else {
      response = {
        message: "Authentication failed, please login!",
        status: 401,
      };
    }

    return response;
  }
};
