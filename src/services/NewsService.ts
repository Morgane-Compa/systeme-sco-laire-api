import appDataSource from "../data-source";
import { News } from "../entities/News";

class NewsService {
    private newsRepository = appDataSource.getRepository(News);

    // Requests
    //*************************************** Get all news ***************************************
    async getAll() {
        console.log("NewsService");
        return this.newsRepository.find();
    };

    //*************************************** Get news by id ***************************************
    async getById(id: number) {
        console.log("NewsService");
        return this.newsRepository.findOneBy({ id: id });
    };

    //*************************************** Create a new news ***************************************
    async create(news: News) {
        console.log("NewsService");
        const newNews = this.newsRepository.create(news);
        return this.newsRepository.save(newNews);
    };

    //*************************************** Update a news ***************************************
    async newsUpdate(id: string, news: News) {
        console.log("NewsService");
        return this.newsRepository.update(id, news);
    };

    //*************************************** Delete one school ***************************************
    async delete(id: string) {
        console.log("NewsService");
        return this.newsRepository.delete(id);
    };
};

export default NewsService;