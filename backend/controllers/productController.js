import asyncHandler from "express-async-handler";
import Product from "../models/products.js";

// @desc    Fetch all products
// @route   GET/api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // {} indicates all 
  res.json(products);
});

// @desc    Fetch single products
// @route   GET/api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Fetch all products by admin and CRUD
// @route   GET/api/products
// @access  Public

const getProductsbyAdmin = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // {} indicates all 
  res.json(products);
});



export {
    getProducts,
    getProductById,
    getProductsbyAdmin
}
