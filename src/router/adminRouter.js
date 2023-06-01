import { Router } from "express";

import Joi from "joi";
import adminValidation from "../Validations/adminValidation.js";
import validation from "../middleware/validation.js";
import {
  createAdmin,
  deleteAdmin,
  loginAdmin,
  readAdminDetails,
  readAllAdmins,
  updateAdminDetails,
} from "../controller/adminController.js";

const adminRouter = Router();

adminRouter
  .route("/")
  .post(validation(adminValidation), createAdmin)
  // .post(createAdmin)

  .get(readAllAdmins);

adminRouter.route("/login").post(loginAdmin);

adminRouter
  .route("/:id")
  .get(readAdminDetails)
  .patch(validation(adminValidation), updateAdminDetails)
  .delete(deleteAdmin);

export default adminRouter;
