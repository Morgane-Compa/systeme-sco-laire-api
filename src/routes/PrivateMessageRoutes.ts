import { Router } from "express";
import PrivateMessageController from "../controllers/PrivateMessageController";

const privateMessageRouter = Router();
const privateMessageController = new PrivateMessageController();

/**
 * @swagger
 * tags:
 *   name: PrivateMessage
 *   description: Endpoints to manage PrivateMessage
 */

// Routes
//*************************************** Get all privateMessage ***************************************
/**
 * @swagger
 * /api/private_message:
 *   get:
 *     summary: Get all privateMessage
 *     description: Retrieve a list of all privateMessage.
 *     tags: [PrivateMessage]
 *     responses:
 *       200:
 *         description: Success, returns the list of privateMessage
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PrivateMessage'
 */
privateMessageRouter.get("/", (req, res) => {
    console.log("privateMessageRouter");
    privateMessageController.getAll(req, res);
});

//*************************************** get one privateMessage by id ***************************************
/**
 * @swagger
 * /api/private_message/{id}:
 *   get:
 *     summary: Get a privateMessage by ID
 *     description: Retrieve details of a privateMessage by its ID.
 *     tags: [PrivateMessage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the privateMessage to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success, returns the privateMessage details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrivateMessage'
 *       404:
 *         description: PrivateMessage not found
 */
privateMessageRouter.get("/:id", (req, res) => {
    console.log("privateMessageRouter");
    privateMessageController.getById(req, res);
});

//*************************************** get one privateMessage by user id ***************************************
/**
 * @swagger
 * /api/private_message/conversation/{user_id_1}:
 *   get:
 *     summary: Get private messages by user ID
 *     description: Retrieve private messages exchanged with a specific user.
 *     tags: [PrivateMessage]
 *     parameters:
 *       - in: path
 *         name: user_id_1
 *         required: true
 *         description: ID of the user to retrieve private messages for
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success, returns the list of private messages with the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PrivateMessage'
 *       404:
 *         description: No private messages found for the user
 */
privateMessageRouter.get("/conversation/:user_id_1", (req, res) => {
    console.log("privateMessageRouter");
    privateMessageController.getByUserId(req, res);
});

//*************************************** create privateMessage ***************************************
/**
 * @swagger
 * /api/privateMessage:
 *   post:
 *     summary: Create a new privateMessage
 *     description: Create a new privateMessage.
 *     tags: [PrivateMessage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PrivateMessageInput'
 *     responses:
 *       201:
 *         description: PrivateMessage created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrivateMessage'
 *       400:
 *         description: Invalid data provided
 */
privateMessageRouter.post("/", (req, res) => {
    console.log("privateMessageRouter");
    privateMessageController.create(req, res);
});

//*************************************** Update privateMessage ***************************************
/**
 * @swagger
 * /api/privateMessage/{id}:
 *   patch:
 *     summary: Update a privateMessage by ID
 *     description: Update details of a privateMessage by its ID.
 *     tags: [PrivateMessage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the privateMessage to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PrivateMessageInput'
 *     responses:
 *       200:
 *         description: PrivateMessage updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrivateMessage'
 *       404:
 *         description: PrivateMessage not found
 */
privateMessageRouter.patch("/:id", (req, res) => {
    console.log("privateMessageRouter")
    privateMessageController.newsUpdate(req, res);
});

//*************************************** delete privateMessage by id ***************************************
/**
 * @swagger
 * /api/privateMessage/{id}:
 *   delete:
 *     summary: Delete a privateMessage by ID
 *     description: Delete a privateMessage by its ID.
 *     tags: [PrivateMessage]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the privateMessage to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: PrivateMessage deleted successfully
 *       404:
 *         description: PrivateMessage not found
 */
privateMessageRouter.delete("/:id", (req, res) => {
    console.log("privateMessageRouter");
    privateMessageController.delete(req, res);
});

export default privateMessageRouter;