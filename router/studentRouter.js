import express from 'express';

import { CreateStudents, getAllStudents } from '../controller/studentController.js';

const studentRouter = express.Router();

studentRouter.get('/',getAllStudents)

studentRouter.post('/',CreateStudents)



export default studentRouter;