const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  updateOrderStatus,
  getAllOrders,
  cancelMyOrder,
} = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router
  .route('/')
  .post(protect, createOrder)
  .get(protect, adminOnly, getAllOrders);

router.route('/myorders').get(protect, getMyOrders);

router.route('/:id').get(protect, getOrderById);

router.route('/:id/cancel').put(protect, cancelMyOrder);

router.route('/:id/pay').put(protect, updateOrderToPaid);

router.route('/:id/deliver').put(protect, adminOnly, updateOrderToDelivered);

router.route('/:id/status').put(protect, adminOnly, updateOrderStatus);

module.exports = router;


