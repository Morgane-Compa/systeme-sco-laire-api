import { Request, Response } from "express";
import SchoolService from "../services/SchoolService";

class SchoolContoller {
    private schoolService = new SchoolService();

    // Requests
    // Get all schools
    async getAll(req: Request, res: Response) {
        console.log("BookController");
        try {
            const schools = await this.schoolService.getAll();
            res.send({ status: "OK", data: schools });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    }

    // Get one school by the id
    async getById(req: Request, res: Response) {
        try {
            const school = await this.schoolService.getById(Number(req.params.id));
            res.send({ status: "OK", data: school });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    }

    // Create one school
    async create(req: Request, res: Response) {
        try {
            const school = await this.schoolService.create(req.body);
            res.send({ status: "OK", data: school });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    }

    // Delete one school
    async delete(req: Request, res: Response) {
        try {
            const school = await this.schoolService.delete(req.params.id);
            res.send({ status: "OK", data: school });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    }
}

export default SchoolContoller;