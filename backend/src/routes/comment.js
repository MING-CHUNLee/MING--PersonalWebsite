const express = require("express");
const memberAuth=require("../middleware/auth");
const {commentController}=require("../controllers/index.js");
const router = express.Router();

router.get('/',commentController.getAllComment)
router.use('/',memberAuth.verifyMemberToken)
router.post('/',commentController.createComment)
router.patch('/',commentController.editComment)
router.delete('/',commentController.delectComment)


module.exports = router ;