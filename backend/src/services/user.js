// const db = require("../models/index.js");
import models from "../models/index.js";
const { users, sequelize } = models;

 class UserService {
  getAllUserInfo = async () => {
    const query = `select * from users`;
    const [users] = await sequelize.query(query, { type: QueryTypes.SELECT });

    return users;
  };
}
export default new UserService();
// export default new UserService();
