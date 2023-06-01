import expressAsyncHandler from "express-async-handler";
import { HttpStatus, baseUrl } from "../config/config.js";
import successResponse from "../helper/successResponse.js";

export let createFile = expressAsyncHandler(async (req, res, next) => {
  let result = `${baseUrl}/${req.file.filename}`;
  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});
export let createFiles = expressAsyncHandler(async (req, res, next) => {
  console.log(req.file);

  let result = req.files.map((value, i) => {
    let path = `${baseUrl}/${value.filename}`;

    return path;
  });

  // let result = `localhost:8000/${req.file.filename}`;
  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});
