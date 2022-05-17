/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:31:04
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-05-16 14:49:24
 * @FilePath: \backend\src\controller\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bcrypt = require('bcrypt');

const { UserService } = require("../services/index.js");
const getAllSeatInfo = async (req, res) => {
  try {

    if(!req.body?.id){
      return res.status(400).json({
        detail: "參數錯誤，請參考文件",
      });
    }
    const id=req.body.id;
    const users =await UserService.getAllUserInfo(id);
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

const userRegistration = async (req, res) => {

  try {

    if(!req.body?.username || !req.body?.password || !req.body?.mail ){
      return res.status(400).json({
        detail: "參數錯誤，請參考文件",
      });
    }
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if(req.body.mail.search(emailRule)=== -1){
      return res.status(400).json({
        detail: "參數錯誤，請參考文件",
      });
  }
    const  insertValues = {
      username: req.body.username,
      password: req.body.password,
      mail : req.body.mail ,
    };
    const userSingUpState = await UserService.creatUser (insertValues);
    return res.status(200).json({
      detail: userSingUpState,
    });
  
  } catch (error) {
    return res.status(500).json(
      {
      detail: "伺服器內部錯誤"+error+"?"+typeof(insertValues.username)
    });
  }
};

module.exports = {
  getAllSeatInfo,
  userRegistration
};