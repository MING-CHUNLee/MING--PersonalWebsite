const { CommentService ,UserService}=require('../services/index')

const getAllComment = async (req, res) => {

    try {
        const comment =await CommentService.getAllComment();
        return res.status(200).json({
          detail: "成功取得所有位置資訊",
          data:comment ,
        });
      
    
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };

  const getTouristComment = async (req, res) => {

    try {
        const comment =await CommentService.getTouristComment();
        return res.status(200).json({
          detail: "成功取得所有位置資訊",
          data:comment ,
        });
      
    
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };

  const getUserComment = async (req, res) => {

    try {
        const comment =await CommentService.getUserAllComment();
        return res.status(200).json({
          detail: "成功取得所有位置資訊",
          data:comment ,
        });
      
    
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };
  const SearchComment = async (req, res) => {

    if(!req.body?.search){
      return res.status(400).json({
        detail: "參數錯誤，請參考文件",
      });
    }
    const { body }=req;       
    const {search}=body;
    try {
        const comment =await CommentService.searchComment(search);
        return res.status(200).json({
          detail: "成功取得所有位置資訊",
          data:comment ,
        });
      
    
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };
  


  const createComment = async (req, res) => {

    try {
        if(!req.body?.context || !req.body?.isShow||!req.body?.id){
            return res.status(400).json({
              detail: "參數錯誤，請參考文件",
            });
          }
          const { body }=req;       
          const existsUser=await UserService.checkUserExistOrNot(body.id);
          if (!existsUser) {
            return res.status(400).json({
              detail: "參數錯誤",
            });
          }
        await CommentService.creatComment(body);
        return res.status(200).json({
          detail: "成功新增留言",

        });
      
    } catch (error) {
      return res.status(500).json(
        {
         
        detail: "伺服器內部錯誤"+error+"!!!"
      });
    }
  };

  const editComment = async (req, res) => {
    try {
        if(!req.body?.context || !req.body?.id){
            return res.status(400).json({
              detail: "參數錯誤，請參考文件",
            });
          }
        const { body }=req;
        const comment =await CommentService.editComment(body);
        return res.status(200).json({
          detail: "成功修改留言",
          a:comment ,
        });
      
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };

  const deleteComment = async (req, res) => {
    try {
        if(!req.params?.id){
            return res.status(400).json({
              detail: "參數錯誤，請參考文件",
            });
          }
        const id=req.params.id;
        const comment =await CommentService.delectComment(id);
        return res.status(200).json({
          detail: "成功刪除留言"+id,
          a:comment ,
        });
      
    } catch (error) {
      return res.status(500).json(
        {
        detail: "伺服器內部錯誤"+error
      });
    }
  };

module.exports = {
    getAllComment,createComment,editComment,deleteComment,SearchComment,getTouristComment,getUserComment
  };