import express from 'express';
import cors from 'cors';
import appDataSource from './data-source';
import schoolRouter from './routes/SchoolRoutes';
import classroomRouter from './routes/ClassroomRoutes';

appDataSource.initialize().then(() => {

  // Parameters
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: "*", // 'http://localhost:3000'
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello world")
  });

  // Routes
  app.use("/api/schools", schoolRouter);
  app.use("/api/classrooms", classroomRouter);

  app.listen(process.env.PORT, () => {
    console.log(
      `API is running on PORT :${process.env.PORT}`
    );
  });
})
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });
  