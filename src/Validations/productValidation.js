import Joi from "joi";
const productValidation = Joi.object()
  .keys({
    name: Joi.string().custom((value, msg) => {
      if (value.match(/^[a-zA-Z ]+$/)) {
        return true;
      } else {
        return msg.message("Only alphabet is allowed");
      }
    }),

    quantity: Joi.number().min(1).max(6).required(),
    price: Joi.number().min(100).max(1000000).required(),

    featured: Joi.boolean().required(),
    productImage: Joi.string().required(),
    manufactureDate: Joi.string().required(),
    company: Joi.string().required().valid("apple", "samsung", "dell", "mi"),
  })
  .unknown(false);

export default productValidation;
