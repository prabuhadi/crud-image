import { Sequelize } from "sequelize";

// view in localhost php myadmin
const db = new Sequelize("upload_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

// >> create product model
