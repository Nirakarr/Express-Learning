import { Router } from "express";

import Joi from "joi";
import {
  createReview,
  deleteReview,
  readAllReviews,
  readReviewDetails,
  updateReviewDetails,
} from "../controller/reviewController.js";
import validation from "../middleware/validation.js";
import reviewValidation from "../Validations/reviewValidation.js";

const reviewRouter = Router();

reviewRouter
  .route("/")
  .post(validation(reviewValidation), createReview)

  .get(readAllReviews);

reviewRouter
  .route("/:id")
  .get(readReviewDetails)
  .patch(validation(reviewValidation), updateReviewDetails)
  .delete(deleteReview);

export default reviewRouter;
