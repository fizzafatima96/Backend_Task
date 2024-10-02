import { Router } from "express";
import UserController from "../controllers/user";
import { authenticateJWT } from "../middlewares/auth";

const router = Router();

// /**
//  * @swagger
//  * /dev/api/user/details:
//  *   get:
//  *     summary: Get user details
//  *     tags:
//  *       - Users
//  *     description: Get users details of a logged in user.
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       '200':
//  *         description: User's profile details.
//  */
// router.get("/details", authenticateJWT, UserController.getUserDetails);


// /**
//  * @swagger
//  * /dev/api/user/token:
//  *   post:
//  *     summary: Get user details
//  *     tags:
//  *       - Users
//  *     description: Get users details of a logged in user.
//  *     security:
//  *       - bearerAuth: []
//  *      requestBody:
//  *       description: User object
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               refresh_token:
//  *                 type: string
//  *     responses:
//  *       '200':
//  *         description: User's profile details.
//  */
// router.post("/token", UserController.refreshToken);

/**
 * @swagger
 * /dev/api/user/register:
 *   post:
 *     summary: Create a new user
 *     description: Endpoint to create a new user.
 *     tags:
 *       - Users
 *     requestBody:
 *       description: User object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               first_name:
 *                 type: string
 *               last_name:  
 *                 type: string
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *               - confirm_password
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request (e.g., missing fields, invalid email)
 *       '409':
 *         description: Conflict (e.g., user already exists)
 */
router.post(
  "/register",
  UserController.register
);


/**
 * @swagger
 * /dev/api/user/profile:
 *   get:
 *     summary: Get User Profile
 *     tags:
 *      - Users
 *     description: Get profile details of a logged in user.
 *     responses:
 *       '200':
 *         description: User's profile details.
 */
router.get("/profile", authenticateJWT, UserController.getUserProfile);

/**
 * @swagger
 * /dev/api/user/login:
 *   post:
 *     summary: Login user
 *     description: Endpoint to login user.
 *     tags:
 *      - Users
 *     requestBody:
 *       description: User object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 */
router.post("/login", 
   UserController.login);

export default router;
