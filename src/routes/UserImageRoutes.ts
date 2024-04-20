import { Router } from "express";
import UserImageController from "../controllers/UserImageController";

const userImageRouter = Router();
const userImageController = new UserImageController();

// Routes
// Get all images
userImageRouter.get("/", (req, res) => {
    console.log("UserImageRouter");
    userImageController.getAll(req, res);
});

// Get one image by the id
userImageRouter.get("/:id", (req, res) => {
    console.log("UserImageRouter");
    userImageController.getById(req, res);
});

// Create one image
userImageRouter.post("/", (req, res) => {
    console.log("UserImageRouter");
    userImageController.create(req, res);
});

// Delete one image
userImageRouter.delete("/:id", (req, res) => {
    console.log("UserImageRouter");
    userImageController.delete(req, res);
});

export default userImageRouter;