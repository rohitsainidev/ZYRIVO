import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Check, ChevronRight } from 'lucide-react';

const ProductCard = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  onSelectProduct,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  // Extract images
  const images = product.images && product.images.length > 0
    ? product.images.map(img => typeof img === 'string' ? img : img.url)
    : ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800'];

  const primaryImage = images[0];
  const secondaryImage = images[1] || images[0];

  const currentPrice = product.discountPrice && product.discountPrice > 0
    ? product.discountPrice
    : product.price;

  const originalPrice = product.discountPrice && product.discountPrice > 0
    ? product.price
    : null;

  const discountPercent = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(product);
    }
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  };

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#9f2089]/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <img
          src={isHovered ? secondaryImage : primaryImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isFeatured && (
            <span className="bg-slate-900/90 text-white text-[9px] sm:text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded sm:rounded-md uppercase shadow-xs">
              Bestseller
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#9f2089] text-white text-[9px] sm:text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded sm:rounded-md uppercase shadow-xs">
              {discountPercent}% Off
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistClick}
          aria-label="Wishlist"
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isWishlisted
              ? 'bg-rose-50 text-[#f43f5e] scale-105'
              : 'bg-white/90 text-slate-600 hover:text-rose-500 hover:bg-white hover:scale-110'
          }`}
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
              isWishlisted ? 'fill-[#f43f5e] text-[#f43f5e]' : ''
            }`}
          />
        </button>
      </div>

      {/* Product Content Details - Compact & clean for 2-column mobile layout */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            <span className="truncate max-w-[80px] sm:max-w-[120px]">{(product.brand || 'ZYRIVO').replace(/velora/gi, 'ZYRIVO')}</span>
            <span className="text-slate-300">•</span>
            <span className="truncate max-w-[70px] sm:max-w-[100px]">
              {product.category?.name || 'Exclusive'}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif font-medium text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#9f2089] transition-colors mb-1.5 min-h-[32px] sm:min-h-[40px]">
            {product.name?.replace(/velora/gi, 'ZYRIVO')}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1 mb-2">
            <div className="inline-flex items-center gap-0.5 bg-emerald-600 text-white px-1.5 py-0.2 rounded text-[10px] sm:text-xs font-bold">
              <span>{(product.ratings || 4.8).toFixed(1)}</span>
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white" />
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400">
              ({product.numReviews || 12})
            </span>
            <span className="hidden sm:inline text-[9px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded ml-auto">
              Free Delivery
            </span>
          </div>
        </div>

        {/* Price & Action Buttons Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-none">
                {formatINR(currentPrice)}
              </span>
              {originalPrice && (
                <span className="text-[10px] sm:text-[11px] text-slate-400 line-through leading-none">
                  {formatINR(originalPrice)}
                </span>
              )}
            </div>
            {originalPrice && discountPercent > 0 && (
              <div className="mt-0.5 flex items-center gap-1">
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm leading-none">
                  {discountPercent}% off
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 leading-none">
                  Save {formatINR(originalPrice - currentPrice)}
                </span>
              </div>
            )}
          </div>

          {/* Add to Bag Icon Button */}
          <button
            onClick={handleQuickAdd}
            disabled={isAdded}
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer ${
              isAdded
                ? 'bg-emerald-600 text-white scale-105'
                : 'bg-slate-900 hover:bg-[#9f2089] text-white hover:shadow-md active:scale-95'
            }`}
            title="Add to Shopping Bag"
          >
            {isAdded ? (
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ) : (
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

