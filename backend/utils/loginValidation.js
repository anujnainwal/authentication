const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const loginValidation = joi.object({
  email: joi.string().min(5).max(30).required().email(),
  password: joiPassword.string().required(),
});
module.exports = loginValidation;
