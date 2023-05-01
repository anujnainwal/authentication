const jwt = require("jsonwebtoken");
const config = require("../config/config");
const crypto = require("crypto");
const TokenModel = require("../model/token/token.model");
const generateToken = {
  ACCESS_TOKEN: async (user) => {
    return await jwt.sign(
      { _id: user._id, role: user.role },
      config.ACCESS_TOKEN,
      {
        expiresIn: config.ACCESS_TOKEN_EXPIRY,
      }
    );
  },
  REFRESH_TOKEN: async (user) => {
    try {
      const refreshToken = crypto.randomUUID();
      //save resfrsh token
      const token = await TokenModel({
        userId: user._id,
        refreshToken: refreshToken,
        expireAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
      });
      await token.save();
      return refreshToken;
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = generateToken;
