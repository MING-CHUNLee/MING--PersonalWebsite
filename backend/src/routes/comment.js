const express = require("express");
const memberAuth=require("../middleware/auth");
const {commentController}=require("../controllers/index.js");
const router = express.Router();


router.use('/',memberAuth.verifyMemberToken)
router.get('/',commentController.getAllComment)
router.post('/',commentController.createComment)
router.use('/',memberAuth.isAuthor)
router.patch('/',commentController.editComment)
router.delete('/:id',commentController.delectComment)


module.exports = router ;