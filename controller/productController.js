import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req, res) {

   if(!isAdmin(req)){
        res.status(403).json({
            message: 'Forbidden: Admins only'
        });
        return;
    }

    try {
        const existingProduct = await Product.findOne({ 
            productId: req.body.productId });

        if (existingProduct) {
            res.status(400).json({
                message: 'Product with the same productId already exists'
            });
            return;
        }

        const data={};
        data.productId=req.body.productId;
        if(req.body.name==null){
            res.status(400).json({
                message: 'Name is required'
            });
            return;
        }
        else{
            data.name=req.body.name;
            data.description=req.body.description || "";
            data.altNames=req.body.altNames || [];
            if(req.body.price==null){
                res.status(400).json({
                    message: 'Price is required'
                });
                return;
            }
            data.price=req.body.price;
            data.labelledPrice=req.body.labelledPrice || req.body.price;
            data.category=req.body.category || "others";
            data.images=req.body.images || ["https://source.unsplash.com/600x400/?laptop"];
            data.isVisible=req.body.isVisible || true;
            data.brand=req.body.brand || "Generic";
            data.model=req.body.model || "Standard";

            const newProduct = new Product(data);

            await newProduct.save();

            res.status(201).json({
                message: 'Product created successfully',
                product: newProduct 

        }
        );
    }


        



    } 
    catch (error) {
        res.status(500).json({
            message: 'Error checking for existing product',
            error: error.message
        });
        return;
    }
}

export async function getProducts(req, res) {
    try {
        if(isAdmin(req)){
             const products = await Product.find();
            res.status(200).json(products);
        }
        else{
            const products = await Product.find({ isVisible: true });
            res.status(200).json(products);
        }
        
    }
    catch (error) {
        res.status(500).json({
            message: 'Error fetching products',
            error: error.message
        });
    }
}

export async function deleteProductById(req, res) {
    if(!isAdmin(req)){
        res.status(403).json({
            message: 'Forbidden: Admins only'
        });
        return;
    }
    try {
        const productId = req.body.id;
        await Product.deleteOne({ productId: productId });
        res.status(200).json({
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting product',
            error: error.message
        });
    }   
}
