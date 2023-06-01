import expressAsyncHandler from "express-async-handler";
// import { HttpStatus } from "../config/config.js";
// import successResponse from "../helper/successResponse.js";
import {
  createReviewServices,
  deleteReviewServices,
  readAllReviewDetailsServices,
  readReviewDetailsServices,
  updateReviewDetailsServices,
} from "../service/reviewService.js";
import { HttpStatus } from "../config/config.js";
import successResponse from "../helper/successResponse.js";
// import {
//   createReviewServices,
//   deleteReviewServices,
//   readAllReviewDetailsServices,
//   readReviewDetailsServices,
//   updateReviewDetailsServices,
// } from "../service/reviewService.js";

export let createReview = expressAsyncHandler(async (req, res, next) => {
  let result = await createReviewServices({ body: req.body });

  await sendMail({
    from: '"Nirakar Adhikari"',
    to: ["niraakar42@gmail.com", "hipakdev@gmail.com"],
    subject: "this is subject",
    html: `<h1>Hello World<h1>`,
  });

  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});

export let readAllReviews = expressAsyncHandler(async (req, res) => {
  let sort = req.query.sort || "";
  let _break = req.query._break || 0;
  let _page = req.query._page || 1;
  let skip = (_page - 1) * _break;
  skip = skip || "";
  let limit = _break || "";
  let find = {};
  let select = "";

  let result = await readAllReviewDetailsServices({
    find,
    select,
    sort,
    limit,
    skip,
  });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
export let readReviewDetails = expressAsyncHandler(async (req, res) => {
  let result = await readReviewDetailsServices({ id: req.params.id });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
export let updateReviewDetails = expressAsyncHandler(async (req, res) => {
  let result = await updateReviewDetailsServices({
    id: req.params.id,
    body: req.body,
  });

  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});
export let deleteReview = expressAsyncHandler(async (req, res) => {
  let result = await deleteReviewServices({ id: req.params.id });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
