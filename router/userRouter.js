import express from 'express';
import { createUser, loginUsers,  } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/",createUser);

userRouter.post("/login", loginUsers);


export default userRouter;