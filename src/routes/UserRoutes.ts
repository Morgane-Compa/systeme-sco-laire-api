import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints to manage users
 */

// Routes
//*************************************** Get all users ***************************************
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success, returns the list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get("/", (req, res) => {
    console.log("userRouter");
    userController.getAll(req, res);
});

//*************************************** get one user by id ***************************************
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve details of a user by its ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success, returns the user details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
userRouter.get("/:id", (req, res) => {
    console.log("userRouter");
    userController.getById(req, res);
});

//*************************************** delete classroom by id ***************************************
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user by its ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
userRouter.delete("/:id", (req, res) => {
    console.log("userRouter");
    userController.delete(req, res);
});

export default userRouter;