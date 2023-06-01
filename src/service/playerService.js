import { Player } from "../schema/model";

export const createPlayerServices = async ({ body }) =>
  await Player.create(body);
export const readPlayerDetailsServices = async ({ id }) =>
  await Player.findById(id);
export const updatePlayerDetailsServices = async ({ id, body }) =>
  await Player.findByIdAndUpdate(id, body, {
    new: true,
  });
export const deletePlayerServices = async ({ id }) => await Player.findById(id);

// if possible don't define variable in the function
