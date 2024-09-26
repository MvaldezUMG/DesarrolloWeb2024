import { Sequelize } from 'sequelize';
import path from "node:path";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'crud.sqlite') 
  });

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   host: "localhost",
//   username: "root",
//   password: "password",
//   database: "crud",
//   port: 33060,
// })

export default sequelize;