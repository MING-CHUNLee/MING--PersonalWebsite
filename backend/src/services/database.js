import Sequelize from "sequelize";
import { createNamespace } from "cls-hooked";
import config from "../config/config.js";
import env from "../config/env.js";

class DatabaseService {
  connect = () => {
    const cls = createNamespace("sequelize-transaction");
    const { Env } = env;
    const param = config[Env];
    Sequelize.useCLS(cls);
    const sequelize = new Sequelize(
      param.database,
      param.username,
      param.password,
      param
    );
    return sequelize;
  };
}

export default new DatabaseService();
