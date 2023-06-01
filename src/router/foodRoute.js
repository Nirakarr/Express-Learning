import { Router } from "express";
import { foodRouterRead } from "../controller/foodController.js";
// import { foodRouterRead } from "../Controller/foodController";
import {
  foodMiddleware,
  foodMiddleware1,
  foodMiddleware2,
} from "../middleware/foodMiddleware.js";
export const foodRouter = Router();

// export let foodMiddleware = (req, res, next) => {
//   console.log("1");
//   next();
// };

// export let foodRouterRead = (req, res) => {
//   console.log(2);
//   res.json("I will show all Food");
// };

// let foodMiddleware1 = (role) => {
//   console.log(role);
//   return (req, res, next) => {
//     next();
//   };
// };

// export let foodMiddleware1 = (role) => {
//   return (req, res, next) => {
//     // if(role.includes("admin"||"superAdmin"))
//     if (role === "admin" || role === "superAdmin") next();
//     else {
//       let error = new Error("User is not Authorize");
//       throw error;
//     }
//   };
// };

foodRouter
  .route("/")
  .get(
    foodMiddleware,
    foodMiddleware1("admin"),
    foodMiddleware2,
    foodRouterRead
  );
// .get(foodMiddleware, (req,res,next)=>{}, foodMiddleware2, foodRouterRead);

foodRouter.route("/:foodName").get((req, res) => {
  res.json({
    foodName: req.params.foodName,
  });
});
foodRouter.route("/").post((req, res) => {
  res.json({
    food: req.body.foodName,
  });
});

// main url
// localhost:8000/second/b
