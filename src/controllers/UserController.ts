import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    private userService = new UserService();

    // Requests
    //*************************************** Get all users ***************************************
    async getAll(req: Request, res: Response) {
        console.log("UserController");
        try {
            const users = await this.userService.getAll();
            res.send({ status: "OK", data: users });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Get one user by the id ***************************************
    async getById(req: Request, res: Response) {
        console.log("UserController");
        try {
            const user = await this.userService.getById(Number(req.params.id));
            res.send({ status: "OK", data: user });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Delete one user ***************************************
    async delete(req: Request, res: Response) {
        console.log("UserController");
        try {
            const user = await this.userService.delete(req.params.id);
            res.send({ status: "OK", data: user });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Create one user ***************************************
    async signup(req: Request, res: Response) {
        console.log('user controller')
        const { firstname, lastname, mail, phone_number, user_image_id, password, user_role, school_id } = req.body;

        const createUser = await this.userService.signup(firstname, lastname, mail, phone_number, password, user_image_id, user_role, school_id)

        if (createUser) {
            res.status(201).json({ message: "User created" });
        } else {
            res.status(500).json({ message: "Failed to create" });
        };
    };
};

export default UserController;