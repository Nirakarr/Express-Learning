import Joi from "joi";
const adminValidation = Joi.object()
  .keys({
    firstName: Joi.string().custom((value, msg) => {
      if (value.match(/^[a-zA-Z ]+$/)) {
        return true;
        
      } else {
        return msg.message("Only alphabet is allowed");
      }
    }),
    middleName: Joi.string().custom((value, msg) => {
      if (value.match(/^[a-zA-Z ]+$/)) {
        return true;
      } else {
        return msg.message("Only alphabet is allowed");
      }
    }),
    lastName: Joi.string().custom((value, msg) => {
      if (value.match(/^[a-zA-Z ]+$/)) {
        return true;
      } else {
        return msg.message("Only alphabet is allowed");
      }
    }),

    // quantity: Joi.number().min(1).max(6).required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),

    isMarried: Joi.boolean().required(),
    profilePicture: Joi.string().required(),
    dob: Joi.string().required(),
    gender: Joi.string().required().valid("male", "female", "other"),
    role: Joi.string().required().valid("superAdmin", "admin", "customer"),
  })
  .unknown(false);

export default adminValidation;
