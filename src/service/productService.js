import { Product } from "../schema/model.js";

export const createProductServices = async ({ body }) =>
  await Product.create(body);
export const readProductDetailsServices = async ({ id }) =>
  await Product.findById(id);
export const readAllProductDetailsServices = async ({
  find,
  select,
  limit,
  skip,
  sort,
}) => await Product.find({}).select(select).sort(sort).limit(limit).skip(skip);
export const updateProductDetailsServices = async ({ id, body }) =>
  await Product.findByIdAndUpdate(id, body, {
    new: true,
  });
export const deleteProductServices = async ({ id }) =>
  await Product.findByIdAndDelete(id);

// if possible don't define variable in the function
