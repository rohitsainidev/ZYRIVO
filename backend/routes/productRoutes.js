const express = require('express');
const router = express.Router();
const {
  getProducts,
  getFeaturedProducts,
  getProductByIdOrSlug,
  createProductReview,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(getProducts)
  .post(protect, adminOnly, createProduct);

router.get('/featured', getFeaturedProducts);

router
  .route('/:idOrSlug')
  .get(getProductByIdOrSlug);

router
  .route('/:id')
  .put(protect, adminOnly, updateProduct)
  .delete(protect, adminOnly, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

module.exports = router;


