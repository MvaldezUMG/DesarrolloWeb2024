import { Sequelize } from 'sequelize';
import path from "node:path";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'crud.sqlite') 
  });

export default sequelize;