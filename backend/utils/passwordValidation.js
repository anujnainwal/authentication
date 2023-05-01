const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const passwordValidation = joi.object({
  password: joiPassword
    .string()
    .min(8)
    .max(40)
    .minOfSpecialCharacters(1)
    .minOfUppercase(1)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
});

module.exports = { passwordValidation };
