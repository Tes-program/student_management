import {
  getSemesterResults,
  addSemesterResults,
  getCourseSemesterResults,
  deleteSemesterResult
} from "../controllers/resultControllers";
import express from "express";

const resultRouter = express.Router();

resultRouter.get("/semester", getSemesterResults);
resultRouter.post("/semester", addSemesterResults);
resultRouter.get("/course", getCourseSemesterResults);
resultRouter.delete("/semester/:id", deleteSemesterResult);

export default resultRouter;

