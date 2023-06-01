import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  readAllPlayers,
  readPlayerDetails,
  updatePlayerDetails,
} from "../controller/playerController.js";
import { abnormal } from "../middleware/abnormal.js";
import normal from "../middleware/normal.js";
import validation from "../middleware/validation.js";
import playerValidation from "../Validations/playerValidation.js";

export const playerRouter = Router();

playerRouter
  .route("/")
  // .post(normal, abnormal("Nirakar"), validation(playerValidation), createPlayer)
  .post(createPlayer)
  .get(readAllPlayers);
playerRouter
  .route("/:id")
  .get(readPlayerDetails)
  .patch(updatePlayerDetails)
  .delete(deletePlayer);
export default playerRouter;
