import express, { json, urlencoded } from "express";
import { model, Schema } from "mongoose";
import { HttpStatus, port } from "./src/config/config.js";
import connectDb from "./src/ConnectExpress/connectdb.js";
import errorHandler from "./src/helper/errorHandler.js";
import { bookRouter } from "./src/router/bookRoute.js";
import { firstRouter } from "./src/router/firstRouter.js";
import { foodRouter } from "./src/router/foodRoute.js";
import { gamesRouter } from "./src/router/gamesRoute.js";
import playerRouter from "./src/router/playerRoute.js";
import productRouter from "./src/router/productRoute.js";
import studentRouter from "./src/router/studentRoute.js";
import reviewRouter from "./src/router/reviewRoute.js";
import { sendMail } from "./src/utils/sendMail.js";
import fileRouter from "./src/router/fileRoute.js";
import adminRouter from "./src/router/adminRouter.js";
let expressApp = express();
expressApp.use(json());
expressApp.use(urlencoded({ extended: true }));
expressApp.use(express.static("./public"));

expressApp.use("/", firstRouter);
expressApp.use("/food", foodRouter);
expressApp.use("/book", bookRouter);
expressApp.use("/games", gamesRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/players", playerRouter);
expressApp.use("/products", productRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/uploads", fileRouter);
expressApp.use("/admins", adminRouter);

expressApp.use(errorHandler);

// expressApp.use((err, req, res, next) => {
//   let statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
//   let message = err?.message || "Internal server error";
//   res.status(statusCode).json({
//     success: false,
//     message,
//   });
// });
// try {
//   await sendMail({
//     from: '"underrated developer"',
//     to: ["niraakar42@gmail.com"],
//     subject: "this is subject",
//     html: `<h1>Hello World<h1>`,
//   });
//   console.log("email is sent successfully");
// } catch (error) {
//   console.log("unable to send email");
// }

connectDb();

expressApp.listen(port, () => {
  console.log("Express app is listening to port", port);
});
// let Student = model("Student", studentSchema);
// let studentData = {
//   name: "Nirakar",
//   roll: 12,
//   address: "Dhankuta",
// };
// try {
//   await Student.create(studentData);
// } catch (err) {
//   let error = new Error(err.message);
//   throw error;
// }
// try {
//   let result = await Student.find({});
//   console.log(result);
// } catch (err) {
//   let error = new Error(err.message);
//   throw error;
// }
// let updateData = {
//   name: "ram",
//   roll: 45,
//   address: "kathamndu",
// };
// try {
//   let result = await Student.findByIdAndUpdate(
//     "6411abe595c0afbf9fba5d06",
//     updateData
//   );
//   console.log(result);
// } catch (err) {
//   let error = new Error(err.message);
//   throw error;
// }
// try {
//   let result = await Student.findByIdAndDelete("6411abe595c0afbf9fba5d06");
//   console.log(result);
// } catch (err) {
//   let error = new Error(err.message);
//   throw error;
// }
