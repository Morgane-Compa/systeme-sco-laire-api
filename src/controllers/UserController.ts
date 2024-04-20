import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    private userService = new UserService();

    // Requests
    // Get all users
    async getAll(req: Request, res: Response) {
        console.log("UserController");
        try {
            const users = await this.userService.getAll();
            res.send({ status: "OK", data: users });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Get one user by the id
    async getById(req: Request, res: Response) {
        console.log("UserController");
        try {
            const user = await this.userService.getById(Number(req.params.id));
            res.send({ status: "OK", data: user });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Delete one user
    async delete(req: Request, res: Response) {
        console.log("UserController");
        try {
            const user = await this.userService.delete(req.params.id);
            res.send({ status: "OK", data: user });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };
};

export default UserController;