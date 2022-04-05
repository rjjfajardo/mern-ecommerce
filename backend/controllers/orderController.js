import asyncHandler from "express-async-handler";
import Order from "../models/order.js";

// @desc    create new order
// @route   POST/api/orders
// @access  Private

const getOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  
  console.log(req.body);

 

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
    return
  } else {
    const order = new Order({
      
      orderItems,
     
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    console.log(order)

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});

export {getOrderItems};
