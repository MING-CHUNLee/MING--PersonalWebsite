const jwt = require("jsonwebtoken");
const { CommentService }=require('../services/index')

const verifyMemberToken = async (req, res, next) => {
  try {
    if (
      !req.headers?.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res.status(422).json({
        detail: "參數錯誤，請參考文件",
      });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token, { complete: true });
    if (
      !decoded.header ||
      decoded.header?.alg !== "HS256" ||
      decoded.header?.typ !== "JWT"
    ) {
      return res.status(403).json({
        detail: "授權錯誤",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).json({
          detail: "授權錯誤",
        });
      }
      req.tokenPayload = payload;
      next();
    });
  } catch (err) {
    return res.status(500).json({
      detail: "伺服器內部錯誤",
    });
  }
};

const isAuthor= async (req, res, next) => {
  try {
    if (!req?.tokenPayload) {
      return res.status(403).json({
        detail: "授權錯誤",
      });
    }
    const {tokenPayload}=req;
    const originalAuthor=await CommentService.checkAuthor(tokenPayload.id);
    if (!originalAuthor) {
      return res.status(400).json(
        { detail: "請求錯誤" 
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      detail: "伺服器內部錯誤",
    });
  }
};

module.exports = {
  verifyMemberToken,
  isAuthor,
};
