import Joi from "joi";
const playerValidation = Joi.object()
  .keys({
    name: Joi.string().custom((value, msg) => {
      if (value.match(/^[a-zA-Z]+$/)) {
        return true;
      } else {
        return msg.message("Only Alphabet is allowed");
      }
    }),
    age: Joi.number().min(18).max(60).required(),
    noOfMatches: Joi.number().required(),
    isMarried: Joi.boolean().required(),
    spouse: Joi.string().when("isMarried", {
      is: true,
      then: Joi.required(),
      otherwise: Joi.optional().allow(),
    }),
    gender: Joi.string().required().valid("male", "female", "others"),
    parentInfo: Joi.object().keys({
      fatherName: Joi.string().required(),
      motherName: Joi.string().required(),
    }),
    playerGame: Joi.array().items(
      Joi.object().keys({
        matchName: Joi.string().required(),
        noOfGoal: Joi.number().required(),
      })
    ),
    favFood: Joi.array().items(Joi.string()).required(),
  })
  .unknown(false);
export default playerValidation;
