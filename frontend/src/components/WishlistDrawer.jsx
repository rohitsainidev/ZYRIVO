import React, { useEffect } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Star,
  ShieldCheck,
  ArrowLeft,
  Check,
  Sparkles
} from 'lucide-react';

const WishlistDrawer = ({
  isOpen,
  onClose,
  wishlistItems = [],
  onRemoveFromWishlist,
  onMoveToCart,
  onClearWishlist,
  onSelectProduct,
}) => {
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

  const handleMoveAllToCart = () => {
    wishlistItems.forEach(item => {
      onMoveToCart(item);
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-[#f8fafc] flex flex-col font-sans selection:bg-purple-600 selection:text-white">



      {/* ─────────────────────────────────────────────────────────────
          2. MAIN WISHLIST CONTAINER
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {wishlistItems.length === 0 ? (
          /* Empty State */
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
            <Heart size={56} className="text-rose-400 stroke-1" />
            <div className="space-y-2 max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Your Wishlist is Empty</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Save your dream outfits and luxury fashion pieces here to review them later or move them to your bag with 1 click.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-8 py-3.5 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag size={16} /> Explore Collections
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Wishlist Action Header Banner */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span>Saved Collection</span>
                  <span className="text-sm font-semibold text-gray-500">
                    ({wishlistItems.length} {wishlistItems.length === 1 ? 'Product' : 'Products'})
                  </span>
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Enjoy complimentary express delivery and easy 7-day doorstep returns on all saved items.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleMoveAllToCart}
                  className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag size={15} /> Move All to Bag
                </button>
                <button
                  type="button"
                  onClick={onClearWishlist}
                  className="sm:hidden px-3.5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => {
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
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col group relative"
                  >
                    {/* Image Area */}
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
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {discountPct > 0 && (
                          <span className="bg-rose-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs">
                            {discountPct}% OFF
                          </span>
                        )}
                        <span className="bg-white/90 backdrop-blur-xs text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                          {typeof item.category === 'object' ? (item.category?.name || 'Fashion') : (item.category || 'Fashion')}
                        </span>
                      </div>

                      {/* Quick Delete Floating Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveFromWishlist(item._id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs hover:bg-rose-50 text-gray-400 hover:text-rose-600 flex items-center justify-center transition shadow-xs cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <Trash2 size={14} />
                      </button>

                      {/* Rating Banner */}
                      <div className="absolute bottom-3 left-3">
                        <div className="inline-flex items-center gap-1 bg-black/75 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[11px] font-bold">
                          <span>{(item.ratings || 4.8).toFixed(1)}</span>
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                          {typeof item.brand === 'object' ? (item.brand?.name || 'ZYRIVO LUXE') : (item.brand || 'ZYRIVO LUXE')}
                        </p>
                        <h3
                          onClick={() => {
                            if (onSelectProduct) {
                              onSelectProduct(item);
                              onClose();
                            }
                          }}
                          className="text-sm font-bold text-gray-900 mt-1 line-clamp-1 hover:text-purple-700 cursor-pointer transition"
                          title={item.name}
                        >
                          {item.name}
                        </h3>

                        {/* Price Row */}
                        <div className="flex items-baseline gap-2 mt-2">
                          <span className="text-lg font-extrabold text-gray-950">
                            {formatINR(price)}
                          </span>
                          {origPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatINR(origPrice)}
                            </span>
                          )}
                          <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                            Free Delivery
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onMoveToCart(item)}
                          className="flex-1 py-2.5 px-4 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-xs active:scale-98"
                        >
                          <ShoppingBag size={14} />
                          <span>MOVE TO BAG</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistDrawer;
