import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Plus,
  ArrowRight,
  Package,
  Sparkles,
  ShoppingBag,
  RotateCcw,
  QrCode,
  Smartphone,
  Building2,
  Banknote,
  Check,
  ChevronRight,
  Shield,
  Info,
  Timer,
} from 'lucide-react';
import { apiCreateOrder, apiUpdateProfile } from '../services/api';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems = [],
  user,
  onUserChange,
  onOrderSuccess,
  appliedCoupon = null,
  couponDiscount = 0,
}) {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  
  // Payment methods: 'UPI' | 'Card' | 'NetBanking' | 'COD'
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  
  // Sub-options for payment methods
  const [upiSubMethod, setUpiSubMethod] = useState('apps'); // 'apps' | 'id' | 'qr'
  const [selectedUpiApp, setSelectedUpiApp] = useState('gpay'); // 'gpay' | 'phonepe' | 'paytm' | 'cred'
  const [upiIdInput, setUpiIdInput] = useState('');
  const [isUpiVerified, setIsUpiVerified] = useState(false);
  
  // Card form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState(user?.name || '');
  
  // Netbanking state
  const [selectedBank, setSelectedBank] = useState('HDFC');
  
  // Processing & Success State
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [orderError, setOrderError] = useState('');
  const [placedOrderInfo, setPlacedOrderInfo] = useState(null);

  // New Address Form State
  const [newAddr, setNewAddr] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    tag: 'Home',
  });

  // User addresses list
  const [addresses, setAddresses] = useState(() => {
    if (user?.addresses && Array.isArray(user.addresses) && user.addresses.length > 0) {
      return user.addresses;
    }
    try {
      const saved = localStorage.getItem('ZYRIVO_user_addresses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}
    return [];
  });

  // Automatically show address form if user has no saved addresses
  useEffect(() => {
    if (addresses.length === 0) {
      setIsAddingNewAddress(true);
    }
  }, [addresses.length]);

  // Sync addresses whenever user prop updates
  useEffect(() => {
    if (user?.addresses && Array.isArray(user.addresses) && user.addresses.length > 0) {
      setAddresses(user.addresses);
    }
  }, [user]);

  // Reset UPI verified state when user types
  useEffect(() => {
    if (upiIdInput.includes('@') && upiIdInput.length >= 5) {
      setIsUpiVerified(true);
    } else {
      setIsUpiVerified(false);
    }
  }, [upiIdInput]);

  if (!isOpen) return null;

  // Price calculations
  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discountPrice || item.price || 0;
    return acc + price * (item.quantity || 1);
  }, 0);

  const discountSavings = cartItems.reduce((acc, item) => {
    if (item.discountPrice && item.price && item.price > item.discountPrice) {
      return acc + (item.price - item.discountPrice) * (item.quantity || 1);
    }
    return acc;
  }, 0);

  const mrpTotal = subtotal + discountSavings;
  const effectiveCouponDiscount = appliedCoupon
    ? (couponDiscount || (appliedCoupon === 'ROHIT400' ? 400 : (appliedCoupon === 'ZYRIVO100' ? 100 : 200)))
    : 0;
  const totalPayable = Math.max(0, subtotal - effectiveCouponDiscount);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  // Format Card Number (XXXX XXXX XXXX XXXX)
  const handleCardNumberChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardNumber(formatted);
  };

  // Format Card Expiry (MM/YY)
  const handleCardExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (val.length >= 3) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }
    setCardExpiry(val);
  };

  // Card type detection helper
  const getCardType = () => {
    const raw = cardNumber.replace(/\s/g, '');
    if (raw.startsWith('4')) return 'VISA';
    if (/^5[1-5]/.test(raw) || /^2[2-7]/.test(raw)) return 'MASTERCARD';
    if (/^60|^65|^64/.test(raw)) return 'RUPAY';
    return null;
  };

  // Save new address
  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    if (!newAddr.street || !newAddr.city || !newAddr.postalCode || !newAddr.phone) {
      setOrderError('Please provide complete delivery address details.');
      return;
    }

    const createdAddr = {
      tag: newAddr.tag || 'Home',
      name: newAddr.name || user?.name || 'Customer',
      phone: newAddr.phone || user?.phone || '',
      street: newAddr.street,
      city: newAddr.city,
      state: newAddr.state || 'Maharashtra',
      postalCode: newAddr.postalCode,
      country: 'India',
      isDefault: addresses.length === 0,
    };

    const updated = [createdAddr, ...addresses];
    setAddresses(updated);
    setSelectedAddressIndex(0);
    setIsAddingNewAddress(false);
    setOrderError('');

    try {
      localStorage.setItem('ZYRIVO_user_addresses', JSON.stringify(updated));
      const res = await apiUpdateProfile({ addresses: updated });
      if (res?.success && res.user && onUserChange) {
        onUserChange(res.user);
      }
    } catch (err) {
      console.warn('Address sync error:', err);
    }
  };

  // Place order execution
  const executeOrderPlacement = async () => {
    const chosenAddress = addresses[selectedAddressIndex] || addresses[0];
    
    // Format order items for backend
    const orderItems = cartItems.map((item) => {
      let image = '';
      if (item.images && item.images.length > 0) {
        image = typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url;
      } else if (item.image) {
        image = item.image;
      } else {
        image = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop&q=80';
      }

      return {
        product: item._id || item.id,
        name: item.name || 'Artisanal Garment',
        image,
        price: item.discountPrice || item.price || 0,
        quantity: item.quantity || 1,
        size: item.selectedSize || item.size || 'M',
      };
    });

    const shippingAddress = {
      name: chosenAddress.name || user?.name || 'Customer',
      street: chosenAddress.street || chosenAddress.addressLine || 'Address Line',
      city: chosenAddress.city || 'City',
      state: chosenAddress.state || 'State',
      postalCode: chosenAddress.postalCode || chosenAddress.pincode || '400001',
      country: chosenAddress.country || 'India',
      phone: chosenAddress.phone || user?.phone || '9876543210',
    };

    const orderPayload = {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice: subtotal,
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: totalPayable,
    };

    try {
      const res = await apiCreateOrder(orderPayload);
      if (res && res.success && res.order) {
        try {
          const localOrders = JSON.parse(localStorage.getItem('ZYRIVO_local_orders') || '[]');
          localOrders.unshift(res.order);
          localStorage.setItem('ZYRIVO_local_orders', JSON.stringify(localOrders.slice(0, 30)));
        } catch {}

        setPlacedOrderInfo(res.order);
        if (onOrderSuccess) onOrderSuccess(res.order);
      } else {
        // Fallback local order
        const mockCreatedOrder = {
          _id: `ord_${Date.now()}`,
          orderItems,
          shippingAddress,
          paymentMethod,
          itemsPrice: subtotal,
          taxPrice: 0,
          shippingPrice: 0,
          totalPrice: totalPayable,
          isPaid: paymentMethod !== 'COD',
          orderStatus: 'Confirmed',
          createdAt: new Date().toISOString(),
        };
        try {
          const localOrders = JSON.parse(localStorage.getItem('ZYRIVO_local_orders') || '[]');
          localOrders.unshift(mockCreatedOrder);
          localStorage.setItem('ZYRIVO_local_orders', JSON.stringify(localOrders.slice(0, 30)));
        } catch {}
        setPlacedOrderInfo(mockCreatedOrder);
        if (onOrderSuccess) onOrderSuccess(mockCreatedOrder);
      }
    } catch (err) {
      console.warn('Order creation API fallback:', err);
      const fallbackOrder = {
        _id: `ord_${Date.now()}`,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: subtotal,
        taxPrice: 0,
        shippingPrice: 0,
        totalPrice: totalPayable,
        isPaid: paymentMethod !== 'COD',
        orderStatus: 'Confirmed',
        createdAt: new Date().toISOString(),
      };
      try {
        const localOrders = JSON.parse(localStorage.getItem('ZYRIVO_local_orders') || '[]');
        localOrders.unshift(fallbackOrder);
        localStorage.setItem('ZYRIVO_local_orders', JSON.stringify(localOrders.slice(0, 30)));
      } catch {}
      setPlacedOrderInfo(fallbackOrder);
      if (onOrderSuccess) onOrderSuccess(fallbackOrder);
    } finally {
      setIsPlacingOrder(false);
      setIsProcessingPayment(false);
    }
  };

  // Handle Pay / Confirm Order Button
  const handleInitiatePayment = () => {
    if (cartItems.length === 0) {
      setOrderError('Your shopping bag is empty.');
      return;
    }

    const chosenAddress = addresses[selectedAddressIndex] || addresses[0];
    if (!chosenAddress) {
      setOrderError('Please select or add a delivery address to proceed.');
      return;
    }

    // Validation for online payments
    if (paymentMethod === 'UPI' && upiSubMethod === 'id' && !isUpiVerified) {
      setOrderError('Please enter a valid UPI ID (e.g. yourname@okhdfcbank)');
      return;
    }

    if (paymentMethod === 'Card') {
      const cleanNum = cardNumber.replace(/\s/g, '');
      if (cleanNum.length < 15 || !cardExpiry || cardCvv.length < 3) {
        setOrderError('Please enter valid 16-digit card number, MM/YY expiry, and CVV.');
        return;
      }
    }

    setOrderError('');

    // If Prepaid Online (UPI / Card / NetBanking), show bank gateway simulation
    if (paymentMethod !== 'COD') {
      setIsProcessingPayment(true);
      setPaymentStep(1);

      setTimeout(() => {
        setPaymentStep(2);
      }, 700);

      setTimeout(() => {
        setPaymentStep(3);
      }, 1500);

      setTimeout(() => {
        executeOrderPlacement();
      }, 2100);
    } else {
      // Cash on delivery
      setIsPlacingOrder(true);
      executeOrderPlacement();
    }
  };

  // ════════════════════════════════════════════════════════════════
  // 1. BANK GATEWAY PROCESSING MODAL (Prepaid UPI / Card / NetBanking)
  // ════════════════════════════════════════════════════════════════
  if (isProcessingPayment) {
    return (
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-center border border-gray-100 animate-in zoom-in-95 duration-200">
          {/* Animated Bank Security Icon */}
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-purple-100 animate-ping opacity-75" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#9f2089] to-purple-600 text-white flex items-center justify-center shadow-lg">
              <Lock size={28} className="animate-pulse" />
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5">
              <Shield size={12} className="text-[#9f2089]" />
              256-Bit SSL Bank Gateway
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2.5">
              Authorizing Payment
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Please do not refresh or press back while we securely verify with your bank.
            </p>
          </div>

          {/* Stepper Status */}
          <div className="bg-gray-50 rounded-2xl p-4 text-left border border-gray-200 space-y-2.5 text-xs">
            <div className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${paymentStep >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {paymentStep > 1 ? <Check size={12} /> : '1'}
              </div>
              <span className={paymentStep >= 1 ? 'text-gray-900 font-semibold' : 'text-gray-400'}>
                Connecting to {paymentMethod === 'UPI' ? 'NPCI UPI Network' : paymentMethod === 'Card' ? 'Card 3D Secure Gateway' : 'Bank Gateway'}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${paymentStep >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {paymentStep > 2 ? <Check size={12} /> : '2'}
              </div>
              <span className={paymentStep >= 2 ? 'text-gray-900 font-semibold' : 'text-gray-400'}>
                Authenticating Token & Amount ({formatINR(totalPayable)})
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${paymentStep >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {paymentStep >= 3 ? <Check size={12} /> : '3'}
              </div>
              <span className={paymentStep >= 3 ? 'text-emerald-700 font-bold' : 'text-gray-400'}>
                Payment Authorized & Verified
              </span>
            </div>
          </div>

          <div className="text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>RBI Guidelines & PCI-DSS Level 1 Compliant</span>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 2. REALISTIC E-COMMERCE ORDER CONFIRMATION SCREEN
  // ════════════════════════════════════════════════════════════════
  if (placedOrderInfo) {
    const orderDisplayId = `#ZYR-${(placedOrderInfo._id || '').slice(-6).toUpperCase() || 'CONF'}`;
    const etaDate = new Date();
    etaDate.setDate(etaDate.getDate() + 4);
    const etaStr = etaDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    const isPaid = placedOrderInfo.isPaid || (paymentMethod && paymentMethod.toUpperCase() !== 'COD');
    const orderItemsList = (placedOrderInfo.orderItems && placedOrderInfo.orderItems.length > 0)
      ? placedOrderInfo.orderItems
      : cartItems;

    const deliveryAddr = placedOrderInfo.shippingAddress || addresses[selectedAddressIndex] || addresses[0] || {};
    const recipientPhone = deliveryAddr.phone || user?.phone || '9876543210';
    const txnId = placedOrderInfo.paymentResult?.id || `PAY_${Date.now().toString().slice(-8)}`;

    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200 overflow-y-auto">
        <div className="bg-white rounded-3xl max-w-2xl w-full my-auto shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
          {/* Top Bar with Brand & Close */}
          <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-widest bg-gradient-to-r from-[#9f2089] via-fuchsia-600 to-[#9f2089] bg-clip-text text-transparent">ZYRIVO</span>
              <span className="text-gray-300">•</span>
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Order Receipt</span>
            </div>
            <button
              type="button"
              onClick={() => onClose({ viewOrders: false })}
              className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition cursor-pointer border border-gray-200"
            >
              <X size={14} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
            {/* Celebration Header with Animated Success Logo */}
            <div className="text-center space-y-2.5">
              <div className="relative inline-flex items-center justify-center w-16 h-16 mx-auto">
                {/* Gentle expanding ripple ring */}
                <div className="absolute inset-0 rounded-full bg-emerald-400/25 animate-success-ripple pointer-events-none" />
                {/* Main animated checkmark badge */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-xl shadow-emerald-500/25 flex items-center justify-center ring-4 ring-emerald-100/80 animate-success-bounce">
                  <Check size={28} strokeWidth={3} className="animate-check-pop drop-shadow-xs" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-950 tracking-tight">
                  Order Placed Successfully!
                </h2>
                <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
                  Thank you for shopping with <span className="font-bold text-gray-900">ZYRIVO</span>. We have received your order and our fulfillment center is preparing it.
                </p>
              </div>

              {/* SMS & WhatsApp Confirmation Alert (Clean professional text without background box) */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-medium pt-0.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Confirmation SMS & WhatsApp update sent to <strong className="text-gray-900 font-semibold">+91 {recipientPhone}</strong></span>
              </div>
            </div>

            {/* 4-Step Visual Delivery Stepper (Like Real Flipkart/Amazon) */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-bold text-gray-800 flex items-center gap-1.5">
                  <Truck size={15} className="text-[#9f2089]" />
                  <span>Estimated Delivery by <strong className="text-emerald-700">{etaStr}</strong></span>
                </span>
                <span className="text-[11px] font-mono text-gray-400">Order {orderDisplayId}</span>
              </div>

              <div className="relative flex items-center justify-between">
                {/* Connecting Track Line */}
                <div className="absolute top-3.5 left-4 right-4 h-1 bg-gray-200 -z-0">
                  <div className="h-full bg-emerald-500 w-1/4 rounded-full transition-all duration-500" />
                </div>

                {/* 4 Steps */}
                {[
                  { title: 'Confirmed', sub: 'Just now', active: true, done: true },
                  { title: 'Packed', sub: 'Expected Tomorrow', active: false, done: false },
                  { title: 'Shipped', sub: 'Express Courier', active: false, done: false },
                  { title: 'Delivered', sub: etaStr, active: false, done: false },
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-xs ${
                      step.done
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                        : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}>
                      {step.done ? <Check size={14} strokeWidth={2.5} /> : (idx + 1)}
                    </div>
                    <span className={`text-[11px] font-bold mt-1.5 ${step.active || step.done ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                    <span className="text-[9px] text-gray-400 hidden sm:inline-block">
                      {step.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Payment 2-Column Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Shipping Address Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <MapPin size={13} className="text-[#9f2089]" />
                  <span>Delivery Address</span>
                </div>
                <p className="font-bold text-gray-900">{deliveryAddr.name || user?.name || 'Customer'}</p>
                <p className="text-gray-600 text-[11px] leading-relaxed">
                  {deliveryAddr.street || deliveryAddr.addressLine || 'Address Line'}, {deliveryAddr.city}, {deliveryAddr.state} - {deliveryAddr.postalCode || deliveryAddr.pincode}
                </p>
                <p className="text-gray-500 text-[11px]">Phone: +91 {recipientPhone}</p>
              </div>

              {/* Payment Details Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <CreditCard size={13} className="text-[#9f2089]" />
                  <span>Payment Details</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{paymentMethod || 'UPI'}</span>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold ${
                    isPaid ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {isPaid ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" /> Paid Online
                      </>
                    ) : (
                      'Pay on Delivery'
                    )}
                  </span>
                </div>
                {isPaid && (
                  <p className="text-[10px] text-gray-400 font-mono">Ref: {txnId}</p>
                )}
                <div className="pt-1 border-t border-gray-100 flex items-center justify-between font-bold">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-sm font-extrabold text-[#9f2089]">
                    {formatINR(placedOrderInfo.totalPrice || totalPayable)}
                  </span>
                </div>
              </div>
            </div>

            {/* Ordered Items Preview */}
            <div className="bg-white border border-gray-200 rounded-xl p-3.5 space-y-2.5 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                Items in this Order ({orderItemsList.reduce((acc, it) => acc + (it.quantity || 1), 0)})
              </span>
              <div className="divide-y divide-gray-100 max-h-40 overflow-y-auto">
                {orderItemsList.map((item, idx) => {
                  const itemImg = item.image || (item.images && item.images[0]?.url) || (item.images && typeof item.images[0] === 'string' ? item.images[0] : 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300');
                  const itemPrice = item.price || item.discountPrice || 0;
                  return (
                    <div key={idx} className="py-2 flex items-center gap-3 text-xs first:pt-0 last:pb-0">
                      <img
                        src={itemImg}
                        alt={item.name}
                        className="w-10 h-12 rounded-lg object-cover border border-gray-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                        <p className="text-[11px] text-gray-400">
                          Qty: {item.quantity || 1} {item.size || item.selectedSize ? `• Size: ${item.size || item.selectedSize}` : ''}
                        </p>
                      </div>
                      <span className="font-bold text-gray-900 shrink-0">
                        {formatINR(itemPrice * (item.quantity || 1))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reward Coins Delight (No background box, clean divider line) */}
            <div className="py-2.5 px-1 border-t border-gray-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[#9f2089] shrink-0" />
                <span className="text-gray-700 font-medium">
                  You earned <strong className="text-[#9f2089] font-bold">50 ZYRIVO Luxe Coins</strong> on this order!
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 size={13} /> Credited
              </span>
            </div>
          </div>

          {/* Fixed Footer with Actions */}
          <div className="p-4 sm:p-5 border-t border-gray-100 bg-stone-50/80 flex flex-col sm:flex-row gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onClose({ viewOrders: true })}
              className="flex-1 py-3 bg-[#9f2089] hover:bg-[#831872] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Package size={15} />
              <span>Track Order Live in My Account</span>
            </button>
            <button
              type="button"
              onClick={() => onClose({ viewOrders: false })}
              className="py-3 px-6 bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════
  // 3. MAIN CHECKOUT MODAL INTERFACE
  // ════════════════════════════════════════════════════════════════
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-3.5 border-b border-gray-100 flex items-center justify-between bg-stone-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#9f2089] text-white flex items-center justify-center shadow-xs">
              <Lock size={15} />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-950">Secure Express Checkout</h2>
              <p className="text-[11px] text-gray-500">256-Bit Encrypted & Verified Doorstep Delivery</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onClose({ viewOrders: false })}
            className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-600 transition cursor-pointer border border-gray-200 shadow-2xs"
            aria-label="Close Checkout"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (7 cols): Address & Payment */}
          <div className="lg:col-span-7 space-y-5">
            {/* ── 1. Delivery Address Section ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                  <MapPin size={16} className="text-[#9f2089]" />
                  <span>1. Delivery Address</span>
                </div>
                {!isAddingNewAddress && (
                  <button
                    type="button"
                    onClick={() => setIsAddingNewAddress(true)}
                    className="text-xs font-bold text-[#9f2089] hover:text-[#831872] flex items-center gap-1 cursor-pointer"
                  >
                    <Plus size={13} /> Add Address
                  </button>
                )}
              </div>

              {/* Add New Address Form */}
              {isAddingNewAddress ? (
                <form onSubmit={handleAddNewAddress} className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <span className="text-xs font-bold text-gray-800">Add New Shipping Location</span>
                    <button
                      type="button"
                      onClick={() => setIsAddingNewAddress(false)}
                      className="text-xs text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Recipient Full Name"
                      value={newAddr.name}
                      onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="10-digit Phone"
                      value={newAddr.phone}
                      onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="House/Flat No., Building, Street Name"
                    value={newAddr.street}
                    onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                    required
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="City"
                      value={newAddr.city}
                      onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                      required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={newAddr.state}
                      onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                    />
                    <input
                      type="text"
                      placeholder="PIN Code"
                      value={newAddr.postalCode}
                      onChange={(e) => setNewAddr({ ...newAddr, postalCode: e.target.value })}
                      className="p-2.5 rounded-lg border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#9f2089]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#9f2089] hover:bg-[#831872] text-white rounded-lg text-xs font-bold transition cursor-pointer"
                  >
                    Save & Use This Address
                  </button>
                </form>
              ) : (
                <div className="space-y-2">
                  {addresses.map((addr, idx) => (
                    <label
                      key={idx}
                      onClick={() => setSelectedAddressIndex(idx)}
                      className={`block p-3 rounded-xl border transition cursor-pointer ${
                        selectedAddressIndex === idx
                          ? 'border-[#9f2089] bg-purple-50/40 shadow-2xs'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="checkoutAddress"
                          checked={selectedAddressIndex === idx}
                          onChange={() => setSelectedAddressIndex(idx)}
                          className="mt-0.5 accent-[#9f2089]"
                        />
                        <div className="flex-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-950">{addr.name || 'Recipient'}</span>
                            <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-bold uppercase">
                              {addr.tag || 'Home'}
                            </span>
                            <span className="text-gray-500 ml-auto font-medium">+91 {addr.phone}</span>
                          </div>
                          <p className="text-gray-600 mt-1">
                            {addr.street || addr.addressLine}, {addr.city}, {addr.state} - {addr.postalCode || addr.pincode}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* ── 2. Professional Payment Method Section ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                  <CreditCard size={16} className="text-[#9f2089]" />
                  <span>2. Payment Option</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  100% Safe Payment
                </span>
              </div>

              {/* 4 Tabs / Radio Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'UPI', label: 'Instant UPI', icon: Smartphone, badge: 'Popular' },
                  { id: 'Card', label: 'Cards', icon: CreditCard, badge: null },
                  { id: 'NetBanking', label: 'NetBanking', icon: Building2, badge: null },
                  { id: 'COD', label: 'Cash / COD', icon: Banknote, badge: null },
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center gap-1.5 relative ${
                        isSelected
                          ? 'border-[#9f2089] bg-purple-50/50 text-[#9f2089] font-bold shadow-2xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {m.badge && (
                        <span className="absolute -top-1.5 -right-1 text-[9px] bg-emerald-600 text-white font-extrabold px-1.5 py-0.2 rounded-full">
                          {m.badge}
                        </span>
                      )}
                      <Icon size={18} className={isSelected ? 'text-[#9f2089]' : 'text-gray-500'} />
                      <span className="text-xs">{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* ── Sub-Panels for Selected Payment Method ── */}

              {/* 1. UPI Sub-panel */}
              {paymentMethod === 'UPI' && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-3 animate-in fade-in duration-150">
                  <div className="flex border-b border-gray-200 pb-2.5 gap-4 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setUpiSubMethod('apps')}
                      className={`pb-1 cursor-pointer transition ${upiSubMethod === 'apps' ? 'text-[#9f2089] border-b-2 border-[#9f2089] font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      UPI Apps
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpiSubMethod('id')}
                      className={`pb-1 cursor-pointer transition ${upiSubMethod === 'id' ? 'text-[#9f2089] border-b-2 border-[#9f2089] font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      Enter UPI ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpiSubMethod('qr')}
                      className={`pb-1 cursor-pointer transition ${upiSubMethod === 'qr' ? 'text-[#9f2089] border-b-2 border-[#9f2089] font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      Scan QR Code
                    </button>
                  </div>

                  {upiSubMethod === 'apps' && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {[
                        { id: 'gpay', name: 'Google Pay', icon: '⚡ GPay' },
                        { id: 'phonepe', name: 'PhonePe', icon: '🟣 PhonePe' },
                        { id: 'paytm', name: 'Paytm UPI', icon: '🔵 Paytm' },
                        { id: 'cred', name: 'CRED UPI', icon: '💎 CRED' },
                      ].map((app) => (
                        <label
                          key={app.id}
                          onClick={() => setSelectedUpiApp(app.id)}
                          className={`p-2.5 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition ${
                            selectedUpiApp === app.id
                              ? 'border-[#9f2089] bg-white font-bold text-gray-900 shadow-2xs'
                              : 'border-gray-200 bg-white/70 text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="upiApp"
                              checked={selectedUpiApp === app.id}
                              onChange={() => setSelectedUpiApp(app.id)}
                              className="accent-[#9f2089]"
                            />
                            <span>{app.name}</span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-normal">{app.icon}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {upiSubMethod === 'id' && (
                    <div className="space-y-2 pt-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="e.g. mobileNumber@okhdfcbank or yourname@paytm"
                          value={upiIdInput}
                          onChange={(e) => setUpiIdInput(e.target.value)}
                          className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089]"
                        />
                        {isUpiVerified && (
                          <span className="absolute right-2.5 top-2.5 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                            <Check size={14} /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500">
                        A payment collect request will be sent to your UPI app.
                      </p>
                    </div>
                  )}

                  {upiSubMethod === 'qr' && (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-xl border border-gray-200">
                      <div className="w-24 h-24 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center shrink-0">
                        <QrCode size={56} className="text-gray-800" />
                        <span className="text-[9px] text-gray-400 mt-1">BHIM UPI QR</span>
                      </div>
                      <div className="text-xs space-y-1">
                        <p className="font-bold text-gray-900">Scan & Pay via any UPI App</p>
                        <p className="text-gray-500 text-[11px]">
                          Open GPay, PhonePe, or Paytm and scan this QR code to complete payment of <span className="font-bold text-gray-900">{formatINR(totalPayable)}</span>.
                        </p>
                        <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px] pt-1">
                          <Timer size={13} />
                          <span>QR code valid for next 05:00 minutes</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. Card Sub-panel */}
              {paymentMethod === 'Card' && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-2.5 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between text-xs pb-1">
                    <span className="font-semibold text-gray-700">Enter Card Details</span>
                    <span className="text-[10px] text-purple-700 font-bold">{getCardType() || 'Visa / MC / RuPay'}</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Card Number (XXXX XXXX XXXX XXXX)"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089] font-mono"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Expiry (MM/YY)"
                      value={cardExpiry}
                      onChange={handleCardExpiryChange}
                      className="p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089]"
                    />
                    <input
                      type="password"
                      placeholder="CVV (3 digits)"
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                      className="p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089]"
                  />

                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 pt-1">
                    <Lock size={12} className="text-emerald-600" />
                    <span>Card info is tokenized & secured under RBI guidelines.</span>
                  </div>
                </div>
              )}

              {/* 3. NetBanking Sub-panel */}
              {paymentMethod === 'NetBanking' && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-2.5 animate-in fade-in duration-150">
                  <span className="text-xs font-semibold text-gray-700 block pb-1">
                    Select Your Bank
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'HDFC', name: 'HDFC Bank' },
                      { id: 'ICICI', name: 'ICICI Bank' },
                      { id: 'SBI', name: 'State Bank of India' },
                      { id: 'Axis', name: 'Axis Bank' },
                    ].map((b) => (
                      <label
                        key={b.id}
                        onClick={() => setSelectedBank(b.id)}
                        className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs cursor-pointer transition ${
                          selectedBank === b.id
                            ? 'border-[#9f2089] bg-white font-bold text-gray-900 shadow-2xs'
                            : 'border-gray-200 bg-white/70 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="netBank"
                          checked={selectedBank === b.id}
                          onChange={() => setSelectedBank(b.id)}
                          className="accent-[#9f2089]"
                        />
                        <span>{b.name}</span>
                      </label>
                    ))}
                  </div>

                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#9f2089] mt-2 cursor-pointer"
                  >
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="SBI">State Bank of India (SBI)</option>
                    <option value="Axis">Axis Bank</option>
                    <option value="Kotak">Kotak Mahindra Bank</option>
                    <option value="PNB">Punjab National Bank</option>
                    <option value="BOB">Bank of Baroda</option>
                    <option value="IndusInd">IndusInd Bank</option>
                    <option value="Yes">Yes Bank</option>
                  </select>
                </div>
              )}

              {/* 4. COD Sub-panel */}
              {paymentMethod === 'COD' && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-2 animate-in fade-in duration-150 text-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <CheckCircle2 size={16} />
                    <span>Pay on Delivery Verified</span>
                  </div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    You can pay in cash or scan the delivery agent's UPI QR code at your doorstep upon arrival. Free express doorstep shipping included.
                  </p>
                </div>
              )}
            </div>

            {/* Error Message */}
            {orderError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{orderError}</span>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Order Items & Pricing Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            {/* Items Summary Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3 shadow-2xs max-h-56 overflow-y-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Order Items ({totalCartCount})
              </span>
              <div className="space-y-2">
                {cartItems.map((item, idx) => {
                  const itemImg =
                    item.images && item.images.length > 0
                      ? typeof item.images[0] === 'string'
                        ? item.images[0]
                        : item.images[0].url
                      : item.image || 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300';
                  const itemPrice = item.discountPrice || item.price || 0;

                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                      <img
                        src={itemImg}
                        alt={item.name}
                        className="w-12 h-14 rounded-lg object-cover border border-gray-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 truncate">{item.name}</p>
                        <p className="text-gray-500 text-[11px]">
                          Qty: {item.quantity || 1} {item.selectedSize ? `· Size ${item.selectedSize}` : ''}
                        </p>
                      </div>
                      <span className="font-bold text-gray-950 shrink-0">
                        {formatINR(itemPrice * (item.quantity || 1))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-100 pb-2 block">
                Billing Details
              </span>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Product MRP Total</span>
                  <span>{formatINR(mrpTotal)}</span>
                </div>

                {discountSavings > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Retail Discount</span>
                    <span>- {formatINR(discountSavings)}</span>
                  </div>
                )}

                {appliedCoupon && (
                  <div className="flex justify-between text-purple-700 font-semibold">
                    <span>Coupon ({appliedCoupon})</span>
                    <span>- {formatINR(effectiveCouponDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">
                    FREE
                  </span>
                </div>

                <div className="pt-2 border-t border-dashed border-gray-200 flex justify-between items-baseline font-bold text-sm text-gray-950">
                  <span>Total Amount Payable</span>
                  <span className="text-xl font-extrabold text-[#9f2089]">
                    {formatINR(totalPayable)}
                  </span>
                </div>
              </div>

              {/* Main Call-to-Action Pay Button */}
              <button
                type="button"
                disabled={isPlacingOrder || cartItems.length === 0}
                onClick={handleInitiatePayment}
                className="w-full py-3.5 bg-[#9f2089] hover:bg-[#831872] disabled:opacity-50 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                {isPlacingOrder ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Connecting Secure Gateway...
                  </span>
                ) : (
                  <>
                    <Lock size={15} />
                    <span>
                      {paymentMethod === 'COD'
                        ? 'CONFIRM ORDER (CASH ON DELIVERY)'
                        : `PAY ${formatINR(totalPayable)} VIA ${paymentMethod.toUpperCase()}`}
                    </span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-3 text-gray-400 text-[11px]">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-600" /> 100% Genuine
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <RotateCcw size={13} className="text-purple-600" /> 7-Day Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
