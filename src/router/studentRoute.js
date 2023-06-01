import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  readAllStudents,
  readStudentDetails,
  updateStudentDetails,
} from "../controller/studentContoller.js";
import validation from "../middleware/validation.js";
import studentValidation from "../Validations/studentValidation.js";

export const studentRouter = Router();

studentRouter
  .route("/")
  .post(validation(studentValidation), createStudent)
  .get(readAllStudents);
studentRouter
  .route("/:id")
  .get(readStudentDetails)
  .patch(updateStudentDetails)
  .delete(deleteStudent);
export default studentRouter;
