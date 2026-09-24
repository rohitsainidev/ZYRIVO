import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Tag,
  AlertTriangle,
  Plus,
  Search,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Truck,
  XCircle,
  Eye,
  Edit2,
  Trash2,
  RefreshCw,
  TrendingUp,
  DollarSign,
  Calendar,
  X,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Lock,
  Menu,
} from 'lucide-react';
import {
  fetchProducts,
  apiAdminCreateProduct,
  apiAdminUpdateProduct,
  apiAdminDeleteProduct,
  apiAdminGetAllOrders,
  apiAdminUpdateOrderStatus,
  apiAdminGetAllCustomers
} from '../../services/api';
import { FALLBACK_PRODUCTS } from '../../data/fallbackProducts';

export default function AdminPortal({ onBackToStore, onProductCatalogChange, loggedInUser, onRequireLogin }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isRailCollapsed, setIsRailCollapsed] = useState(() => {
    try {
      localStorage.removeItem('ZYRIVO_admin_rail');
    } catch {}
    return false;
  });

  const toggleRail = () => {
    setIsRailCollapsed(prev => {
      const next = !prev;
      try { localStorage.setItem('ZYRIVO_admin_rail', String(next)); } catch {}
      return next;
    });
  };
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Search & Filter states
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderFilterStatus, setOrderFilterStatus] = useState('all');

  // Modals state
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);

  // Product Form state
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    discountPrice: '',
    category: 'women ethnic',
    stock: '50',
    images: '',
    sizes: ['S', 'M', 'L', 'XL'],
  });

  // Coupons state (Interactive in-memory + local storage persistence)
  const [coupons, setCoupons] = useState(() => {
    try {
      const saved = localStorage.getItem('ZYRIVO_admin_coupons');
      if (saved) return JSON.parse(saved);
    } catch { }
    return [
      { id: 'cpn-1', code: 'FIRST200', type: 'FLAT', value: 200, minOrder: 999, active: true, usageCount: 0 },
      { id: 'cpn-2', code: 'ZYRIVO10', type: 'PERCENT', value: 10, minOrder: 499, active: true, usageCount: 0 },
      { id: 'cpn-3', code: 'FESTIVE500', type: 'FLAT', value: 500, minOrder: 2499, active: true, usageCount: 0 },
    ];
  });
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponValue, setNewCouponValue] = useState('');
  const [newCouponType, setNewCouponType] = useState('FLAT');
  const [newCouponMin, setNewCouponMin] = useState('499');
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev?.id ? null : prev));
    }, 3000);
  };

  // Sync coupons
  useEffect(() => {
    try {
      localStorage.setItem('ZYRIVO_admin_coupons', JSON.stringify(coupons));
    } catch { }
  }, [coupons]);

  // Sync sidebar rail state
  useEffect(() => {
    try {
      localStorage.setItem('ZYRIVO_admin_rail', String(isRailCollapsed));
    } catch { }
  }, [isRailCollapsed]);

  // Load all admin data directly from real MongoDB database
  const loadAdminData = async () => {
    setLoading(true);
    try {
      // 1. Load Products from MongoDB
      const prodData = await fetchProducts({ limit: 1000 });
      if (prodData && prodData.products) {
        setProducts(prodData.products);
      } else {
        setProducts([]);
      }

      // 2. Load Real Orders from MongoDB
      try {
        const orderData = await apiAdminGetAllOrders();
        let dbOrders = (orderData && orderData.orders) || [];
        let localOrders = [];
        try {
          const cached = localStorage.getItem('ZYRIVO_local_orders');
          if (cached) localOrders = JSON.parse(cached);
        } catch {}

        const mergedMap = new Map();
        dbOrders.forEach(o => { if (o._id) mergedMap.set(o._id, o); });
        localOrders.forEach(o => { if (o._id && !mergedMap.has(o._id)) mergedMap.set(o._id, o); });

        const allMerged = Array.from(mergedMap.values()).sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );

        setOrders(allMerged);
      } catch (err) {
        console.warn('Orders fetch error:', err);
        setOrders([]);
      }

      // 3. Load Real Customers from MongoDB
      try {
        const custData = await apiAdminGetAllCustomers();
        if (custData && custData.users) {
          // Display real registered users (customers and merchants)
          setCustomers(custData.users);
        } else {
          setCustomers([]);
        }
      } catch (err) {
        console.warn('Customers fetch error:', err);
        setCustomers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  // Format INR Currency
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  // Helper to extract customer display name from real order
  const getCustomerName = (o) => {
    return o?.user?.name || o?.shippingAddress?.name || (o?.user?.phone ? `Customer (+91 ${o.user.phone})` : o?.shippingAddress?.phone ? `Customer (+91 ${o.shippingAddress.phone})` : 'Customer');
  };

  // Helper to extract customer contact
  const getCustomerContact = (o) => {
    return o?.user?.phone ? `+91 ${o.user.phone}` : o?.shippingAddress?.phone ? `+91 ${o.shippingAddress.phone}` : (o?.shippingAddress?.city || 'India');
  };

  // KPIs Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0);
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter((o) => o.orderStatus !== 'Delivered' && o.orderStatus !== 'Cancelled').length;
  const lowStockProducts = products.filter((p) => (p.countInStock || p.stock || 0) <= 10);

  const navTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'products', label: 'Products', icon: Package, badge: products.length },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, badge: pendingOrdersCount ? `${pendingOrdersCount} New` : null },
    { id: 'customers', label: 'Customers', icon: Users, badge: customers.length },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
    { id: 'coupons', label: 'Coupons', icon: Tag, badge: coupons.length },
    { id: 'inventory', label: 'Inventory', icon: AlertTriangle, badge: lowStockProducts.length > 0 ? `${lowStockProducts.length} Low` : null },
  ];

  // Handle Create or Edit Product
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const productPayload = {
      name: productForm.name.trim(),
      description: productForm.description.trim() || `${productForm.name} - Handcrafted luxury fashion from ZYRIVO collection.`,
      price: Number(productForm.price),
      discountPrice: productForm.discountPrice ? Number(productForm.discountPrice) : Number(productForm.price),
      category: typeof productForm.category === 'string' ? productForm.category : (productForm.category?.name || 'women ethnic'),
      brand: 'ZYRIVO',
      stock: Number(productForm.stock) || 50,
      countInStock: Number(productForm.stock) || 50,
      images: productForm.images
        ? productForm.images.split(',').map((url) => ({ url: url.trim() }))
        : [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800' }],
      sizes: productForm.sizes,
    };

    try {
      if (editingProduct) {
        const res = await apiAdminUpdateProduct(editingProduct._id, productPayload);
        if (res && (res.success || res.product)) {
          const updated = res.product || { ...editingProduct, ...productPayload };
          setProducts((prev) =>
            prev.map((p) => (p._id === editingProduct._id ? updated : p))
          );
          showToast(`Product "${productForm.name}" updated successfully!`);
        } else {
          showToast(res?.message || 'Failed to update product', 'error');
          return;
        }
      } else {
        const res = await apiAdminCreateProduct(productPayload);
        if (res && (res.success || res.product)) {
          const created = res.product || { ...productPayload, _id: res._id };
          setProducts((prev) => [created, ...prev]);
          showToast(`New Product "${productForm.name}" added to catalog!`);
        } else {
          showToast(res?.message || 'Error saving product to database', 'error');
          return;
        }
      }
      setIsAddProductModalOpen(false);
      setEditingProduct(null);
      setProductForm({
        name: '',
        description: '',
        price: '',
        discountPrice: '',
        category: 'women ethnic',
        stock: '50',
        images: '',
        sizes: ['S', 'M', 'L', 'XL'],
      });
      if (onProductCatalogChange) onProductCatalogChange();
    } catch (err) {
      console.error('Error saving product:', err);
      showToast('Error saving product. Please check backend connection.', 'error');
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      const res = await apiAdminDeleteProduct(id);
      if (res && res.success !== false) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        showToast(`Product "${name}" deleted from store.`);
        if (onProductCatalogChange) onProductCatalogChange();
      } else {
        showToast(res?.message || 'Error deleting product from database', 'error');
      }
    } catch (err) {
      console.error('Delete error:', err);
      showToast('Failed to delete product. Please check connection.', 'error');
    }
  };

  // Handle Order Status Update
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await apiAdminUpdateOrderStatus(orderId, newStatus);
      if (res && (res.success || res.order)) {
        setOrders((prev) =>
          prev.map((o) => (o._id === orderId ? { ...o, orderStatus: newStatus } : o))
        );
        showToast(`Order status changed to "${newStatus}"`);
      } else {
        showToast(res?.message || 'Failed to update order status', 'error');
      }
    } catch (err) {
      console.error('Status update error:', err);
      showToast('Server error updating status. Check connection.', 'error');
    }
  };

  // Handle Quick Stock Update
  const handleStockUpdate = (productId, delta) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p._id === productId) {
          const current = p.countInStock !== undefined ? p.countInStock : (p.stock || 20);
          const updated = Math.max(0, current + delta);
          return { ...p, countInStock: updated, stock: updated };
        }
        return p;
      })
    );
    showToast('Inventory stock adjusted');
  };

  // Add Coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;
    const created = {
      id: `cpn-${Date.now()}`,
      code: newCouponCode.trim().toUpperCase(),
      type: newCouponType,
      value: Number(newCouponValue) || 100,
      minOrder: Number(newCouponMin) || 499,
      active: true,
      usageCount: 0
    };
    setCoupons((prev) => [created, ...prev]);
    setNewCouponCode('');
    setNewCouponValue('');
    setIsAddCouponOpen(false);
    showToast(`Coupon ${created.code} activated!`);
  };

  // Filtered lists
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name?.toLowerCase().includes(productSearch.toLowerCase());
    const catSlug = (p.category?.slug || p.category?.name || p.category || '').toLowerCase();
    const matchesCat = selectedCategory === 'all' || catSlug.includes(selectedCategory);
    return matchesSearch && matchesCat;
  });

  const filteredOrders = orders.filter((o) => {
    if (orderFilterStatus === 'all') return true;
    return o.orderStatus?.toLowerCase() === orderFilterStatus.toLowerCase();
  });

  // Guard: require user to be logged in AND have admin or supplier role
  const isAuthorized = loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'supplier');

  if (!isAuthorized) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#f8fafc]">
        <div className="max-w-md w-full bg-white rounded-2xl border border-stone-200 shadow-xl p-8 text-center space-y-5">
          <div className="w-16 h-16 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mx-auto border border-purple-100 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              {loggedInUser ? 'Supplier Hub Permission Required' : 'Supplier & Seller Hub Access Restricted'}
            </h2>
            <p className="text-sm text-stone-500 mt-2 leading-relaxed">
              {loggedInUser
                ? `Aap customer account (${loggedInUser.phone || loggedInUser.name || 'Member'}) se logged-in hain. Supplier inventory, products aur orders fulfillment ke liye registered Supplier ya Admin account se login karein.`
                : 'You must be logged into a verified Supplier or Admin account to access supplier inventory, order fulfillment, and merchant analytics.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={onRequireLogin}
              className="flex-1 py-2.5 px-4 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-xl transition shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{loggedInUser ? 'Switch to Supplier Login' : 'Log In to Seller Hub'}</span>
            </button>
            <button
              type="button"
              onClick={onBackToStore}
              className="flex-1 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              <span>Back to Store</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-full bg-white md:bg-[#f8fafc] text-gray-900 flex flex-col font-sans selection:bg-[#9f2089] selection:text-white">

      {/* Floating Notification Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
          <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-semibold backdrop-blur-md ${toast.type === 'error'
            ? 'bg-rose-50 text-rose-800 border-rose-200'
            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{toast.message}</span>
          </div>
        </div>
      )}


      {/* ─── Main Admin Layout: Responsive Mobile Bar + Desktop Sidebar + Workspace ─── */}


      {/* 2. Mobile Slide-Over Drawer with Backdrop */}
      {isMobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-50 flex bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileNavOpen(false);
          }}
        >
          <div className="w-64 max-w-[80vw] bg-white h-full shadow-2xl p-4 flex flex-col justify-between animate-in slide-in-from-left duration-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Store Navigation</h3>
                  <p className="text-[10px] text-gray-500">Admin management tabs</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                {navTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileNavOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${isActive
                        ? 'bg-purple-50 text-[#9f2089] border border-purple-200/80 shadow-2xs font-bold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950 font-medium'
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#9f2089]' : 'text-gray-400'}`} />
                        <span>{tab.label}</span>
                      </div>
                      {tab.badge && (
                        <span
                          className={`text-xs font-semibold ${
                            tab.id === 'inventory' && lowStockProducts.length > 0
                              ? 'text-rose-600 font-bold'
                              : isActive
                                ? 'text-[#9f2089] font-bold'
                                : 'text-gray-400'
                          }`}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={onBackToStore}
                className="w-full py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-gray-200 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Storefront
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Body: Desktop Sidebar + Workspace */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-w-0">

        {/* Desktop Sidebar Nav (Expands or Collapses into Navigation Rail) */}
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
                    Store Menu
                  </span>
                  <button
                    type="button"
                    onClick={toggleRail}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
                    title="Close sidebar (X)"
                    aria-label="Close sidebar"
                  >
                    <X className="w-4 h-4" />
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
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Items */}
            <div className="space-y-1">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                if (isRailCollapsed) {
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-center py-2.5 rounded-xl transition cursor-pointer relative group ${
                        isActive
                          ? 'bg-purple-50 text-[#9f2089] shadow-2xs font-bold'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium'
                      }`}
                      title={tab.label}
                    >
                      <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-[#9f2089]' : 'text-gray-400 group-hover:text-gray-700'}`} />
                      {tab.badge && (
                        <span className="absolute top-1.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
                      )}

                      {/* Tooltip on hover */}
                      <div className="hidden md:group-hover:flex absolute left-full ml-2.5 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none items-center gap-1.5">
                        <span>{tab.label}</span>
                        {tab.badge && (
                          <span className="text-[10px] bg-white/20 px-1 py-0.2 rounded-full">
                            {tab.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                }

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                      isActive
                        ? 'bg-purple-50 text-[#9f2089] border border-purple-200/80 shadow-2xs font-bold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#9f2089]' : 'text-gray-400'}`} />
                      <span className="whitespace-nowrap">{tab.label}</span>
                    </div>
                    {tab.badge && (
                      <span
                        className={`text-xs font-semibold ${
                          tab.id === 'inventory' && lowStockProducts.length > 0
                            ? 'text-rose-600 font-bold'
                            : isActive
                              ? 'text-[#9f2089] font-bold'
                              : 'text-gray-400'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Back to Storefront button */}
          <div className="pt-3 mt-4 border-t border-gray-100">
            {isRailCollapsed ? (
              <button
                type="button"
                onClick={onBackToStore}
                className="w-full p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition flex justify-center cursor-pointer group relative"
                title="Back to Storefront"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
                <div className="hidden md:group-hover:flex absolute left-full ml-2.5 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none">
                  Back to Store
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToStore}
                className="w-full py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 border border-gray-200 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Storefront
              </button>
            )}
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-7 space-y-4 pb-20 md:pb-8">

          {/* ════════════════════════════════════════════════════════════
              1. TAB: DASHBOARD
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'dashboard' && (
            <div className="space-y-3.5">
              {/* Welcome Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                    Executive Store Overview
                  </h1>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Real-time metrics, live customer traffic & revenue breakdown.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={loadAdminData}
                    className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-gray-200 shadow-2xs cursor-pointer transition"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-gray-500 ${loading ? 'animate-spin' : ''}`} />
                    <span>Sync Live Data</span>
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 shadow-2xs flex items-center justify-between hover:shadow-xs transition">
                  <div className="min-w-0 pr-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider truncate">Total Sales</p>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-0.5">{formatINR(totalRevenue)}</h3>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-normal mt-0.5 truncate">
                      All-time revenue
                    </p>
                  </div>
                  <div className="text-gray-400 flex items-center justify-center p-1 shrink-0">
                    <DollarSign className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 shadow-2xs flex items-center justify-between hover:shadow-xs transition">
                  <div className="min-w-0 pr-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider truncate">Total Orders</p>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-0.5">{totalOrdersCount}</h3>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-normal mt-0.5 truncate">
                      {pendingOrdersCount > 0 ? `${pendingOrdersCount} pending` : 'All fulfilled'}
                    </p>
                  </div>
                  <div className="text-gray-400 flex items-center justify-center p-1 shrink-0">
                    <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 shadow-2xs flex items-center justify-between hover:shadow-xs transition">
                  <div className="min-w-0 pr-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider truncate">Catalog</p>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-0.5">{products.length} Items</h3>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-normal mt-0.5 truncate">
                      {lowStockProducts.length > 0 ? `${lowStockProducts.length} low in stock` : 'Healthy stock'}
                    </p>
                  </div>
                  <div className="text-gray-400 flex items-center justify-center p-1 shrink-0">
                    <Package className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 shadow-2xs flex items-center justify-between hover:shadow-xs transition">
                  <div className="min-w-0 pr-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider truncate">Customers</p>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-0.5">{customers.length}</h3>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-normal mt-0.5 truncate">
                      User accounts
                    </p>
                  </div>
                  <div className="text-gray-400 flex items-center justify-center p-1 shrink-0">
                    <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Orders Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Recent Orders List */}
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-3 sm:p-3.5 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                      Recent Customer Orders
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab('orders')}
                      className="text-xs text-[#9f2089] hover:underline font-semibold cursor-pointer"
                    >
                      View All Orders →
                    </button>
                  </div>

                  <div className="divide-y divide-gray-100 overflow-x-auto">
                    {orders.length === 0 ? (
                      <div className="py-8 text-center text-gray-400">
                        <ShoppingBag className="w-8 h-8 mx-auto mb-1.5 text-gray-300" />
                        <p className="text-xs font-semibold text-gray-600">No orders placed yet</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Live store orders from customers will appear here automatically</p>
                      </div>
                    ) : (
                      orders.slice(0, 4).map((order) => (
                        <div key={order._id} className="py-2 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <Package className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <div>
                              <p className="font-bold text-gray-900">{getCustomerName(order)}</p>
                              <p className="text-[10px] sm:text-[11px] text-gray-500">
                                {order.orderItems?.length || 1} items • {order.paymentMethod || 'COD'}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-gray-900">{formatINR(order.totalPrice)}</p>
                            <span className={`inline-block text-[10px] sm:text-[11px] font-medium ${order.orderStatus === 'Delivered'
                              ? 'text-gray-700'
                              : order.orderStatus === 'Shipped'
                                ? 'text-gray-600'
                                : order.orderStatus === 'Cancelled'
                                  ? 'text-rose-600'
                                  : 'text-gray-500'
                              }`}>
                              {order.orderStatus || 'Confirmed'}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Quick Store Control Panel */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-3.5 space-y-2.5 shadow-2xs">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2">
                      Quick Store Actions
                    </h3>
                    <div className="space-y-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddProductModalOpen(true);
                          setEditingProduct(null);
                        }}
                        className="w-full py-1.5 px-2.5 bg-[#9f2089] hover:bg-[#831872] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add New Product
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('coupons')}
                        className="w-full py-1.5 px-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-gray-200 cursor-pointer transition"
                      >
                        <Tag className="w-3.5 h-3.5 text-gray-400" /> Create Discount Coupon
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('inventory')}
                        className="w-full py-1.5 px-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-gray-200 cursor-pointer transition"
                      >
                        <AlertTriangle className="w-3.5 h-3.5 text-gray-400" /> Check Low Stock Matrix
                      </button>
                    </div>
                  </div>

                  <div className="pt-0.5 text-center">
                    <p className="text-[10px] text-gray-400">All updates sync live to store</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              2. TAB: PRODUCTS MANAGEMENT
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Product Catalog Management
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Add new fashion items, modify pricing, manage stock & variants.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddProductModalOpen(true);
                    setEditingProduct(null);
                  }}
                  className="flex items-center gap-1.5 bg-[#9f2089] hover:bg-[#831872] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-2xs transition cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Product
                </button>
              </div>

              {/* Filters Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <div className="relative flex-1 w-full">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search products by title..."
                    className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9f2089] shadow-2xs"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#9f2089] shadow-2xs w-full sm:w-auto cursor-pointer"
                  >
                    <option value="all">All Categories</option>
                    <option value="women ethnic">Women Ethnic</option>
                    <option value="women western">Women Western</option>
                    <option value="men">Men Fashion</option>
                    <option value="shoes">Footwear</option>
                    <option value="bags">Bags & Luggage</option>
                    <option value="watches">Watches</option>
                  </select>
                </div>
              </div>

              {/* Mobile Products List (Clean, Zero Horizontal Scrolling & No Clunky Backgrounds) */}
              <div className="md:hidden bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden shadow-2xs">
                {filteredProducts.map((p) => {
                  const imgUrl = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300');
                  const stockCount = p.countInStock !== undefined ? p.countInStock : (p.stock || 25);
                  return (
                    <div key={p._id} className="p-3 space-y-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={imgUrl}
                          alt={p.name}
                          className="w-12 h-12 rounded-lg object-cover border border-gray-100 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <p className="font-semibold text-xs text-gray-900 truncate">{p.name}</p>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold shrink-0">
                              {p.category?.name || p.category || 'Apparel'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-xs font-bold text-gray-900">{formatINR(p.discountPrice || p.price)}</span>
                              {p.discountPrice && p.price > p.discountPrice && (
                                <span className="text-[10px] text-gray-400 line-through">{formatINR(p.price)}</span>
                              )}
                            </div>
                            <span className={`text-[11px] font-medium ${stockCount <= 5 ? 'text-rose-600' : 'text-gray-500'}`}>
                              {stockCount} in stock
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1 border-t border-gray-50">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingProduct(p);
                            setProductForm({
                              name: p.name || '',
                              description: p.description || '',
                              price: p.price || '',
                              discountPrice: p.discountPrice || p.price || '',
                              category: p.category?.name || p.category || 'women ethnic',
                              stock: String(stockCount),
                              images: p.images?.map(i => typeof i === 'string' ? i : i.url).join(', ') || '',
                              sizes: p.sizes || ['S', 'M', 'L', 'XL'],
                            });
                            setIsAddProductModalOpen(true);
                          }}
                          className="flex items-center gap-1 text-[11px] font-medium text-gray-600 hover:text-gray-950 px-2 py-1 rounded-md transition cursor-pointer hover:bg-gray-100"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-gray-400" /> Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteProduct(p._id, p.name)}
                          className="flex items-center gap-1 text-[11px] font-medium text-gray-400 hover:text-rose-600 px-2 py-1 rounded-md transition cursor-pointer hover:bg-rose-50"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-rose-500" /> Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Products Table */}
              <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[580px]">
                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Product</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Stock</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredProducts.map((p) => {
                        const imgUrl = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300');
                        const stockCount = p.countInStock !== undefined ? p.countInStock : (p.stock || 25);
                        return (
                          <tr key={p._id} className="hover:bg-purple-50/20 transition-colors">
                            <td className="p-3">
                              <div className="flex items-center gap-2.5">
                                <img
                                  src={imgUrl}
                                  alt={p.name}
                                  className="w-9 h-9 rounded-lg object-cover border border-gray-200 shrink-0"
                                />
                                <div>
                                  <p className="font-semibold text-gray-900 line-clamp-1">{p.name}</p>
                                  <p className="text-[11px] text-gray-500 line-clamp-1">{p.description}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-gray-500 capitalize">
                              {p.category?.name || p.category || 'Apparel'}
                            </td>
                            <td className="p-3 font-semibold text-gray-900">
                              {formatINR(p.discountPrice || p.price)}
                              {p.discountPrice && p.price > p.discountPrice && (
                                <span className="text-[11px] text-gray-400 line-through ml-1.5 font-normal">
                                  {formatINR(p.price)}
                                </span>
                              )}
                            </td>
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1 text-xs font-medium ${stockCount <= 5
                                ? 'text-rose-600'
                                : 'text-gray-700'
                                }`}>
                                {stockCount} units
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingProduct(p);
                                    setProductForm({
                                      name: p.name || '',
                                      description: p.description || '',
                                      price: p.price || '',
                                      discountPrice: p.discountPrice || p.price || '',
                                      category: p.category?.name || p.category || 'women ethnic',
                                      stock: String(stockCount),
                                      images: p.images?.map(i => typeof i === 'string' ? i : i.url).join(', ') || '',
                                      sizes: p.sizes || ['S', 'M', 'L', 'XL'],
                                    });
                                    setIsAddProductModalOpen(true);
                                  }}
                                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition cursor-pointer"
                                  title="Edit Product"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteProduct(p._id, p.name)}
                                  className="p-1 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition cursor-pointer"
                                  title="Delete Product"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              3. TAB: ORDERS MANAGEMENT
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Customer Orders Management
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Track customer purchases, verify payments & manage shipping status.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={orderFilterStatus}
                    onChange={(e) => setOrderFilterStatus(e.target.value)}
                    className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1.5 rounded-lg focus:outline-none shadow-2xs cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Mobile Orders Cards List (Zero Horizontal Scrolling) */}
              <div className="md:hidden space-y-2.5">
                {filteredOrders.length === 0 ? (
                  <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-400">
                    <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-xs font-semibold text-gray-700">No orders found</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Live store customer orders will appear here</p>
                  </div>
                ) : (
                  filteredOrders.map((o) => (
                    <div key={o._id} className="bg-white border border-gray-200 rounded-xl p-3 space-y-2.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs text-gray-900 font-mono">{o._id.slice(-8).toUpperCase()}</span>
                          <span className="text-gray-300 text-xs">•</span>
                          <span className="text-[11px] text-gray-500">
                            {new Date(o.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold ${o.orderStatus === 'Delivered'
                          ? 'text-gray-800'
                          : o.orderStatus === 'Shipped'
                            ? 'text-gray-600'
                            : o.orderStatus === 'Cancelled'
                              ? 'text-rose-600'
                              : 'text-gray-500'
                          }`}>
                          {o.orderStatus === 'Shipped' && <Truck className="w-3.5 h-3.5 text-gray-400" />}
                          {o.orderStatus === 'Delivered' && <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />}
                          <span>{o.orderStatus || 'Confirmed'}</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                        <div>
                          <p className="text-xs font-bold text-gray-900">{getCustomerName(o)}</p>
                          <p className="text-[11px] text-gray-500">{getCustomerContact(o)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-gray-900">{formatINR(o.totalPrice)}</p>
                          <p className="text-[11px] text-gray-400">
                            {o.orderItems?.length || 1} items · <span className={o.isPaid ? 'text-gray-700 font-medium' : 'text-gray-500'}>{o.isPaid ? 'Paid' : (o.paymentMethod || 'COD')}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-[11px] font-medium text-gray-500">Change Status</span>
                        <select
                          value={o.orderStatus || 'Confirmed'}
                          onChange={(e) => handleUpdateOrderStatus(o._id, e.target.value)}
                          className="bg-gray-50 border border-gray-200 text-gray-800 text-xs px-2 py-1 rounded-lg focus:outline-none focus:border-[#9f2089] cursor-pointer"
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Desktop Orders Table */}
              <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[620px]">
                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Order ID & Date</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Total Amount</th>
                        <th className="p-3">Payment</th>
                        <th className="p-3">Dispatch Status</th>
                        <th className="p-3 text-right">Change Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="p-10 text-center text-gray-400">
                            <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                            <p className="text-xs font-semibold text-gray-700">No orders found</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">Real customer orders will appear here automatically</p>
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((o) => (
                          <tr key={o._id} className="hover:bg-purple-50/20 transition-colors">
                            <td className="p-3">
                              <p className="font-semibold text-gray-900">{o._id.slice(-8).toUpperCase()}</p>
                              <p className="text-[11px] text-gray-500 mt-0.5">
                                {new Date(o.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="font-semibold text-gray-900">{getCustomerName(o)}</p>
                              <p className="text-[11px] text-gray-500">{getCustomerContact(o)}</p>
                            </td>
                            <td className="p-3 font-semibold text-gray-900">
                              {formatINR(o.totalPrice)}
                              <p className="text-[11px] text-gray-400 font-normal">
                                {o.orderItems?.length || 1} items
                              </p>
                            </td>
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${o.isPaid ? 'text-gray-700' : 'text-gray-500'
                                }`}>
                                {o.isPaid ? 'Paid' : `Pending (${o.paymentMethod || 'COD'})`}
                              </span>
                            </td>
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${o.orderStatus === 'Delivered'
                                ? 'text-gray-700'
                                : o.orderStatus === 'Shipped'
                                  ? 'text-gray-600'
                                  : o.orderStatus === 'Cancelled'
                                    ? 'text-rose-600'
                                    : 'text-gray-500'
                                }`}>
                                {o.orderStatus === 'Shipped' && <Truck className="w-3.5 h-3.5 text-gray-400" />}
                                {o.orderStatus === 'Delivered' && <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />}
                                <span>{o.orderStatus || 'Confirmed'}</span>
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <select
                                value={o.orderStatus || 'Confirmed'}
                                onChange={(e) => handleUpdateOrderStatus(o._id, e.target.value)}
                                className="bg-white border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg focus:outline-none focus:border-[#9f2089] cursor-pointer shadow-2xs"
                              >
                                <option value="Confirmed">Confirmed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for Delivery">Out for Delivery</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              4. TAB: CUSTOMERS CRM
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'customers' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Registered Customers
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Directory of registered customer accounts and profile details.
                  </p>
                </div>
              </div>

              {/* Mobile Customers List (Clean, Zero Horizontal Scrolling & No Clunky Backgrounds) */}
              <div className="md:hidden bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden shadow-2xs">
                {customers.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">
                    <Users className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-xs font-semibold text-gray-700">No customers registered yet</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Registered customer accounts will appear here</p>
                  </div>
                ) : (
                  customers.map((c) => (
                    <div key={c._id} className="p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 border border-gray-200 flex items-center justify-center font-semibold text-xs shrink-0">
                            {(c.name || c.phone || 'U').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-xs text-gray-900">{c.name || (c.phone ? `Customer (+91 ${c.phone})` : 'Customer')}</p>
                            <p className="text-[11px] text-gray-500">{c.phone ? `+91 ${c.phone}` : 'No phone'}</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-700">
                          <CheckCircle2 className="w-3 h-3 text-gray-400" /> Active
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1.5 border-t border-gray-50 text-[11px] text-gray-500">
                        <span>Joined: {c.createdAt ? new Date(c.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : 'Recently'}</span>
                        <span className="capitalize font-semibold text-gray-500">
                          {c.role || 'customer'}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Desktop Customers Table */}
              <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[560px]">
                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Customer Name</th>
                        <th className="p-3">Contact</th>
                        <th className="p-3">Member Since</th>
                        <th className="p-3">Role</th>
                        <th className="p-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {customers.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="p-10 text-center text-gray-400">
                            <Users className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                            <p className="text-xs font-semibold text-gray-700">No customers registered yet</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">Registered customer accounts will appear here automatically</p>
                          </td>
                        </tr>
                      ) : (
                        customers.map((c) => (
                          <tr key={c._id} className="hover:bg-purple-50/20 transition-colors">
                            <td className="p-3">
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 border border-gray-200 flex items-center justify-center font-semibold text-xs shrink-0">
                                  {(c.name || c.phone || 'U').charAt(0).toUpperCase()}
                                </div>
                                <span className="font-semibold text-gray-900">{c.name || (c.phone ? `Customer (+91 ${c.phone})` : 'Customer')}</span>
                              </div>
                            </td>
                            <td className="p-3 text-gray-600">
                              <p className="font-medium">{c.phone ? `+91 ${c.phone}` : 'N/A'}</p>
                              {c.email && <p className="text-[11px] text-gray-400">{c.email}</p>}
                            </td>
                            <td className="p-3 text-gray-500">
                              {c.createdAt ? new Date(c.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : 'Recently'}
                            </td>
                            <td className="p-3 capitalize">
                              <span className={`text-xs font-medium ${c.role === 'admin' ? 'text-gray-900 font-semibold' : 'text-gray-600'
                                }`}>
                                {c.role || 'customer'}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" /> Active
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              5. TAB: ANALYTICS & INSIGHTS
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'analytics' && (
            <div className="space-y-3.5">
              <div>
                <h1 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  Business & Revenue Analytics
                </h1>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Sales conversion, revenue performance, and category breakdown.
                </p>
              </div>

              {/* Conversion Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Average Order Value (AOV)</p>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {formatINR(totalOrdersCount ? Math.round(totalRevenue / totalOrdersCount) : 1299)}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">Average value across completed orders</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Cart to Order Conversion</p>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">68.4%</h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">Store checkout completion rate</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Return & Exchange Rate</p>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">2.8%</h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">Past 30 days return rate</p>
                </div>
              </div>

              {/* Category Breakdown Progress */}
              <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">Category Revenue Share</h3>
                  <span className="text-[11px] font-medium text-gray-400">Live Breakdown</span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: 'Women Ethnic & Sarees',
                      share: 45,
                      color: 'bg-gradient-to-r from-fuchsia-600 to-[#9f2089]',
                      dotColor: 'bg-[#9f2089]',
                      textColor: 'text-[#9f2089]',
                    },
                    {
                      name: 'Western Dresses & Tops',
                      share: 25,
                      color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
                      dotColor: 'bg-indigo-600',
                      textColor: 'text-indigo-600',
                    },
                    {
                      name: 'Men Streetwear & Kurtas',
                      share: 18,
                      color: 'bg-gradient-to-r from-teal-400 to-emerald-600',
                      dotColor: 'bg-emerald-600',
                      textColor: 'text-emerald-600',
                    },
                    {
                      name: 'Footwear & Bags',
                      share: 12,
                      color: 'bg-gradient-to-r from-amber-400 to-orange-500',
                      dotColor: 'bg-amber-500',
                      textColor: 'text-amber-600',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.dotColor} shrink-0`} />
                          <span className="text-gray-700 font-medium">{item.name}</span>
                        </div>
                        <span className={`font-bold ${item.textColor}`}>{item.share}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-700`}
                          style={{ width: `${item.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              6. TAB: COUPONS ENGINE
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'coupons' && (
            <div className="space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                    Discount Coupons
                  </h1>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Manage promotional codes, minimum order requirements & redemption status.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddCouponOpen(!isAddCouponOpen)}
                  className="flex items-center gap-1.5 bg-[#9f2089] hover:bg-[#831872] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-2xs transition cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddCouponOpen ? 'Close Form' : 'Add New Coupon'}</span>
                </button>
              </div>

              {/* Collapsible Create Coupon Form */}
              {isAddCouponOpen && (
                <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="text-xs font-bold text-gray-900">
                      Create New Discount Coupon
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsAddCouponOpen(false)}
                      className="text-gray-400 hover:text-gray-700 text-xs p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <form onSubmit={handleAddCoupon} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Coupon Code</label>
                        <input
                          type="text"
                          placeholder="e.g. FESTIVE300"
                          value={newCouponCode}
                          onChange={(e) => setNewCouponCode(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089] uppercase tracking-wider"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Discount Type</label>
                        <select
                          value={newCouponType}
                          onChange={(e) => setNewCouponType(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 focus:bg-white focus:outline-none cursor-pointer"
                        >
                          <option value="FLAT">Flat ₹ Discount</option>
                          <option value="PERCENT">% Percentage Off</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Value (₹ or %)</label>
                        <input
                          type="number"
                          placeholder="e.g. 200"
                          value={newCouponValue}
                          onChange={(e) => setNewCouponValue(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">Min Order Spend (₹)</label>
                        <input
                          type="number"
                          placeholder="499"
                          value={newCouponMin}
                          onChange={(e) => setNewCouponMin(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-1 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => setIsAddCouponOpen(false)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#9f2089] hover:bg-[#831872] text-white text-xs font-semibold rounded-lg shrink-0 cursor-pointer transition shadow-2xs"
                      >
                        Save Coupon
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Mobile Coupons Cards List (Zero Horizontal Scrolling) */}
              <div className="md:hidden space-y-2.5">
                {coupons.map((c) => (
                  <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-3 space-y-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs bg-gray-100 text-gray-900 px-2 py-0.5 rounded border border-gray-200 tracking-wider">
                        {c.code}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoupons(prev => prev.map(item => item.id === c.id ? { ...item, active: !item.active } : item));
                          showToast(`Coupon ${c.code} ${c.active ? 'deactivated' : 'activated'}`);
                        }}
                        className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer transition ${c.active ? 'text-gray-700' : 'text-gray-400 line-through'
                          }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${c.active ? 'bg-gray-700' : 'bg-gray-300'}`} />
                        <span>{c.active ? 'Active' : 'Paused'}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                      <span className="font-semibold text-gray-900">
                        {c.type === 'FLAT' ? `₹${c.value} OFF` : `${c.value}% OFF`}
                      </span>
                      <span className="text-gray-500 text-[11px]">
                        Min Spend: {formatINR(c.minOrder)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                      <span>{c.usageCount} orders redeemed</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoupons(prev => prev.filter(item => item.id !== c.id));
                          showToast(`Coupon ${c.code} deleted`);
                        }}
                        className="p-1 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition cursor-pointer"
                        title="Delete Coupon"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Coupons Table */}
              <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[580px]">
                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Coupon Code</th>
                        <th className="p-3">Discount Type</th>
                        <th className="p-3">Benefit</th>
                        <th className="p-3">Min Order Spend</th>
                        <th className="p-3">Redemptions</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {coupons.map((c) => (
                        <tr key={c.id} className="hover:bg-purple-50/20 transition-colors">
                          <td className="p-3">
                            <span className="font-mono font-bold text-xs bg-gray-100 text-gray-900 px-2 py-0.5 rounded border border-gray-200 tracking-wider">
                              {c.code}
                            </span>
                          </td>
                          <td className="p-3 text-gray-600">
                            {c.type === 'FLAT' ? 'Flat INR' : 'Percentage (%)'}
                          </td>
                          <td className="p-3 font-semibold text-gray-900">
                            {c.type === 'FLAT' ? `₹${c.value} OFF` : `${c.value}% OFF`}
                          </td>
                          <td className="p-3 text-gray-600">
                            {formatINR(c.minOrder)}
                          </td>
                          <td className="p-3 text-gray-600">
                            {c.usageCount} orders
                          </td>
                          <td className="p-3">
                            <button
                              type="button"
                              onClick={() => {
                                setCoupons(prev => prev.map(item => item.id === c.id ? { ...item, active: !item.active } : item));
                                showToast(`Coupon ${c.code} ${c.active ? 'deactivated' : 'activated'}`);
                              }}
                              className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer transition ${c.active ? 'text-gray-700' : 'text-gray-400 line-through'
                                }`}
                              title="Click to toggle status"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${c.active ? 'bg-gray-700' : 'bg-gray-300'}`} />
                              <span>{c.active ? 'Active' : 'Paused'}</span>
                            </button>
                          </td>
                          <td className="p-3 text-right">
                            <button
                              type="button"
                              onClick={() => {
                                setCoupons(prev => prev.filter(item => item.id !== c.id));
                                showToast(`Coupon ${c.code} deleted`);
                              }}
                              className="p-1 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition cursor-pointer"
                              title="Delete Coupon"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              7. TAB: INVENTORY & STOCK MATRIX
             ════════════════════════════════════════════════════════════ */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Inventory & Stock Management
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Live stock counts and inventory replenishment.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[550px]">
                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Item Name</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Current Stock</th>
                        <th className="p-3">Stock Status</th>
                        <th className="p-3 text-right">Quick Restock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {products.map((p) => {
                        const stockCount = p.countInStock !== undefined ? p.countInStock : (p.stock || 20);
                        const isLow = stockCount <= 10;
                        return (
                          <tr key={p._id} className="hover:bg-purple-50/20 transition-colors">
                            <td className="p-3 font-semibold text-gray-900">{p.name}</td>
                            <td className="p-3 capitalize text-gray-500">{p.category?.name || p.category || 'General'}</td>
                            <td className="p-3 font-semibold text-gray-900">{stockCount} units</td>
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1 text-xs font-medium ${isLow
                                ? 'text-rose-600'
                                : 'text-gray-700'
                                }`}>
                                {isLow ? 'Low Stock' : 'In Stock'}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleStockUpdate(p._id, -5)}
                                  className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium rounded border border-gray-200 cursor-pointer transition shadow-2xs"
                                  title="Decrease 5 units"
                                >
                                  -5
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleStockUpdate(p._id, 10)}
                                  className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200 cursor-pointer transition shadow-2xs"
                                  title="Restock 10 units"
                                >
                                  +10
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleStockUpdate(p._id, 50)}
                                  className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200 cursor-pointer transition shadow-2xs"
                                  title="Bulk Restock 50 units"
                                >
                                  +50
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ─── Mobile Fixed Bottom Navigation Bar ─── */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-1 py-1 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around">
          {[
            { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
            { id: 'products', label: 'Products', icon: Package },
            { id: 'orders', label: 'Orders', icon: ShoppingBag, badge: pendingOrdersCount ? `${pendingOrdersCount}` : null },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileNavOpen(false);
                }}
                className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors cursor-pointer relative ${isActive ? 'text-[#9f2089]' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#9f2089]' : 'text-gray-400'}`} />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 min-w-[15px] h-[15px] flex items-center justify-center text-[9px] font-bold text-white bg-rose-500 rounded-full px-0.5 ring-2 ring-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] mt-0.5 ${isActive ? 'font-bold text-[#9f2089]' : 'font-medium text-gray-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* More Drawer Button */}
          {(() => {
            const isMoreActive = ['customers', 'coupons', 'inventory'].includes(activeTab);
            const activeMoreTab = navTabs.find(t => t.id === activeTab);
            const hasMoreNotification = lowStockProducts.length > 0;
            return (
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors cursor-pointer relative ${isMoreActive || isMobileNavOpen ? 'text-[#9f2089]' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                <div className="relative">
                  <Menu className={`w-5 h-5 ${isMoreActive || isMobileNavOpen ? 'text-[#9f2089]' : 'text-gray-400'}`} />
                  {hasMoreNotification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
                  )}
                </div>
                <span className={`text-[10px] mt-0.5 ${isMoreActive || isMobileNavOpen ? 'font-bold text-[#9f2089]' : 'font-medium text-gray-500'}`}>
                  {isMoreActive ? activeMoreTab?.label : 'More'}
                </span>
              </button>
            );
          })()}
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
          MODAL: ADD / EDIT PRODUCT MODAL
         ════════════════════════════════════════════════════════════ */}
      {isAddProductModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsAddProductModalOpen(false);
          }}
        >
          <div className="bg-white border border-gray-200 rounded-xl max-w-lg w-full p-4 sm:p-5 space-y-3.5 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsAddProductModalOpen(false)}
              className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-900 cursor-pointer p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                {editingProduct ? 'Edit Product Details' : 'Add New Fashion Product'}
              </h2>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Fill in the product pricing, category and inventory quantities.
              </p>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="e.g. Embroidered Georgette Anarkali Kurta"
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">MRP Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="1999"
                    className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">Discounted Selling Price (₹)</label>
                  <input
                    type="number"
                    value={productForm.discountPrice}
                    onChange={(e) => setProductForm({ ...productForm, discountPrice: e.target.value })}
                    placeholder="1299"
                    className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={typeof productForm.category === 'string' ? productForm.category : productForm.category?.name || 'women ethnic'}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="women ethnic">Women Ethnic</option>
                    <option value="women western">Women Western</option>
                    <option value="men">Men Fashion</option>
                    <option value="shoes">Footwear</option>
                    <option value="bags">Bags & Luggage</option>
                    <option value="watches">Watches</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">Initial Stock Count</label>
                  <input
                    type="number"
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                    placeholder="50"
                    className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Image URLs (comma-separated)</label>
                <input
                  type="text"
                  value={productForm.images}
                  onChange={(e) => setProductForm({ ...productForm, images: e.target.value })}
                  placeholder="https://images.unsplash.com/... (optional)"
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Fabric, fit, care instructions and craftsmanship details..."
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:outline-none focus:border-[#9f2089]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1.5">
                <button
                  type="button"
                  onClick={() => setIsAddProductModalOpen(false)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#9f2089] hover:bg-[#831872] text-white text-xs font-semibold rounded-lg shadow-2xs cursor-pointer transition"
                >
                  {editingProduct ? 'Update Product' : 'Publish Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
