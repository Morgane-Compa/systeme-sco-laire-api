import { Router } from "express";
import ClassroomController from "../controllers/ClassroomController";

const classroomRouter = Router();
const classroomController = new ClassroomController();

/**
 * @swagger
 * tags:
 *   name: Classrooms
 *   description: Endpoints to manage classrooms
 */

// Routes
//*************************************** Get all classrooms ***************************************
/**
 * @swagger
 * /api/classrooms:
 *   get:
 *     summary: Get all classrooms
 *     description: Retrieve a list of all classrooms.
 *     tags: [Classrooms]
 *     responses:
 *       200:
 *         description: Success, returns the list of classrooms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Classroom'
 */
classroomRouter.get("/", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.getAll(req, res);
});

//*************************************** get one classroom by id ***************************************
/**
 * @swagger
 * /api/classrooms/{id}:
 *   get:
 *     summary: Get a classroom by ID
 *     description: Retrieve details of a classroom by its ID.
 *     tags: [Classrooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the classroom to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success, returns the classroom details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classroom'
 *       404:
 *         description: Classroom not found
 */
classroomRouter.get("/:id", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.getById(req, res);
});

//*************************************** create classroom ***************************************
/**
 * @swagger
 * /api/classrooms:
 *   post:
 *     summary: Create a new classroom
 *     description: Create a new classroom.
 *     tags: [Classrooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassroomInput'
 *     responses:
 *       201:
 *         description: Classroom created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classroom'
 *       400:
 *         description: Invalid data provided
 */
classroomRouter.post("/", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.create(req, res);
});

//*************************************** Update classroom ***************************************
/**
 * @swagger
 * /api/classrooms/{id}:
 *   patch:
 *     summary: Update a classroom by ID
 *     description: Update details of a classroom by its ID.
 *     tags: [Classrooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the classroom to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassroomInput'
 *     responses:
 *       200:
 *         description: Classroom updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classroom'
 *       404:
 *         description: Classroom not found
 */
classroomRouter.patch("/:id", (req, res) => {
    console.log("ClassroomRouter")
    classroomController.classroomUpdate(req, res);
});

//*************************************** delete classroom by id ***************************************
/**
 * @swagger
 * /api/classrooms/{id}:
 *   delete:
 *     summary: Delete a classroom by ID
 *     description: Delete a classroom by its ID.
 *     tags: [Classrooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the classroom to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Classroom deleted successfully
 *       404:
 *         description: Classroom not found
 */
classroomRouter.delete("/:id", (req, res) => {
    console.log("ClassroomRouter");
    classroomController.delete(req, res);
});

export default classroomRouter;