import NewsService from "../services/NewsService";
import { Request, Response } from "express";

class NewsController {
    private newsService = new NewsService();

    // Requests
    //*************************************** Get all news ***************************************
    async getAll(req: Request, res: Response) {
        console.log("NewsController");
        try {
            const classrooms = await this.newsService.getAll();
            res.send({ status: "OK", data: classrooms });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

    //*************************************** Get news by id ***************************************
    async getById(req: Request, res: Response) {
        console.log("NewsController");
        try {
            const news = await this.newsService.getById(Number(req.params.id));
            res.send({ status: "OK", data: news });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };

//*************************************** Create a new news ***************************************
async create(req: Request, res: Response) {
    console.log("NewsController");
    try {
        const news = await this.newsService.create(req.body);
        res.send({ status: "OK", data: news });
    } catch (error) {
        res.status(500).send({ status: "Failed", message: error });
    }
};

    //*************************************** Update news ***************************************
    async newsUpdate(req: Request, res: Response) { 
        console.log("NewsController");  
        try {
          const news = await this.newsService.newsUpdate(req.params.id, req.body);
          res.send({ status: "OK", data: news });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      };

          //*************************************** Delete one news ***************************************
    async delete(req: Request, res: Response) {
        console.log("NewsController");
        try {
            const news = await this.newsService.delete(req.params.id);
            res.send({ status: "OK", data: news });
        } catch (error) {
            res.status(500).send({ status: "Failed", message: error });
        }
    };
};

export default NewsController;