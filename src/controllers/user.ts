import { NextFunction, Request, Response } from "express";
import UserRepository from "../repositories/user";
import {
  generateToken,
} from "../utils/jwt.utils";
import bcrypt from "bcrypt";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../config/constants";
import ErrorHandler from "../utils/ErrorHandler";
import successHandler from "../utils/SuccessHandler";
import User from "../models/user";
import moment from "moment";


export class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
       
      });

      console.log("user", user);

      if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
      }
 
      const validPassword = await bcrypt.compare(
        password,
        user.dataValues.password
      );
      if (!validPassword) {
        return next(new ErrorHandler("Invalid email or password", 400));
      }
    
      const token = generateToken(
        user.id,
        user.email,
        process.env.JWT_SECRET || "",
        ACCESS_TOKEN_EXPIRY
      );
  
      successHandler(res, 200, { token, user });
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  }


  async register(req: Request, res: Response, next: NextFunction) {
    const data = { ...req.body };

    if (data.password !== data.confirm_password) {
      return next(new ErrorHandler("password does not match", 400));
    }
    try {
      const userExists = await UserRepository.findByEmail(data.email);

      if (userExists) return next(new ErrorHandler("User already exists", 400));

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      data.password = hashedPassword;


      let user: User;
     const userdata : any ={
      email : data.email,
      first_name :data.first_name,
      last_name : data.last_name,
      password : data.password,
      created_at : moment(),
      updated_at : moment(),
      is_deleted : false

     }
      user = await User.create(userdata)

        successHandler(
          res,
          201,
          undefined,
          "user and profile created successfully"
        );
      
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  }
  async getUserProfile(req: any, res: Response, next: NextFunction) {
    const { id } = req.user;
    const user = await UserRepository.findById(id)
    if (!user) return next(new ErrorHandler("User not found", 404));
    successHandler(res, 200, { user });
  }




 
}
export default new UserController();
