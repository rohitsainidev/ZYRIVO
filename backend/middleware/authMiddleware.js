const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - User must be authenticated
const protect = async (req, res, next) => {
  let token;

  // Read JWT from cookie or Bearer Authorization header
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401);
    return next(new Error('Not authorized, no token provided'));
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'fallback_secret_for_dev_only'
    );
    req.user = await User.findById(decoded.userId).select('-password');

    if (!req.user) {
      res.status(401);
      return next(new Error('User not found with this token'));
    }

    next();
  } catch (error) {
    res.status(401);
    return next(new Error('Not authorized, token invalid or expired'));
  }
};

// Admin or Supplier middleware
const adminOnly = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'supplier')) {
    next();
  } else {
    res.status(403);
    next(new Error('Access denied: Admin/Supplier access only'));
  }
};

module.exports = { protect, adminOnly };


