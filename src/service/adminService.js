import { Admin } from "../schema/model.js";

export const createAdminServices = async ({ body }) => await Admin.create(body);
export const readAdminDetailsServices = async ({ id }) =>
  await Admin.findById(id);
export const readAllAdminDetailsServices = async ({
  find,
  select,
  limit,
  skip,
  sort,
}) => await Admin.find({}).select(select).sort(sort).limit(limit).skip(skip);
export const updateAdminDetailsServices = async ({ id, body }) =>
  await Admin.findByIdAndUpdate(id, body, {
    new: true,
  });
export const deleteAdminServices = async ({ id }) =>
  await Admin.findByIdAndDelete(id);

// if possible don't define variable in the function
