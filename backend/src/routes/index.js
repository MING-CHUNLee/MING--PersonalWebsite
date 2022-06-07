/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 12:37:54
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-07 13:29:27
 * @FilePath: \backend\src\routes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE {}
 */

const express = require("express");
const {userCotroller}=require("../controllers/index.js");
const comment =require('./comment')
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/comment", comment);

router.get('/user',userCotroller.getAllUserProfile)
router.get('/tourists',userCotroller.touristsLogin)
router.post('/register',userCotroller.userRegistration)
router.post('/login',userCotroller.userLogin)


module.exports = router;