const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const addressSchema = new mongoose.Schema({
  label: { type: String, default: 'Home' },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, default: 'India' },
  isDefault: { type: Boolean, default: false },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 50, default: '' },
    email: {
      type: String, unique: true, sparse: true,
      lowercase: true, trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
    },
    password: { type: String, minlength: 6, select: false },
    phone: { type: String, unique: true, sparse: true, trim: true },
    otp:       { type: String, select: false },
    otpExpiry: { type: Date,   select: false },
    role:   { type: String, enum: ['customer', 'admin', 'supplier'], default: 'customer' },
    avatar: { type: String, default: '' },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password') || !this.password) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
