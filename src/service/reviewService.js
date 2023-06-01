import { Review } from "../schema/model.js";
//populate is use to open details of id
//populate is only uses in find and findById method
export const createReviewServices = async ({ body }) =>
  await Review.create(body);
export const readReviewDetailsServices = async ({ id }) =>
  await Review.findById(id).populate("productId", "name -_id");
// .populate("playerId", "age noOfMatches -_id");
export const readAllReviewDetailsServices = async ({
  find,
  select,
  limit,
  skip,
  sort,
}) =>
  await Review.find({})
    .select(select)
    .sort(sort)
    .limit(limit)
    .skip(skip)
    .populate("productId");
// .populate("playerId")
export const updateReviewDetailsServices = async ({ id, body }) =>
  await Review.findByIdAndUpdate(id, body, {
    new: true,
  });
export const deleteReviewServices = async ({ id }) =>
  await Review.findByIdAndDelete(id);

// if possible don't define variable in the function
