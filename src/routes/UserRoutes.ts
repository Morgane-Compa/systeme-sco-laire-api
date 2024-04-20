import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

// Routes
// Get all users
userRouter.get("/", (req, res) => {
    console.log("userRouter");
    userController.getAll(req, res);
});

// get one user by id 
userRouter.get("/:id", (req, res) => {
    console.log("userRouter");
    userController.getById(req, res);
});

// delete classroom by id
userRouter.delete("/:id", (req, res) => {
    console.log("userRouter");
    userController.delete(req, res);
});

export default userRouter;