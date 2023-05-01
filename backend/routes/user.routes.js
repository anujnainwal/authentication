const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { AuthCheck } = require("../middleware/authCheck");

/*****************
user router 
*******************/
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/forgetPassword", userController.forgetPassword);
router.put("/resetPassword", userController.userResetPassword);
router.get("/isExist", userController.checkEmail);
router.post("/checkPassword", userController.checkPassword);
router.patch("/ChangePassword");
router.get("/profile", AuthCheck, userController.userProfile);
router.post("/refreshToken", userController.refreshController);

/********** 
adminRoutes 
***********/
router.post("/admin/login");
router.get("/admin/profile");
router.post("/admin/changeProfile");

module.exports = router;
