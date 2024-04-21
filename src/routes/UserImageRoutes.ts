import { Router } from "express";
import UserImageController from "../controllers/UserImageController";

const userImageRouter = Router();
const userImageController = new UserImageController();

/**
 * @swagger
 * tags:
 *   name: User Images
 *   description: Endpoints to manage user images
 */

// Routes
//*************************************** Get all images ***************************************
/**
 * @swagger
 * /api/images:
 *   get:
 *     summary: Get all user images
 *     description: Retrieve a list of all user images.
 *     tags: [User Images]
 *     responses:
 *       200:
 *         description: Success, returns the list of user images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserImage'
 */
userImageRouter.get("/", (req, res) => {
    console.log("UserImageRouter");
    userImageController.getAll(req, res);
});

//*************************************** Get one image by the id ***************************************
/**
 * @swagger
 * /api/images/{id}:
 *   get:
 *     summary: Get a user image by ID
 *     description: Retrieve details of a user image by its ID.
 *     tags: [User Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user image to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success, returns the user image details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserImage'
 *       404:
 *         description: User image not found
 */
userImageRouter.get("/:id", (req, res) => {
    console.log("UserImageRouter");
    userImageController.getById(req, res);
});

//*************************************** Create one image ***************************************

/**
 * @swagger
 * /api/images:
 *   post:
 *     summary: Create a new user image
 *     description: Create a new user image.
 *     tags: [User Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserImageInput'
 *     responses:
 *       201:
 *         description: User image created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserImage'
 *       400:
 *         description: Invalid data provided
 */
userImageRouter.post("/", (req, res) => {
    console.log("UserImageRouter");
    userImageController.create(req, res);
});

//*************************************** Delete one image ***************************************
/**
 * @swagger
 * /api/images/{id}:
 *   delete:
 *     summary: Delete a user image by ID
 *     description: Delete a user image by its ID.
 *     tags: [User Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user image to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User image deleted successfully
 *       404:
 *         description: User image not found
 */
userImageRouter.delete("/:id", (req, res) => {
    console.log("UserImageRouter");
    userImageController.delete(req, res);
});

export default userImageRouter;