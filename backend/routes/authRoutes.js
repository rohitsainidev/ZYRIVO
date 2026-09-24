const express = require('express');
const router = express.Router();
const {
  firebaseLogin,
  sendOtp,
  verifyOtp,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Phone / Firebase Auth routes
router.post('/firebase-login', firebaseLogin);
router.post('/send-otp',       sendOtp);
router.post('/verify-otp',     verifyOtp);

// Email/password routes (kept for admin)
router.post('/register', registerUser);
router.post('/login',    loginUser);
router.post('/logout',   logoutUser);

// Protected profile routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Admin customers list
router.get('/users', protect, adminOnly, getAllUsers);

module.exports = router;
