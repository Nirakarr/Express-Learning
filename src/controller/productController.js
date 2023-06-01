import expressAsyncHandler from "express-async-handler";
import { HttpStatus } from "../config/config.js";
import successResponse from "../helper/successResponse.js";
import {
  createProductServices,
  deleteProductServices,
  readAllProductDetailsServices,
  readProductDetailsServices,
  updateProductDetailsServices,
} from "../service/productService.js";

export let createProduct = expressAsyncHandler(async (req, res, next) => {
  let result = await createProductServices({ body: req.body });
  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});

export let readAllProducts = async (req, res) => {
  let sort = req.query.sort || "";
  let _break = req.query._break || 0;
  let _page = req.query._page || 1;
  let skip = (_page - 1) * _break;
  skip = skip || "";
  let limit = _break || "";
  let find = {};
  let select = "";

  let result = await readAllProductDetailsServices({
    find,
    select,
    sort,
    limit,
    skip,
  });
  successResponse({
    result,
    status: HttpStatus.OK,
    res,
  });
};
export let readProductDetails = async (req, res) => {
  let result = await readProductDetailsServices({ id: req.params.id });

  successResponse({
    res,
    result,
    status: HttpStatus.OK,
  });
};
export let updateProductDetails = async (req, res) => {
  let result = await updateProductDetailsServices({
    id: req.params.id,
    body: req.body,
  });

  successResponse({
    result,
    status: HttpStatus.CREATED,
    res,
  });
};
export let deleteProduct = expressAsyncHandler(async (req, res) => {
  let result = await deleteProductServices({ id: req.params.id });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
