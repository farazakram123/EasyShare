import express from "express";
import { uploadFiles, fetchFiles } from "../controllers/sendFiles.js";

const fileRouter = express.Router();

fileRouter.post("/upload", uploadFiles);
fileRouter.post("/fetch", fetchFiles);

export default fileRouter;
