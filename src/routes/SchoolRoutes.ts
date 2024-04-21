import { Router } from "express";
import SchoolContoller from "../controllers/SchoolControllers";

const schoolRouter = Router();
const schoolContoller = new SchoolContoller();

/**
 * @swagger
 * tags:
 *   name: Schools
 *   description: Endpoints to manage schools
 */

// Routes
//*************************************** Get all schools ***************************************
/**
 * @swagger
 * /api/schools:
 *   get:
 *     summary: Get the list of schools
 *     description: Retrieve the complete list of registered schools.
 *     tags: [Schools]
 *     responses:
 *       200:
 *         description: Success, returns the list of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 */
schoolRouter.get("/", (req, res) => {
    console.log("SchoolRouter");
    schoolContoller.getAll(req, res);
});

//*************************************** Get one school by the id ***************************************
/**
 * @swagger
 * /api/schools/{id}:
 *   get:
 *     summary: Get a school by ID
 *     description: Get the details of a school based on its ID.
 *     tags: [Schools]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the school to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success, returns the details of the school
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       404:
 *         description: The school with this ID was not found
 */
schoolRouter.get("/:id", (req, res) => {
    console.log("SchoolRouter");
    schoolContoller.getById(req, res);
});

//*************************************** Create one school ***************************************
/**
 * @swagger
 * /api/schools:
 *   post:
 *     summary: Create a new school
 *     description: Create a new school with the provided details.
 *     tags: [Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolInput'
 *     responses:
 *       201:
 *         description: School created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       400:
 *         description: Invalid data provided
 */
schoolRouter.post("/", (req, res) => {
    console.log("SchoolRouter");
    schoolContoller.create(req, res);
});

//*************************************** Delete one school ***************************************
/**
 * @swagger
 * /api/schools/{id}:
 *   delete:
 *     summary: Delete a school by ID
 *     description: Delete a school based on its ID.
 *     tags: [Schools]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the school to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: School deleted successfully
 *       404:
 *         description: The school with this ID was not found
 */
schoolRouter.delete("/:id", (req, res) => {
    console.log("SchoolRouter");
    schoolContoller.delete(req, res);
});

export default schoolRouter;
