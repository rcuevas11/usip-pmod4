import { Sequelize } from "sequelize";

import dbConfig from "../../db.config.js";
// import { preInsert } from "./rol.model.js";
// import Curso from "./curso.model";

const { DB, USER, PASSWORD, HOST, dialect, pool } = dbConfig;

export const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  pool: pool,
  operatorsAliases: false,
});

sequelize
  .sync()
  .then(() => {
    console.log("Sync database success full");
  })
  .catch((error) => console.error("Some Error: ", error));
