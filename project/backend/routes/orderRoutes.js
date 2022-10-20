import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log('into async handler');
    // console.log(req.body.orderItems);
    console.log(req.user);
    //console.log(req.body.orderItems.map((x) => ({ product: x._id })));
    const newOrder = new Order({
      orderItems: req.body.orderItems, //.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    console.log('after');
    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
  })
);
export default orderRouter;