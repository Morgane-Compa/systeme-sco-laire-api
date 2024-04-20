import { Request, Response } from "express";
import UserImageService from "../services/UserImageService";

class UserImageController {

    private userImageService = new UserImageService();

    // Requests
    // Get all images
    async getAll(req: Request, res: Response) {
        console.log("UserImageController");
        try {
            const images = await this.userImageService.getAll();
            res.send({ status: "OK", data: images });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Get one image by the id
    async getById(req: Request, res: Response) {
        console.log("UserImageController");
        try {
            const image = await this.userImageService.getById(Number(req.params.id));
            res.send({ status: "OK", data: image });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Create one image
    async create(req: Request, res: Response) {
         console.log("UserImageController");
        try {
            const image = await this.userImageService.create(req.body);
            res.send({ status: "OK", data: image });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Delete one image
    async delete(req: Request, res: Response) {
         console.log("UserImageController");
        try {
            const image = await this.userImageService.delete(req.params.id);
            res.send({ status: "OK", data: image });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

};

export default UserImageController;