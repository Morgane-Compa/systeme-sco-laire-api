import { Router } from "express";
import NewsController from "../controllers/NewsController";
import checkToken from "../middlewares/CheckToken";

const newsRouter = Router();
const newsController = new NewsController();

/**
 * @swagger
 * tags:
 *   name: News
 *   description: Endpoints to manage news
 */

// Routes
//*************************************** Get all News ***************************************
/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get all news
 *     description: Retrieve a list of all news.
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Success, returns the list of news
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 */
newsRouter.get("/",(req, res) => {
    console.log("newsRouter");
    newsController.getAll(req, res);
});

//*************************************** get one news by id ***************************************
/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Get a news by ID
 *     description: Retrieve details of a news by its ID.
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the news to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success, returns the news details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: News not found
 */
newsRouter.get("/:id", (req, res) => {
    console.log("newsRouter");
    newsController.getById(req, res);
});

//*************************************** create news ***************************************
/**
 * @swagger
 * /api/news:
 *   post:
 *     summary: Create a new news
 *     description: Create a new news.
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsInput'
 *     responses:
 *       201:
 *         description: News created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       400:
 *         description: Invalid data provided
 */
newsRouter.post("/", (req, res) => {
    console.log("newsRouter");
    newsController.create(req, res);
});

//*************************************** Update news ***************************************
/**
 * @swagger
 * /api/news/{id}:
 *   patch:
 *     summary: Update a news by ID
 *     description: Update details of a news by its ID.
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the news to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsInput'
 *     responses:
 *       200:
 *         description: News updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: News not found
 */
newsRouter.patch("/:id", (req, res) => {
    console.log("newsRouter")
    newsController.newsUpdate(req, res);
});

//*************************************** delete news by id ***************************************
/**
 * @swagger
 * /api/news/{id}:
 *   delete:
 *     summary: Delete a news by ID
 *     description: Delete a news by its ID.
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the news to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: News deleted successfully
 *       404:
 *         description: News not found
 */
newsRouter.delete("/:id", (req, res) => {
    console.log("newsRouter");
    newsController.delete(req, res);
});

export default newsRouter;

