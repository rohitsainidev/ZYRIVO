import React, { useState, useEffect } from 'react';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Tag,
  ArrowLeft,
  Lock,
  Percent,
  Truck,
  RotateCcw,
  Heart,
  Zap
} from 'lucide-react';

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onSelectProduct,
  onMoveToWishlist,
}) => {
  const [couponCode, setCouponCode] = useState(() => {
    try {
      return localStorage.getItem('ZYRIVO_active_coupon') || '';
    } catch {
      return '';
    }
  });
  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    try {
      return localStorage.getItem('ZYRIVO_active_coupon') || null;
    } catch {
      return null;
    }
  });
  const [couponError, setCouponError] = useState('');

  // Sync coupon when active coupon is set or changed via banner
  useEffect(() => {
    const handleCouponSync = (e) => {
      const code = e?.detail || localStorage.getItem('ZYRIVO_active_coupon');
      if (code) {
        setAppliedCoupon(code);
        setCouponCode(code);
        setCouponError('');
      }
    };
    window.addEventListener('zyrivo:coupon-applied', handleCouponSync);
    return () => window.removeEventListener('zyrivo:coupon-applied', handleCouponSync);
  }, []);

  // Escape key closes view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

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
  const couponDiscount = appliedCoupon ? (appliedCoupon === 'ZYRIVO100' ? 100 : (appliedCoupon === 'ROHIT400' ? 400 : 200)) : 0;
  const deliveryCharges = 0; // Free delivery
  const totalPayable = Math.max(0, subtotal - couponDiscount + deliveryCharges);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleApplyCoupon = (e) => {
    if (e) e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'ZYRIVO100' || code === 'ROHIT400' || code === 'FESTIVE200') {
      setAppliedCoupon(code);
      try {
        localStorage.setItem('ZYRIVO_active_coupon', code);
      } catch {}
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try ZYRIVO100 or ROHIT400');
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-[#f8fafc] flex flex-col font-sans selection:bg-purple-600 selection:text-white">


      {/* ─────────────────────────────────────────────────────────────
          2. FREE DELIVERY CELEBRATION BAR
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-linear-to-r from-purple-900 via-indigo-900 to-purple-950 text-white px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs font-semibold shadow-xs">
        <span className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span>✨</span>
          <span>Complimentary Express Delivery & 7-Day Free Doorstep Return applied on this order</span>
          <span className="ml-auto bg-amber-400 text-purple-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md hidden sm:inline-block">
            FREE SHIPPING
          </span>
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN CONTENT CONTAINER
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
            <ShoppingBag size={56} className="text-gray-400 stroke-1" />
            <div className="space-y-2 max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Your Shopping Bag is Empty</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Explore our curated range of kurtis, suits, western dresses, and menswear at guaranteed best prices.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-8 py-3.5 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag size={16} /> Start Shopping
            </button>
          </div>
        ) : (
          /* Cart Items & Order Summary Layout — 2-Column Responsive Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Products List & Assurance Badges */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-3">
              {/* Items Card List — Compact Meesho Style (One Row / Single Line Layout) */}
              <div className="space-y-2.5">
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
                      className="bg-white rounded-xl border border-gray-200/90 hover:border-purple-300 p-2.5 sm:p-3 shadow-2xs hover:shadow-xs transition flex items-center gap-3 sm:gap-4 relative group"
                    >
                      {/* Compact Thumbnail (Meesho Style) */}
                      <div
                        onClick={() => {
                          if (onSelectProduct) {
                            onSelectProduct(item);
                            onClose();
                          }
                        }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-200/80 shrink-0 cursor-pointer relative"
                      >
                        <img
                          src={itemImage}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      {/* Middle: Details in Tight 2-Row Line */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 gap-1">
                        {/* Line 1: Brand & Product Name */}
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7c3aed] shrink-0">
                            {typeof item.brand === 'object' ? item.brand?.name : (item.brand || 'ZYRIVO')}
                          </span>
                          <span className="text-gray-300 text-xs">•</span>
                          <h3
                            onClick={() => {
                              if (onSelectProduct) {
                                onSelectProduct(item);
                                onClose();
                              }
                            }}
                            className="text-xs sm:text-sm font-semibold text-gray-900 truncate hover:text-purple-700 cursor-pointer transition flex-1"
                            title={item.name}
                          >
                            {item.name}
                          </h3>
                        </div>

                        {/* Line 2: Pricing, Size & Free Delivery */}
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-xs">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-extrabold text-sm sm:text-base text-gray-950">
                              {formatINR(price * (item.quantity || 1))}
                            </span>
                            {origPrice && (
                              <span className="text-[11px] text-gray-400 line-through">
                                {formatINR(origPrice * (item.quantity || 1))}
                              </span>
                            )}
                            {discountPct > 0 && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                {discountPct}% off
                              </span>
                            )}
                          </div>

                          <span className="text-gray-300 hidden sm:inline">|</span>

                          <span className="text-[11px] font-medium text-gray-600">
                            Size: <strong className="text-gray-900">{item.selectedSize || 'M'}</strong>
                          </span>

                          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                            <Zap size={11} className="fill-emerald-600 text-emerald-600" />
                            <span>Free Delivery</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Quantity Stepper & Action Buttons */}
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {/* Compact Quantity Stepper */}
                        <div className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50/90 shadow-2xs overflow-hidden">
                          <button
                            type="button"
                            disabled={(item.quantity || 1) <= 1}
                            onClick={() =>
                              onUpdateQuantity(
                                item._id,
                                Math.max(1, (item.quantity || 1) - 1),
                                item.selectedSize
                              )
                            }
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white active:scale-95 transition cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Decrease quantity"
                          >
                            <Minus size={11} />
                          </button>
                          <span className="w-6 sm:w-7 text-center text-xs font-bold text-gray-900 select-none">
                            {item.quantity || 1}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                item._id,
                                (item.quantity || 1) + 1,
                                item.selectedSize
                              )
                            }
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white active:scale-95 transition cursor-pointer"
                            title="Increase quantity"
                          >
                            <Plus size={11} />
                          </button>
                        </div>

                        {/* Actions (Wishlist & Remove) */}
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              onMoveToWishlist
                                ? onMoveToWishlist(item)
                                : onRemoveItem(item._id, item.selectedSize)
                            }
                            className="text-gray-400 hover:text-purple-600 p-1.5 transition cursor-pointer"
                            title="Move to Wishlist"
                          >
                            <Heart size={15} />
                          </button>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item._id, item.selectedSize)}
                            className="text-gray-400 hover:text-rose-600 p-1.5 transition cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery & Trust Assurance Badges in Left Column */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3 text-xs text-gray-700 shadow-2xs">
                  <Truck size={18} className="text-purple-600 shrink-0" />
                  <span>Free Express Delivery Across India</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3 text-xs text-gray-700 shadow-2xs">
                  <RotateCcw size={18} className="text-purple-600 shrink-0" />
                  <span>7 Days Free Doorstep Return & Exchange</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3 text-xs text-gray-700 shadow-2xs">
                  <ShieldCheck size={18} className="text-purple-600 shrink-0" />
                  <span>100% Genuine & Quality Assured</span>
                </div>
              </div>
            </div>

            {/* Right Column: Privilege Coupon & Price Summary Breakdown (Sticky on Desktop) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-4 lg:sticky lg:top-24">
              {/* 2. Apply Privilege Coupon */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider">
                <Tag size={15} className="text-purple-600" />
                <span>Apply Privilege Coupon</span>
              </div>

              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter ZYRIVO100"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-purple-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs active:scale-98"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    Coupon <strong>{appliedCoupon}</strong> applied!
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setAppliedCoupon(null);
                      setCouponCode('');
                      try {
                        localStorage.removeItem('ZYRIVO_active_coupon');
                      } catch {}
                    }}
                    className="text-emerald-700 underline text-[11px] cursor-pointer hover:text-emerald-900"
                  >
                    Remove
                  </button>
                </div>
              )}

              {couponError && (
                <p className="text-xs text-rose-600 font-medium">{couponError}</p>
              )}

              {/* Suggested Coupons Pills without heavy background */}
              {!appliedCoupon && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setCouponCode('ZYRIVO100');
                      setAppliedCoupon('ZYRIVO100');
                      try {
                        localStorage.setItem('ZYRIVO_active_coupon', 'ZYRIVO100');
                      } catch {}
                      setCouponError('');
                    }}
                    className="text-xs text-gray-700 hover:text-purple-700 border border-dashed border-gray-300 hover:border-purple-600 px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 bg-transparent"
                  >
                    <span>🎉 ZYRIVO100 (₹100 Off)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCouponCode('ROHIT400');
                      setAppliedCoupon('ROHIT400');
                      try {
                        localStorage.setItem('ZYRIVO_active_coupon', 'ROHIT400');
                      } catch {}
                      setCouponError('');
                    }}
                    className="text-xs text-gray-700 hover:text-purple-700 border border-dashed border-gray-300 hover:border-purple-600 px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 bg-transparent"
                  >
                    <span>✨ ROHIT400 (₹400 Off)</span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Price Details Breakdown (Placed Below Coupon) */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>Price Summary ({totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'})</span>
                <span className="text-xs font-semibold text-emerald-700">Guaranteed Best Price</span>
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Total Product MRP</span>
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
                    <span>Coupon Discount ({appliedCoupon})</span>
                    <span>- {formatINR(couponDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>Express Delivery</span>
                  <span className="text-emerald-700 font-bold text-xs">
                    FREE
                  </span>
                </div>

                <div className="pt-3 border-t border-dashed border-gray-200 flex justify-between items-baseline font-bold text-base text-gray-950">
                  <span>Total Payable</span>
                  <span className="text-2xl font-black text-gray-950">
                    {formatINR(totalPayable)}
                  </span>
                </div>
              </div>

              {discountSavings + couponDiscount > 0 && (
                <div className="text-emerald-700 text-xs font-bold py-1.5 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>You are saving {formatINR(discountSavings + couponDiscount)} on this order!</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => onCheckout && onCheckout(appliedCoupon)}
                className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Lock size={16} />
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight size={16} />
              </button>

              {/* Security trust badges */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-gray-400 text-xs flex-wrap">
                <span>🔒 UPI</span>
                <span>•</span>
                <span>Cards</span>
                <span>•</span>
                <span>NetBanking</span>
                <span>•</span>
                <span>Cash on Delivery</span>
              </div>
            </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartDrawer;
