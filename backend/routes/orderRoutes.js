import express from 'express';
const router = express.Router();

import { getOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').post(getOrderItems)
   
export default router;

