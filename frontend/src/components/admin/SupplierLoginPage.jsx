import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowLeft,
  Building2,
  TrendingUp,
  Package,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { apiLogin, apiRegister } from '../../services/api';

export default function SupplierLoginPage({
  onLoginSuccess,
  onBackToStore,
  currentLoggedInUser,
}) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Register fields
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [businessName, setBusinessName] = useState('');

  // Quick fill for demo / testing
  const handleQuickDemoFill = (type = 'supplier') => {
    if (type === 'supplier') {
      setEmail('supplier@zyrivo.in');
      setPassword('supplier@123');
    } else {
      setEmail('admin@zyrivo.in');
      setPassword('admin@123');
    }
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide your registered supplier email and password');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const data = await apiLogin(email.trim().toLowerCase(), password);

      if (data && data.success && data.user) {
        // Critical Role Check
        const role = data.user.role;
        if (role !== 'admin' && role !== 'supplier') {
          setError(
            'Access Restricted: Aapka account regular Customer account hai. Supplier Hub access karne ke liye registered Supplier ya Admin account se login karein.'
          );
          setLoading(false);
          return;
        }

        // Save token and user
        if (data.token) localStorage.setItem('ZYRIVO_token', data.token);
        localStorage.setItem('ZYRIVO_user', JSON.stringify(data.user));

        setSuccess(`Welcome to Supplier Hub, ${data.user.name || 'Merchant'}!`);
        setTimeout(() => {
          if (onLoginSuccess) onLoginSuccess(data.user);
        }, 300);
      } else {
        setError(data?.message || 'Invalid email or password for Supplier Portal');
      }
    } catch (err) {
      console.error('Supplier login error:', err);
      setError('Server connection failed. Please ensure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      setError('Please fill all required supplier registration details');
      return;
    }
    if (regPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const displayName = businessName ? `${regName} (${businessName})` : regName;
      const data = await apiRegister(displayName, regEmail.trim().toLowerCase(), regPassword, 'supplier');

      if (data && data.success && data.user) {
        if (data.token) localStorage.setItem('ZYRIVO_token', data.token);
        localStorage.setItem('ZYRIVO_user', JSON.stringify(data.user));

        setSuccess('Supplier account registered successfully! Redirecting to dashboard...');
        setTimeout(() => {
          if (onLoginSuccess) onLoginSuccess(data.user);
        }, 500);
      } else {
        setError(data?.message || 'Failed to register supplier account');
      }
    } catch (err) {
      console.error('Supplier register error:', err);
      setError('Server connection failed during registration');
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    try {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname || '/');
      }
      window.history.pushState(null, '', '/');
    } catch {}
    if (onBackToStore) {
      onBackToStore();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 md:bg-[#f8fafc] text-gray-900 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white">
      {/* Top Bar with Back to Store */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between pb-4 border-b border-gray-200/80">
        <button
          type="button"
          onClick={handleGoBack}
          className="flex items-center gap-2 text-gray-700 hover:text-black text-xs sm:text-sm font-semibold transition cursor-pointer bg-white hover:bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 shadow-2xs"
        >
          <ArrowLeft size={16} />
          <span>Back to Store</span>
        </button>

        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold">Merchant Gateway Active</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Supplier Value Props */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase">
            <Building2 size={13} />
            <span>Dedicated Merchant Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950 leading-tight">
            Grow your fashion business with{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700 via-pink-600 to-indigo-700">
              ZYRIVO Hub
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
            Manage your fashion catalog, live order fulfillment, track customer delivery timelines, and monitor store payouts in real-time.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700 shrink-0">
                <Package size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Direct Catalog Control</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Add, update prices, manage stock &amp; variants.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Live Sales Tracking</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Automated invoices, COD &amp; UPI settlements.</p>
              </div>
            </div>
          </div>

          {/* Quick Demo Logins */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Quick Test Access:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoFill('supplier')}
                className="px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-bold text-purple-800 transition cursor-pointer shadow-2xs"
              >
                Auto-fill: <strong>supplier@zyrivo.in</strong>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoFill('admin')}
                className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-xs font-bold text-stone-800 transition cursor-pointer shadow-2xs"
              >
                Auto-fill: <strong>admin@zyrivo.in</strong>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Login / Register Form Card */}
        <div className="lg:col-span-6">
          <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
            {/* Customer logged in notice */}
            {currentLoggedInUser && currentLoggedInUser.role === 'customer' && (
              <div className="mb-5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Customer Account Detected:</span>
                  <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                    Aap customer ({currentLoggedInUser.phone || currentLoggedInUser.name || 'Member'}) ke roop me logged-in hain. Supplier portal ke liye registered supplier account se login karein.
                  </p>
                </div>
              </div>
            )}

            {/* Tab switch */}
            <div className="flex p-1 bg-gray-100 rounded-2xl border border-gray-200 mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('login');
                  setError('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                  activeTab === 'login'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Supplier Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('register');
                  setError('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                  activeTab === 'register'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Register as Supplier
              </button>
            </div>

            {/* Error & Success alerts */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{error}</span>
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{success}</span>
              </div>
            )}

            {/* Login Form */}
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Supplier Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail size={16} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. supplier@zyrivo.in"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock size={16} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter supplier account password"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 bg-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-gray-400 hover:text-gray-700 cursor-pointer p-1"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-linear-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white rounded-xl text-sm font-bold transition shadow-md shadow-purple-900/10 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Authenticating Merchant...
                      </span>
                    ) : (
                      <>
                        <ShieldCheck size={18} />
                        <span>Log In to Supplier Hub</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Sharma Textiles & Fashion"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="vendor@company.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Create Password
                    </label>
                    <input
                      type="password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="Min. 6 chars"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-700 bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-linear-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white rounded-xl text-sm font-bold transition shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Registering Supplier...
                      </span>
                    ) : (
                      <>
                        <Building2 size={16} />
                        <span>Register &amp; Open Supplier Hub</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                Are you looking for regular shopping &amp; orders?{' '}
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="text-purple-700 hover:text-purple-900 font-bold underline cursor-pointer"
                >
                  Return to Customer Store
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
