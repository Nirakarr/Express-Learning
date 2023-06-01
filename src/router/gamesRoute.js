import { Router } from "express";
// import { foodRouterRead } from "../controller/foodController";
import {
  gamesMiddleware,
  gamesMiddleware1,
  gamesMiddleware2,
} from "../middleware/gamesMiddleware.js";

export const gamesRouter = Router();
gamesRouter
  .route("/")
  .get(gamesMiddleware, gamesMiddleware1("admin"), gamesMiddleware2);
