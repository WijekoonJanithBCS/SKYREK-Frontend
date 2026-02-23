import express from 'express';
import { createProduct, deleteProductById, getProducts } from '../controller/productController.js';


const productRouter = express.Router();

productRouter.post("/", createProduct);

productRouter.get("/",getProducts);

productRouter.delete("/",deleteProductById);

export default productRouter;