/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-30 09:56:04
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-07 10:45:12
 * @FilePath: \MING--PersonalWebsite\backend\src\routes\comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");
const memberAuth=require("../middleware/auth");
const {commentController}=require("../controllers/index.js");
const router = express.Router();


router.use('/',memberAuth.verifyMemberToken)
router.get('/',commentController.getAllComment)
router.get('/touristComment',commentController.getTouristComment)
router.get('/userComment',commentController.getUserComment)
router.post('/search',commentController.SearchComment)

router.post('/',commentController.createComment)
router.use('/',memberAuth.isAuthor)
router.patch('/',commentController.editComment)
router.delete('/:id',commentController.deleteComment)


module.exports = router ;