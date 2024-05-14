import { Request, Response } from "express";
import PrivateMessageService from "../services/PrivateMessageService";

class PrivateMessageController {
    private privateMessageService = new PrivateMessageService();

    // Requests
    //*************************************** Get all privateMessages ***************************************
    async getAll(req: Request, res: Response) {
        console.log("PrivateMessageController");
        try {
            const privateMessage = await this.privateMessageService.getAll();
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Get privateMessage by id ***************************************
    async getById(req: Request, res: Response) {
        console.log("PrivateMessageController");
        try {
            const privateMessage = await this.privateMessageService.getById(Number(req.params.id));
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Get privateMessage by user id ***************************************
    async getByUserId(req: Request, res: Response) {
        console.log("PrivateMessageController");
        try {
            const privateMessage = await this.privateMessageService.getByUserId(Number(req.params.user_id_1));
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Create a new news ***************************************
    async create(req: Request, res: Response) {
        console.log("privateMessageController");
        try {
            const privateMessage = await this.privateMessageService.create(req.body);
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Update news ***************************************
    async newsUpdate(req: Request, res: Response) {
        console.log("privateMessageController");
        try {
            const privateMessage = await this.privateMessageService.privateMessageUpdate(req.params.id, req.body);
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Delete one news ***************************************
    async delete(req: Request, res: Response) {
        console.log("privateMessageController");
        try {
            const privateMessage = await this.privateMessageService.delete(req.params.id);
            res.send({ status: "OK", data: privateMessage });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };
};

export default PrivateMessageController;