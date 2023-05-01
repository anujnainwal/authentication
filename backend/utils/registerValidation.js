const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const registerValidation = joi.object({
  firstname: joi
    .string()
    .min(3)
    .max(100)
    .regex(/^[A-Za-z]+$/)
    .required(),
  lastname: joi
    .string()
    .min(3)
    .max(100)
    .regex(/^[A-Za-z]+$/)
    .required(),
  email: joi.string().min(5).max(30).required().email().lowercase().trim(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfUppercase(1)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
  role: joi.string().required(),
});
module.exports = registerValidation;
