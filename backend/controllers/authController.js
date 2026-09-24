const User = require('../models/User');
const generateToken = require('../utils/generateToken');

/* ─── helper: generate 6-digit OTP ─── */
const makeOtp = () => String(Math.floor(100000 + Math.random() * 900000));

// @desc    Firebase Phone Auth Login / Register
// @route   POST /api/auth/firebase-login
// @access  Public
const firebaseLogin = async (req, res, next) => {
  try {
    const { phone, name } = req.body;
    if (!phone) {
      res.status(400);
      throw new Error('Please provide a valid phone number');
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) {
      res.status(400);
      throw new Error('Valid 10-digit phone number is required');
    }

    // Upsert user
    let user = await User.findOne({ phone: cleanPhone });
    if (!user) {
      user = await User.create({
        phone: cleanPhone,
        name: name || `User ${cleanPhone.slice(-4)}`,
      });
    }

    const token = generateToken(res, user._id);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully via Firebase',
      token,
      user: {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        addresses: user.addresses,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Send OTP to phone number (Dev fallback)
// @route   POST /api/auth/send-otp
// @access  Public
const sendOtp = async (req, res, next) => {
  try {
    const { phone } = req.body;
    if (!phone || phone.length < 10) {
      res.status(400);
      throw new Error('Please provide a valid 10-digit phone number');
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    const otp = makeOtp();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    // Upsert: create user if doesn't exist, update OTP if does
    let user = await User.findOne({ phone: cleanPhone });
    if (!user) {
      user = new User({ phone: cleanPhone });
    }
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    console.log(`\n🔐 OTP for +91-${cleanPhone}: ${otp}  (valid 10 min)\n`);

    res.status(200).json({
      success: true,
      message: `OTP generated for +91-${cleanPhone}`,
      otp: process.env.NODE_ENV === 'development' ? otp : undefined,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify OTP & login/register
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOtp = async (req, res, next) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      res.status(400);
      throw new Error('Phone and OTP are required');
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    const user = await User.findOne({ phone: cleanPhone }).select('+otp +otpExpiry');
    if (!user) {
      res.status(404);
      throw new Error('No OTP request found for this number');
    }

    if (!user.otp || user.otp !== String(otp)) {
      res.status(401);
      throw new Error('Invalid OTP');
    }

    if (!user.otpExpiry || user.otpExpiry < new Date()) {
      res.status(401);
      throw new Error('OTP has expired. Please request a new one');
    }

    // Clear OTP after successful verification
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    const token = generateToken(res, user._id);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        addresses: user.addresses,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Register a new user (email/password - kept for admin)
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please fill all required fields');
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists with this email');
    }
    const userRole = ['admin', 'supplier'].includes(role) ? role : 'customer';
    const user = await User.create({ name, email, password, role: userRole });
    if (user) {
      const token = generateToken(res, user._id);
      res.status(201).json({
        success: true,
        message: 'Account registered successfully',
        token,
        user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Authenticate user & get token (email/password)
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('Please provide email and password');
    }
    const user = await User.findOne({ email }).select('+password');
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(res, user._id);
      res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        token,
        user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};

// @desc    Get current user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          avatar: user.avatar,
          addresses: user.addresses,
        },
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name   = req.body.name   || user.name;
      user.email  = req.body.email  || user.email;
      user.avatar = req.body.avatar || user.avatar;
      user.phone  = req.body.phone  || user.phone;
      if (req.body.password) user.password = req.body.password;
      if (req.body.addresses) user.addresses = req.body.addresses;
      const updatedUser = await user.save();
      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        user: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          role: updatedUser.role,
          avatar: updatedUser.avatar,
          addresses: updatedUser.addresses,
        },
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users (Admin only)
// @route   GET /api/auth/users
// @access  Private/Admin
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password -otp').sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  firebaseLogin,
  sendOtp,
  verifyOtp,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};
