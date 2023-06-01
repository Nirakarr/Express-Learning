import { Student } from "../schema/model.js";
export let createStudent = async (req, res) => {
  try {
    let result = await Student.create(req.body);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let readAllStudents = async (req, res) => {
  try {
    let result = await Student.find({});
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let readStudentDetails = async (req, res) => {
  try {
    let result = await Student.findById(req.params.id);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let updateStudentDetails = async (req, res) => {
  try {
    let result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
export let deleteStudent = async (req, res) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    let err = new Error(error.message);
    throw err;
  }
};
