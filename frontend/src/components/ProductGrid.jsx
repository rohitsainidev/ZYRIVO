import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpDown, ChevronRight, RefreshCw, Layers, Compass } from 'lucide-react';
import ProductCard from './ProductCard';
import { fetchProducts, fetchCategories } from '../services/api';

import { FALLBACK_PRODUCTS } from '../data/fallbackProducts';
import { matchProduct } from '../utils/filterUtils';

const diversifyProducts = (list) => {
  if (!list || list.length === 0) return [];
  const ethnic = [];
  const western = [];
  const menTop = [];
  const menBottom = [];
  const footwear = [];
  const bags = [];
  const watches = [];
  const kids = [];
  const home = [];
  const beauty = [];

  list.forEach((p) => {
    if (!p) return;
    const tags = (p.tags || []).map((t) => String(t).toLowerCase());
    const catSlug = (p.category?.slug || '').toLowerCase();

    if (catSlug === 'kids-wear' || tags.includes('kids') || tags.includes('baby')) {
      kids.push(p);
    } else if (catSlug === 'home-living' || tags.includes('home & living') || tags.includes('home')) {
      home.push(p);
    } else if (catSlug === 'beauty-personal-care' || tags.includes('beauty') || tags.includes('skincare') || tags.includes('fragrances')) {
      beauty.push(p);
    } else if (tags.includes('watches') || tags.includes('watch') || catSlug.includes('watch') || tags.includes('sunglasses')) {
      watches.push(p);
    } else if (
      tags.includes('bags') ||
      tags.includes('bag') ||
      tags.includes('tote bags') ||
      tags.includes('crossbody bags') ||
      tags.includes('laptop backpacks') ||
      tags.includes('leather duffel bags') ||
      tags.includes('evening party clutches')
    ) {
      bags.push(p);
    } else if (
      tags.includes('footwear') ||
      tags.includes('shoes') ||
      tags.includes('sneakers') ||
      tags.includes('heels & pumps') ||
      tags.includes('flats & sandals') ||
      tags.includes('punjabi juttis') ||
      tags.includes('derby leather shoes') ||
      tags.includes('block heel sandals') ||
      tags.includes('party stilettos')
    ) {
      footwear.push(p);
    } else if (
      catSlug === 'men-top-wear' ||
      tags.includes('men t-shirts') ||
      tags.includes('polo t-shirts') ||
      tags.includes('casual linen shirts') ||
      tags.includes('formal shirts')
    ) {
      menTop.push(p);
    } else if (
      catSlug === 'men-bottom-wear' ||
      tags.includes('men denim jeans') ||
      tags.includes('chinos & trousers') ||
      tags.includes('track pants & joggers')
    ) {
      menBottom.push(p);
    } else if (catSlug === 'women-western-wear' || tags.includes('western')) {
      western.push(p);
    } else {
      ethnic.push(p);
    }
  });

  // Perfectly balanced multi-category sequence across the entire store
  const buckets = [
    ethnic, western, menTop, footwear, bags, watches, kids, home, beauty,
    western, menBottom, ethnic, footwear, bags, beauty, kids, home, watches
  ];
  const result = [];
  const usedIds = new Set();
  const maxLen = Math.max(...buckets.map((b) => b.length));

  for (let i = 0; i < maxLen; i++) {
    for (const b of buckets) {
      if (i < b.length) {
        const item = b[i];
        if (item && !usedIds.has(item._id)) {
          usedIds.add(item._id);
          result.push(item);
        }
      }
    }
  }

  for (const p of list) {
    if (p && !usedIds.has(p._id)) {
      usedIds.add(p._id);
      result.push(p);
    }
  }

  return result;
};

const ProductGrid = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
  activeCategory: propCategory,
  onCategoryChange,
  searchQuery = '',
  onClearSearch,
  onSelectProduct,
}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [localCategory, setLocalCategory] = useState('all');
  const activeCategory = propCategory !== undefined ? propCategory : localCategory;
  const setActiveCategory = onCategoryChange || setLocalCategory;
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);

  // Load products & categories from API
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      try {
        const [prodData, catData] = await Promise.all([
          fetchProducts({ limit: 1000 }),
          fetchCategories(),
        ]);

        if (isMounted) {
          if (prodData && prodData.products && prodData.products.length > 0) {
            setProducts(prodData.products.filter((p) => p && typeof p === 'object'));
          } else {
            setProducts(FALLBACK_PRODUCTS.filter((p) => p && typeof p === 'object'));
          }

          if (catData && catData.length > 0) {
            setCategories(catData);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching data for grid:', err);
          setProducts(FALLBACK_PRODUCTS.filter((p) => p && typeof p === 'object'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let list = Array.isArray(products)
      ? products.filter((item) => item && typeof item === 'object')
      : [];

    // 1. Search Query filter
    if (searchQuery && searchQuery.trim()) {
      list = list.filter((item) => matchProduct(item, searchQuery));
    }

    // 2. Active Category pill filter
    if (activeCategory && activeCategory !== 'all') {
      list = list.filter((item) => matchProduct(item, activeCategory));
    }

    // 3. Sorting
    if (sortBy === 'price_asc') {
      list.sort((a, b) => {
        const pA = a ? (a.discountPrice || a.price || 0) : 0;
        const pB = b ? (b.discountPrice || b.price || 0) : 0;
        return pA - pB;
      });
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => {
        const pA = a ? (a.discountPrice || a.price || 0) : 0;
        const pB = b ? (b.discountPrice || b.price || 0) : 0;
        return pB - pA;
      });
    } else if (sortBy === 'rating') {
      list.sort((a, b) => ((b?.ratings) || 0) - ((a?.ratings) || 0));
    } else if (sortBy === 'featured') {
      list.sort((a, b) => (b?.isFeatured ? 1 : 0) - (a?.isFeatured ? 1 : 0));
    }

    return list;
  }, [products, activeCategory, searchQuery, sortBy]);

  const HOME_DISPLAY_COUNT = 100;
  const isDefaultHome = !searchQuery && (!activeCategory || activeCategory === 'all');

  // Multi-category diverse showcase for default home; full search/category results on filter
  const displayedProducts = useMemo(() => {
    if (!isDefaultHome) {
      return filteredProducts;
    }
    const diversified = diversifyProducts(filteredProducts);
    return diversified.slice(0, HOME_DISPLAY_COUNT);
  }, [filteredProducts, isDefaultHome]);

  // Helper title for current display
  const getHeaderTitle = () => {
    if (searchQuery) return searchQuery;
    if (activeCategory === 'kurti') return 'Kurtis & Kurtas';
    if (activeCategory === 'saree') return 'Sarees';
    if (activeCategory === 'top') return 'Tops & Blouses';
    if (activeCategory === 't-shirt') return 'T-Shirts & Polos';
    if (activeCategory === 'shoes') return 'Shoes & Footwear';
    if (activeCategory === 'bags') return 'Bags & Luggage';
    if (activeCategory === 'watches') return 'Watches & Accessories';
    if (activeCategory === 'kids') return 'Kids Fashion & Care';
    if (activeCategory === 'home') return 'Home & Living';
    if (activeCategory === 'beauty') return 'Beauty & Personal Care';
    if (activeCategory === 'dress') return 'Dresses';
    if (activeCategory === 'jeans') return 'Jeans & Denim';
    if (activeCategory === 'men') return "Men's Fashion";
    if (activeCategory !== 'all') return activeCategory;
    return 'Trending Styles';
  };

  return (
    <section
      id="featured-collection"
      className={`bg-[#f8f9fa] border-t border-gray-100 scroll-mt-20 transition-all ${
        searchQuery ? 'pt-4 pb-16 sm:pt-6' : 'py-6 sm:py-14'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        {/* Professional Catalog Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-gray-200 gap-4">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight capitalize">
              {getHeaderTitle()}
            </h1>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider hidden sm:inline">
              Sort By:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider py-2 pl-3 pr-8 rounded-lg shadow-2xs hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-600 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid Area */}
        {loading ? (
          /* Skeleton Loader */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
                <div className="aspect-[3/4] bg-gray-200 w-full" />
                <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                  <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-3.5 sm:h-4 bg-gray-200 rounded w-4/5" />
                  <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-1/2" />
                  <div className="pt-2 sm:pt-3 flex justify-between items-center border-t border-gray-100">
                    <div className="h-4 sm:h-5 bg-gray-200 rounded w-1/3" />
                    <div className="h-7 w-7 sm:h-9 sm:w-9 bg-gray-200 rounded-lg sm:rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          /* Empty Search or Filter Result */
          <div className="py-20 text-center space-y-5 bg-white rounded-2xl border border-gray-200 shadow-xs max-w-xl mx-auto p-8">
            <div className="w-16 h-16 rounded-full bg-purple-50 text-[#581c87] flex items-center justify-center mx-auto text-2xl">
              🛍️
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              No products found for "{searchQuery || activeCategory}"
            </h3>
            <p className="text-sm text-gray-500">
              Try searching a different item or click a category above to view popular collections.
            </p>
            <button
              type="button"
              onClick={() => {
                if (onClearSearch) onClearSearch();
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#581c87] hover:bg-[#4a1572] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>View Trending Picks</span>
            </button>
          </div>
        ) : (
          /* Live Product Grid - 2 columns on mobile like Meesho */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product._id)}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

