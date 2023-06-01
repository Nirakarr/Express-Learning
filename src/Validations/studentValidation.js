import Joi from "joi";
const studentValidation = Joi.object().keys({
  name: Joi.string().required(),
  roll: Joi.number().required(),
  address: Joi.string().required(),
});
export default studentValidation;
