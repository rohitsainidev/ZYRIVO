import React, { useState, useEffect } from 'react';
import { X, Ruler, Check, Info, ArrowRight } from 'lucide-react';

const SIZE_GUIDES = {
  apparel: {
    title: 'Standard Apparel & Ethnic Size Chart',
    unitOptions: ['in', 'cm'],
    columns: ['Size', 'Bust / Chest', 'Waist', 'Hip', 'Length', 'Shoulder'],
    data: {
      in: [
        { size: 'S', chest: '36', waist: '32', hip: '38', length: '42.0', shoulder: '14.5' },
        { size: 'M', chest: '38', waist: '34', hip: '40', length: '42.5', shoulder: '15.0' },
        { size: 'L', chest: '40', waist: '36', hip: '42', length: '43.0', shoulder: '15.5' },
        { size: 'XL', chest: '42', waist: '38', hip: '44', length: '43.5', shoulder: '16.0' },
        { size: 'XXL', chest: '44', waist: '40', hip: '46', length: '44.0', shoulder: '16.5' },
      ],
      cm: [
        { size: 'S', chest: '91.4', waist: '81.3', hip: '96.5', length: '106.7', shoulder: '36.8' },
        { size: 'M', chest: '96.5', waist: '86.4', hip: '101.6', length: '108.0', shoulder: '38.1' },
        { size: 'L', chest: '101.6', waist: '91.4', hip: '106.7', length: '109.2', shoulder: '39.4' },
        { size: 'XL', chest: '106.7', waist: '96.5', hip: '111.8', length: '110.5', shoulder: '40.6' },
        { size: 'XXL', chest: '111.8', waist: '101.6', hip: '116.8', length: '111.8', shoulder: '41.9' },
      ],
    },
    measureTips: [
      { label: 'Chest / Bust', desc: 'Measure around the fullest part of your chest, keeping tape horizontal.' },
      { label: 'Waist', desc: 'Measure around your natural waistline, usually 2 inches above your navel.' },
      { label: 'Hip', desc: 'Stand with feet together and measure around the widest part of your hips.' },
    ],
  },

  bottoms: {
    title: 'Bottom Wear (Jeans, Trousers & Joggers) Size Chart',
    unitOptions: ['in', 'cm'],
    columns: ['Size', 'Waist', 'Inseam', 'Hip', 'Thigh'],
    data: {
      in: [
        { size: '28', waist: '28', inseam: '30.0', hip: '36', thigh: '21.0' },
        { size: '30', waist: '30', inseam: '30.5', hip: '38', thigh: '22.0' },
        { size: '32', waist: '32', inseam: '31.0', hip: '40', thigh: '23.0' },
        { size: '34', waist: '34', inseam: '31.5', hip: '42', thigh: '24.0' },
        { size: '36', waist: '36', inseam: '32.0', hip: '44', thigh: '25.0' },
      ],
      cm: [
        { size: '28', waist: '71.1', inseam: '76.2', hip: '91.4', thigh: '53.3' },
        { size: '30', waist: '76.2', inseam: '77.5', hip: '96.5', thigh: '55.9' },
        { size: '32', waist: '81.3', inseam: '78.7', hip: '101.6', thigh: '58.4' },
        { size: '34', waist: '86.4', inseam: '80.0', hip: '106.7', thigh: '61.0' },
        { size: '36', waist: '91.4', inseam: '81.3', hip: '111.8', thigh: '63.5' },
      ],
    },
    measureTips: [
      { label: 'Waist', desc: 'Measure where you normally wear your trousers or waistband.' },
      { label: 'Inseam', desc: 'Measure from the top of your inner leg down to the ankle bone.' },
      { label: 'Thigh', desc: 'Measure around the fullest part of your upper thigh.' },
    ],
  },

  footwear: {
    title: 'Footwear & Shoes Size Conversion Chart',
    unitOptions: ['in', 'cm'],
    columns: ['India / UK', 'US Size', 'EU Size', 'Foot Length'],
    data: {
      in: [
        { size: '6', us: '7', eu: '40', length: '9.8 in' },
        { size: '7', us: '8', eu: '41', length: '10.2 in' },
        { size: '8', us: '9', eu: '42', length: '10.5 in' },
        { size: '9', us: '10', eu: '43', length: '10.8 in' },
        { size: '10', us: '11', eu: '44', length: '11.1 in' },
      ],
      cm: [
        { size: '6', us: '7', eu: '40', length: '25.0 cm' },
        { size: '7', us: '8', eu: '41', length: '25.8 cm' },
        { size: '8', us: '9', eu: '42', length: '26.7 cm' },
        { size: '9', us: '10', eu: '43', length: '27.5 cm' },
        { size: '10', us: '11', eu: '44', length: '28.3 cm' },
      ],
    },
    measureTips: [
      { label: 'Foot Length', desc: 'Place your bare foot on paper, mark heel to longest toe, and measure.' },
      { label: 'Between Sizes?', desc: 'If your foot length is between sizes, we recommend ordering the larger size.' },
    ],
  },

  freesize: {
    title: 'Product Fit & Dimensions Guide',
    unitOptions: ['in', 'cm'],
    columns: ['Size', 'Dimensions / Fit', 'Description'],
    data: {
      in: [
        { size: 'Free Size', dim: 'Universal Fit / Standard', desc: 'Designed to comfortably accommodate standard body contours.' },
      ],
      cm: [
        { size: 'Free Size', dim: 'Universal Fit / Standard', desc: 'Designed to comfortably accommodate standard body contours.' },
      ],
    },
    measureTips: [
      { label: 'Universal Fit', desc: 'This product comes in a versatile, adaptable size suitable for all.' },
    ],
  },
};

const SizeChartModal = ({
  isOpen,
  onClose,
  product,
  selectedSize,
  onSelectSize,
}) => {
  const [unit, setUnit] = useState('in'); // 'in' or 'cm'

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine which size chart to show based on product category & tags
  const catSlug = (product?.category?.slug || '').toLowerCase();
  const catName = (product?.category?.name || '').toLowerCase();
  const tags = (Array.isArray(product?.tags) ? product.tags : []).map(t => String(t).toLowerCase());

  let guideKey = 'apparel';
  if (catSlug.includes('footwear') || catSlug.includes('shoes') || catName.includes('footwear') || tags.includes('shoes') || tags.includes('sneakers')) {
    guideKey = 'footwear';
  } else if (catSlug.includes('bottom') || catName.includes('bottom') || tags.includes('jeans') || tags.includes('trousers') || tags.includes('joggers')) {
    guideKey = 'bottoms';
  } else if (catSlug.includes('watch') || catSlug.includes('bag') || catSlug.includes('beauty') || catSlug.includes('home')) {
    guideKey = 'freesize';
  }

  const guide = SIZE_GUIDES[guideKey] || SIZE_GUIDES.apparel;
  const tableRows = guide.data[unit] || guide.data.in;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <Ruler className="w-5 h-5 text-[#581c87] shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                Size Chart & Guide
              </h2>
              <p className="text-xs text-gray-500 font-medium line-clamp-1">
                {product?.name || 'Find your perfect fit'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-800 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Unit Toggle and Category Title */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              {guide.title}
            </span>

            {guide.unitOptions && (
              <div className="flex items-center p-0.5 bg-gray-100 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setUnit('in')}
                  className={`px-3 py-1 rounded-md transition cursor-pointer ${unit === 'in'
                      ? 'bg-white text-[#581c87] shadow-xs font-bold'
                      : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  in (Inches)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1 rounded-md transition cursor-pointer ${unit === 'cm'
                      ? 'bg-white text-[#581c87] shadow-xs font-bold'
                      : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  cm (Centimeters)
                </button>
              </div>
            )}
          </div>

          {/* Table Container */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-purple-50/60 text-gray-700 font-bold border-b border-gray-200">
                  {guide.columns.map((col, idx) => (
                    <th key={idx} className="py-2.5 px-3 sm:px-4 text-center first:text-left">
                      {col}
                    </th>
                  ))}
                  <th className="py-2.5 px-3 text-right">Select</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableRows.map((row, index) => {
                  const isCurrent = String(selectedSize).toUpperCase() === String(row.size).toUpperCase();
                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        if (onSelectSize) onSelectSize(row.size);
                      }}
                      className={`transition-colors cursor-pointer text-center first:text-left ${isCurrent
                          ? 'bg-purple-100/50 text-[#581c87] font-bold'
                          : 'hover:bg-gray-50 text-gray-700'
                        }`}
                    >
                      <td className="py-2.5 px-3 sm:px-4 text-left font-bold text-gray-900">
                        <span className="inline-flex items-center gap-1.5">
                          {row.size}
                          {isCurrent && (
                            <span className="text-[10px] bg-[#581c87] text-white px-1.5 py-0.2 rounded-full font-semibold">
                              Selected
                            </span>
                          )}
                        </span>
                      </td>

                      {/* Guide specific cells */}
                      {guideKey === 'apparel' && (
                        <>
                          <td className="py-2.5 px-3 sm:px-4">{row.chest}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.waist}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.hip}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.length}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.shoulder}</td>
                        </>
                      )}

                      {guideKey === 'bottoms' && (
                        <>
                          <td className="py-2.5 px-3 sm:px-4">{row.waist}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.inseam}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.hip}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.thigh}</td>
                        </>
                      )}

                      {guideKey === 'footwear' && (
                        <>
                          <td className="py-2.5 px-3 sm:px-4">{row.us}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.eu}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.length}</td>
                        </>
                      )}

                      {guideKey === 'freesize' && (
                        <>
                          <td className="py-2.5 px-3 sm:px-4">{row.dim}</td>
                          <td className="py-2.5 px-3 sm:px-4">{row.desc}</td>
                        </>
                      )}

                      <td className="py-2.5 px-3 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onSelectSize) onSelectSize(row.size);
                          }}
                          className={`w-6 h-6 rounded-full inline-flex items-center justify-center transition ${isCurrent
                              ? 'bg-[#581c87] text-white'
                              : 'border border-gray-300 text-transparent hover:border-purple-600'
                            }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Measuring Guide Tips */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
              <Info className="w-3.5 h-3.5 text-[#581c87]" />
              <span>How To Measure Your Fit</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
              {guide.measureTips.map((tip, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                  <span className="font-bold text-gray-900 block mb-0.5">{tip.label}</span>
                  <span className="leading-snug">{tip.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="flex items-center justify-between text-xs text-gray-600 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
            <span className="font-medium">
              Not sure about the size? Enjoy <strong>7 Days Free Easy Exchange & Returns</strong>!
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-200 rounded-xl transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-xs sm:text-sm font-bold bg-[#581c87] hover:bg-[#4a148c] text-white rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Confirm Size ({selectedSize})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeChartModal;
