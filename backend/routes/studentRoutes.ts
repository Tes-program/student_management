import {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  searchStudent,
  deleteStudent
} from "../controllers/studentControllers";
import express from "express";


const studentRouter = express.Router();

studentRouter.get('/', getAllStudents);
studentRouter.get('/search', searchStudent);
studentRouter.get('/:id', getStudent);
studentRouter.post('/create', createStudent);
studentRouter.put('/:id', updateStudent);
studentRouter.delete('/:id', deleteStudent);


export default studentRouter;