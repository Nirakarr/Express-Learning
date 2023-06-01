import { Router } from "express";

import Joi from "joi";
import productValidation from "../Validations/productValidation.js";
import {
  createProduct,
  deleteProduct,
  readAllProducts,
  readProductDetails,
  updateProductDetails,
} from "../controller/productController.js";
import validation from "../middleware/validation.js";

const productRouter = Router();

productRouter
  .route("/")
  .post(validation(productValidation), createProduct)

  .get(readAllProducts);

productRouter
  .route("/:id")
  .get(readProductDetails)
  .patch(validation(productValidation), updateProductDetails)
  .delete(deleteProduct);

export default productRouter;
