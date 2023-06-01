import { HttpStatus } from "../config/config.js";
import { Player } from "../schema/model.js";
import expressAsyncHandler from "express-async-handler";
import successResponse from "../helper/successResponse.js";
import {
  createProductServices,
  deleteProductServices,
  readProductDetailsServices,
  updateProductDetailsServices,
} from "../service/productService.js";

// export let createPlayer = async (req, res, next) => {
//   try {
//     let result = await Player.create(req.body);

//     res.status(HttpStatus.CREATED).json({
//       success: true,
//       result,
//     });
//   } catch (error) {
//     console.log("error");
//     let err = new Error(error.message);
//     throw err;
//   }
// }

export let createPlayer = expressAsyncHandler(async (req, res, next) => {
  // let result = await Player.create(req.body);
  let result = await createProductServices({ body: req.body });
  // res.status(HttpStatus.CREATED).json({
  //   success: true,
  //   result,
  // });
  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});

export let readAllPlayers = async (req, res) => {
  try {
    let name = req.query.name;
    let sort = req.query.sort;
    let _break = req.query._break;
    let _page = req.query._page;
    let skip = (_page - 1) * _break;
    let limit = _break;

    // let result = await Player.find({});
    // let result = await Player.find({ name: name });
    // let result = await Player.find({ name: "hari", age: 23 }); //find those object whose name is hare and age is 23
    // let result = await Player.find({ name: "hari" }).select(
    //   "name age noOfMatches isMarried -_id"
    // ); //find determine which object to show and select determine which field(of object) to show
    //by default _id is give to remove id we must use -_id

    // let result = await Player.find({})
    //   .select("name age isMarried  -_id")
    //   .sort("-name"); //if .sort("name") sort asending   .sort("-name") sort descengin

    // let result = await Player.find({ name: req.query.name, age: req.query.age })
    //   .select("name age isMarried  -_id")
    //   .sort(sort);

    // let result = await Player.find({})
    //   .select("name age isMarried  -_id")
    //   .sort(sort)
    //   .skip(skip || "")
    //   .limit(limit || "");

    // let result = await Player.find({})
    //   .select("name age isMarried  -_id")
    //   .sort("-name age");

    // let result = await Player.find({ name: "b" })
    //   .select("name age isMarried  -_id")
    //   .limit("2");
    // //limit tells the the number of object to show (from the top)

    // let result = await Player.find({ name: "b" })
    //   .select("name age isMarried  -_id")
    //   .skip("2");
    //limit tells the the number of object to show (from the top)

    // let result = await Player.find({ name: "b" })
    //   .select("name age isMarried  -_id")
    //   .limit("1")
    //   .skip("2");
    //VVVVVVVVVVVVVVVVVVVVVVVVvvv
    //what ever the position of find, select ,limit,skip
    //  .... (it always follow the given pattern (find,select, sort, skip and limit))

    // let result = await Player.find({ age: "23" }).select(
    //   "name age isMarried  -_id"
    // );
    // let result = await Player.find({ isMarried: "false" }).select(
    //   "name age isMarried  -_id"
    // );

    // { age: "23" } and { age: 23 }   are same in find method
    // { isMarried: "true" } and { isMarried: true }   are same in find method

    // let result = await Player.find({
    //   name: { $in: ["hari", "shyam", "a"] },
    // }).select("name age isMarried  -_id");//it will give those object whose name either hari or shyam or a

    // let result = await Player.find({ age: { $gt: 18 } }).select(
    //   "name age isMarried  -_id"
    // );

    // let result = await Player.find({ age: { $gte: 18 } }).select(
    //   "name age isMarried  -_id"
    // );

    // let result = await Player.find({ age: { $lt: 20 } }).select(
    //   "name age isMarried  -_id"
    // );

    // let result = await Player.find({ age: { $lte: 20 } }).select(
    //   "name age isMarried  -_id"
    // );

    // let result = await Player.find({ age: { $ne: 20 } }).select(
    //   "name age isMarried  -_id"
    // );

    // let result = await Player.find({
    //   $or: [{ name: "hari", age: 22 }, { name: "a" }],
    // }).select("name age isMarried  -_id");

    // let result = await Player.find({
    //   $and: [{ age: { $gte: 18 } }, { age: { $lte: 25 } }],
    // }).select("name age isMarried _id");

    // res.status(HttpStatus.OK).json({
    //   success: true,
    //   result,
    // });
    successResponse({
      result,
      status: HttpStatus.OK,
      res,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let readPlayerDetails = async (req, res) => {
  try {
    let result = await readProductDetailsServices(req.params.id);

    // res.status(HttpStatus.OK).json({
    //   success: true,
    //   result,
    // });
    successResponse({
      res,
      result,
      status: HttpStatus.OK,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let updatePlayerDetails = async (req, res) => {
  try {
    let result = await updateProductDetailsServices(req.params.id, req.body, {
      new: true,
    });

    // res.status(HttpStatus.CREATED).json({
    //   success: true,
    //   result,
    // });
    successResponse({
      result,
      status: HttpStatus.CREATED,
      res,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let deletePlayer = async (req, res) => {
  try {
    let result = await deleteProductServices(req.params.id);
    // res.status(HttpStatus.NO_CONTENT).json({
    //   success: true,
    //   result,
    // });
    successResponse({
      res,
      result,
      status: HttpStatus.OK,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
