import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Store,
} from 'lucide-react';

export default function Footer({ onAdminClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f9fa] text-gray-600 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        
        {/* Main Grid: 4 Compact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Column 1: Brand & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div>
              <span className="text-xl font-black tracking-wide text-gray-950 font-serif inline-block">
                ZYRIVO
              </span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              India's premier value-fashion destination. Authentic ethnic wear, contemporary western silhouettes, daily footwear, and premium accessories direct to your doorstep.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-1.5 pt-1 text-xs">
              <a
                href="mailto:support@zyrivo.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#9f2089] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#9f2089] shrink-0" />
                <span className="font-medium">support@zyrivo.com</span>
              </a>

              <a
                href="tel:+916397432030"
                className="flex items-center gap-2 text-gray-600 hover:text-[#9f2089] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9f2089] shrink-0" />
                <span className="font-medium">
                  +91 6397432030 <span className="text-gray-400 font-normal">(9 AM – 7 PM)</span>
                </span>
              </a>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-3.5 h-3.5 text-[#9f2089] shrink-0" />
                <span className="font-medium">Moradabad, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#9f2089] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-gray-400 hover:text-[#9f2089] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.813C10.5 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="#x"
                aria-label="X / Twitter"
                className="text-gray-400 hover:text-[#9f2089] transition-colors"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Women's Wear (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Women's Wear
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              {['Kurtis & Kurta Sets', 'Anarkali Suits', 'Sarees & Lehengas', 'Tops & Tunics', 'Western Dresses', 'Ethnic Co-ords'].map((item) => (
                <li key={item}>
                  <a href="#featured-collection" className="hover:text-[#9f2089] hover:underline transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Men's Fashion (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Men's Wear
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              {['Polo & T-Shirts', 'Casual Linen Shirts', 'Slim Denim Jeans', 'Chinos & Trousers', 'Track Pants & Joggers', 'Sneakers & Shoes'].map((item) => (
                <li key={item}>
                  <a href="#featured-collection" className="hover:text-[#9f2089] hover:underline transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Policies (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Customer Policies
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              {['Track Your Order', 'Return & Refund Policy', 'Shipping Information', 'Terms of Service', 'Privacy Policy', 'FAQs & Help Center'].map((item) => (
                <li key={item}>
                  <a href="#featured-collection" className="hover:text-[#9f2089] hover:underline transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Compact Bottom Strip: Single clean row */}
        <div className="border-t border-gray-200/90 pt-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p className="text-[11px] text-gray-500 m-0">
            © {currentYear} ZYRIVO FASHION INDIA PVT. LTD. · All rights reserved.
          </p>


          <button
            type="button"
            onClick={onAdminClick}
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#9f2089] transition-colors cursor-pointer text-xs font-semibold group"
          >
            <Store className="w-3.5 h-3.5 text-[#9f2089] group-hover:scale-110 transition-transform" />
            <span className="group-hover:underline">Supplier & Seller Hub</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
