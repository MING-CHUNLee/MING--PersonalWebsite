import UserController from "../controller/user.js";
import { Router } from "express";
const router = Router();



router.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  router.get("/user",UserController.getAllUserInfo);



export default router;