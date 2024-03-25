import express from 'express';
import cors from 'cors';
import appDataSource from './data-source';

appDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Hello world")
    });

    app.listen(process.env.PORT, () =>{
        console.log(`server is running on port ${process.env.PORT}`);
    });
})