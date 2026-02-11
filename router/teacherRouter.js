import express from 'express';
import { CreateTeachers, getAllTeachers } from '../controller/teacherController.js';

const teacherRouter = express.Router();



teacherRouter.get('/',getAllTeachers)

teacherRouter.post('/',CreateTeachers)

export default teacherRouter;




