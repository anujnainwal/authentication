const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "SUPERADMIN", "MANAGER"],
    default: "USER",
  },
  permission: {
    type: Array,
  },
  resetPasswordToken: String,
  resetPasswordTokenExpiration: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

//apply indexing
userSchema.index({ email: 1 });

//generating Password
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  //generating bcrypt
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

//compare password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//setPasswordToken
userSchema.methods.resetToken = async function () {
  const resetToken = crypto.randomBytes(30).toString("hex");

  this.resetPasswordToken = resetToken;
  this.resetPasswordTokenExpiration = Date.now() + 5 * 60 * 1000;
  return resetToken;
};

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
