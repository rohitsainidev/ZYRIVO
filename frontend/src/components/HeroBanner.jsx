import React from 'react';
import { Truck, Banknote, RotateCcw, ShoppingBag, ArrowRight, Sparkles, Star } from 'lucide-react';

const HeroBanner = ({ onShopClick, onCategorySelect }) => {
  const topCategories = [
    {
      title: 'Women Ethnic',
      filter: 'women ethnic',
      price: 'Starting ₹199',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Women Western',
      filter: 'women western',
      price: 'Starting ₹249',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Men Fashion',
      filter: 'men',
      price: 'Starting ₹299',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Watches & Shoes',
      filter: 'watches',
      price: 'Starting ₹399',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Kids Fashion',
      filter: 'kids',
      price: 'Starting ₹199',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Home & Living',
      filter: 'home & living',
      price: 'Starting ₹149',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] pt-4 pb-8 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* ─────────────────────────────────────────────────────────────
            1. LUXURY SIGNATURE HERO BANNER
           ───────────────────────────────────────────────────────────── */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-white via-[#fdf5fb] to-[#fae6ec] border border-pink-100/90 shadow-[0_16px_45px_-15px_rgba(159,32,137,0.12)] relative overflow-hidden">
          {/* Ambient Decorative Luxury Glow Orbs */}
          <div className="absolute -top-28 -left-28 w-88 h-88 bg-purple-200/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 left-1/3 w-88 h-88 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-12 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[390px] lg:min-h-[440px] px-6 sm:px-10 lg:px-16 py-8 md:py-4 gap-8">
            
            {/* Left Side: Headline + Value Pillars + CTA */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 text-left z-10">
              
              {/* Brand Tag (Editorial typography with calm luxury shimmer & beacon) */}
              <div className="group flex items-center gap-2.5 text-xs font-semibold select-none cursor-default">
                {/* Calm Ambient Breathing Beacon */}
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-calm-beacon absolute inline-flex h-full w-full rounded-full bg-[#9f2089]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#9f2089]" />
                </span>

                <span className="text-xs font-black tracking-[0.18em] uppercase luxury-gradient-text transition-all duration-500 group-hover:tracking-[0.22em]">
                  ZYRIVO Official Store
                </span>

                <span className="text-gray-300">•</span>

                <span className="text-[11px] sm:text-xs text-gray-500 font-semibold tracking-wider uppercase transition-colors duration-300 group-hover:text-gray-800">
                  Festive Season 2026
                </span>
              </div>

              {/* Editorial Fashion Heading */}
              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.12]">
                  Lowest Prices,
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#9f2089] via-fuchsia-600 to-[#7c3aed] bg-clip-text text-transparent">
                  Best Quality Shopping.
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-medium pt-1 max-w-md leading-relaxed">
                  Direct from certified artisan makers across India. Discover authentic ethnic styles, modern trends, and guaranteed quality.
                </p>
              </div>

              {/* 3 Elevated Value Pillars */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-2xs hover:border-purple-300 transition-colors">
                  <Truck className="w-4 h-4 text-[#9f2089] shrink-0" />
                  <span className="text-xs font-bold text-gray-800">
                    Free Delivery
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
                  <Banknote className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-gray-800">
                    Cash on Delivery
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                  <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-bold text-gray-800">
                    Easy 7-Day Returns
                  </span>
                </div>
              </div>

              {/* Magnetic Action Button & Rating Proof */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onShopClick}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#9f2089] via-[#891875] to-[#7c3aed] hover:opacity-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-lg shadow-purple-600/25 active:scale-98 transition-all cursor-pointer group"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                  <div className="flex -space-x-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-2xs">★</span>
                    <span className="w-5 h-5 rounded-full bg-[#9f2089] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-2xs">✓</span>
                  </div>
                  <span>4.9/5 Rating • 1L+ Happy Shoppers</span>
                </div>
              </div>

            </div>

            {/* Right Side: Smiling Indian Model */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative py-2 sm:py-4">
              {/* Soft ambient radial glow under model */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-300/40 via-purple-200/25 to-rose-200/40 rounded-3xl blur-2xl -z-0 pointer-events-none" />

              <div className="relative z-10 group">
                <img
                  src="/banners/meesho_hero_model.jpg"
                  alt="Happy Shopper with Bags"
                  className="max-h-[350px] sm:max-h-[390px] lg:max-h-[430px] w-auto object-contain rounded-2xl shadow-xl shadow-pink-900/10 border-2 border-white/80 transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. MEESHO SIGNATURE: "Top Categories to choose from"
           ───────────────────────────────────────────────────────────── */}
        <div className="space-y-5 pt-2">
          {/* Section Divider Heading */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full" />
            <span className="bg-[#f8f9fa] px-4 text-sm sm:text-lg font-bold text-gray-800 tracking-wide uppercase whitespace-nowrap">
              Top Categories to choose from
            </span>
            <div className="border-t border-gray-300 w-full" />
          </div>

          {/* Top Feature Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4.5">
            {topCategories.map((cat, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  if (onCategorySelect) {
                    onCategorySelect(cat.filter);
                  } else if (onShopClick) {
                    onShopClick();
                  }
                }}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 text-left cursor-pointer flex flex-col"
              >
                <div className="h-44 sm:h-52 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#581c87] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {cat.price}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-purple-50 group-hover:bg-[#581c87] text-[#581c87] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;

