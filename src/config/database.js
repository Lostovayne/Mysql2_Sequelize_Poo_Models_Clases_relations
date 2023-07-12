import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

try {
    db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.log(error);
}

export default db;

//connection to database
