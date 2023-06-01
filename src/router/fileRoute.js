import { Router } from "express";
import upload from "../middleware/uploadFiles.js";
import { createFile, createFiles } from "../controller/fileController.js";
const fileRouter = Router();
fileRouter.route("/single").post(upload.single("fileType"), createFile);

fileRouter.route("/multiple").post(upload.array("fileTypes", 5), createFiles);
export default fileRouter;
