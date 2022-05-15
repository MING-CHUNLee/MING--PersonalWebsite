import _ from 'lodash';
import  {UserService}  from "../services/user.js";

// Retrieve all Tutorials from the database.
class UserController {
    getAllUserInfo = async(req, res) => {
    try{
        const users = await UserService.getAllUserInfo();
        console.log(users)
        return res.status(200).json({
            detail: "成功取得所有位置資訊",
            users: [...users.values()],
          });
    }catch(err){
       
        return res.status(500).json({
            detail: "伺服器內部錯誤",
            
          });
    }
 

};
}
export default new UserController();

  
  