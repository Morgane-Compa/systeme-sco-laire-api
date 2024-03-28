import { Router } from "express";
import SchoolContoller from "../controllers/SchoolControllers";

const schoolRouter = Router();
const schoolContoller = new SchoolContoller();

// Requests
// Get all schools
schoolRouter.get("/", (req, res) => {
    console.log("SchoolRouter");
    schoolContoller.getAll(req, res);
});

// Get one school by the id
schoolRouter.get("/:id", (req, res) => {
    schoolContoller.getById(req, res);
});

// Create one school
schoolRouter.post("/", (req, res) => {
    schoolContoller.create(req, res);
});

// Delete one school
schoolRouter.delete("/:id", (req, res) => {
    schoolContoller.delete(req, res);
});

export default schoolRouter;