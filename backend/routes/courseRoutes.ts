import { getCourses, getTimetable, getTranscript } from "../controllers/courseControllers";
import express from "express";

const courseRouter = express.Router();

courseRouter.get('/', getCourses);
courseRouter.get('/timetable', getTimetable);
courseRouter.get('/transcript', getTranscript);

export default courseRouter;