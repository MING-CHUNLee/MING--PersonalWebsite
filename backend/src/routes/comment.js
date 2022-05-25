const express = require("express");
const memberAuth=require("../middleware/auth");
const {commentController}=require("../controllers/index.js");
const router = express.Router();

router.get('/',commentController.getAllComment)
router.post('/',commentController.createComment)
router.use('/',memberAuth.verifyMemberToken)
router.use('/',memberAuth.isAuthor)

router.patch('/',commentController.editComment)
router.delete('/',commentController.delectComment)


module.exports = router ;