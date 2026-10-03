import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import ProductDetailPage from './components/ProductDetailPage';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import AdminPortal from './components/admin/AdminPortal';
import SupplierLoginPage from './components/admin/SupplierLoginPage';
import CheckoutModal from './components/CheckoutModal';
import { CheckCircle2, Heart, ShoppingBag, X } from 'lucide-react';
import { fetchProducts } from './services/api';
import { FALLBACK_PRODUCTS } from './data/fallbackProducts';

function App() {
  // Cart state persisted in localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ZYRIVO_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.some((i) => i._id === 'sample-1' || i._id === 'sample-2')
        ) {
          localStorage.removeItem('ZYRIVO_cart');
          return [];
        }
        return parsed;
      }
    } catch (e) {}
    return [];
  });

  // Wishlist state (array of product IDs) persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('ZYRIVO_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Clear old dummy mock items from previous session if any
        if (
          Array.isArray(parsed) &&
          (JSON.stringify(parsed) === JSON.stringify(['fb-1', 'fb-5']) ||
            JSON.stringify(parsed) === JSON.stringify(['fb-ethnic-kurta-3', 'fb-western-dress-1']))
        ) {
          localStorage.removeItem('ZYRIVO_wishlist');
          return [];
        }
        return parsed;
      }
    } catch (e) {}
    return [];
  });

  const [wishlistObjects, setWishlistObjects] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutCoupon, setCheckoutCoupon] = useState(() => {
    try {
      return localStorage.getItem('ZYRIVO_active_coupon') || null;
    } catch {
      return null;
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    try { const u = localStorage.getItem('ZYRIVO_user'); return u ? JSON.parse(u) : null; } catch { return null; }
  });
  const [pendingAdminRedirect, setPendingAdminRedirect] = useState(false);
  const [isSupplierLoginPage, setIsSupplierLoginPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').toLowerCase();
      const path = (window.location.pathname || '').toLowerCase();
      return hash === '#supplier-login' || hash === '#seller-login' || path.includes('/supplier-login');
    }
    return false;
  });
  const [isLoginPage, setIsLoginPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').toLowerCase();
      const path = (window.location.pathname || '').toLowerCase();
      return hash === '#login' || path.includes('/login');
    }
    return false;
  });

  const [isAdminView, setIsAdminView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = (window.location.pathname || '').toLowerCase();
      const hash = (window.location.hash || '').toLowerCase();
      const search = (window.location.search || '').toLowerCase();
      const hasAdmin = path.includes('admin') || hash.includes('admin') || search.includes('admin');
      if (hasAdmin) {
        try {
          const u = localStorage.getItem('ZYRIVO_user');
          if (u) {
            const parsed = JSON.parse(u);
            if (parsed && (parsed.role === 'admin' || parsed.role === 'supplier')) return true;
          }
        } catch {}
      }
    }
    return false;
  });

  // Listen for browser navigation & protect #admin / #supplier-login / #login routes
  useEffect(() => {
    const handleUrlChange = () => {
      const path = (window.location.pathname || '').toLowerCase();
      const hash = (window.location.hash || '').toLowerCase();
      const search = (window.location.search || '').toLowerCase();
      const hasSupplierLogin = hash === '#supplier-login' || hash === '#seller-login' || path.includes('/supplier-login');
      const hasLogin = hash === '#login' || path.includes('/login');
      const hasAdmin = path.includes('admin') || hash.includes('admin') || search.includes('admin');

      if (hasSupplierLogin) {
        setIsSupplierLoginPage(true);
        setIsAdminView(false);
        setIsLoginPage(false);
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setIsProfileOpen(false);
        return;
      }

      if (hasLogin) {
        setIsLoginPage(true);
        setIsSupplierLoginPage(false);
        setIsAdminView(false);
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setIsProfileOpen(false);
        return;
      }

      if (hasAdmin) {
        const isAuthorized = loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'supplier');
        if (!isAuthorized) {
          setIsAdminView(false);
          setIsSupplierLoginPage(true);
          setIsLoginPage(false);
          showToast('Please login with an authorized Supplier or Admin account', 'info');
          try {
            window.history.replaceState(null, '', '#supplier-login');
          } catch {}
        } else {
          setIsAdminView(true);
          setIsSupplierLoginPage(false);
          setIsLoginPage(false);
          setIsCartOpen(false);
          setIsWishlistOpen(false);
          setIsProfileOpen(false);
        }
      } else {
        setIsAdminView(false);
        setIsSupplierLoginPage(false);
        setIsLoginPage(false);
      }
    };

    // Check on mount if user navigated directly
    const path = (window.location.pathname || '').toLowerCase();
    const hash = (window.location.hash || '').toLowerCase();
    if (hash === '#supplier-login' || hash === '#seller-login' || path.includes('/supplier-login')) {
      setIsSupplierLoginPage(true);
      setIsLoginPage(false);
      setIsAdminView(false);
    } else if (hash === '#login' || path.includes('/login')) {
      setIsLoginPage(true);
      setIsSupplierLoginPage(false);
      setIsAdminView(false);
    } else if ((path.includes('admin') || hash.includes('admin')) && (!loggedInUser || (loggedInUser.role !== 'admin' && loggedInUser.role !== 'supplier'))) {
      handleUrlChange();
    }

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [loggedInUser]);

  const [allProductsCatalog, setAllProductsCatalog] = useState([]);
  const [toast, setToast] = useState(null);
  const [pendingCheckout, setPendingCheckout] = useState(false);



  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ZYRIVO_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ZYRIVO_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  // Load catalog to populate full objects
  const loadCatalog = async () => {
    try {
      const data = await fetchProducts({ limit: 1000 });
      if (data && data.products && data.products.length > 0) {
        setAllProductsCatalog(data.products);
      } else {
        setAllProductsCatalog(FALLBACK_PRODUCTS);
      }
    } catch (e) {
      setAllProductsCatalog(FALLBACK_PRODUCTS);
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  // Compute full wishlist product objects
  const fullWishlistItems = React.useMemo(() => {
    const catalog = allProductsCatalog.length > 0 ? allProductsCatalog : FALLBACK_PRODUCTS;
    return wishlist
      .map((id) => id && catalog.find((p) => p && p._id === id))
      .filter(Boolean);
  }, [wishlist, allProductsCatalog]);

  const showToast = (message, type = 'cart') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev?.id ? null : prev));
    }, 3500);
  };

  // Sync coupon when applied from offer strip or anywhere in store
  useEffect(() => {
    const handleCouponApplied = (e) => {
      const code = e?.detail || localStorage.getItem('ZYRIVO_active_coupon');
      if (code) {
        setCheckoutCoupon(code);
        const discountAmt = code === 'ROHIT400' ? 400 : (code === 'ZYRIVO100' ? 100 : 200);
        showToast(`🎉 Coupon "${code}" Applied! Flat ₹${discountAmt} OFF will be deducted at checkout`, 'cart');
      }
    };
    window.addEventListener('zyrivo:coupon-applied', handleCouponApplied);
    return () => window.removeEventListener('zyrivo:coupon-applied', handleCouponApplied);
  }, []);

  // Add to cart with support for sizes & quantity
  const handleAddToCart = (product) => {
    const size = product.selectedSize || 'M';
    const qtyToAdd = product.quantity || 1;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item._id === product._id && (item.selectedSize || 'M') === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qtyToAdd,
        };
        return updated;
      }

      return [
        ...prev,
        {
          ...product,
          selectedSize: size,
          quantity: qtyToAdd,
        },
      ];
    });

    showToast(`Added "${product.name}" to your Shopping Bag`, 'cart');
  };

  const handleUpdateCartQuantity = (productId, newQty, size) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item._id === productId && (item.selectedSize || 'M') === (size || 'M')) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item._id === productId && (item.selectedSize || 'M') === (size || 'M'))
      )
    );
    showToast('Item removed from Shopping Bag', 'info');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Shopping Bag cleared', 'info');
  };

  const handleCheckout = (coupon = null) => {
    const activeCoupon = coupon || localStorage.getItem('ZYRIVO_active_coupon') || checkoutCoupon;
    if (activeCoupon) setCheckoutCoupon(activeCoupon);
    if (!loggedInUser) {
      setPendingCheckout(true);
      setIsCartOpen(false);
      setIsLoginPage(true);
      try {
        window.history.pushState(null, '', '#login');
      } catch {}
      showToast('Please login to complete your order', 'info');
      return;
    }

    setIsCartOpen(false);
    setIsProfileOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    if (!loggedInUser) {
      setPendingCheckout(true);
      setIsCartOpen(false);
      setIsLoginPage(true);
      try {
        window.history.pushState(null, '', '#login');
      } catch {}
      showToast('Please login to complete your order', 'info');
    } else {
      setIsCartOpen(false);
      setIsProfileOpen(false);
      setIsCheckoutOpen(true);
    }
  };

  // Toggle wishlist
  const handleToggleWishlist = (product) => {
    const isSaved = wishlist.includes(product._id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((id) => id !== product._id));
      showToast(`Removed "${product.name}" from Wishlist`, 'wishlist');
    } else {
      setWishlist((prev) => [...prev, product._id]);
      showToast(`Saved "${product.name}" to private Wishlist`, 'wishlist');
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    showToast('Item removed from Wishlist', 'wishlist');
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    handleRemoveFromWishlist(product._id);
    showToast(`Moved "${product.name}" to Shopping Bag`, 'cart');
  };

  const handleClearWishlist = () => {
    setWishlist([]);
    showToast('Wishlist cleared', 'info');
  };

  const handleMoveToWishlist = (product) => {
    handleRemoveCartItem(product._id, product.selectedSize);
    setWishlist((prev) => (prev.includes(product._id) ? prev : [...prev, product._id]));
    showToast(`Saved "${product.name}" to Wishlist ❤️`, 'wishlist');
  };

  // Drawer/Page click toggles
  const handleCartClick = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
      return;
    }
    setIsCartOpen(true);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setIsSupplierLoginPage(false);
    setSelectedProduct(null);
    try {
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    } catch {}
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  const handleWishlistClick = () => {
    if (isWishlistOpen) {
      setIsWishlistOpen(false);
      return;
    }
    setIsWishlistOpen(true);
    setIsCartOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setIsSupplierLoginPage(false);
    setSelectedProduct(null);
    try {
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    } catch {}
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  const [profileInitialTab, setProfileInitialTab] = useState('overview');

  const handleSupplierLoginSuccess = (user) => {
    setLoggedInUser(user);
    setIsSupplierLoginPage(false);
    setIsAdminView(true);
    setIsLoginPage(false);
    setIsProfileOpen(false);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setSelectedProduct(null);
    try {
      window.history.pushState(null, '', '#admin');
    } catch {}
    showToast(`Welcome to ZYRIVO Supplier Hub, ${user.name || 'Merchant'}!`, 'info');
  };

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
    setIsLoginPage(false);
    setIsSupplierLoginPage(false);
    showToast(`Welcome to ZYRIVO, ${user.name || 'Member'}!`, 'info');

    if (pendingCheckout) {
      setPendingCheckout(false);
      setIsLoginPage(false);
      setIsCartOpen(false);
      setIsCheckoutOpen(true);
      try {
        window.history.pushState(null, '', '/');
      } catch {}
      showToast('Welcome back! You can now complete your checkout.', 'cart');
    } else {
      try {
        window.history.pushState(null, '', '/');
      } catch {}
    }
  };

  const handleProfileClick = (tab = 'overview') => {
    if (!loggedInUser) {
      setIsLoginPage(true);
      setIsProfileOpen(false);
      setIsCartOpen(false);
      setIsWishlistOpen(false);
      setIsAdminView(false);
      setSelectedProduct(null);
      try {
        window.history.pushState(null, '', '#login');
      } catch {}
      return;
    }
    if (isProfileOpen && (tab === 'overview' || !tab)) {
      setIsProfileOpen(false);
      return;
    }
    setProfileInitialTab(typeof tab === 'string' ? tab : 'overview');
    setIsProfileOpen(true);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setSelectedProduct(null);
    try {
      if (window.location.hash === '#admin' || window.location.hash === '#login') {
        window.history.pushState(null, '', '/');
      }
    } catch {}
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    window.scrollTo(0, 0);
  };

  const handleBackToGrid = () => {
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    window.scrollTo(0, 0);
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setTimeout(() => {
      const section = document.getElementById('featured-collection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleResetHome = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setIsSupplierLoginPage(false);
    try {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname || '/');
      }
      window.history.pushState(null, '', '/');
    } catch {}
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  const handleShopClick = () => {
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsProfileOpen(false);
    setIsAdminView(false);
    setIsLoginPage(false);
    setIsSupplierLoginPage(false);
    const section = document.getElementById('featured-collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleOpenAdmin = () => {
    const isAuthorized = loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'supplier');

    if (!isAuthorized) {
      setIsSupplierLoginPage(true);
      setIsAdminView(false);
      setIsLoginPage(false);
      setIsProfileOpen(false);
      setIsCartOpen(false);
      setIsWishlistOpen(false);
      setSelectedProduct(null);
      try {
        window.history.pushState(null, '', '#supplier-login');
      } catch {}
      return;
    }

    setIsAdminView((prev) => {
      const nextState = !prev;
      try {
        window.history.pushState(null, '', nextState ? '#admin' : '/');
      } catch {}
      return nextState;
    });
    setIsSupplierLoginPage(false);
    setIsLoginPage(false);
    setIsProfileOpen(false);
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setSelectedProduct(null);
  };

  const handleBackToStore = () => {
    setIsAdminView(false);
    setIsSupplierLoginPage(false);
    setIsLoginPage(false);
    try {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname || '/');
      }
      window.history.pushState(null, '', '/');
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full bg-[#f8fafc] text-slate-900 flex flex-col font-sans relative selection:bg-[#9f2089] selection:text-white">
      {/* Floating Notification Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle max-w-sm">
          <div className="flex items-center gap-3 bg-stone-900/95 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-stone-700/80 backdrop-blur-md">
            {toast.type === 'cart' && <ShoppingBag className="w-4 h-4 text-amber-400 flex-shrink-0" />}
            {toast.type === 'wishlist' && <Heart className="w-4 h-4 text-rose-400 fill-rose-400 flex-shrink-0" />}
            {toast.type === 'info' && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}

            <p className="text-xs font-medium leading-tight flex-1 text-stone-200">
              {toast.message}
            </p>

            <button
              onClick={() => setToast(null)}
              className="text-stone-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 1. Header Navigation Bar (Same Navbar everywhere) */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onCartClick={handleCartClick}
        onWishlistClick={handleWishlistClick}
        onProfileClick={handleProfileClick}
        onSearch={handleSearch}
        currentSearch={searchQuery}
        onResetHome={handleResetHome}
        loggedInUser={loggedInUser}
        onAdminClick={handleOpenAdmin}
        isAdmin={isAdminView}
      />

      {/* 2. Main Content View: LoginPage, Admin Portal, Cart, Wishlist, Profile, Product Details, or Home Grid */}
      <main className="flex-1 w-full max-w-full min-w-0">
        {isSupplierLoginPage ? (
          <SupplierLoginPage
            currentLoggedInUser={loggedInUser}
            onLoginSuccess={handleSupplierLoginSuccess}
            onBackToStore={handleResetHome}
          />
        ) : isLoginPage ? (
          <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onBackToStore={handleResetHome}
            customTitle={
              pendingCheckout
                ? 'Login to Complete Your Order'
                : null
            }
            customSubtitle={
              pendingCheckout
                ? 'Enter your phone number to proceed with secure checkout'
                : null
            }
          />
        ) : isCartOpen ? (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => {
              setIsCartOpen(false);
              try {
                if (window.location.hash === '#admin' || window.location.hash === '#login') {
                  window.history.pushState(null, '', '/');
                }
              } catch {}
            }}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onCheckout={handleCheckout}
            onSelectProduct={handleSelectProduct}
            onMoveToWishlist={handleMoveToWishlist}
          />
        ) : isWishlistOpen ? (
          <WishlistDrawer
            isOpen={isWishlistOpen}
            onClose={() => {
              setIsWishlistOpen(false);
              try {
                if (window.location.hash === '#admin' || window.location.hash === '#login') {
                  window.history.pushState(null, '', '/');
                }
              } catch {}
            }}
            wishlistItems={fullWishlistItems}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onMoveToCart={handleMoveToCart}
            onClearWishlist={handleClearWishlist}
            onSelectProduct={handleSelectProduct}
          />
        ) : (isProfileOpen && loggedInUser) ? (
          <ProfileModal
            isOpen={isProfileOpen}
            initialTab={profileInitialTab}
            onClose={() => {
              setIsProfileOpen(false);
              if (!loggedInUser) sessionStorage.setItem('ZYRIVO_login_dismissed', '1');
            }}
            onUserChange={(u) => {
              setLoggedInUser(u);
              if (!u && isAdminView) {
                setIsAdminView(false);
                try {
                  window.history.replaceState(null, '', '/');
                } catch {}
              }
              if (u) sessionStorage.removeItem('ZYRIVO_login_dismissed');
            }}
            wishlistItems={fullWishlistItems}
            cartItems={cartItems}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onMoveToCart={handleMoveToCart}
            onClearWishlist={handleClearWishlist}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onCheckout={handleCheckout}
            onSelectProduct={handleSelectProduct}
          />
        ) : isAdminView ? (
          <AdminPortal
            loggedInUser={loggedInUser}
            onBackToStore={handleBackToStore}
            onProductCatalogChange={loadCatalog}
            onRequireLogin={() => {
              setIsSupplierLoginPage(true);
              setIsAdminView(false);
              try {
                window.history.pushState(null, '', '#supplier-login');
              } catch {}
            }}
          />
        ) : selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToGrid}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlist.includes(selectedProduct._id)}
            wishlistIds={wishlist}
            onSelectProduct={handleSelectProduct}
          />
        ) : (
          <>
            {!searchQuery && (
              <HeroBanner onShopClick={handleShopClick} onCategorySelect={handleSearch} />
            )}
            <ProductGrid
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
              activeCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                setSearchQuery('');
                setSelectedProduct(null);
              }}
              searchQuery={searchQuery}
              onClearSearch={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedProduct(null);
              }}
              onSelectProduct={handleSelectProduct}
            />
          </>
        )}
      </main>

      {/* 3. Luxury Footer (Visible on main customer store only) */}
      {!isAdminView && !isLoginPage && !isSupplierLoginPage && !isProfileOpen && !isCartOpen && !isWishlistOpen && (
        <Footer onAdminClick={handleOpenAdmin} />
      )}

      {/* 4. Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={({ viewOrders } = {}) => {
          setIsCheckoutOpen(false);
          if (viewOrders) {
            setProfileInitialTab('orders');
            setIsProfileOpen(true);
          }
        }}
        cartItems={cartItems}
        user={loggedInUser}
        onUserChange={(u) => setLoggedInUser(u)}
        appliedCoupon={checkoutCoupon}
        onOrderSuccess={(createdOrder) => {
          handleClearCart();
          showToast('🎉 Order placed successfully! Check My Orders in your Account.', 'cart');
        }}
      />
    </div>
  );
}

export default App;

