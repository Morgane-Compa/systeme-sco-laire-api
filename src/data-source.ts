import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { School } from "./entities/School";
import { Classroom } from "./entities/Classroom";
import { User_image } from "./entities/UserImage";
import { User } from "./entities/User";
import { ClassroomUser } from "./entities/ClassRoomUser";
import { News } from "./entities/News";


dotenv.config({path: ".env.local"});

const appDataSource = new DataSource({

    //Database connection
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Connection params
    synchronize: false,
    logging: false,

    // TYPEORM Enitities 
    entities: [School, Classroom, ClassroomUser, User_image, User, News],
});
export default appDataSource;