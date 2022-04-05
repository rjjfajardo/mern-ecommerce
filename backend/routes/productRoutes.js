import express from 'express';
const router = express.Router();

import { getProducts, getProductsbyAdmin ,getProductById } from '../controllers/productController.js'
import { protect,isAdmin } from '../middleware/authMiddleware.js';

// @desc    Fetch all products
// @route   GET/api/products
// @access  Public

//get all product
router.route('/')
                .get(getProducts)
                .get(isAdmin, getProductsbyAdmin)

// get single product by id

router.route('/:id').get(getProductById);

   
export default router;

