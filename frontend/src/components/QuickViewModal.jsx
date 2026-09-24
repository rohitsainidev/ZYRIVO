import React, { useState, useMemo } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';

const QuickViewModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  allProducts = [],
  onSelectProduct,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Compute similar products
  const modalSimilarProducts = useMemo(() => {
    if (!product || !allProducts || allProducts.length === 0) return [];
    const targetTags = (Array.isArray(product.tags) ? product.tags : []).map((t) => String(t).toLowerCase());
    const targetCatSlug = (product.category?.slug || '').toLowerCase();
    const primarySubtag = targetTags.find((t) =>
      !['women','men','unisex','ethnic','western','luxury','exclusive','festive','basics','casual','formal','shoes','bags','watch','watches'].includes(t)
    );
    return allProducts
      .filter((p) => p._id !== product._id)
      .map((p) => {
        let score = 0;
        const pTags = (Array.isArray(p.tags) ? p.tags : []).map((t) => String(t).toLowerCase());
        const pCatSlug = (p.category?.slug || '').toLowerCase();
        if (primarySubtag && pTags.includes(primarySubtag)) score += 10;
        score += pTags.filter((t) => targetTags.includes(t)).length * 3;
        if (pCatSlug && pCatSlug === targetCatSlug) score += 5;
        return { product: p, score };
      })
      .filter((item) => item.score > 2)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.product);
  }, [product, allProducts]);
  if (!isOpen || !product) return null;

  const images = product.images && product.images.length > 0
    ? product.images.map(img => typeof img === 'string' ? img : img.url)
    : ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800'];

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

  const handleAdd = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedSize,
        quantity,
      });
    }
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-black bg-white/80 backdrop-blur-md rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col justify-between">
          <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white shadow-inner">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
            />
            {discountPercent > 0 && (
              <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === idx ? 'border-black ring-2 ring-black/10' : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          {/* Category & Brand */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
              {product.category?.name || product.brand || 'ZYRIVO LUXURY'}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              SKU: {product._id ? product._id.slice(-6).toUpperCase() : 'ZYR-882'}
            </span>
          </div>

          {/* Product Title */}
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-snug mb-2">
            {product.name}
          </h2>

          {/* Ratings & Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.ratings || 4.8)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {product.ratings || 4.8}
            </span>
            <span className="text-xs text-gray-400">
              ({product.numReviews || 24} Verified Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5 pb-4 border-b border-gray-100">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {formatINR(currentPrice)}
            </span>
            {originalPrice && (
              <span className="text-base text-gray-400 line-through font-normal">
                {formatINR(originalPrice)}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                Save {formatINR(originalPrice - currentPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {product.description ||
              'Crafted with uncompromising precision using premier materials. Designed for high fashion and durable everyday elegance.'}
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Select Size</span>
              <button className="text-xs text-amber-700 underline font-medium hover:text-amber-800">Size Guide</button>
            </div>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-11 rounded-lg border font-medium text-sm flex items-center justify-center transition-all ${
                    selectedSize === size
                      ? 'border-black bg-black text-white shadow-md'
                      : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-3 mb-6">
            {/* Quantity Counter */}
            <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs transition"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-semibold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs transition"
              >
                +
              </button>
            </div>

            {/* Add To Cart Button */}
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-300 ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-black hover:bg-gray-800 text-white active:scale-[0.98]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 animate-bounce" /> Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                </>
              )}
            </button>

            {/* Wishlist toggle */}
            <button
              onClick={() => onToggleWishlist && onToggleWishlist(product)}
              className={`p-3 rounded-xl border transition-colors ${
                isWishlisted
                  ? 'border-red-200 bg-red-50 text-red-600'
                  : 'border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50/50'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
            </button>
          </div>

          {/* Value Props Strip */}
          <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-gray-500 mb-6">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-gray-700 mb-1" />
              <span className="text-[10px] uppercase font-semibold">100% Authentic</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-4 h-4 text-gray-700 mb-1" />
              <span className="text-[10px] uppercase font-semibold">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-4 h-4 text-gray-700 mb-1" />
              <span className="text-[10px] uppercase font-semibold">14-Day Returns</span>
            </div>
          </div>

          {/* Similar Products Carousel — no heading, just cards */}
          {modalSimilarProducts.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {modalSimilarProducts.map((item) => {
                  const itemImg = item.images && item.images.length > 0
                    ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
                    : 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800';
                  const itemPrice = item.discountPrice || item.price;
                  return (
                    <button
                      key={item._id}
                      type="button"
                      onClick={() => {
                        if (onSelectProduct) {
                          onSelectProduct(item);
                          setSelectedImage(0);
                        }
                      }}
                      className="group/item flex-shrink-0 w-28 bg-gray-50 hover:bg-purple-50/60 p-2 rounded-xl border border-gray-200 hover:border-purple-300 transition-all text-left cursor-pointer shadow-2xs hover:shadow-sm"
                    >
                      <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-white mb-1.5">
                        <img src={itemImg} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300" />
                      </div>
                      <p className="text-[11px] font-medium text-gray-800 line-clamp-1 leading-tight mb-0.5">{item.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">{formatINR(itemPrice)}</span>
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">★ {(item.ratings || 4.8).toFixed(1)}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

