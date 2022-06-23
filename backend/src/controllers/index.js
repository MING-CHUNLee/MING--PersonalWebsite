/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:43:07
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-23 10:26:38
 * @FilePath: \backend\src\controllers\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE=
 */
const user =require("./user.js");
const comment=require("./comment");

module.exports={
    userController:user,
    commentController:comment
}