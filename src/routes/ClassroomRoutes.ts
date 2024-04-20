import { Router } from "express";
import ClassroomController from "../controllers/ClassroomController";

const classroomRouter = Router();
const classroomController = new ClassroomController();

// Routes
// Get all classrooms
classroomRouter.get("/", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.getAll(req, res);
});

// get one classroom by id 
classroomRouter.get("/:id", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.getById(req, res);
});

// create classroom
classroomRouter.post("/", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.create(req, res);
});

// Update classroom
classroomRouter.patch("/:id", (req, res) => {
    console.log("ClassroomRouter")
    classroomController.classroomUpdate(req, res);
});

// delete classroom by id
classroomRouter.delete("/:id", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.delete(req, res);
});

export default classroomRouter;