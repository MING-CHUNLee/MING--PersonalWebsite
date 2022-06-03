
const db = require("../models/index.js");
const { Op } = require("sequelize");

const getAllComment = async () => {
  let comments = await db["COMMENTS"].findAll({
    include: [
      { model: db["USERS"], attributes: ["username"]}
   ],
   order: [
    ['updatedAt', 'DESC'],
],
    attributes: ["id","context", "announcer","updatedAt","isShow"],
  });

  comments = comments.map((comment) => {
    return comment.dataValues;
  });

  comments.forEach((comment) => {
    const now = new Date();
    if (now - comment.updatedAt <= 1000 * 60) {
      comment.updatedAt = "剛剛";
    } else {
      comment.updatedAt = comment.updatedAt.toLocaleString("en-US");
    }
    if(!comment.isShow){
      comment.USER.username="匿名";
    }
  
  });
  return comments;
};

const searchComment = async (context) => {
  let comments = await db["COMMENTS"].findAll({
    include: [
      { model: db["USERS"], attributes: ["username"]}
   ],
   where: {
    context: {
      [Op.substring]: context,
    },
  },
   order: [
    ['updatedAt', 'DESC'],
],
    attributes: ["id","context", "announcer","updatedAt","isShow"],
  });

  comments = comments.map((comment) => {
    return comment.dataValues;
  });

  comments.forEach((comment) => {
    const now = new Date();
    if (now - comment.updatedAt <= 1000 * 60) {
      comment.updatedAt = "剛剛";
    } else {
      comment.updatedAt = comment.updatedAt.toLocaleString("en-US");
    }
    if(!comment.isShow){
      comment.USER.username="匿名";
    }
  
  });
  return comments;
};

const creatComment = async (userData) => {
  await  db["COMMENTS"]
    .create({ context: userData.context, announcer:userData.id,isShow:userData.isShow})
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


const checkAuthor = async (requester) => {
  const comments = await db["COMMENTS"].findOne({
    where: {
      announcer: requester,
    }
  });
  return comments;
};

module.exports = {
    getAllComment,
    creatComment,
    editComment,
    delectComment,
    checkAuthor,
    searchComment
 
};
