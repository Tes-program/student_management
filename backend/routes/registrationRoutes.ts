import {
  commenceRegistration,
  getCourseStudents,
  getStudentCourses,
  updateRegistration
} from "../controllers/registrationControllers";
import express from "express";


const registrationRouter = express.Router();

registrationRouter.post('/register', commenceRegistration);
registrationRouter.get('/student/', getStudentCourses);
registrationRouter.get('/course', getCourseStudents);
registrationRouter.put('/update/:id', updateRegistration);

export default registrationRouter;