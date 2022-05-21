
const db = require("../models/index.js");

const getAllComment = async () => {
  let comments = await db["COMMENTS"].findAll({
    attributes: ["context", "announcer"],
  });
  return comments;
};

const creatComment = async (userData) => {
  await  db["COMMENTS"]
    .create({ context: userData.context, announcer:userData.announcer})
    .then((result) => {
      return result ; // 成功回傳result結果
    })
    .catch((err) => {
      return err;
    });
 
};

  const editComment = async (a) => {
  await db["COMMENTS"].update(
    {
      context:a.context
    },
    {
      where: {
        id:a.id,
      },
    }
  )  .then((result) => {
    return result ; // 成功回傳result結果
  })
  .catch((err) => {
    return err;
  });
};

const delectComment = async (a) => {
  await db["COMMENTS"].destroy({
    where: {
      id:a,
    },
  });
};

module.exports = {
    getAllComment,
    creatComment,
    editComment,
    delectComment
 
};
