import React, { useState, useEffect, useRef } from 'react';
import {
  X, Phone, ArrowRight, ChevronLeft, User, Package,
  Heart, MapPin, LogOut, Edit3, Check, RefreshCw, ShieldCheck,
  Mail, MessageCircle, Clock, Headphones,
  ChevronRight, Truck, RotateCcw, ArrowLeft, ShoppingBag,
  CheckCircle2, Sparkles, Calendar, Award,
  Plus, Minus, Tag, Lock, Trash2, Star, Menu, Printer, FileText
} from 'lucide-react';
import { apiSendOtp, apiVerifyOtp, apiUpdateProfile, apiLogout, apiFirebaseLogin, apiGetMyOrders, apiCancelMyOrder } from '../services/api';
import { auth } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

/* ─── social icons (SVG) ─── */
const Instagram = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Facebook = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.813C10.5 0 9 1.583 9 4.615V8z"/>
  </svg>
);

/* ─── Avatar Component ─── */
const Avatar = ({ name, size = 64 }) => {
  const initials = (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 800, color: '#fff', flexShrink: 0,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '3px solid rgba(255, 255, 255, 0.95)',
      letterSpacing: '0.02em',
    }}>
      {initials}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   FULL-SCREEN PROFILE & ACCOUNT PAGE
   ═══════════════════════════════════════════════ */
export default function ProfileModal({
  isOpen,
  onClose,
  onUserChange,
  initialTab = 'overview',
  wishlistItems = [],
  cartItems = [],
  onRemoveFromWishlist,
  onMoveToCart,
  onClearWishlist,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onSelectProduct,
}) {
  const [screen, setScreen] = useState('phone'); // 'phone' | 'otp' | 'dashboard'
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'orders' | 'wishlist' | 'cart' | 'edit' | 'addresses' | 'contact'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timer, setTimer] = useState(0);
  const [devOtp, setDevOtp] = useState('');
  const [user, setUser] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [gender, setGender] = useState('female');
  const [selectedOrderFilter, setSelectedOrderFilter] = useState('all');
  const [trackingModalOrder, setTrackingModalOrder] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [isRailCollapsed, setIsRailCollapsed] = useState(() => {
    try {
      localStorage.removeItem('ZYRIVO_account_rail');
    } catch {}
    return false;
  });
  const otpRefs = useRef([]);
  const mainContentRef = useRef(null);

  const toggleRail = () => {
    setIsRailCollapsed(prev => {
      const next = !prev;
      try { localStorage.setItem('ZYRIVO_account_rail', String(next)); } catch {}
      return next;
    });
  };

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discountPrice || item.price || 0;
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const discountSavings = cartItems.reduce((acc, item) => {
    if (item.discountPrice && item.price && item.price > item.discountPrice) {
      const diff = item.price - item.discountPrice;
      const qty = item.quantity || 1;
      return acc + diff * qty;
    }
    return acc;
  }, 0);

  const mrpTotal = subtotal + discountSavings;
  const couponDiscount = appliedCoupon
    ? (appliedCoupon === 'ROHIT400' ? 400 : (appliedCoupon === 'ZYRIVO100' ? 100 : 200))
    : 0;
  const totalPayable = Math.max(0, subtotal - couponDiscount);

  // Live orders state
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [cancellingOrderId, setCancellingOrderId] = useState(null);
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState(null);

  // Format order helper
  const formatOrder = (order) => {
    const rawId = order._id || '';
    const id = `#ZYR-${rawId.slice(-6).toUpperCase() || 'ORDER'}`;
    const date = new Date(order.createdAt || Date.now()).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const status = order.orderStatus || 'Processing';

    let statusColor = '#7c3aed';
    let statusBg = '#f5f3ff';
    if (status === 'Delivered') {
      statusColor = '#16a34a';
      statusBg = '#f0fdf4';
    } else if (status === 'Shipped' || status === 'In Transit') {
      statusColor = '#d97706';
      statusBg = '#fffbeb';
    } else if (status === 'Confirmed') {
      statusColor = '#0284c7';
      statusBg = '#f0f9ff';
    } else if (status === 'Cancelled') {
      statusColor = '#dc2626';
      statusBg = '#fef2f2';
    }

    const itemsText = (order.orderItems || [])
      .map(i => `${i.name}${i.size ? ` · Size ${i.size}` : ''}${i.quantity > 1 ? ` (x${i.quantity})` : ''}`)
      .join(', ') || 'Artisanal Ensemble';

    const price = formatINR(order.totalPrice || 0);

    const image = (order.orderItems && order.orderItems[0]?.image) ||
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop&q=80';

    const steps = [
      { label: 'Order Confirmed', date: date, done: true },
      {
        label: 'Processing & Quality Check',
        date: ['Confirmed', 'Shipped', 'Delivered'].includes(status) ? 'Completed' : (status === 'Cancelled' ? 'Terminated' : 'In Progress'),
        done: ['Confirmed', 'Shipped', 'Delivered'].includes(status),
      },
      {
        label: 'Shipped & In Transit',
        date: ['Shipped', 'Delivered'].includes(status) ? 'Dispatched' : (status === 'Cancelled' ? 'Cancelled' : 'Pending'),
        done: ['Shipped', 'Delivered'].includes(status),
      },
      {
        label: status === 'Cancelled' ? 'Order Cancelled' : 'Out for Delivery & Delivered',
        date: status === 'Delivered' ? 'Delivered' : (status === 'Cancelled' ? 'Cancelled' : 'Estimated in 3-4 Days'),
        done: status === 'Delivered',
      },
    ];

    const eta = status === 'Delivered'
      ? `Delivered on ${date}`
      : status === 'Cancelled'
      ? 'Order was cancelled'
      : `Estimated delivery by ${new Date(Date.now() + 4 * 86400000).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}`;

    return {
      _id: rawId,
      id,
      date,
      status,
      statusColor,
      statusBg,
      items: itemsText,
      price,
      rawPrice: order.totalPrice || 0,
      image,
      carrier: 'ZYRIVO Express Logistics · Doorstep Delivery',
      eta,
      steps,
      paymentMethod: order.paymentMethod || 'COD',
      shippingAddress: order.shippingAddress,
      orderItems: order.orderItems || [],
      canCancel: status === 'Processing' || status === 'Confirmed',
    };
  };

  // Fetch orders from API + local storage merge
  const fetchOrders = async () => {
    setOrdersLoading(true);
    try {
      const res = await apiGetMyOrders();
      let serverOrders = (res && res.orders) || [];

      let localOrders = [];
      try {
        const cached = localStorage.getItem('ZYRIVO_local_orders');
        if (cached) localOrders = JSON.parse(cached);
      } catch {}

      const mergedMap = new Map();
      serverOrders.forEach(o => {
        if (o._id) mergedMap.set(o._id, o);
      });
      localOrders.forEach(o => {
        if (o._id && !mergedMap.has(o._id)) mergedMap.set(o._id, o);
      });

      const allMerged = Array.from(mergedMap.values()).sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );

      const formatted = allMerged.map(formatOrder);
      setOrders(formatted);
    } catch (err) {
      console.warn('Could not fetch server orders, loading local cache:', err);
      try {
        const cached = localStorage.getItem('ZYRIVO_local_orders');
        if (cached) {
          const parsed = JSON.parse(cached);
          setOrders(parsed.map(formatOrder));
        }
      } catch {}
    } finally {
      setOrdersLoading(false);
    }
  };

  // Cancel order handler
  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;
    setCancellingOrderId(orderId);
    try {
      const res = await apiCancelMyOrder(orderId);
      if (res && res.success) {
        setOrders(prev =>
          prev.map(o => {
            if (o._id === orderId) {
              return {
                ...o,
                status: 'Cancelled',
                statusColor: '#dc2626',
                statusBg: '#fef2f2',
                canCancel: false,
                eta: 'Order was cancelled',
                steps: o.steps.map((st, i) => i === 3 ? { ...st, label: 'Order Cancelled', date: 'Cancelled', done: false } : st),
              };
            }
            return o;
          })
        );
        try {
          const cached = JSON.parse(localStorage.getItem('ZYRIVO_local_orders') || '[]');
          const updated = cached.map(o => o._id === orderId ? { ...o, orderStatus: 'Cancelled' } : o);
          localStorage.setItem('ZYRIVO_local_orders', JSON.stringify(updated));
        } catch {}
      } else {
        setOrders(prev =>
          prev.map(o => o._id === orderId ? { ...o, status: 'Cancelled', canCancel: false, eta: 'Order was cancelled' } : o)
        );
        try {
          const cached = JSON.parse(localStorage.getItem('ZYRIVO_local_orders') || '[]');
          const updated = cached.map(o => o._id === orderId ? { ...o, orderStatus: 'Cancelled' } : o);
          localStorage.setItem('ZYRIVO_local_orders', JSON.stringify(updated));
        } catch {}
      }
    } catch (err) {
      console.error('Cancel order error:', err);
    } finally {
      setCancellingOrderId(null);
    }
  };

  // Reorder handler
  const handleReorder = (order) => {
    if (!order.orderItems || order.orderItems.length === 0) return;
    order.orderItems.forEach(item => {
      if (onMoveToCart) {
        onMoveToCart({
          _id: item.product || item._id,
          name: item.name,
          price: item.price,
          discountPrice: item.price,
          images: [item.image],
          selectedSize: item.size || 'M',
        });
      }
    });
    setActiveTab('cart');
  };

  // Live Saved Addresses
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem('ZYRIVO_user_addresses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Clear old hardcoded dummy address if it was cached
          const cleaned = parsed.filter(a => a.id !== 'addr-1' && a.street !== 'Flat 402, High Street Towers, Bandra West' && a.addressLine !== 'Flat 402, High Street Towers, Bandra West');
          if (cleaned.length !== parsed.length) {
            localStorage.setItem('ZYRIVO_user_addresses', JSON.stringify(cleaned));
          }
          return cleaned;
        }
      }
    } catch {}
    return [];
  });
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddr, setNewAddr] = useState({ tag: 'Home', name: '', phone: '', addressLine: '', city: '', state: '', pincode: '' });

  // Escape key closes full-screen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Load user from localStorage on mount or open
  useEffect(() => {
    const saved = localStorage.getItem('ZYRIVO_user');
    const token = localStorage.getItem('ZYRIVO_token');
    if (saved && token) {
      try {
        const u = JSON.parse(saved);
        setUser(u);
        setEditName(u.name || '');
        setEditEmail(u.email || '');
        setEditPhone(u.phone || '');
        setScreen('dashboard');
        if (u.addresses && Array.isArray(u.addresses) && u.addresses.length > 0) {
          setAddresses(
            u.addresses.map((a, i) => ({
              id: a._id || `addr-${i}`,
              isDefault: a.isDefault || i === 0,
              tag: a.label || a.tag || 'Home',
              name: a.name || u.name || 'Customer',
              phone: a.phone || u.phone || '',
              addressLine: a.street || a.addressLine || '',
              city: a.city || '',
              state: a.state || 'Maharashtra',
              pincode: a.postalCode || a.pincode || '',
            }))
          );
        }
      } catch {}
    } else {
      setUser(null);
      setScreen('phone');
    }
  }, [isOpen]);

  // Fetch live orders whenever modal is open or activeTab changes
  useEffect(() => {
    if (isOpen && (screen === 'dashboard' || user)) {
      fetchOrders();
    }
  }, [isOpen, screen, user, activeTab]);

  // Sync edit profile form fields whenever activeTab is edit or user updates
  useEffect(() => {
    if (user && activeTab === 'edit') {
      if (!editName && user.name) setEditName(user.name);
      if (!editEmail && user.email) setEditEmail(user.email);
      if (!editPhone && user.phone) setEditPhone(user.phone);
    }
  }, [activeTab, user]);

  // Handle external tab selection (e.g. from navbar "Orders" or "Contact Us")
  useEffect(() => {
    if (initialTab) {
      if (['orders', 'contact', 'edit', 'addresses', 'overview', 'cart', 'wishlist'].includes(initialTab)) {
        setActiveTab(initialTab);
      }
    }
  }, [initialTab, isOpen]);

  // OTP countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer(prev => prev - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  // Recaptcha verifier for Firebase
  const getRecaptchaVerifier = () => {
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
      } catch {
        // ignore
      }
      window.recaptchaVerifier = null;
    }
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {},
      'expired-callback': () => {
        if (window.recaptchaVerifier) {
          try { window.recaptchaVerifier.clear(); } catch {}
          window.recaptchaVerifier = null;
        }
      }
    });
    return window.recaptchaVerifier;
  };

  /* ── Send OTP (Firebase Phone Auth) ── */
  const handleSendOtp = async () => {
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // 1. Send SMS via Firebase Phone Auth
      const appVerifier = getRecaptchaVerifier();
      const confirmation = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
      window.confirmationResult = confirmation;
      setScreen('otp');
      setTimer(60);
    } catch (fbErr) {
      console.warn('Firebase OTP attempt:', fbErr);
      if (fbErr?.code === 'auth/invalid-phone-number') {
        setError('Invalid phone number format.');
      } else if (fbErr?.code === 'auth/too-many-requests') {
        setError('Too many requests. Please try again after some time.');
      } else if (fbErr?.code === 'auth/billing-not-enabled') {
        setError('Firebase phone auth billing / quota limit reached.');
      } else {
        // Fallback to local dev OTP endpoint if Firebase config is still using default credentials
        try {
          const data = await apiSendOtp(phone);
          if (data.success) {
            if (data.otp) setDevOtp(data.otp);
            setScreen('otp');
            setTimer(60);
          } else {
            setError(data.message || fbErr.message || 'Failed to send OTP');
          }
        } catch {
          setError(fbErr.message || 'Failed to send OTP. Please check your Firebase settings.');
        }
      }
    }
    setLoading(false);
  };

  /* ── Verify OTP (Firebase Confirmation + ZYRIVO DB Sync) ── */
  const handleVerifyOtp = async () => {
    const otpStr = otp.join('');
    if (otpStr.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }
    setLoading(true);
    setError('');
    try {
      if (window.confirmationResult) {
        // Confirm OTP with Firebase
        await window.confirmationResult.confirm(otpStr);
        // Login / create user in MongoDB
        const data = await apiFirebaseLogin(phone);
        if (data.success && data.token) {
          localStorage.setItem('ZYRIVO_token', data.token);
          localStorage.setItem('ZYRIVO_user', JSON.stringify(data.user));
          setUser(data.user);
          setEditName(data.user.name || '');
          setEditEmail(data.user.email || '');
          setEditPhone(data.user.phone || phone || '');
          if (onUserChange) onUserChange(data.user);
          setScreen('dashboard');
          setActiveTab(initialTab === 'phone' ? 'overview' : (initialTab || 'overview'));
          setSuccess('Welcome to your ZYRIVO Profile!');
        } else {
          setError(data.message || 'Failed to login with Firebase.');
        }
      } else {
        // Dev fallback verification
        const data = await apiVerifyOtp(phone, otpStr);
        if (data.success && data.token) {
          localStorage.setItem('ZYRIVO_token', data.token);
          localStorage.setItem('ZYRIVO_user', JSON.stringify(data.user));
          setUser(data.user);
          setEditName(data.user.name || '');
          setEditEmail(data.user.email || '');
          setEditPhone(data.user.phone || '');
          if (onUserChange) onUserChange(data.user);
          setScreen('dashboard');
          setActiveTab(initialTab === 'phone' ? 'overview' : (initialTab || 'overview'));
          setSuccess('Welcome to your ZYRIVO Profile!');
        } else {
          setError(data.message || 'Invalid OTP. Please try again.');
        }
      }
    } catch (err) {
      console.error('Verify error:', err);
      if (err?.code === 'auth/invalid-verification-code') {
        setError('Incorrect OTP. Please enter the valid 6-digit code received.');
      } else if (err?.code === 'auth/code-expired') {
        setError('OTP has expired. Please request a new one.');
      } else {
        setError(err.message || 'Verification failed. Please try again.');
      }
    }
    setLoading(false);
  };

  /* ── OTP input keyboard handler ── */
  const handleOtpChange = (val, idx) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const updated = [...otp];
    updated[idx] = digit;
    setOtp(updated);
    if (digit && idx < 5) {
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOtpKey = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  /* ── Update Profile ── */
  const handleUpdateProfile = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const data = await apiUpdateProfile({ name: editName, email: editEmail, phone: editPhone });
      if (data.success && data.user) {
        localStorage.setItem('ZYRIVO_user', JSON.stringify(data.user));
        setUser(data.user);
        setEditPhone(data.user.phone || editPhone);
        if (onUserChange) onUserChange(data.user);
        setSuccess('Profile updated successfully!');
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  /* ── Logout ── */
  const handleLogout = async () => {
    try {
      await apiLogout();
    } catch {}
    setUser(null);
    setPhone('');
    setOtp(['', '', '', '', '', '']);
    setScreen('phone');
    setActiveTab('overview');
    if (onUserChange) onUserChange(null);
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    if (!newAddr.addressLine || !newAddr.city || !newAddr.pincode) {
      alert('Please fill the required address details.');
      return;
    }
    const created = {
      id: `addr-${Date.now()}`,
      isDefault: addresses.length === 0,
      tag: newAddr.tag || 'Home',
      name: newAddr.name || user?.name || 'Customer',
      phone: newAddr.phone || user?.phone || '9876543210',
      addressLine: newAddr.addressLine,
      city: newAddr.city,
      state: newAddr.state || 'Maharashtra',
      pincode: newAddr.pincode,
    };
    const updated = [created, ...addresses];
    setAddresses(updated);
    setIsAddingAddress(false);
    setNewAddr({ tag: 'Home', name: '', phone: '', addressLine: '', city: '', state: '', pincode: '' });

    try {
      localStorage.setItem('ZYRIVO_user_addresses', JSON.stringify(updated));
      const backendAddresses = updated.map(a => ({
        label: a.tag,
        street: a.addressLine,
        city: a.city,
        state: a.state,
        postalCode: a.pincode,
        isDefault: a.isDefault,
      }));
      const res = await apiUpdateProfile({ addresses: backendAddresses });
      if (res?.success && res.user && onUserChange) {
        onUserChange(res.user);
      }
    } catch (err) {
      console.warn('Address sync error:', err);
    }
  };

  const handleDeleteAddress = async (addrId) => {
    const updated = addresses.filter(a => a.id !== addrId);
    setAddresses(updated);
    try {
      localStorage.setItem('ZYRIVO_user_addresses', JSON.stringify(updated));
      const backendAddresses = updated.map(a => ({
        label: a.tag,
        street: a.addressLine,
        city: a.city,
        state: a.state,
        postalCode: a.pincode,
        isDefault: a.isDefault,
      }));
      const res = await apiUpdateProfile({ addresses: backendAddresses });
      if (res?.success && res.user && onUserChange) {
        onUserChange(res.user);
      }
    } catch (err) {
      console.warn('Address sync error:', err);
    }
  };

  const handleSetDefaultAddress = async (addrId) => {
    const updated = addresses.map(a => ({
      ...a,
      isDefault: a.id === addrId,
    }));
    setAddresses(updated);
    try {
      localStorage.setItem('ZYRIVO_user_addresses', JSON.stringify(updated));
      const backendAddresses = updated.map(a => ({
        label: a.tag,
        street: a.addressLine,
        city: a.city,
        state: a.state,
        postalCode: a.pincode,
        isDefault: a.isDefault,
      }));
      const res = await apiUpdateProfile({ addresses: backendAddresses });
      if (res?.success && res.user && onUserChange) {
        onUserChange(res.user);
      }
    } catch (err) {
      console.warn('Address sync error:', err);
    }
  };

  if (!isOpen || !user) return null;

  const filteredOrders = selectedOrderFilter === 'all'
    ? orders
    : orders.filter(o => o.status.toLowerCase().replace(' ', '') === selectedOrderFilter.toLowerCase().replace(' ', ''));

  return (
    <div className="w-full min-h-[calc(100vh-115px)] bg-[#f8fafc] flex flex-col md:flex-row font-sans selection:bg-stone-900 selection:text-white animate-in fade-in duration-150">

      {/* ─────────────────────────────────────────────────────────────
          SIDEBAR NAVIGATION (Desktop: Clean Expanded Sidebar / Collapsible)
         ───────────────────────────────────────────────────────────── */}
      <aside
        className={`hidden md:flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out shrink-0 min-h-[calc(100vh-140px)] sticky top-[140px] self-start z-10 overflow-y-auto no-scrollbar justify-between ${
          isRailCollapsed
            ? 'w-18 p-2.5'
            : 'w-60 lg:w-64 p-4'
        }`}
      >
        <div>
          {/* Header with 3-line Menu (Open) / X (Close) Toggle */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
            {!isRailCollapsed ? (
              <>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">
                  Account Menu
                </span>
                <button
                  type="button"
                  onClick={toggleRail}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
                  title="Close sidebar (X)"
                  aria-label="Close sidebar"
                >
                  <X size={18} />
                </button>
              </>
            ) : (
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  onClick={toggleRail}
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center"
                  title="Open sidebar (Menu)"
                  aria-label="Open sidebar"
                >
                  <Menu size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            {[
              { id: 'overview',   label: 'Account Overview', icon: User,        badge: null },
              { id: 'orders',     label: 'My Orders',        icon: Package,     badge: orders.length },
              { id: 'wishlist',   label: 'My Wishlist',      icon: Heart,       badge: wishlistItems.length },
              { id: 'cart',       label: 'Shopping Bag',     icon: ShoppingBag, badge: totalCartCount },
              { id: 'edit',       label: 'Personal Details', icon: Edit3,       badge: null },
              { id: 'addresses',  label: 'Saved Addresses',  icon: MapPin,      badge: addresses.length },
              { id: 'contact',    label: 'Help & 24x7 Care', icon: Headphones,  badge: null },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              if (isRailCollapsed) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(item.id);
                      setSuccess('');
                      setError('');
                    }}
                    className={`w-full flex items-center justify-center py-2.5 rounded-xl transition cursor-pointer relative group ${
                      isActive
                        ? 'bg-purple-50 text-[#9f2089] shadow-2xs font-bold'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium'
                    }`}
                    title={item.label}
                  >
                    <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-[#9f2089]' : 'text-gray-400 group-hover:text-gray-700'}`} />
                    {item.badge !== null && item.badge !== undefined && item.badge > 0 && (
                      <span className="absolute top-1.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
                    )}

                    {/* Tooltip on hover */}
                    <div className="hidden md:group-hover:flex absolute left-full ml-2.5 px-2.5 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none items-center gap-1.5">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-white/20 px-1 py-0.2 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setSuccess('');
                    setError('');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-purple-50 text-[#9f2089] border border-purple-200/80 shadow-2xs font-bold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={16} className={isActive ? 'text-[#9f2089]' : 'text-gray-400'} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                  {item.badge !== null && item.badge !== undefined && item.badge > 0 && (
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white text-[#9f2089] border border-purple-200 shadow-2xs' : 'bg-rose-500 text-white shadow-2xs'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Log Out Button */}
        <div className="pt-3 mt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={handleLogout}
            className={`w-full flex items-center ${
              isRailCollapsed ? 'justify-center p-2' : 'gap-2.5 px-3 py-2'
            } rounded-xl text-xs sm:text-sm font-semibold text-rose-600 hover:bg-rose-50 transition cursor-pointer`}
            title="Log Out"
          >
            <LogOut size={16} />
            {!isRailCollapsed && <span className="whitespace-nowrap">Log Out</span>}
          </button>
        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          MAIN WORKSPACE PANEL (Full Width, Natural Flex Sibling)
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-7 space-y-5 pb-20 md:pb-8">

                {/* Notifications Banner */}
                {success && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      {success}
                    </span>
                    <button onClick={() => setSuccess('')} className="text-emerald-500 hover:text-emerald-800 cursor-pointer">
                      <X size={14} />
                    </button>
                  </div>
                )}

                {error && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <X size={16} className="text-rose-600" />
                      {error}
                    </span>
                    <button onClick={() => setError('')} className="text-rose-500 hover:text-rose-800 cursor-pointer">
                      <X size={14} />
                    </button>
                  </div>
                )}

                {/* ── TAB 1: OVERVIEW ── */}
                {activeTab === 'overview' && (
                  <div className="space-y-5 animate-in fade-in duration-150">
                    {/* Stats Highlights with Clean Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-4">
                        <Package size={24} strokeWidth={1.5} className="text-gray-400 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Total Orders</p>
                          <p className="text-lg sm:text-xl font-bold text-gray-900">{orders.length} Placed</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-4">
                        <Truck size={24} strokeWidth={1.5} className="text-gray-400 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Active Shipments</p>
                          <p className="text-lg sm:text-xl font-bold text-gray-900">
                            {orders.filter(o => ['Processing', 'In Transit', 'Shipped', 'Confirmed'].includes(o.status)).length} In Transit
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-4">
                        <Award size={24} strokeWidth={1.5} className="text-gray-400 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Privilege Points</p>
                          <p className="text-lg sm:text-xl font-bold text-gray-900">
                            {orders.length * 50 + 150} Pts
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Active Order Spotlight */}
                    {(() => {
                      const latestOrder = orders.find(o => o.status !== 'Delivered' && o.status !== 'Cancelled') || orders[0];
                      if (!latestOrder) {
                        return (
                          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3 shadow-2xs">
                            <Package size={40} className="text-stone-300 mx-auto" />
                            <h4 className="text-base font-bold text-gray-900">No Orders Placed Yet</h4>
                            <p className="text-xs text-gray-500 max-w-sm mx-auto">
                              Explore our exquisite festive and couture collections. Once ordered, your shipments appear here in real time.
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                if (onClose) onClose();
                              }}
                              className="mt-1 px-5 py-2.5 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer"
                            >
                              Explore Catalog
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-2xs">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-base font-bold text-gray-900">Latest Active Order</h3>
                              <p className="text-xs text-gray-500">Track current shipment and delivery updates</p>
                            </div>
                            <button
                              onClick={() => setActiveTab('orders')}
                              className="text-xs font-semibold text-stone-700 hover:text-black flex items-center gap-1 cursor-pointer"
                            >
                              View All Orders ({orders.length}) <ChevronRight size={14} />
                            </button>
                          </div>

                          <div className="p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <img
                                src={latestOrder.image}
                                alt="Order item"
                                className="w-16 h-16 rounded-xl object-cover border border-gray-200 shrink-0"
                              />
                              <div>
                                <span
                                  className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mb-1"
                                  style={{ color: latestOrder.statusColor, backgroundColor: latestOrder.statusBg }}
                                >
                                  {latestOrder.status}
                                </span>
                                <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{latestOrder.items}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{latestOrder.eta}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 self-end md:self-center">
                              <button
                                onClick={() => setTrackingModalOrder(latestOrder)}
                                className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs"
                              >
                                Live Tracking
                              </button>
                              {latestOrder.canCancel && (
                                <button
                                  disabled={cancellingOrderId === latestOrder._id}
                                  onClick={() => handleCancelOrder(latestOrder._id)}
                                  className="px-3.5 py-2 border border-rose-200 hover:bg-rose-50 text-rose-700 rounded-xl text-xs font-bold transition cursor-pointer disabled:opacity-50"
                                >
                                  {cancellingOrderId === latestOrder._id ? 'Cancelling...' : 'Cancel Order'}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Quick Support & Help Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Need assistance with your account or orders?</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Our 24x7 customer concierge is ready to help via WhatsApp or Call.</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs shrink-0"
                      >
                        Contact Concierge
                      </button>
                    </div>
                  </div>
                )}

                {/* ── TAB 2: MY ORDERS ── */}
                {activeTab === 'orders' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-5 animate-in fade-in duration-150">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Purchase History & Orders ({orders.length})</h2>
                        <p className="text-xs text-gray-500">Track shipments, cancel active bookings, re-order, or download tax invoices</p>
                      </div>

                      {/* Filter Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 border border-gray-200 p-1 rounded-xl text-xs font-semibold">
                        {[
                          { id: 'all', label: 'All' },
                          { id: 'processing', label: 'Processing' },
                          { id: 'intransit', label: 'In Transit' },
                          { id: 'delivered', label: 'Delivered' },
                          { id: 'cancelled', label: 'Cancelled' },
                        ].map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setSelectedOrderFilter(tab.id)}
                            className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                              selectedOrderFilter === tab.id
                                ? 'bg-stone-900 text-white font-semibold shadow-2xs'
                                : 'text-gray-500 hover:text-gray-800'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {ordersLoading ? (
                      <div className="py-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-stone-800 border-t-transparent rounded-full animate-spin" />
                        Loading orders...
                      </div>
                    ) : filteredOrders.length === 0 ? (
                      <div className="text-center py-12 space-y-3">
                        <Package size={44} className="text-stone-300 stroke-1 mx-auto" />
                        <h3 className="text-base font-bold text-gray-900">No Orders Found</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">
                          {selectedOrderFilter === 'all'
                            ? "You haven't placed any orders yet. Discover our artisanal festive collection and place your first order!"
                            : `No orders found matching "${selectedOrderFilter}".`}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            if (onClose) onClose();
                          }}
                          className="mt-2 px-6 py-2.5 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold uppercase transition cursor-pointer"
                        >
                          Start Shopping
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredOrders.map(order => (
                          <div
                            key={order.id || order._id}
                            className="border border-gray-200 rounded-2xl p-5 hover:border-stone-400 transition shadow-2xs bg-white"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-900">{order.id}</span>
                                <span className="text-xs text-gray-400">• Placed on {order.date}</span>
                              </div>
                              <span
                                className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md"
                                style={{ color: order.statusColor, backgroundColor: order.statusBg }}
                              >
                                {order.status}
                              </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                              <img
                                src={order.image}
                                alt="product"
                                className="w-20 h-20 rounded-xl object-cover border border-gray-200 shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{order.items}</h4>
                                <p className="text-xs text-gray-500 mt-1">{order.carrier}</p>
                                <p className="text-xs font-semibold text-emerald-700 mt-0.5">{order.eta}</p>
                              </div>
                              <div className="text-right sm:self-center shrink-0">
                                <p className="text-lg font-black text-gray-900">{order.price}</p>
                                <span className="text-[10px] text-gray-400">
                                  {order.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Prepaid Online'}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
                              <button
                                onClick={() => setTrackingModalOrder(order)}
                                className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-lg text-xs font-bold transition cursor-pointer"
                              >
                                Track Shipment
                              </button>

                              {order.canCancel && (
                                <button
                                  disabled={cancellingOrderId === order._id}
                                  onClick={() => handleCancelOrder(order._id)}
                                  className="px-3.5 py-1.5 border border-rose-200 hover:bg-rose-50 text-rose-700 rounded-lg text-xs font-bold transition cursor-pointer disabled:opacity-50"
                                >
                                  {cancellingOrderId === order._id ? 'Cancelling...' : 'Cancel Order'}
                                </button>
                              )}

                              <button
                                onClick={() => handleReorder(order)}
                                className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1"
                              >
                                <ShoppingBag size={12} /> Buy Again
                              </button>

                              {order.status === 'Delivered' && (
                                <button
                                  onClick={() => alert(`Return window is active for order ${order.id}. Courier pickup will be scheduled within 24 hours.`)}
                                  className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-50 text-stone-900 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1"
                                >
                                  <RotateCcw size={12} /> Return Item
                                </button>
                              )}

                              <button
                                onClick={() => setSelectedInvoiceOrder(order)}
                                className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                              >
                                <FileText size={12} /> Invoice PDF
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ── TAB 3: EDIT PERSONAL DETAILS ── */}
                {activeTab === 'edit' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs animate-in fade-in duration-150">
                    <div className="border-b border-gray-100 pb-4 mb-6">
                      <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                      <p className="text-xs text-gray-500">Manage your profile details, contact email and preferences</p>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-5 max-w-2xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            placeholder="e.g. Priya Sharma"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                            placeholder="e.g. priya@gmail.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                            Mobile Number (Primary)
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-sm text-gray-500 font-semibold pointer-events-none select-none">
                              🇮🇳 +91
                            </span>
                            <input
                              type="tel"
                              maxLength={10}
                              value={editPhone}
                              onChange={(e) => setEditPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              placeholder="Enter 10-digit number"
                              className="w-full pl-[72px] pr-20 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 bg-white transition"
                              required
                            />
                            <span className="absolute right-3 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 select-none">
                              Verified
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                            Gender
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stone-900"
                          >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Prefer not to say</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="px-6 py-3 bg-stone-900 hover:bg-black text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer flex items-center gap-2 disabled:opacity-50"
                        >
                          {loading ? 'Saving Updates...' : <><Check size={16} /> Save Changes</>}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* ── TAB 4: SAVED ADDRESSES ── */}
                {activeTab === 'addresses' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-6 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Delivery Addresses</h2>
                        <p className="text-xs text-gray-500">Manage saved destinations for seamless 1-click checkout</p>
                      </div>
                      <button
                        onClick={() => setIsAddingAddress(!isAddingAddress)}
                        className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                      >
                        {isAddingAddress ? 'Cancel' : '+ Add New Address'}
                      </button>
                    </div>

                    {/* Add Address Form */}
                    {isAddingAddress && (
                      <form onSubmit={handleSaveAddress} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                        <h3 className="text-sm font-bold text-stone-900">New Shipping Destination</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="Recipient Name"
                            value={newAddr.name}
                            onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                            required
                          />
                          <input
                            type="tel"
                            placeholder="10-digit Phone"
                            value={newAddr.phone}
                            onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                            required
                          />
                          <select
                            value={newAddr.tag}
                            onChange={(e) => setNewAddr({ ...newAddr, tag: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                          >
                            <option value="Home">Home</option>
                            <option value="Office">Office / Work</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          placeholder="Flat, House no., Building, Street address"
                          value={newAddr.addressLine}
                          onChange={(e) => setNewAddr({ ...newAddr, addressLine: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                          required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="City"
                            value={newAddr.city}
                            onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                            required
                          />
                          <input
                            type="text"
                            placeholder="State"
                            value={newAddr.state}
                            onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                            required
                          />
                          <input
                            type="text"
                            placeholder="6-digit PIN Code"
                            value={newAddr.pincode}
                            onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Save Address
                        </button>
                      </form>
                    )}

                    {addresses.length === 0 ? (
                      <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-stone-50/50 space-y-3">
                        <MapPin size={40} strokeWidth={1.5} className="mx-auto text-stone-400" />
                        <h3 className="text-sm font-bold text-gray-900">No Saved Delivery Addresses</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">
                          Aapke account me abhi koi saved address nahi hai. 1-click checkout ke liye naya address add karein.
                        </p>
                        <button
                          type="button"
                          onClick={() => setIsAddingAddress(true)}
                          className="mt-1 px-5 py-2.5 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          + Add Your Delivery Address
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {addresses.map(addr => (
                          <div
                            key={addr.id}
                            className="p-5 rounded-2xl border border-gray-200 hover:border-stone-400 transition relative bg-white shadow-2xs space-y-2 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
                                  {addr.tag}
                                </span>
                                {addr.isDefault ? (
                                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                    Default Address
                                  </span>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => handleSetDefaultAddress(addr.id)}
                                    className="text-[11px] text-gray-500 hover:text-stone-900 underline cursor-pointer"
                                  >
                                    Set as Default
                                  </button>
                                )}
                              </div>
                              <p className="text-sm font-bold text-gray-900 mt-2">{addr.name}</p>
                              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                                {addr.addressLine}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                              </p>
                              <p className="text-xs text-gray-500 font-medium mt-1">📱 {addr.phone}</p>
                            </div>

                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-[11px] text-emerald-600 font-semibold">Verified Destination</span>
                              <button
                                type="button"
                                onClick={() => handleDeleteAddress(addr.id)}
                                className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                <Trash2 size={12} /> Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ── TAB 5: HELP & CONTACT US ── */}
                {activeTab === 'contact' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-150">
                    <div className="border-b border-gray-100 pb-4">
                      <h2 className="text-lg font-bold text-gray-900">ZYRIVO Concierge & Support</h2>
                      <p className="text-xs text-gray-500">We are dedicated to making your luxury fashion experience seamless</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noreferrer"
                        className="p-6 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group bg-white shadow-2xs hover:shadow-xs block"
                      >
                        <MessageCircle size={24} strokeWidth={1.5} className="text-gray-400 mb-3 group-hover:text-gray-700 transition-colors" />
                        <h4 className="text-sm font-bold text-gray-900">WhatsApp Chat</h4>
                        <p className="text-xs text-gray-500 mt-1">Instant replies in ~5 mins</p>
                        <p className="text-xs font-semibold text-gray-900 mt-3">+91 98765 43210</p>
                      </a>

                      <a
                        href="tel:+919876543210"
                        className="p-6 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group bg-white shadow-2xs hover:shadow-xs block"
                      >
                        <Phone size={24} strokeWidth={1.5} className="text-gray-400 mb-3 group-hover:text-gray-700 transition-colors" />
                        <h4 className="text-sm font-bold text-gray-900">Priority Helpline</h4>
                        <p className="text-xs text-gray-500 mt-1">Mon–Sat, 9AM – 7PM IST</p>
                        <p className="text-xs font-semibold text-gray-900 mt-3">1800-ZYRIVO (Free)</p>
                      </a>

                      <a
                        href="mailto:care@zyrivo.in"
                        className="p-6 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group bg-white shadow-2xs hover:shadow-xs block"
                      >
                        <Mail size={24} strokeWidth={1.5} className="text-gray-400 mb-3 group-hover:text-gray-700 transition-colors" />
                        <h4 className="text-sm font-bold text-gray-900">Email Concierge</h4>
                        <p className="text-xs text-gray-500 mt-1">Detailed resolutions & order queries</p>
                        <p className="text-xs font-semibold text-gray-900 mt-3">care@zyrivo.in</p>
                      </a>
                    </div>
                  </div>
                )}

                {/* ── TAB 6: MY WISHLIST ── */}
                {activeTab === 'wishlist' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-6 animate-in fade-in duration-150">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                          <Heart size={18} className="text-rose-500 fill-rose-500" />
                          <span>My Wishlist ({wishlistItems.length})</span>
                        </h2>
                        <p className="text-xs text-gray-500 mt-0.5">Your saved fashion pieces and curated wishlist</p>
                      </div>

                      {wishlistItems.length > 0 && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              wishlistItems.forEach(item => onMoveToCart && onMoveToCart(item));
                              setSuccess('All saved items moved to Shopping Bag!');
                            }}
                            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5"
                          >
                            <ShoppingBag size={14} /> Move All to Bag
                          </button>
                          {onClearWishlist && (
                            <button
                              type="button"
                              onClick={onClearWishlist}
                              className="px-3 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-xs font-semibold transition cursor-pointer"
                            >
                              Clear All
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {wishlistItems.length === 0 ? (
                      <div className="text-center py-12 space-y-3">
                        <Heart size={44} className="text-rose-400 stroke-1 mx-auto mb-2" />
                        <h3 className="text-base font-bold text-gray-900">Your Wishlist is Empty</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">
                          Tap the heart icon on any product to save it here for later.
                        </p>
                        <button
                          type="button"
                          onClick={onClose}
                          className="mt-2 px-6 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-bold uppercase rounded-xl cursor-pointer"
                        >
                          Explore Collections
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {wishlistItems.map(item => {
                          const itemImage =
                            item.images && item.images.length > 0
                              ? typeof item.images[0] === 'string'
                                ? item.images[0]
                                : item.images[0].url
                              : 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800';

                          const price = item.discountPrice || item.price || 0;
                          const origPrice = item.discountPrice && item.price > item.discountPrice ? item.price : null;
                          const discountPct = origPrice ? Math.round(((origPrice - price) / origPrice) * 100) : 0;

                          return (
                            <div
                              key={item._id}
                              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-stone-400 transition-all flex flex-col group bg-white shadow-2xs"
                            >
                              <div
                                onClick={() => {
                                  if (onSelectProduct) {
                                    onSelectProduct(item);
                                    onClose();
                                  }
                                }}
                                className="relative aspect-3/4 w-full overflow-hidden bg-gray-100 cursor-pointer"
                              >
                                <img
                                  src={itemImage}
                                  alt={item.name}
                                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                                />
                                {discountPct > 0 && (
                                  <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs">
                                    {discountPct}% OFF
                                  </span>
                                )}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (onRemoveFromWishlist) onRemoveFromWishlist(item._id);
                                  }}
                                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-rose-50 text-gray-400 hover:text-rose-600 flex items-center justify-center transition cursor-pointer shadow-2xs"
                                  title="Remove"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>

                              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                                <div>
                                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{item.brand || 'ZYRIVO LUXE'}</p>
                                  <h4
                                    onClick={() => {
                                      if (onSelectProduct) {
                                        onSelectProduct(item);
                                        onClose();
                                      }
                                    }}
                                    className="text-xs font-bold text-gray-900 line-clamp-1 hover:text-stone-700 cursor-pointer transition mt-0.5"
                                  >
                                    {item.name}
                                  </h4>

                                  <div className="flex items-baseline gap-2 mt-1.5">
                                    <span className="text-sm font-extrabold text-gray-950">{formatINR(price)}</span>
                                    {origPrice && <span className="text-[11px] text-gray-400 line-through">{formatINR(origPrice)}</span>}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => {
                                    if (onMoveToCart) onMoveToCart(item);
                                    setSuccess(`Moved "${item.name}" to Shopping Bag`);
                                  }}
                                  className="w-full py-2 bg-stone-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                                >
                                  <ShoppingBag size={13} />
                                  <span>Move to Bag</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* ── TAB 7: SHOPPING BAG / CART ── */}
                {activeTab === 'cart' && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-6 animate-in fade-in duration-150">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                          <ShoppingBag size={18} className="text-stone-900" />
                          <span>Shopping Bag ({totalCartCount})</span>
                        </h2>
                        <p className="text-xs text-gray-500 mt-0.5">Complimentary Express Delivery & 7-Day Doorstep Returns</p>
                      </div>

                      {cartItems.length > 0 && onClearCart && (
                        <button
                          type="button"
                          onClick={onClearCart}
                          className="px-3 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-xs font-semibold transition cursor-pointer self-start sm:self-auto"
                        >
                          Clear Bag
                        </button>
                      )}
                    </div>

                    {cartItems.length === 0 ? (
                      <div className="text-center py-12 space-y-3">
                        <ShoppingBag size={44} className="text-stone-400 stroke-1 mx-auto mb-2" />
                        <h3 className="text-base font-bold text-gray-900">Your Shopping Bag is Empty</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">
                          Add outfits to your bag to enjoy exclusive member discounts and free express shipping.
                        </p>
                        <button
                          type="button"
                          onClick={onClose}
                          className="mt-2 px-6 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-bold uppercase rounded-xl cursor-pointer"
                        >
                          Start Shopping
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Cart items list */}
                        <div className="lg:col-span-7 space-y-3">
                          {cartItems.map((item) => {
                            const itemImage =
                              item.images && item.images.length > 0
                                ? typeof item.images[0] === 'string'
                                ? item.images[0]
                                : item.images[0].url
                                : 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800';

                            const price = item.discountPrice || item.price || 0;
                            const origPrice = item.discountPrice && item.price > item.discountPrice ? item.price : null;
                            const discountPct = origPrice ? Math.round(((origPrice - price) / origPrice) * 100) : 0;

                            return (
                              <div
                                key={`${item._id}-${item.selectedSize || 'def'}`}
                                className="border border-gray-200 rounded-2xl p-4 flex gap-4 hover:border-stone-300 transition bg-white shadow-2xs"
                              >
                                <img
                                  src={itemImage}
                                  alt={item.name}
                                  className="w-18 h-22 sm:w-20 sm:h-24 rounded-xl object-cover border border-gray-200 shrink-0"
                                />

                                <div className="flex-1 flex flex-col justify-between">
                                  <div>
                                    <div className="flex justify-between items-start gap-2">
                                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                      <button
                                        type="button"
                                        onClick={() => onRemoveItem && onRemoveItem(item._id, item.selectedSize)}
                                        className="text-gray-400 hover:text-rose-600 transition p-0.5 cursor-pointer"
                                        title="Remove"
                                      >
                                        <Trash2 size={14} />
                                      </button>
                                    </div>

                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-[11px] text-gray-500">Size: <strong>{item.selectedSize || 'M'}</strong></span>
                                      <span className="text-gray-300">•</span>
                                      <span className="text-[11px] text-emerald-700 font-bold">Free Delivery</span>
                                    </div>

                                    <div className="flex items-baseline gap-2 mt-1.5">
                                      <span className="text-sm font-extrabold text-gray-950">{formatINR(price * (item.quantity || 1))}</span>
                                      {origPrice && <span className="text-xs text-gray-400 line-through">{formatINR(origPrice * (item.quantity || 1))}</span>}
                                      {discountPct > 0 && <span className="text-[10px] font-bold text-emerald-700">{discountPct}% OFF</span>}
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                                    <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          onUpdateQuantity && onUpdateQuantity(
                                            item._id,
                                            Math.max(1, (item.quantity || 1) - 1),
                                            item.selectedSize
                                          )
                                        }
                                        className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-white transition cursor-pointer font-bold"
                                      >
                                        <Minus size={12} />
                                      </button>
                                      <span className="w-7 text-center text-xs font-bold text-gray-900">
                                        {item.quantity || 1}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          onUpdateQuantity && onUpdateQuantity(
                                            item._id,
                                            (item.quantity || 1) + 1,
                                            item.selectedSize
                                          )
                                        }
                                        className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-white transition cursor-pointer font-bold"
                                      >
                                        <Plus size={12} />
                                      </button>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        if (onRemoveItem) onRemoveItem(item._id, item.selectedSize);
                                      }}
                                      className="text-xs text-rose-600 font-semibold hover:underline cursor-pointer"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Order Summary Box */}
                        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-gray-200 space-y-4">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-200 pb-2">
                            Order Summary
                          </h3>

                          {/* Coupon Box */}
                          <div className="space-y-2">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                const code = couponCode.trim().toUpperCase();
                                if (code === 'ZYRIVO100' || code === 'ROHIT400' || code === 'FESTIVE200') {
                                  setAppliedCoupon(code);
                                  setCouponError('');
                                } else {
                                  setCouponError('Invalid code. Try ROHIT400 or ZYRIVO100');
                                }
                              }}
                              className="flex gap-2"
                            >
                              <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Coupon ZYRIVO100"
                                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 text-xs uppercase bg-white focus:outline-none"
                              />
                              <button
                                type="submit"
                                className="px-3.5 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer"
                              >
                                Apply
                              </button>
                            </form>
                            {appliedCoupon && (
                              <p className="text-[11px] font-bold text-emerald-700 flex items-center justify-between">
                                <span>✅ Applied {appliedCoupon} (-₹{couponDiscount})</span>
                                <button type="button" onClick={() => setAppliedCoupon(null)} className="underline text-gray-500">Remove</button>
                              </p>
                            )}
                            {couponError && <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>}
                          </div>

                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex justify-between">
                              <span>Total MRP</span>
                              <span>{formatINR(mrpTotal)}</span>
                            </div>
                            {discountSavings > 0 && (
                              <div className="flex justify-between text-emerald-700 font-semibold">
                                <span>Retail Savings</span>
                                <span>- {formatINR(discountSavings)}</span>
                              </div>
                            )}
                            {appliedCoupon && (
                              <div className="flex justify-between text-stone-900 font-semibold">
                                <span>Coupon Savings</span>
                                <span>- {formatINR(couponDiscount)}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center">
                              <span>Delivery</span>
                              <span className="text-emerald-700 font-bold text-xs">FREE</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 flex justify-between items-baseline font-bold text-sm text-gray-950">
                              <span>Total Amount</span>
                              <span className="text-lg font-black text-gray-950">{formatINR(totalPayable)}</span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              if (onCheckout) onCheckout();
                            }}
                            className="w-full py-3 bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Lock size={13} />
                            <span>Proceed to Checkout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          3. TRACKING TIMELINE MODAL OVERLAY (IF OPENED)
         ───────────────────────────────────────────────────────────── */}
      {trackingModalOrder && (
        <div
          onClick={() => setTrackingModalOrder(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
          >
            <button
              onClick={() => setTrackingModalOrder(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
            >
              <X size={16} />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Shipment Tracking
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2">{trackingModalOrder.id}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{trackingModalOrder.items}</p>
            </div>

            <div className="space-y-4 pt-2">
              {trackingModalOrder.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  {idx < trackingModalOrder.steps.length - 1 && (
                    <div
                      className={`absolute left-3.5 top-6 w-0.5 h-10 ${
                        step.done ? 'bg-emerald-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      step.done
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.done ? <Check size={14} /> : <span className="w-2 h-2 rounded-full bg-gray-400" />}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.label}
                    </p>
                    <p className="text-[11px] text-gray-400">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600 flex justify-between items-center">
              <span>Delivery Partner: <strong>{trackingModalOrder.carrier}</strong></span>
              <span className="font-bold text-emerald-700">{trackingModalOrder.eta}</span>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3.5 INVOICE PDF PREVIEW MODAL (PRINTABLE)
         ───────────────────────────────────────────────────────────── */}
      {selectedInvoiceOrder && (
        <div
          onClick={() => setSelectedInvoiceOrder(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-black text-gray-950 tracking-wider">ZYRIVO</h2>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">Tax Invoice & Delivery Memo</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInvoiceOrder(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 font-medium">Billed To:</span>
                <p className="font-bold text-gray-900 mt-1">
                  {selectedInvoiceOrder.shippingAddress?.name || user?.name || 'Valued Customer'}
                </p>
                <p className="text-gray-600">
                  {selectedInvoiceOrder.shippingAddress?.street || 'Registered Address'}
                </p>
                <p className="text-gray-600">
                  {selectedInvoiceOrder.shippingAddress?.city}, {selectedInvoiceOrder.shippingAddress?.state} - {selectedInvoiceOrder.shippingAddress?.postalCode}
                </p>
                <p className="text-gray-500 mt-0.5">📱 {selectedInvoiceOrder.shippingAddress?.phone || user?.phone}</p>
              </div>

              <div className="text-right">
                <span className="text-gray-400 font-medium">Invoice Info:</span>
                <p className="font-bold text-gray-900 mt-1">Invoice: INV-{selectedInvoiceOrder.id?.replace('#', '')}</p>
                <p className="text-gray-600">Date: {selectedInvoiceOrder.date}</p>
                <p className="text-gray-600">
                  Payment: <strong>{selectedInvoiceOrder.paymentMethod || 'COD'}</strong>
                </p>
                <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Status: {selectedInvoiceOrder.status}
                </span>
              </div>
            </div>

            {/* Itemized Table */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Item Description</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {(selectedInvoiceOrder.orderItems && selectedInvoiceOrder.orderItems.length > 0) ? (
                    selectedInvoiceOrder.orderItems.map((it, idx) => (
                      <tr key={idx}>
                        <td className="p-3">
                          <p className="font-bold text-gray-900">{it.name}</p>
                          <span className="text-[10px] text-gray-400">Size: {it.size || 'Standard'}</span>
                        </td>
                        <td className="p-3 text-center font-semibold">{it.quantity || 1}</td>
                        <td className="p-3 text-right font-bold text-gray-900">
                          {formatINR((it.price || 0) * (it.quantity || 1))}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-3 font-bold text-gray-900">{selectedInvoiceOrder.items}</td>
                      <td className="p-3 text-center">1</td>
                      <td className="p-3 text-right font-bold text-gray-900">{selectedInvoiceOrder.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Calculations */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{selectedInvoiceOrder.price}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Shipping & Express Handling</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & GST (Included)</span>
                <span>₹0</span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between items-baseline font-bold text-base text-gray-950">
                <span>Grand Total</span>
                <span className="text-xl font-black">{selectedInvoiceOrder.price}</span>
              </div>
            </div>

            {/* Print & Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 py-3 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Printer size={15} />
                <span>Print or Save PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedInvoiceOrder(null)}
                className="py-3 px-5 border border-gray-200 hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. MOBILE BOTTOM NAVIGATION BAR (Sticky, Native App Feel)
         ───────────────────────────────────────────────────────────── */}
      <nav
        aria-label="Account Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-1 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center justify-around overflow-x-auto no-scrollbar gap-0.5">
          {[
            { id: 'overview',   label: 'Overview',  icon: User,        badge: null },
            { id: 'orders',     label: 'Orders',    icon: Package,     badge: orders.length },
            { id: 'wishlist',   label: 'Wishlist',  icon: Heart,       badge: wishlistItems.length },
            { id: 'cart',       label: 'Bag',       icon: ShoppingBag, badge: totalCartCount },
            { id: 'addresses',  label: 'Addresses', icon: MapPin,      badge: addresses.length },
            { id: 'edit',       label: 'Profile',   icon: Edit3,       badge: null },
            { id: 'contact',    label: 'Help',      icon: Headphones,  badge: null },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setSuccess('');
                  setError('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center min-w-[50px] flex-1 py-1 px-0.5 rounded-xl transition cursor-pointer relative ${
                  isActive
                    ? 'text-[#9f2089] font-bold'
                    : 'text-gray-500 hover:text-gray-900 font-medium'
                }`}
              >
                <div className={`p-1 rounded-lg transition ${isActive ? 'bg-purple-50' : ''} relative`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#9f2089]' : 'text-gray-400'}`} />
                  {item.badge !== null && item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
                  )}
                </div>
                <span className="text-[10px] leading-tight tracking-tight mt-0.5 truncate max-w-[52px]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
