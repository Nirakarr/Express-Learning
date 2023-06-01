import Joi from "joi";
const reviewValidation = Joi.object()
  .keys({
    comment: Joi.string().required(),

    productRating: Joi.number().min(1).max(10).required(),
    productId: Joi.string().required(),
    // playerId: Joi.string().required(),
  })
  .unknown(false);

export default reviewValidation;
