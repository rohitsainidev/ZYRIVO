import React, { useState, useEffect, useMemo } from 'react';
import {
  Star,
  Heart,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  Ruler,
} from 'lucide-react';
import ProductCard from './ProductCard';
import SizeChartModal from './SizeChartModal';
import { fetchProducts } from '../services/api';
import { FALLBACK_PRODUCTS } from '../data/fallbackProducts';

const ProductDetailPage = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted = false,
  wishlistIds = [],
  similarProducts: propSimilarProducts,
  onSelectProduct,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [catalog, setCatalog] = useState([]);

  // Compute available sizes dynamically based on product category & tags
  const availableSizes = useMemo(() => {
    const catSlug = (product?.category?.slug || '').toLowerCase();
    const catName = (product?.category?.name || '').toLowerCase();
    const tags = (Array.isArray(product?.tags) ? product.tags : []).map((t) => String(t).toLowerCase());

    if (
      catSlug.includes('footwear') ||
      catSlug.includes('shoes') ||
      catName.includes('footwear') ||
      tags.includes('shoes') ||
      tags.includes('sneakers') ||
      tags.includes('heels')
    ) {
      return ['6', '7', '8', '9', '10'];
    }

    if (
      catSlug.includes('bottom') ||
      catName.includes('bottom') ||
      tags.includes('jeans') ||
      tags.includes('trousers') ||
      tags.includes('joggers') ||
      tags.includes('pants')
    ) {
      return ['28', '30', '32', '34', '36'];
    }

    if (
      catSlug.includes('watch') ||
      catSlug.includes('bag') ||
      catSlug.includes('beauty') ||
      catSlug.includes('home') ||
      tags.includes('watch') ||
      tags.includes('bag') ||
      tags.includes('saree')
    ) {
      return ['Free Size'];
    }

    return ['S', 'M', 'L', 'XL', 'XXL'];
  }, [product]);

  // When product changes, reset active image and size and jump immediately to top
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setSelectedSize(availableSizes[0] || 'M');
    window.scrollTo(0, 0);
  }, [product?._id, availableSizes]);

  // Load catalog to find similar products
  useEffect(() => {
    let isMounted = true;
    const loadCatalog = async () => {
      try {
        const data = await fetchProducts({ limit: 1000 });
        if (isMounted) {
          if (data && data.products && data.products.length > 0) {
            setCatalog(data.products);
          } else {
            setCatalog(FALLBACK_PRODUCTS);
          }
        }
      } catch (e) {
        if (isMounted) setCatalog(FALLBACK_PRODUCTS);
      }
    };
    loadCatalog();
    return () => { isMounted = false; };
  }, []);

  // Compute similar products
  const computedSimilar = useMemo(() => {
    if (propSimilarProducts && propSimilarProducts.length > 0) return propSimilarProducts;
    if (!product || catalog.length === 0) return [];

    const targetTags = (Array.isArray(product.tags) ? product.tags : []).map((t) => String(t).toLowerCase());
    const targetCatSlug = (product.category?.slug || '').toLowerCase();
    const targetCatName = (product.category?.name || '').toLowerCase();
    const primarySubtag = targetTags.find((t) =>
      !['women','men','unisex','ethnic','western','luxury','exclusive','festive','basics','casual','formal','shoes','bags','watch','watches'].includes(t)
    );

    // Track duplicates by ID, normalized Name, and Image URL
    const seenIds = new Set([String(product._id)]);
    const seenNames = new Set([String(product.name || '').trim().toLowerCase()]);
    const seenImages = new Set();
    const currentImg = product.images?.[0]?.url || (typeof product.images?.[0] === 'string' ? product.images[0] : '');
    if (currentImg) seenImages.add(currentImg);

    const isDuplicate = (p) => {
      const pid = String(p._id);
      const pname = String(p.name || '').trim().toLowerCase();
      const pimg = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : '');
      if (seenIds.has(pid)) return true;
      if (pname && seenNames.has(pname)) return true;
      if (pimg && seenImages.has(pimg)) return true;
      return false;
    };

    const addProduct = (p) => {
      seenIds.add(String(p._id));
      if (p.name) seenNames.add(String(p.name).trim().toLowerCase());
      const pimg = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : '');
      if (pimg) seenImages.add(pimg);
      selected.push(p);
    };

    const selected = [];

    // Tier 1: Scored items based on subtag, category, and shared tags
    const scoredCandidates = catalog
      .filter((p) => String(p._id) !== String(product._id))
      .map((p) => {
        let score = 0;
        const pTags = (Array.isArray(p.tags) ? p.tags : []).map((t) => String(t).toLowerCase());
        const pCatSlug = (p.category?.slug || '').toLowerCase();
        const pCatName = (p.category?.name || '').toLowerCase();
        if (primarySubtag && pTags.includes(primarySubtag)) score += 12;
        score += pTags.filter((t) => targetTags.includes(t)).length * 3;
        if (pCatSlug && pCatSlug === targetCatSlug) score += 6;
        else if (pCatName && pCatName === targetCatName) score += 5;
        if (targetTags.includes('men') && pTags.includes('men')) score += 2;
        if (targetTags.includes('women') && pTags.includes('women')) score += 2;
        return { product: p, score };
      })
      .filter((item) => item.score > 2)
      .sort((a, b) => b.score - a.score);

    for (const item of scoredCandidates) {
      if (selected.length >= 20) break;
      if (!isDuplicate(item.product)) {
        addProduct(item.product);
      }
    }

    // Tier 2: Backfill from the exact same category
    if (selected.length < 20) {
      const sameCatItems = catalog.filter((p) => {
        const pCatSlug = (p.category?.slug || '').toLowerCase();
        const pCatName = (p.category?.name || '').toLowerCase();
        return (pCatSlug && pCatSlug === targetCatSlug) || (pCatName && pCatName === targetCatName);
      });
      for (const p of sameCatItems) {
        if (selected.length >= 20) break;
        if (!isDuplicate(p)) {
          addProduct(p);
        }
      }
    }

    // Tier 3: Backfill from related categories or general catalog
    if (selected.length < 20) {
      for (const p of catalog) {
        if (selected.length >= 20) break;
        if (!isDuplicate(p)) {
          addProduct(p);
        }
      }
    }

    return selected.slice(0, 20);
  }, [product, catalog, propSimilarProducts]);

  const similarProducts = computedSimilar;
  if (!product) return null;

  // Extract images
  const images = product.images && product.images.length > 0
    ? product.images.map((img) => (typeof img === 'string' ? img : img.url))
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
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = () => {
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  };

  return (
    <div className="bg-white min-h-screen py-4 sm:py-8 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Main Product Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Image Stage */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-50 group">
              <img
                src={images[selectedImage] || images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <button
                type="button"
                onClick={handleWishlist}
                aria-label="Wishlist"
                className={`absolute top-4 right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  isWishlisted
                    ? 'bg-red-50 text-red-600 scale-105'
                    : 'bg-white/95 text-gray-600 hover:text-red-500 hover:bg-white hover:scale-110'
                }`}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWishlisted ? 'fill-red-600 text-red-600' : ''
                  }`}
                />
              </button>
            </div>

            {/* Thumbnails list if multiple */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-18 h-22 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      selectedImage === idx
                        ? 'border-[#581c87] ring-2 ring-purple-600/20'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

            {/* Right: Product Info & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Brand & Category Strip */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#581c87] bg-purple-50 px-2.5 py-1 rounded-lg">
                    {(product.brand || 'ZYRIVO').replace(/velora/gi, 'ZYRIVO')}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs font-medium text-gray-500">
                    {product.category?.name || 'Exclusive Fashion'}
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-950 font-serif leading-tight mb-3">
                  {product.name?.replace(/velora/gi, 'ZYRIVO')}
                </h1>

                {/* Rating pill */}
                <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
                  <div className="inline-flex items-center gap-1 bg-emerald-700 text-white px-2.5 py-0.5 rounded-md text-xs font-bold shadow-2xs">
                    <span>{(product.ratings || 4.8).toFixed(1)}</span>
                    <Star className="w-3 h-3 fill-white text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">
                    {product.numReviews || 34} Ratings & Reviews
                  </span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs font-medium text-[#9f2089] bg-pink-50 px-2 py-0.5 rounded">
                    Special Price
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                    {formatINR(currentPrice)}
                  </span>
                  {originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatINR(originalPrice)}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-sm font-bold text-emerald-700">
                      {discountPercent}% Off
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6 pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Product Details
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {product.description ||
                      'Crafted with premium quality fabric, designed for lasting comfort, elegance, and easy everyday wear.'}
                  </p>
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Select Size
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsSizeChartOpen(true)}
                      className="text-xs text-[#581c87] font-semibold cursor-pointer hover:underline flex items-center gap-1 transition"
                    >
                      <Ruler className="w-3.5 h-3.5 text-[#581c87]" />
                      <span>Size Chart</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-12 h-12 px-3 rounded-xl border-2 font-bold text-sm flex items-center justify-center transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'border-[#581c87] bg-purple-50 text-[#581c87] shadow-xs'
                            : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-white transition cursor-pointer font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-gray-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-white transition cursor-pointer font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to Cart & Wishlist */}
              <div>
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <button
                    type="button"
                    onClick={handleAdd}
                    disabled={isAdded}
                    className={`flex-1 py-3.5 sm:py-4 px-3 sm:px-5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm transition-all duration-200 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white hover:bg-gray-50 text-[#581c87] border-2 border-[#581c87]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 animate-bounce" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add to Bag
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onBuyNow) {
                        onBuyNow({
                          ...product,
                          selectedSize,
                          quantity,
                        });
                      }
                    }}
                    className="flex-1 py-3.5 sm:py-4 px-3 sm:px-5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 bg-[#9f2089] hover:bg-[#851972] text-white shadow-lg shadow-pink-900/20 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWishlist}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center ${
                      isWishlisted
                        ? 'border-red-300 bg-red-50 text-red-600'
                        : 'border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-500 hover:bg-red-50/50'
                    }`}
                    title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
                  </button>
                </div>

                {/* Assurance Badges */}
                <div className="pt-4 grid grid-cols-3 gap-2 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-5 h-5 text-gray-700 mb-1" />
                    <span className="text-[11px] font-bold text-gray-800">100% Genuine</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Truck className="w-5 h-5 text-gray-700 mb-1" />
                    <span className="text-[11px] font-bold text-gray-800">Free Express Delivery</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RotateCcw className="w-5 h-5 text-gray-700 mb-1" />
                    <span className="text-[11px] font-bold text-gray-800">7 Days Easy Return</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        {/* Similar Products Grid */}
        {similarProducts.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="border-b border-gray-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {similarProducts.map((item) => (
                <ProductCard
                  key={item._id}
                  product={item}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(item._id)}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </div>
        )}
        {/* Size Chart Modal Popup */}
        <SizeChartModal
          isOpen={isSizeChartOpen}
          onClose={() => setIsSizeChartOpen(false)}
          product={product}
          selectedSize={selectedSize}
          onSelectSize={(size) => setSelectedSize(size)}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;

