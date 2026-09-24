const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategoryByIdOrSlug,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(getCategories)
  .post(protect, adminOnly, createCategory);

router
  .route('/:idOrSlug')
  .get(getCategoryByIdOrSlug);

router
  .route('/:id')
  .put(protect, adminOnly, updateCategory)
  .delete(protect, adminOnly, deleteCategory);

module.exports = router;


