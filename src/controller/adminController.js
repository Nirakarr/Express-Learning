import expressAsyncHandler from "express-async-handler";

import { HttpStatus } from "../config/config.js";
import { Admin } from "../schema/model.js";
import { compareHashCode, generateHashCode } from "../utils/hashing.js";
import {
  createAdminServices,
  deleteAdminServices,
  readAdminDetailsServices,
  readAllAdminDetailsServices,
  updateAdminDetailsServices,
} from "../service/adminService.js";
export let createAdmin = expressAsyncHandler(async (req, res, next) => {
  // req.body.password
  let hashPassword = await generateHashCode({ text: req.body.password });
  let body = {
    ...req.body,
    password: hashPassword,
  };

  let result = await createAdminServices({ body: body });
  // console.log("hello");
  // await sendMail({
  //   from: '"Nitan thapa"',
  //   to: [
  //     "nitanthapa425@gmail.com",
  //     "adhikariluffy20@gmail.com",
  //     "hipakdev@gmail.com",
  //   ],
  //   subject: "this is subject",
  //   html: `<h1>Hello World<h1>`,
  // });

  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});

export let loginAdmin = expressAsyncHandler(async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password; //password

  let user = await Admin.findOne({ email: email });

  if (user) {
    let isValidPasword = compareHashCode({
      text: password,
      hashCode: user.password,
    });

    if (isValidPasword)
      successResponse({
        res,
        status: HttpStatus.OK,
        message: "Login Successful",
      });
    else {
      let err = new Error("Invalid email or password");
      err.statusCode = HttpStatus.UNAUTHORIZED;
      throw err;
    }
  } else {
    let err = new Error("Invalid email or password");
    err.statusCode = HttpStatus.UNAUTHORIZED;
    throw err;
  }

  console.log(user);
});

export let readAllAdmins = expressAsyncHandler(async (req, res) => {
  let sort = req.query.sort || "";
  let _break = req.query._break || 0;
  let _page = req.query._page || 1;
  let skip = (_page - 1) * _break;
  skip = skip || "";
  let limit = _break || "";
  let find = {};
  let select = "";

  let result = await readAllAdminDetailsServices({
    find,
    select,
    sort,
    limit,
    skip,
  });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
export let readAdminDetails = expressAsyncHandler(async (req, res) => {
  let result = await readAdminDetailsServices({ id: req.params.id });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
export let updateAdminDetails = expressAsyncHandler(async (req, res) => {
  let result = await updateAdminDetailsServices({
    id: req.params.id,
    body: req.body,
  });

  successResponse({
    res,
    status: HttpStatus.CREATED,
    result,
  });
});
export let deleteAdmin = expressAsyncHandler(async (req, res) => {
  let result = await deleteAdminServices({ id: req.params.id });

  successResponse({
    res,
    status: HttpStatus.OK,
    result,
  });
});
