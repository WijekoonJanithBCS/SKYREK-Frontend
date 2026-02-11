import express from 'express';
import { CreateParents, getAllParents } from '../controller/parentController.js';

const parentRouter = express.Router();

parentRouter.get('/', getAllParents)

parentRouter.post('/', CreateParents)

export default parentRouter;

