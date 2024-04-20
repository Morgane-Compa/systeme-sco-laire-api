import { Request, Response } from "express";
import ClassroomService from "../services/ClassroomService";

class ClassroomController {
    private classroomService = new ClassroomService();

    // Requests
    // Get all classrooms
    async getAll(req: Request, res: Response) {
        console.log("ClassroomController");
        try {
            const classrooms = await this.classroomService.getAll();
            res.send({ status: "OK", data: classrooms });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Get one classroom by the id
    async getById(req: Request, res: Response) {
        console.log("ClassroomController");
        try {
            const classroom = await this.classroomService.getById(Number(req.params.id));
            res.send({ status: "OK", data: classroom });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Create one classroom
    async create(req: Request, res: Response) {
        console.log("ClassroomController");
        try {
            const classroom = await this.classroomService.create(req.body);
            res.send({ status: "OK", data: classroom });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    // Update classroom
    async classroomUpdate(req: Request, res: Response) { 
        console.log("ClassroomController");   
        try {
          const classroom = await this.classroomService.classroomUpdate(req.params.id, req.body);
          res.send({ status: "OK", data: classroom });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      };

    // Delete one classroom
    async delete(req: Request, res: Response) {
        console.log("ClassroomController");
        try {
            const classroom = await this.classroomService.delete(req.params.id);
            res.send({ status: "OK", data: classroom });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };
};

export default ClassroomController;