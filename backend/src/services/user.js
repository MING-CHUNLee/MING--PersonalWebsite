/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:33:57
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-06 16:18:12
 * @FilePath: \backend\src\services\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const db = require("../models/index.js");

const getAllUserInfo = async (mail) => {
  let users = await db["USERS"].findOne({
    where: {
      mail: mail,
    },
    attributes: ["username","id"],
  });

  return users;
};

const getTouristInfo = async (username) => {
  
  let users = await db["USERS"].findOne({
    where: {
      username: username,
    },
    attributes: ["username","id"],
  });

  return users;
};


const creatTourist = async (userData) => {
  await  db["USERS"]
    .create({ username: userData})
    .then((result) => {
  
     return result; // 成功回傳result結果
    })
    .catch((err) => {
      return err;
    });
 
};

const creatUser = async (userData) => {
  await  db["USERS"]
    .create({ username: userData.username, password:userData.password,mail:userData.mail })
    .then((result) => {
  
     return result; // 成功回傳result結果
    })
    .catch((err) => {
      return err;
    });
 
};

const checkMailExistOrNot=async(mail)=>{
  const existsEmails = await db["USERS"].findOne({
    where: {
      mail: mail,
    }
  });
  return existsEmails;
}

const checkUserExistOrNot=async(id)=>{
  const existsUser = await db["USERS"].findOne({
    where: {
      id: id,
    }
  });
  return existsUser;
}

const addToken = async (mail,token) => {
  await db["USERS"].update(
    {
      token:token
    },
    {
      where: {
        mail:mail,
      },
    }
  )  .then((result) => {
    return result ;
  })
  .catch((err) => {
    return err;
  });
};

module.exports = {
  getAllUserInfo,
  creatUser,
  checkMailExistOrNot,
  checkUserExistOrNot,
  addToken,
  creatTourist,
  getTouristInfo
};
