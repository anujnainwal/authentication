const TokenModel = require("../model/token/token.model");
const UserModel = require("../model/user/user.model");
const generateToken = require("../token/generateToken");
const loginValidation = require("../utils/loginValidation");
const registerValidation = require("../utils/registerValidation");
const mongoose = require("mongoose");
const ObjecId = mongoose.Types.ObjectId;
const joi = require("joi");
const sendEmail = require("../utils/sendMail");
const { passwordValidation } = require("../utils/passwordValidation");

/*
    @route register api/
    @desc 
    @access private
*/

exports.registerUser = async (req, res, next) => {
  try {
    const { error, value } = registerValidation.validate(req.body, UserModel);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let { firstname, lastname, email, password, role } = value;
    //let check email already registser or not
    let duplicateCheck = await UserModel.findOne({ email: email });
    if (duplicateCheck) {
      return res
        .status(400)
        .json({ error: `This ${email} is already in use.` });
    }

    let permission = ["read"];
    switch (role) {
      case "USER":
        permission;
        break;
      case "ADMIN":
        permission.push("write", "update", "delete", "view");
        break;
      case "MANAGER":
        permission.push("write", "update", "delete", "view");
        break;
      case "SUPERADMIN":
        permission.push("write", "update", "delete", "view");
        break;
      default:
        break;
    }

    const user = new UserModel({
      firstname,
      lastname,
      email,
      password,
      role,
      permission,
    });
    const accessToken = await generateToken.ACCESS_TOKEN(user);
    const refreshToken = await generateToken.REFRESH_TOKEN(user);
    await user.save();

    return res.json({
      status: 1,
      message: "Register successfull.",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/*
    @route login api/
    @desc 
    @access private
*/

exports.loginUser = async (req, res, next) => {
  try {
    let { error, value } = loginValidation.validate(req.body, UserModel);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let { email, password } = value;
    const userInfo = await UserModel.findOne({ email: email })
      .select("+password")
      .hint({ email: 1 });

    if (!userInfo) {
      return res.status(404).json({ error: `This ${email} not found.` });
    }

    const matchPassword = await userInfo.matchPassword(password);

    if (!matchPassword) {
      return res.status(400).json({ error: "Invalid Crrendital" });
    }
    const user = await UserModel.findOne({ email: email }).select("-password");
    //generating token
    const accessToken = await generateToken.ACCESS_TOKEN(user);
    const refreshToken = await generateToken.REFRESH_TOKEN(user);
    return res.status(200).json({
      status: 1,
      message: "Login Successfull",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/*
    @route POST api/v1/refreshToken
    @desc Generate new Access token
    @access private
*/

exports.refreshController = async (req, res, next) => {
  try {
    const { refreshToken, userId, role } = req.body;
    if (!ObjecId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid Id" });
    }
    const token = await TokenModel.findOne({ refreshToken: refreshToken });
    if (!token) {
      return res.status(404).json({ error: "Token not found" });
    }
    if (token.used) {
      return res.status(400).json({ error: "Token already used" });
    }
    if (token.expireAt < new Date()) {
      await TokenModel.deleteOne({ refreshToken });
      return res
        .status(400)
        .json({ error: "Token was expired. Please login again." });
    }
    const user = {
      _id: userId,
      role: role,
    };
    const accessToken = await generateToken.ACCESS_TOKEN(user);
    token.used = true;
    await token.save();
    return res.json({
      status: 1,
      accessToken,
      message: "Token used successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/*
    @route POST api/v1/profile
    @desc profile
    @access private
*/

exports.userProfile = async (req, res, next) => {
  const { _id, role } = req.user;
  try {
    if (!ObjecId.isValid(_id)) {
      return res.status(400).json({ error: "Invalid Id" });
    }
    const user = await UserModel.findById({ _id: _id })
      .select("-password")
      .exec();
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json({ message: "Fetch profile success.", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/*
    @route POST api/v1/forgetPassword
    @desc Forget Password if user forget
    @access public
*/
exports.forgetPassword = async (req, res, next) => {
  const emailValid = joi.object({
    email: joi.string().min(5).max(50).required().email(),
  });
  let { error, value } = emailValid.validate(req.body, UserModel);
  try {
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const user = await UserModel.findOne({ email: value.email }).exec();
    if (!user) {
      return res.status(404).json({ error: `This ${value.email} not found.` });
    }
    //main logic start
    const token = await user.resetToken();
    await user.save();

    const subject = "Password reset token";
    const username = "Ajay";
    const productname = "MERN_APP";
    const resetUrl = `http://localhost:8000/api/v1/reset-password?${token}`;
    await sendEmail(
      value.email,
      subject,
      "password",
      username,
      productname,
      resetUrl
    );

    return res.status(200).json({
      message: "Password reset link successfully sent in your email account.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
};

/*
    @route POST api/v1/resetPassword
    @desc reset Password if user forget
    @access public
*/

exports.userResetPassword = async (req, res, next) => {
  let { tokenId } = req.query;
  try {
    const user = await UserModel.findOne({
      resetPasswordToken: tokenId,
      resetPasswordTokenExpiration: { $gt: Date.now() },
    });
    // if no user found, token is invalid or expired
    if (!user) {
      return res
        .status(400)
        .json({ message: "Reset Token was expired please generate new One." });
    }
    // update the user's password with the new password
    let { error, value } = passwordValidation.validate(req.body, UserModel);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    user.password = value.password;

    // clear the resetToken and resetExpires fields
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiration = undefined;

    // save the user and return success message
    await user.save();

    return res.json({
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.checkEmail = async (req, res, next) => {
  let { email } = req.query;
  try {
    const isExist = await UserModel.findOne({ email: email });
    if (isExist) {
      return res.status(400).json({ error: `This ${email} already exists. ` });
    }
    return res.status(200).json({ message: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.checkPassword = async (req, res, next) => {
  try {
    const pass = req.body;
    let { error, value } = await passwordValidation.validate(pass, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => {
        return err.message;
      });

      return res.status(400).json({ error: errors });
    }

    return res.status(200).json({ message: "" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
