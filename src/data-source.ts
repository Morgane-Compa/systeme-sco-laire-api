import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { School } from "./entities/School";


dotenv.config({path: ".env.local"});

const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB8PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [School],
});
export default appDataSource;