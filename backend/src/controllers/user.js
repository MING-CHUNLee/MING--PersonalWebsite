/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:31:04
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-05-16 14:49:24
 * @FilePath: \backend\src\controller\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { UserService } = require("../services/index.js");
const getAllSeatInfo = async (req, res) => {
  try {
    const users = await UserService.getAllUserInfo();
    return res.status(200).json({
      detail: "成功取得所有位置資訊",
      users: [...users.values()],
    });
  } catch (error) {
    return res.status(500).json(
    
      {
      detail: "伺服器內部錯誤"+error,
    });
  }
};

module.exports = {
  getAllSeatInfo,
};