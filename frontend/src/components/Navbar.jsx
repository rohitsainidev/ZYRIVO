import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronDown,
  Menu,
  X,
  Percent,
  TrendingUp,
  Lock,
  Sparkles,
  Tag,
  Copy,
  Check,
  Clock,
} from 'lucide-react';

const POPULAR_SEARCHES = [
  { label: 'Kurtas & Kurtis', icon: '👗', query: 'Kurtas & Kurtis' },
  { label: 'Sarees', icon: '🥻', query: 'Sarees' },
  { label: 'Tops & Blouses', icon: '👚', query: 'Tops' },
  { label: 'T-Shirts & Polos', icon: '👕', query: 'T-Shirts' },
  { label: 'Shoes & Sneakers', icon: '👟', query: 'Shoes' },
  { label: 'Bags & Totes', icon: '👜', query: 'Bags' },
  { label: 'Watches', icon: '⌚', query: 'Watches' },
  { label: 'Dresses', icon: '💃', query: 'Dresses' },
  { label: 'Denim Jeans', icon: '👖', query: 'Jeans' },
];

const Navbar = ({
  cartCount = 0,
  wishlistCount = 0,
  onCartClick,
  onWishlistClick,
  onProfileClick,
  onSearch,
  currentSearch = '',
  onResetHome,
  loggedInUser = null,
  onAdminClick,
  isAdmin = false,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(currentSearch || '');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
  const [couponCopied, setCouponCopied] = useState(false);

  // 5-Day Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState(() => {
    let target = null;
    try {
      const saved = localStorage.getItem('ZYRIVO_offer_timer_end');
      if (saved && !isNaN(Number(saved)) && Number(saved) > Date.now()) {
        target = Number(saved);
      } else {
        target = Date.now() + 5 * 24 * 60 * 60 * 1000;
        localStorage.setItem('ZYRIVO_offer_timer_end', String(target));
      }
    } catch {
      target = Date.now() + 5 * 24 * 60 * 60 * 1000;
    }
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let target = null;
      try {
        const saved = localStorage.getItem('ZYRIVO_offer_timer_end');
        if (saved) target = Number(saved);
      } catch {}
      if (!target || target <= Date.now()) {
        target = Date.now() + 5 * 24 * 60 * 60 * 1000;
        try { localStorage.setItem('ZYRIVO_offer_timer_end', String(target)); } catch {}
      }

      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyCoupon = (e) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText('ROHIT400');
    } catch {}
    try {
      localStorage.setItem('ZYRIVO_active_coupon', 'ROHIT400');
    } catch {}
    window.dispatchEvent(new CustomEvent('zyrivo:coupon-applied', { detail: 'ROHIT400' }));
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2500);
  };

  const navRef = useRef(null);
  const searchBoxRef = useRef(null);
  const categoryBarRef = useRef(null);
  const isDropdownLocked = useRef(false);

  // Sync searchQuery when currentSearch prop changes (e.g. cleared externally)
  useEffect(() => {
    setSearchQuery(currentSearch || '');
  }, [currentSearch]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveCategory(null);
        setIsProfileOpen(false);
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    if (onSearch) {
      onSearch(val);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSearchFocused(false);
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleSelectSuggestion = (query) => {
    setSearchQuery(query);
    setIsSearchFocused(false);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClearSearch = (e) => {
    e.stopPropagation();
    setSearchQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  const handleItemClick = (e, item, parentCatId = null) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Close dropdown instantly and lock it briefly so hover doesn't re-trigger it
    setActiveCategory(null);
    isDropdownLocked.current = true;
    setTimeout(() => {
      isDropdownLocked.current = false;
    }, 500);

    setIsSearchFocused(false);

    let queryItem = item;
    if (parentCatId === 'men' || activeCategory === 'men') {
      if (item === 'T-Shirts') queryItem = 'Men T-Shirts';
      if (item === 'Denim Jeans') queryItem = 'Men Denim Jeans';
    }

    setSearchQuery(queryItem);
    if (onSearch) {
      onSearch(queryItem);
    }

    // Smooth scroll to catalog products section
    setTimeout(() => {
      const section = document.getElementById('featured-collection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const categories = [
    {
      id: 'women-ethnic',
      name: 'Women Ethnic',
      columns: [
        {
          title: 'Kurtis & Suits',
          items: [
            'Kurtas & Kurtis',
            'Anarkali Kurta Sets',
            'Chikankari Kurtis',
            'Cotton Daily Kurtas',
            'Ethnic Co-ord Sets',
          ],
        },
        {
          title: 'Sarees & Festive',
          items: [
            'Sarees',
            'Banarasi Silk Sarees',
            'Georgette Printed Sarees',
            'Lehengas & Cholis',
            'Dupattas & Shawls',
          ],
        },
      ],
    },
    {
      id: 'women-western',
      name: 'Women Western',
      columns: [
        {
          title: 'Tops & T-Shirts',
          items: [
            'Tops & Blouses',
            'T-Shirts',
            'Crop Tops',
            'Floral Peplum Tops',
            'Casual Tunics',
          ],
        },
        {
          title: 'Dresses & Bottoms',
          items: [
            'Dresses & Jumpsuits',
            'Floral Maxi Dresses',
            'Denim Jeans',
            'Formal Trousers',
            'Blazers & Jackets',
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      columns: [
        {
          title: 'Top Wear',
          items: [
            'T-Shirts',
            'Polo T-Shirts',
            'Oversized Streetwear Tees',
            'Casual Linen Shirts',
            'Formal Shirts',
          ],
        },
        {
          title: 'Bottoms & Footwear',
          items: [
            'Denim Jeans',
            'Chinos & Trousers',
            'Track Pants & Joggers',
            'Casual Sneakers',
            'Derby Leather Shoes',
          ],
        },
      ],
    },
    {
      id: 'shoes',
      name: 'Footwear',
      columns: [
        {
          title: 'Women Footwear',
          items: [
            'Heels & Pumps',
            'Flats & Sandals',
            'Punjabi Juttis',
            'Block Heel Sandals',
            'Party Stilettos',
          ],
        },
        {
          title: 'Men & Sports',
          items: [
            'Casual Sneakers',
            'Derby Leather Shoes',
            'Athletic Running Shoes',
            'Suede Penny Loafers',
            'Chelsea Boots',
          ],
        },
      ],
    },
    {
      id: 'bags',
      name: 'Bags',
      columns: [
        {
          title: 'Handbags & Satchels',
          items: [
            'Tote Bags',
            'Crossbody Bags',
            'Evening Party Clutches',
            'Shoulder & Hobo Bags',
            'Quilted Satchels & Handbags',
          ],
        },
        {
          title: 'Luggage & Travel',
          items: [
            'Laptop Backpacks',
            'Leather Duffel Bags',
            'RFID Wallets & Wristlets',
            'Cabin Trolley Suitcases',
            'Travel Backpacks',
          ],
        },
      ],
    },
    {
      id: 'watches',
      name: 'Watches',
      columns: [
        {
          title: 'Luxury Timepieces',
          items: [
            'Chronograph Watches',
            'Skeleton Automatic Watches',
            'Rose Gold Analog Watches',
            'Smartwatches',
            'Polarized Sunglasses',
          ],
        },
        {
          title: 'Specialty Watches',
          items: [
            'Leather Strap Watches',
            'Sports Digital Watches',
            'Diamond Dial Watches',
            'Vintage Square Watches',
            'Ceramic Two Tone Watches',
          ],
        },
      ],
    },
    {
      id: 'kids',
      name: 'Kids',
      columns: [
        {
          title: 'Boys & Toddlers',
          items: [
            'Boys T-Shirts',
            'Boys Jeans',
            'Girls Frocks & Dresses',
            'Baby Rompers',
            'Kids Sneakers',
          ],
        },
        {
          title: 'Girls & Festive',
          items: [
            'Girls Tops & Skirts',
            'Kids Ethnic Sets',
            'Girls Festive Lehengas',
            'Kids Winter Hoodies',
            'Kids Nightwear',
          ],
        },
      ],
    },
    {
      id: 'home',
      name: 'Home & Living',
      columns: [
        {
          title: 'Bedding & Bath',
          items: [
            'Cotton Bedsheets',
            'Curtains & Drapes',
            'Cushions & Covers',
            'Blankets & Quilts',
            'Bath Towels & Mats',
          ],
        },
        {
          title: 'Kitchen & Decor',
          items: [
            'Cookware Sets',
            'Dinnerware Sets',
            'Wall Art & Clocks',
            'Ceramic Vases & Decor',
            'Storage Containers & Jars',
          ],
        },
      ],
    },
    {
      id: 'beauty',
      name: 'Beauty',
      columns: [
        {
          title: 'Skincare & Makeup',
          items: [
            'Face Wash & Cleansers',
            'Moisturizers & Serums',
            'Sunscreens',
            'Lipsticks & Lip Gloss',
            'Eau de Parfum',
          ],
        },
        {
          title: 'Hair & Body Care',
          items: [
            'Shampoos & Conditioners',
            'Hair Serums & Oils',
            'Body Washes & Scrubs',
            'Eyeliners & Mascaras',
            'Face Packs & Masks',
          ],
        },
      ],
    },
    {
      id: 'offers',
      name: 'Special Offers',
      isSale: true,
      columns: [
        {
          title: 'Budget Stores',
          items: [
            'Under ₹199 Store',
            'Under ₹299 Store',
            'Under ₹499 Store',
            'Under ₹999 Store',
            'Buy 1 Get 1 Free',
          ],
        },
        {
          title: 'Mega Steals',
          items: [
            'Flash Deals of the Day',
            'Flat 70% Off Clearance',
            'New User Extra 15% Off',
            'Combo Saver Packs',
            'Weekend Mega Drops',
          ],
        },
      ],
    },
  ];

  // Currently active category object
  const currentCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-xs select-none">
      {/* ─────────────────────────────────────────────────────────────
          0. Top Luxury Offer Strip (Minimalist Noir Editorial Aesthetic)
         ───────────────────────────────────────────────────────────── */}
      {isTopBannerVisible && (
        <div
          onClick={() => {
            if (onSearch) onSearch('Flat 80% Off');
          }}
          className="w-full bg-gradient-to-r from-[#7a1068] via-[#9f2089] to-[#6b21a8] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-2.5 sm:px-6 relative select-none shadow-xs transition-all duration-300 cursor-pointer hover:brightness-105 group"
          title="Click to explore Flat 80% Off Collection"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left optical balance spacer */}
            <div className="hidden lg:block w-6 shrink-0" />

            {/* Editorial Center Bar */}
            <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-4 text-center tracking-wide overflow-hidden">
              {/* Main Headline */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="text-amber-300 font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[10px] sm:text-[11px]">
                  FESTIVE SPECIAL
                </span>
                <span className="text-white/20 text-xs">|</span>
                <span className="font-semibold text-white tracking-wider text-[10.5px] sm:text-xs">
                  UP TO 80% OFF
                </span>
              </div>

              {/* Minimalist Countdown Timer (visible on md+) */}
              <span className="text-white/20 text-xs hidden md:inline">|</span>
              <div className="hidden md:flex items-center gap-1.5 text-white/85 text-[11px]">
                <span className="text-white/40 uppercase text-[10px] tracking-widest font-medium">ENDS IN</span>
                <span className="font-mono font-semibold tracking-wider text-amber-200 text-[11px]">
                  {timeLeft.days}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>

              <span className="text-white/20 text-xs">|</span>

              {/* Code: ROHIT400 (Clean text without box background) */}
              <div className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={handleCopyCoupon}
                  className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors cursor-pointer"
                  title="Click to copy and auto-apply coupon code"
                >
                  <span className="text-white/50 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">CODE:</span>
                  <span
                    className={`font-mono font-bold tracking-wider text-[11px] sm:text-xs transition-colors ${
                      couponCopied
                        ? 'text-emerald-300 font-extrabold'
                        : 'text-amber-300 hover:text-amber-200 font-extrabold'
                    }`}
                  >
                    {couponCopied ? 'APPLIED ✓' : 'ROHIT400'}
                  </span>
                  <span className="text-white/60 text-[10px] hidden sm:inline ml-1">(₹400 OFF)</span>
                </button>
              </div>
            </div>

            {/* Right: Discreet Close Action */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsTopBannerVisible(false);
              }}
              className="text-white/40 hover:text-white transition cursor-pointer p-1 shrink-0 ml-1.5"
              aria-label="Close offer banner"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. Main Navigation Row
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-6">
          
          {/* Left: Mobile Menu Toggle + Brand Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onResetHome) {
                  onResetHome();
                } else {
                  if (onSearch) onSearch('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <img
                src="/zyrivo-logo.jpg"
                alt="ZYRIVO"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain shadow-2xs group-hover:scale-105 transition-transform"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-serif">
                ZYRIVO
              </span>
            </a>
          </div>

          {/* Center: Search Bar with Live Suggestions */}
          <div ref={searchBoxRef} className="flex-1 max-w-xl hidden sm:block relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  handleSearchChange(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Search for Kurtis, Sarees, Tops, T-Shirts, Shoes, Bags..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#581c87] focus:ring-1 focus:ring-[#581c87]/30 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-black cursor-pointer rounded-full"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl p-3 z-50 animate-in fade-in duration-100 text-left">
                <div className="flex items-center gap-1.5 px-2 pb-2 mb-1 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  <TrendingUp className="w-3 h-3 text-[#581c87]" />
                  <span>Popular Searches</span>
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                  {POPULAR_SEARCHES.filter((item) =>
                    !searchQuery.trim() || item.label.toLowerCase().includes(searchQuery.toLowerCase().trim())
                  ).map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectSuggestion(item.query);
                      }}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-purple-50 text-xs font-medium text-gray-700 hover:text-[#581c87] transition-colors text-left cursor-pointer"
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Actions (Profile, Wishlist, Cart) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">

            {/* Profile Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <button
                type="button"
                onClick={onProfileClick}
                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors py-2 text-sm font-medium cursor-pointer"
              >
                {loggedInUser ? (
                  /* ── Logged IN: avatar with initials + green dot ── */
                  <span className="relative">
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 32, height: 32, borderRadius: '50%',
                      background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
                      color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.03em',
                    }}>
                      {(loggedInUser.name || loggedInUser.phone || '?')
                        .split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                    </span>
                    {/* Green online dot */}
                    <span style={{
                      position: 'absolute', bottom: 0, right: 0,
                      width: 9, height: 9, borderRadius: '50%',
                      background: '#22c55e', border: '2px solid #fff',
                    }} />
                  </span>
                ) : (
                  /* ── Logged OUT: plain user icon ── */
                  <User className="w-5 h-5" />
                )}
                <span className="hidden sm:inline">
                  {loggedInUser
                    ? (loggedInUser.name ? loggedInUser.name.split(' ')[0] : 'Account')
                    : 'Profile'
                  }
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full pt-1 w-56 z-50 animate-in fade-in duration-100">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-3 space-y-2 text-left">
                    <div className="px-3 py-2 border-b border-gray-100">
                      {loggedInUser ? (
                        <>
                          <p className="text-xs text-gray-500">Logged in as</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {loggedInUser.name || `+91 ${loggedInUser.phone}`}
                          </p>
                          {loggedInUser.phone && loggedInUser.name && (
                            <p className="text-xs text-gray-400">+91 {loggedInUser.phone}</p>
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              setIsProfileOpen(false);
                              if (onProfileClick) onProfileClick('overview');
                            }}
                            className="w-full mt-2 py-1.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                          >
                            Open Account
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-xs text-gray-500">Welcome</p>
                          <p className="text-sm font-semibold text-gray-900">Sign in to your account</p>
                          <button
                            type="button"
                            onClick={() => {
                              setIsProfileOpen(false);
                              if (onProfileClick) onProfileClick('phone');
                            }}
                            className="w-full mt-2 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                          >
                            Login / Sign Up
                          </button>
                        </>
                      )}
                    </div>
                    <div className="py-1 text-xs text-gray-700 space-y-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsProfileOpen(false);
                          if (onProfileClick) onProfileClick('orders');
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-gray-50 rounded-md block cursor-pointer"
                      >
                        Orders
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsProfileOpen(false);
                          if (onWishlistClick) onWishlistClick();
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-gray-50 rounded-md block cursor-pointer"
                      >
                        Wishlist
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsProfileOpen(false);
                          if (onProfileClick) onProfileClick('contact');
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-gray-50 rounded-md block cursor-pointer"
                      >
                        Contact Us
                      </button>
                      <div className="pt-1 mt-1 border-t border-gray-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsProfileOpen(false);
                            if (onAdminClick) onAdminClick();
                          }}
                          className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-600 hover:text-gray-900 font-medium rounded-md cursor-pointer flex items-center justify-between text-xs transition"
                        >
                          <span className="flex items-center gap-1.5">
                            {(!loggedInUser || (loggedInUser.role !== 'admin' && loggedInUser.role !== 'supplier')) && (
                              <Lock className="w-3 h-3 text-amber-600" />
                            )}
                            <span>Supplier / Seller Hub</span>
                          </span>
                          <span className="text-[10px] text-gray-400 font-medium">
                            {loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'supplier')
                              ? 'Manage'
                              : 'Merchant Login'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              type="button"
              onClick={onWishlistClick}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm font-medium relative cursor-pointer"
              title="Wishlist"
            >
              <div className="relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Wishlist</span>
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={onCartClick}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm font-medium relative cursor-pointer"
              title="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-gray-900 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 sm:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search Kurtis, Sarees, Shoes..."
              className="w-full pl-10 pr-9 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#581c87]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. Category Navigation Bar — FIXED CONTAINER-ALIGNED DROPDOWN
         ───────────────────────────────────────────────────────────── */}
      <div
        ref={categoryBarRef}
        className="border-t border-gray-100 hidden lg:block bg-white relative overflow-x-clip"
        onMouseLeave={() => setActiveCategory(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered Category Navigation Row */}
          <nav className="flex items-center justify-center gap-3.5 xl:gap-7 text-[13px] font-medium text-gray-700 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onMouseEnter={() => {
                  if (!isDropdownLocked.current) {
                    setActiveCategory(cat.id);
                  }
                }}
                onClick={(e) => handleItemClick(e, cat.name)}
                className={`inline-flex items-center gap-1 py-3 px-1 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  cat.isSale
                    ? 'border-transparent text-rose-600 hover:text-rose-700 font-semibold'
                    : activeCategory === cat.id
                    ? 'border-gray-950 text-gray-950 hover:text-gray-950 font-semibold'
                    : 'border-transparent text-gray-700 hover:text-gray-950'
                }`}
              >
                <span>{cat.name}</span>
                {cat.isSale && <Percent className="w-3 h-3 text-rose-500 inline" />}
              </button>
            ))}
          </nav>

          {/* 
            FIXED DROPDOWN: Positioned relative to the 7xl container!
            This guarantees it can NEVER extend beyond screen boundaries or cut off on either side.
          */}
          {currentCategoryData && (
            <div className="absolute top-full left-4 right-4 z-50 pt-1 animate-in fade-in duration-150">
              <div className="bg-white border border-gray-200 rounded-b-2xl shadow-2xl p-6 sm:p-7 max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-8 sm:gap-12">
                  {currentCategoryData.columns.map((col, idx) => (
                    <div key={idx} className="space-y-3 text-left">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#581c87] border-b border-purple-100 pb-1.5 flex items-center justify-between">
                        <span>{col.title}</span>
                        <span className="text-[10px] font-normal text-gray-400">Top 5</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                              <button
                                type="button"
                                onClick={(e) => handleItemClick(e, item, currentCategoryData.id)}
                                className="text-left w-full hover:text-[#581c87] hover:font-semibold hover:translate-x-1 transition-all block text-xs cursor-pointer py-0.5"
                              >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. Mobile Drawer
         ───────────────────────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 flex">
          <div className="w-[300px] bg-white h-full overflow-y-auto p-5 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img
                  src="/zyrivo-logo.jpg"
                  alt="ZYRIVO"
                  className="w-7 h-7 rounded-md object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="text-xl font-bold font-serif text-gray-950">ZYRIVO</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {categories.map((cat) => (
                <div key={cat.id} className="border-b border-gray-100 py-2">
                  <button
                    type="button"
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className="w-full flex items-center justify-between text-sm font-medium text-gray-800 cursor-pointer"
                  >
                    <span className={cat.isSale ? 'text-rose-600 font-semibold' : ''}>{cat.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${activeCategory === cat.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeCategory === cat.id && (
                    <div className="pl-3 py-2 space-y-3 bg-gray-50 rounded-lg my-1 text-xs text-gray-600">
                      {cat.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1">
                          <p className="font-semibold text-gray-900 pt-1">{col.title}</p>
                          {col.items.map((it, iIdx) => (
                            <button
                              type="button"
                              key={iIdx}
                              onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                handleItemClick(e, it, cat.id);
                              }}
                              className="block w-full text-left py-0.5 text-gray-500 hover:text-black cursor-pointer"
                            >
                              {it}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onAdminClick) onAdminClick();
                }}
                className="w-full py-2.5 bg-linear-to-r from-[#9f2089] to-[#7c3aed] text-white font-black text-xs rounded-lg cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                {(!loggedInUser || (loggedInUser.role !== 'admin' && loggedInUser.role !== 'supplier')) ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-amber-300" />
                    <span>Seller Hub (Supplier Login)</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Seller / Admin Hub</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onProfileClick) onProfileClick();
                }}
                className="w-full py-2.5 bg-gray-900 text-white font-medium text-xs rounded-lg cursor-pointer"
              >
                Login / Sign Up
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;

