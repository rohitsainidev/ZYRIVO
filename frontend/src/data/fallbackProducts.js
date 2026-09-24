// Comprehensive Fallback Catalog with 5 distinct products for all 10 Women Ethnic and 10 Women Western subcategories
export const FALLBACK_PRODUCTS = [
  // ═════════════════════════════════════════════════════════════
  // 1. WOMEN ETHNIC: 10 Subcategories × 5 Distinct Products = 50
  // ═════════════════════════════════════════════════════════════

  // 1.1 Kurtas & Kurtis (5 items)
  {
    _id: 'fb-ethnic-kurta-1',
    name: 'ZYRIVO Gold Foil Printed Straight Chanderi Kurta',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1799,
    discountPrice: 999,
    ratings: 4.8,
    numReviews: 48,
    isFeatured: true,
    tags: ['women', 'ethnic', 'kurtas & kurtis', 'kurta', 'kurti', 'festive'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Lustrous festive Chanderi straight kurta with metallic gold foil block print, Mandarin collar, and three-quarter sleeves.',
  },
  {
    _id: 'fb-ethnic-kurta-2',
    name: 'Floral Embroidered Flared Rayon A-Line Kurti',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1599,
    discountPrice: 449,
    ratings: 4.7,
    numReviews: 35,
    isFeatured: false,
    tags: ['women', 'ethnic', 'kurtas & kurtis', 'kurti', 'kurta', 'a-line'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Flowy premium rayon A-line kurti with delicate Kashmiri multi-colored floral embroidery around the round neckline.',
  },
  {
    _id: 'fb-ethnic-kurta-3',
    name: 'Hand-Block Printed Kalamkari A-Line Tunic Kurta',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1699,
    discountPrice: 699,
    ratings: 4.9,
    numReviews: 62,
    isFeatured: true,
    tags: ['women', 'ethnic', 'kurtas & kurtis', 'kurta', 'kurti', 'kalamkari'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Traditional vegetable dye hand-block Kalamkari printed kurta crafted from breathable combed cotton with front wooden buttons.',
  },
  {
    _id: 'fb-ethnic-kurta-4',
    name: 'Classic Mandarin Collar Embroidered Silk Blend Kurti',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1899,
    discountPrice: 299,
    ratings: 4.8,
    numReviews: 41,
    isFeatured: false,
    tags: ['women', 'ethnic', 'kurtas & kurtis', 'kurta', 'kurti', 'silk kurti'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Royal crimson red silk-blend festive kurti featuring antique zari needlework across the yoke and sleeve cuffs.',
  },
  {
    _id: 'fb-ethnic-kurta-5',
    name: 'Bandhani Print Cotton Slub Festive Long Kurta',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1499,
    discountPrice: 549,
    ratings: 4.7,
    numReviews: 29,
    isFeatured: true,
    tags: ['women', 'ethnic', 'kurtas & kurtis', 'kurta', 'kurti', 'bandhani'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Vibrant Gujarati Bandhani printed straight kurti accented with gota lace borders and handmade potli buttons.',
  },

  // 1.2 Anarkali Kurta Sets (5 items)
  {
    _id: 'fb-ethnic-anarkali-1',
    name: 'Embroidered Anarkali Kurta Set with Chiffon Dupatta',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2999,
    discountPrice: 849,
    ratings: 4.9,
    numReviews: 52,
    isFeatured: true,
    tags: ['women', 'ethnic', 'anarkali kurta sets', 'anarkali', 'kurta set', 'festive'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Flowy Georgette Anarkali Kurta featuring intricate thread embroidery, matching churidar pants and a lightweight border dupatta.',
  },
  {
    _id: 'fb-ethnic-anarkali-2',
    name: 'Royal Georgette Mirror Work Flared Anarkali Suit',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3499,
    discountPrice: 1099,
    ratings: 4.8,
    numReviews: 44,
    isFeatured: true,
    tags: ['women', 'ethnic', 'anarkali kurta sets', 'anarkali', 'mirror work', 'wedding'],
    images: [{ url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop' }],
    description: 'Grand 32-kali flared floor-length anarkali suit decorated with authentic Abhla mirror-work and heavy zari borders.',
  },
  {
    _id: 'fb-ethnic-anarkali-3',
    name: 'Angrakha Style Gota Patti Chanderi Anarkali Set',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3299,
    discountPrice: 649,
    ratings: 4.9,
    numReviews: 38,
    isFeatured: false,
    tags: ['women', 'ethnic', 'anarkali kurta sets', 'anarkali', 'angrakha'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Overlapping Angrakha neckline with traditional Rajasthani gota patti tassels, paired with printed cigarette pants and organza dupatta.',
  },
  {
    _id: 'fb-ethnic-anarkali-4',
    name: 'Floral Printed Organza Flared Anarkali with Pants',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2799,
    discountPrice: 749,
    ratings: 4.7,
    numReviews: 49,
    isFeatured: true,
    tags: ['women', 'ethnic', 'anarkali kurta sets', 'anarkali', 'organza'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pastel blooming floral prints on sheer organza fabric with soft cotton lining, sweetheart neck, and silk straight pants.',
  },
  {
    _id: 'fb-ethnic-anarkali-5',
    name: 'Zari Thread Embroidered Floor-Length Silk Anarkali',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3999,
    discountPrice: 499,
    ratings: 4.9,
    numReviews: 56,
    isFeatured: false,
    tags: ['women', 'ethnic', 'anarkali kurta sets', 'anarkali', 'silk gown'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Bespoke royal festive ensemble with resham threadwork, golden dori waist tie, and voluminous can-can flared hemline.',
  },

  // 1.3 Chikankari Kurtis (5 items)
  {
    _id: 'fb-ethnic-chikan-1',
    name: 'Handcrafted Lucknowi Chikankari Georgette Kurti with Slip',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2199,
    discountPrice: 899,
    ratings: 4.8,
    numReviews: 64,
    isFeatured: true,
    tags: ['women', 'ethnic', 'chikankari kurtis', 'chikankari', 'kurti', 'lucknowi'],
    images: [{ url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Authentic handcrafted Chikankari needlework with Bakhiya and Phanda stitches on sheer georgette with tonal inner slip.',
  },
  {
    _id: 'fb-ethnic-chikan-2',
    name: 'Pastel Modal Cotton Mukaish Work Chikankari Kurti',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1899,
    discountPrice: 1199,
    ratings: 4.9,
    numReviews: 51,
    isFeatured: true,
    tags: ['women', 'ethnic', 'chikankari kurtis', 'chikankari', 'kurti', 'modal'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Ultra-soft modal cotton fabric infused with subtle silver mukaish badla dots and detailed artisan floral neck embroidery.',
  },
  {
    _id: 'fb-ethnic-chikan-3',
    name: 'Ivory Pure Mulmul Shadow Needlework Chikankari Kurti',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1999,
    discountPrice: 349,
    ratings: 4.8,
    numReviews: 37,
    isFeatured: false,
    tags: ['women', 'ethnic', 'chikankari kurtis', 'chikankari', 'mulmul'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Heritage ivory mulmul cotton kurti with Tepchi and shadow needlework, side slits, and comfortable straight silhouette.',
  },
  {
    _id: 'fb-ethnic-chikan-4',
    name: 'Lavender Hand-Embroidered Short Chikankari Tunic Kurti',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1499,
    discountPrice: 949,
    ratings: 4.7,
    numReviews: 42,
    isFeatured: true,
    tags: ['women', 'ethnic', 'chikankari kurtis', 'chikankari', 'short kurti'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Contemporary hip-length short chikankari kurti in soothing lavender, tailor-made for pairing with denim jeans or palazzos.',
  },
  {
    _id: 'fb-ethnic-chikan-5',
    name: 'Peach Silk Blend Heavy Floral Embroidered Chikankari Kurti',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2499,
    discountPrice: 279,
    ratings: 4.9,
    numReviews: 58,
    isFeatured: false,
    tags: ['women', 'ethnic', 'chikankari kurtis', 'chikankari', 'silk blend'],
    images: [{ url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Festive pure silk-georgette blend featuring all-over dense floral jaal chikankari motifs and scalloped hand-cut borders.',
  },

  // 1.4 Cotton Daily Kurtas (5 items)
  {
    _id: 'fb-ethnic-cotton-1',
    name: 'Pure Cotton Floral Print Straight Kurta with Palazzos',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1599,
    discountPrice: 479,
    ratings: 4.7,
    numReviews: 87,
    isFeatured: true,
    tags: ['women', 'ethnic', 'cotton daily kurtas', 'cotton', 'kurta', 'daily wear'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Everyday comfortable 100% breathable cotton straight-fit kurta paired with flared palazzo pants featuring pocket details.',
  },
  {
    _id: 'fb-ethnic-cotton-2',
    name: 'Jaipur Hand-Block Print Breathable Daily Cotton Kurta',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1399,
    discountPrice: 679,
    ratings: 4.8,
    numReviews: 73,
    isFeatured: true,
    tags: ['women', 'ethnic', 'cotton daily kurtas', 'cotton', 'daily wear', 'jaipuri'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Artisanal Sanganeri block-printed cotton kurta in natural indigo and rust hues, finished with wooden button placket.',
  },
  {
    _id: 'fb-ethnic-cotton-3',
    name: 'Striped Indigo Kalamkari Cotton Casual Office Wear Kurta',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1499,
    discountPrice: 879,
    ratings: 4.6,
    numReviews: 40,
    isFeatured: false,
    tags: ['women', 'ethnic', 'cotton daily kurtas', 'cotton', 'office wear', 'kurta'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Smart vertical stripes combined with Kalamkari border yoke. Crisp pure cotton keeps you cool throughout working hours.',
  },
  {
    _id: 'fb-ethnic-cotton-4',
    name: 'Pastel Mint Green Round-Neck Daily Wear Cotton Kurti',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1299,
    discountPrice: 1049,
    ratings: 4.7,
    numReviews: 33,
    isFeatured: false,
    tags: ['women', 'ethnic', 'cotton daily kurtas', 'cotton', 'daily wear', 'kurti'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Lightweight slub cotton tunic kurti with three-quarter folded sleeves, minimal side pockets, and relaxed breezy fit.',
  },
  {
    _id: 'fb-ethnic-cotton-5',
    name: 'Minimalist Khadi Cotton Button-Down Everyday Straight Kurta',
    brand: 'ZYRIVO DAILY',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1449,
    discountPrice: 329,
    ratings: 4.8,
    numReviews: 61,
    isFeatured: true,
    tags: ['women', 'ethnic', 'cotton daily kurtas', 'cotton', 'khadi', 'daily wear'],
    images: [{ url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Eco-friendly textured khadi cotton straight kurta featuring round split neck, side slits, and durable double-stitch seams.',
  },

  // 1.5 Ethnic Co-ord Sets (5 items)
  {
    _id: 'fb-ethnic-coord-1',
    name: 'Woven Jacquard Tunic and Tapered Trouser Ethnic Co-ord Set',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2899,
    discountPrice: 529,
    ratings: 4.9,
    numReviews: 47,
    isFeatured: true,
    tags: ['women', 'ethnic', 'ethnic co-ord sets', 'co-ord', 'coord set', 'suit set'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sophisticated 2-piece ethnic co-ord set featuring a woven metallic jacquard collared tunic paired with ankle-length matching trousers.',
  },
  {
    _id: 'fb-ethnic-coord-2',
    name: 'Bandhani Print Peplum Top with Flared Dhoti Pant Set',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2499,
    discountPrice: 729,
    ratings: 4.8,
    numReviews: 39,
    isFeatured: true,
    tags: ['women', 'ethnic', 'ethnic co-ord sets', 'co-ord', 'dhoti set', 'festive'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Contemporary ethnic silhouette comprising a flared Bandhani printed peplum top with mirror work belt and comfortable pleated dhoti pants.',
  },
  {
    _id: 'fb-ethnic-coord-3',
    name: 'Embroidered Silk Asymmetric High-Low Ethnic Co-ord Set',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2999,
    discountPrice: 979,
    ratings: 4.9,
    numReviews: 53,
    isFeatured: false,
    tags: ['women', 'ethnic', 'ethnic co-ord sets', 'co-ord', 'silk co-ord'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Modern high-low tunic shirt adorned with sequin lapel embroidery, paired with high-waisted relaxed flared ethnic palazzos.',
  },
  {
    _id: 'fb-ethnic-coord-4',
    name: 'Festive Mirror-Work Long Jacket with Crop Top & Palazzo Set',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3499,
    discountPrice: 1149,
    ratings: 4.9,
    numReviews: 68,
    isFeatured: true,
    tags: ['women', 'ethnic', 'ethnic co-ord sets', 'co-ord', 'jacket set', 'fusion'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Showstopping 3-piece festive fusion set with an embroidered bustier crop top, wide-leg georgette palazzos, and full-length sheer cape jacket.',
  },
  {
    _id: 'fb-ethnic-coord-5',
    name: 'Chevron Printed Chanderi Tunic with Wide-Leg Pants Set',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2699,
    discountPrice: 219,
    ratings: 4.7,
    numReviews: 31,
    isFeatured: false,
    tags: ['women', 'ethnic', 'ethnic co-ord sets', 'co-ord', 'chanderi set'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pastel festive Chanderi tunic with metallic chevron print, side tie-up dori, and matching comfortable elasticated wide trousers.',
  },

  // 1.6 Sarees (General & Handloom, 5 items)
  {
    _id: 'fb-ethnic-saree-1',
    name: 'Handloom Linen Cotton Saree with Silver Zari Pallu',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2799,
    discountPrice: 419,
    ratings: 4.8,
    numReviews: 55,
    isFeatured: true,
    tags: ['women', 'ethnic', 'sarees', 'saree', 'linen saree', 'handloom'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Eco-spun organic handloom linen saree enriched with metallic silver zari stripes on the pallu and contrasting running blouse fabric.',
  },
  {
    _id: 'fb-ethnic-saree-2',
    name: 'Contrast Border Heritage Kanjivaram Soft Silk Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 5499,
    discountPrice: 619,
    ratings: 4.9,
    numReviews: 61,
    isFeatured: true,
    tags: ['women', 'ethnic', 'sarees', 'saree', 'silk saree', 'kanjivaram'],
    images: [{ url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' }],
    description: 'South Indian heirloom aesthetic featuring exquisite temple zari borders, rich contrast pallu, and heavy jacquard weave.',
  },
  {
    _id: 'fb-ethnic-saree-3',
    name: 'Pastel Organza Floral Embroidered Scalloped Border Saree',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3899,
    discountPrice: 819,
    ratings: 4.8,
    numReviews: 45,
    isFeatured: true,
    tags: ['women', 'ethnic', 'sarees', 'saree', 'organza saree', 'scalloped'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Semi-sheer lustrous organza silk saree finished with intricate floral threadwork and delicate scalloped embroidered borders.',
  },
  {
    _id: 'fb-ethnic-saree-4',
    name: 'Dual-Tone Shimmering Tissue Silk Festive Saree',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 3499,
    discountPrice: 1019,
    ratings: 4.7,
    numReviews: 32,
    isFeatured: false,
    tags: ['women', 'ethnic', 'sarees', 'saree', 'tissue saree', 'festive'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Mesmerizing champagne gold tissue saree with metallic woven finish, lightweight drape, and golden zari tasselled pallu.',
  },
  {
    _id: 'fb-ethnic-saree-5',
    name: 'Handwoven Tussar Silk Saree with Traditional Zari Motifs',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4299,
    discountPrice: 369,
    ratings: 4.9,
    numReviews: 48,
    isFeatured: true,
    tags: ['women', 'ethnic', 'sarees', 'saree', 'tussar silk', 'silk saree'],
    images: [{ url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop' }],
    description: 'Authentic wild Tussar silk saree adorned with handwoven temple borders, earthy natural raw silk texture, and rich zari pallu.',
  },

  // 1.7 Banarasi Silk Sarees (5 items)
  {
    _id: 'fb-ethnic-banarasi-1',
    name: 'Regal Crimson Red Banarasi Katan Silk Zari Woven Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4999,
    discountPrice: 569,
    ratings: 4.9,
    numReviews: 76,
    isFeatured: true,
    tags: ['women', 'ethnic', 'banarasi silk sarees', 'banarasi', 'saree', 'silk saree', 'wedding'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Traditional Banarasi weave with regal floral kadwa motifs, broad golden zari border, and matching unstitched designer blouse piece.',
  },
  {
    _id: 'fb-ethnic-banarasi-2',
    name: 'Emerald Green Floral Kadwa Zari Weave Banarasi Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 5699,
    discountPrice: 769,
    ratings: 5.0,
    numReviews: 83,
    isFeatured: true,
    tags: ['women', 'ethnic', 'banarasi silk sarees', 'banarasi', 'saree', 'kadwa'],
    images: [{ url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pure Katan silk in jewel emerald green, handloom kadwa floral jaal with real golden zari threads and grand floral pallu.',
  },
  {
    _id: 'fb-ethnic-banarasi-3',
    name: 'Midnight Navy Blue Antique Zari Bridal Banarasi Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 6299,
    discountPrice: 1099,
    ratings: 4.9,
    numReviews: 59,
    isFeatured: false,
    tags: ['women', 'ethnic', 'banarasi silk sarees', 'banarasi', 'saree', 'bridal'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Deep royal navy blue katan silk saree woven with antique oxidized gold zari paisley butas and rich brocade pallu.',
  },
  {
    _id: 'fb-ethnic-banarasi-4',
    name: 'Mustard Yellow Pure Katan Silk Meenakari Banarasi Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 5199,
    discountPrice: 1249,
    ratings: 4.8,
    numReviews: 44,
    isFeatured: true,
    tags: ['women', 'ethnic', 'banarasi silk sarees', 'banarasi', 'saree', 'meenakari'],
    images: [{ url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop' }],
    description: 'Festive turmeric yellow banarasi saree accented with colorful Meenakari floral detailing within golden zari butis.',
  },
  {
    _id: 'fb-ethnic-banarasi-5',
    name: 'Blush Pink Floral Jaal Silver Zari Banarasi Silk Saree',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4799,
    discountPrice: 239,
    ratings: 4.9,
    numReviews: 67,
    isFeatured: false,
    tags: ['women', 'ethnic', 'banarasi silk sarees', 'banarasi', 'saree', 'silver zari'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Romantic pastel blush pink banarasi silk saree woven with radiant silver zari jaal work, ideal for daytime weddings.',
  },

  // 1.8 Georgette Printed Sarees (5 items)
  {
    _id: 'fb-ethnic-georgette-1',
    name: 'Botanical Floral Digital Print Pure Georgette Saree',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2699,
    discountPrice: 439,
    ratings: 4.7,
    numReviews: 39,
    isFeatured: true,
    tags: ['women', 'ethnic', 'georgette printed sarees', 'georgette', 'saree', 'floral saree'],
    images: [{ url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' }],
    description: 'Feather-light flowing pure georgette saree printed with blooming pastel botanical flora and subtle lace border detail.',
  },
  {
    _id: 'fb-ethnic-georgette-2',
    name: 'Ombre Sunset Dual-Tone Lightweight Georgette Party Saree',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2499,
    discountPrice: 639,
    ratings: 4.8,
    numReviews: 52,
    isFeatured: true,
    tags: ['women', 'ethnic', 'georgette printed sarees', 'georgette', 'saree', 'ombre'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Stunning seamless gradient transition from coral peach to fiery dusk magenta, finished with micro-sequin border lace.',
  },
  {
    _id: 'fb-ethnic-georgette-3',
    name: 'Polka Dot Retro Bollywood Chiffon-Georgette Saree',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2199,
    discountPrice: 839,
    ratings: 4.6,
    numReviews: 28,
    isFeatured: false,
    tags: ['women', 'ethnic', 'georgette printed sarees', 'georgette', 'saree', 'polka dot'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Vintage 90s inspired black and white polka dot saree crafted from airy georgette-chiffon blend with solid contrast piping.',
  },
  {
    _id: 'fb-ethnic-georgette-4',
    name: 'Abstract Geometric Multicolored Printed Georgette Saree',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2399,
    discountPrice: 1039,
    ratings: 4.7,
    numReviews: 36,
    isFeatured: true,
    tags: ['women', 'ethnic', 'georgette printed sarees', 'georgette', 'saree', 'printed'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Contemporary artwork on silk-georgette canvas featuring bold modern brush strokes and lightweight wrinkle-resistant drape.',
  },
  {
    _id: 'fb-ethnic-georgette-5',
    name: 'Water-Color Floral Pastel Breeze Georgette Saree',
    brand: 'ZYRIVO ETHNIC',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2599,
    discountPrice: 299,
    ratings: 4.8,
    numReviews: 43,
    isFeatured: false,
    tags: ['women', 'ethnic', 'georgette printed sarees', 'georgette', 'saree', 'pastel'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Delicate watercolor blossom painting across powder blue georgette with golden cord-piped hem and unstiched blouse.',
  },

  // 1.9 Lehengas & Cholis (5 items)
  {
    _id: 'fb-ethnic-lehenga-1',
    name: 'Velvet Heavy Embroidered Royal Bridal Lehenga Choli',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 8999,
    discountPrice: 499,
    ratings: 5.0,
    numReviews: 49,
    isFeatured: true,
    tags: ['women', 'ethnic', 'lehengas & cholis', 'lehenga', 'bridal', 'velvet'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Regal maroon velvet lehenga choli set densely embroidered with zardozi, kora, and sequin work. Includes dual sheer net dupattas.',
  },
  {
    _id: 'fb-ethnic-lehenga-2',
    name: 'Pastel Blush Pink Sequin Embellished Party Lehenga Set',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 5999,
    discountPrice: 699,
    ratings: 4.9,
    numReviews: 63,
    isFeatured: true,
    tags: ['women', 'ethnic', 'lehengas & cholis', 'lehenga', 'partywear', 'sequin'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Modern fairytale aesthetic featuring multi-layered georgette skirt with shimmering tonal sequins, designer padded blouse, and ruffled dupatta.',
  },
  {
    _id: 'fb-ethnic-lehenga-3',
    name: 'Raw Silk Floral Printed Sangeet Flared Lehenga Choli',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4999,
    discountPrice: 899,
    ratings: 4.8,
    numReviews: 38,
    isFeatured: false,
    tags: ['women', 'ethnic', 'lehengas & cholis', 'lehenga', 'sangeet', 'raw silk'],
    images: [{ url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop' }],
    description: 'Lustrous raw silk skirt in ivory and mint, printed with royal Mughal floral motifs, broad golden border, and matching sweetheart blouse.',
  },
  {
    _id: 'fb-ethnic-lehenga-4',
    name: 'Mirror Work Multicolored Festive Navratri Flared Lehenga Set',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4499,
    discountPrice: 1299,
    ratings: 4.8,
    numReviews: 54,
    isFeatured: true,
    tags: ['women', 'ethnic', 'lehengas & cholis', 'lehenga', 'navratri', 'mirror work'],
    images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Authentic Kutch mirror needlework on pure cotton flared lehenga with vibrant bandhani print borders and embellished choli.',
  },
  {
    _id: 'fb-ethnic-lehenga-5',
    name: 'Royal Sapphire Blue Zardozi Work Reception Lehenga Choli',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 7499,
    discountPrice: 199,
    ratings: 4.9,
    numReviews: 41,
    isFeatured: false,
    tags: ['women', 'ethnic', 'lehengas & cholis', 'lehenga', 'reception', 'zardozi'],
    images: [{ url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' }],
    description: 'Exquisite silk lehenga with 24-kali flare, adorned with real dabka and zardozi threadwork, paired with scalloped embroidered veil dupatta.',
  },

  // 1.10 Dupattas & Shawls (5 items)
  {
    _id: 'fb-ethnic-dupatta-1',
    name: 'Traditional Amritsari Phulkari Heavy Hand-Embroidered Dupatta',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1999,
    discountPrice: 399,
    ratings: 4.9,
    numReviews: 57,
    isFeatured: true,
    tags: ['women', 'ethnic', 'dupattas & shawls', 'dupatta', 'phulkari'],
    images: [{ url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Heirloom authentic Punjab Phulkari dupatta crafted with vibrant geometric silk floss thread needlework on breathable chinon fabric.',
  },
  {
    _id: 'fb-ethnic-dupatta-2',
    name: 'Luxurious Fine Pashmina Cashmere Winter Sozni Shawl',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 4999,
    discountPrice: 599,
    ratings: 5.0,
    numReviews: 71,
    isFeatured: true,
    tags: ['women', 'ethnic', 'dupattas & shawls', 'shawl', 'pashmina', 'cashmere'],
    images: [{ url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' }],
    description: '100% pure Himalayan Cashmere pashmina shawl detailed with traditional needlework Sozni borders, ultra-soft, warm, and lightweight.',
  },
  {
    _id: 'fb-ethnic-dupatta-3',
    name: 'Banarasi Brocade Woven Golden Zari Tissue Dupatta',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1799,
    discountPrice: 249,
    ratings: 4.8,
    numReviews: 46,
    isFeatured: false,
    tags: ['women', 'ethnic', 'dupattas & shawls', 'dupatta', 'banarasi dupatta'],
    images: [{ url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' }],
    description: 'Glamorous metallic tissue golden dupatta woven with Banarasi floral motifs and heavy pallu tassels, ideal for elevating simple suits.',
  },
  {
    _id: 'fb-ethnic-dupatta-4',
    name: 'Kalamkari Hand-Painted Pure Tussar Silk Dupatta',
    brand: 'ZYRIVO HERITAGE',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 2299,
    discountPrice: 799,
    ratings: 4.9,
    numReviews: 38,
    isFeatured: true,
    tags: ['women', 'ethnic', 'dupattas & shawls', 'dupatta', 'kalamkari', 'silk'],
    images: [{ url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Authentic pen Kalamkari storytelling artwork painted by master artisans using organic dyes on textured handloom Tussar silk.',
  },
  {
    _id: 'fb-ethnic-dupatta-5',
    name: 'Festive Chanderi Silk Gota Patti Border Dupatta with Latkans',
    brand: 'ZYRIVO RIWAAZ',
    category: { name: 'Women Ethnic Wear', slug: 'women-ethnic-wear' },
    price: 1499,
    discountPrice: 349,
    ratings: 4.7,
    numReviews: 33,
    isFeatured: false,
    tags: ['women', 'ethnic', 'dupattas & shawls', 'dupatta', 'chanderi', 'gota patti'],
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pastel festive Chanderi dupatta bordered with intricate golden gota patti lace and finished with handcrafted silk latkans.',
  },

  // ═════════════════════════════════════════════════════════════
  // 2. WOMEN WESTERN: 10 Subcategories × 5 Distinct Products = 50
  // ═════════════════════════════════════════════════════════════

  // 2.1 Tops & Blouses (5 items)
  {
    _id: 'fb-west-blouse-1',
    name: 'Satin V-Neck Ruched Wrap Blouse Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1499,
    discountPrice: 999,
    ratings: 4.8,
    numReviews: 62,
    isFeatured: true,
    tags: ['women', 'western', 'tops & blouses', 'tops', 'top', 'blouse', 'satin'],
    images: [{ url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Lustrous satin wrap blouse with cuffed bishop sleeves, flattering wrap waist tie, and subtle shoulder gathering.',
  },
  {
    _id: 'fb-west-blouse-2',
    name: 'Puff Sleeve Tiered Poplin Cotton Blouse Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1399,
    discountPrice: 449,
    ratings: 4.7,
    numReviews: 49,
    isFeatured: true,
    tags: ['women', 'western', 'tops & blouses', 'tops', 'top', 'blouse', 'cotton'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Crisp 100% poplin cotton blouse with dramatic puff shoulders, square neckline, and flattering flared peplum waist.',
  },
  {
    _id: 'fb-west-blouse-3',
    name: 'Classic French Cuff Tailored Silk Office Shirt Blouse',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1799,
    discountPrice: 699,
    ratings: 4.9,
    numReviews: 58,
    isFeatured: false,
    tags: ['women', 'western', 'tops & blouses', 'tops', 'top', 'blouse', 'formal shirt'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Executive tailored silk button-down blouse with hidden placket, pointed collar, and French double-cuffs.',
  },
  {
    _id: 'fb-west-blouse-4',
    name: 'Victorian High-Neck Ruffled Chiffon Party Blouse',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1599,
    discountPrice: 299,
    ratings: 4.8,
    numReviews: 41,
    isFeatured: true,
    tags: ['women', 'western', 'tops & blouses', 'tops', 'top', 'blouse', 'partywear'],
    images: [{ url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Semi-sheer chiffon evening blouse with delicate pleated ruffles around the high neck, keyhole back button, and lined body.',
  },
  {
    _id: 'fb-west-blouse-5',
    name: 'Cowl Neck Fluid Drape Sleeveless Evening Blouse Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1449,
    discountPrice: 549,
    ratings: 4.7,
    numReviews: 36,
    isFeatured: false,
    tags: ['women', 'western', 'tops & blouses', 'tops', 'top', 'blouse', 'evening'],
    images: [{ url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Ultra-soft slinky jersey knit top with elegant draped cowl neckline, tailored for layering beneath blazers or wearing solo.',
  },

  // 2.2 T-Shirts (5 items)
  {
    _id: 'fb-west-tshirt-1',
    name: 'Parisian Typography Vintage Washed Graphic Cotton T-Shirt',
    brand: 'ZYRIVO STREET',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1199,
    discountPrice: 849,
    ratings: 4.8,
    numReviews: 88,
    isFeatured: true,
    tags: ['women', 'western', 't-shirts', 't-shirt', 'tshirt', 'graphic tee'],
    images: [{ url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop' }],
    description: 'Bio-washed 100% cotton relaxed fit tee featuring subtle retro Parisian typography across the chest. Pre-shrunk and durable.',
  },
  {
    _id: 'fb-west-tshirt-2',
    name: 'Relaxed Boyfriend Fit Supima Cotton Minimalist T-Shirt',
    brand: 'ZYRIVO BASICS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1099,
    discountPrice: 1099,
    ratings: 4.9,
    numReviews: 95,
    isFeatured: true,
    tags: ['women', 'western', 't-shirts', 't-shirt', 'tshirt', 'basics'],
    images: [{ url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Buttery-soft 200 GSM long-staple Supima cotton tee with dropped shoulders, ribbed crewneck, and laid-back boyfriend cut.',
  },
  {
    _id: 'fb-west-tshirt-3',
    name: 'Ribbed Knit Slim Fit Scoop Neck Basic T-Shirt',
    brand: 'ZYRIVO BASICS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 899,
    discountPrice: 649,
    ratings: 4.7,
    numReviews: 54,
    isFeatured: false,
    tags: ['women', 'western', 't-shirts', 't-shirt', 'tshirt', 'ribbed'],
    images: [{ url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop' }],
    description: 'Stretch-cotton ribbed knit tee with flattering deep scoop neckline and contoured silhouette. Great for tucking into denim.',
  },
  {
    _id: 'fb-west-tshirt-4',
    name: 'Striped Breton Nautical Long Sleeve Cotton Tee',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1299,
    discountPrice: 749,
    ratings: 4.8,
    numReviews: 61,
    isFeatured: true,
    tags: ['women', 'western', 't-shirts', 't-shirt', 'tshirt', 'striped'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Timeless French nautical navy and white striped long-sleeve tee with boatneck collar and reinforced cuffs.',
  },
  {
    _id: 'fb-west-tshirt-5',
    name: 'Acid Wash Boxy Crop Streetwear Cotton T-Shirt',
    brand: 'ZYRIVO STREET',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1149,
    discountPrice: 499,
    ratings: 4.6,
    numReviews: 39,
    isFeatured: false,
    tags: ['women', 'western', 't-shirts', 't-shirt', 'tshirt', 'crop tee'],
    images: [{ url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Vintage mineral-washed charcoal tee featuring raw-edge cropped hemline and relaxed boxy chest fit.',
  },

  // 2.3 Crop Tops (5 items)
  {
    _id: 'fb-west-crop-1',
    name: 'Ribbed Knit Square Neck Sleeveless Crop Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 999,
    discountPrice: 899,
    ratings: 4.8,
    numReviews: 53,
    isFeatured: true,
    tags: ['women', 'western', 'crop tops', 'crop top', 'top', 'ribbed'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Thick sculpting ribbed knit crop top with architectural square neckline and wide bra-friendly shoulder straps.',
  },
  {
    _id: 'fb-west-crop-2',
    name: 'Halter Neck Seamless Butter-Soft Basic Crop Top',
    brand: 'ZYRIVO BASICS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 899,
    discountPrice: 1199,
    ratings: 4.7,
    numReviews: 46,
    isFeatured: false,
    tags: ['women', 'western', 'crop tops', 'crop top', 'halter', 'seamless'],
    images: [{ url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Double-lined seamless microfiber crop top with elegant tie-back halter neck and wire-free gentle support.',
  },
  {
    _id: 'fb-west-crop-3',
    name: 'Faux Leather Corset Boned Sleeveless Crop Top',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1499,
    discountPrice: 349,
    ratings: 4.9,
    numReviews: 67,
    isFeatured: true,
    tags: ['women', 'western', 'crop tops', 'crop top', 'corset', 'leather'],
    images: [{ url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Edgy night-out faux leather crop top equipped with supportive internal boning, curved hem, and back zip closure.',
  },
  {
    _id: 'fb-west-crop-4',
    name: 'Embroidered Linen Tie-Front Sweetheart Summer Crop Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1199,
    discountPrice: 949,
    ratings: 4.8,
    numReviews: 41,
    isFeatured: true,
    tags: ['women', 'western', 'crop tops', 'crop top', 'linen', 'summer'],
    images: [{ url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Breezy natural linen crop top with sweet floral eyelet embroidery, self-tie center knot, and ruched elasticated back.',
  },
  {
    _id: 'fb-west-crop-5',
    name: 'Long Sleeve Wrap-Front Twisted Ribbed Crop Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1299,
    discountPrice: 279,
    ratings: 4.7,
    numReviews: 38,
    isFeatured: false,
    tags: ['women', 'western', 'crop tops', 'crop top', 'long sleeve', 'knit'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Chic fall-winter crop top with cross-over twisted front detail and fitted long sleeves in stretch knit fabric.',
  },

  // 2.4 Floral Peplum Tops (5 items)
  {
    _id: 'fb-west-peplum-1',
    name: 'Floral Smocked Peplum Summer Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1299,
    discountPrice: 479,
    ratings: 4.8,
    numReviews: 57,
    isFeatured: true,
    tags: ['women', 'western', 'floral peplum tops', 'peplum', 'top', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Delicate floral ditsy print top with smocked elasticated bodice and ruffled peplum hemline. Lightweight and breathable.',
  },
  {
    _id: 'fb-west-peplum-2',
    name: 'Ditsy Botanical Print Sweetheart Ruffle Peplum Blouse',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1399,
    discountPrice: 679,
    ratings: 4.7,
    numReviews: 43,
    isFeatured: true,
    tags: ['women', 'western', 'floral peplum tops', 'peplum', 'blouse', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Romantic botanical wildflower print top with sweetheart neck, cap sleeves, and gently flared tiered peplum hem.',
  },
  {
    _id: 'fb-west-peplum-3',
    name: 'Smocked Bodice Puff Sleeve Chiffon Floral Peplum Top',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1449,
    discountPrice: 879,
    ratings: 4.9,
    numReviews: 51,
    isFeatured: false,
    tags: ['women', 'western', 'floral peplum tops', 'peplum', 'chiffon', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pastel peach and lavender chiffon floral blouse with flexible smocked body, sheer puff sleeves, and frill details.',
  },
  {
    _id: 'fb-west-peplum-4',
    name: 'V-Neck Tie-Waist Flared Floral Peplum Shirt Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1349,
    discountPrice: 1049,
    ratings: 4.8,
    numReviews: 36,
    isFeatured: true,
    tags: ['women', 'western', 'floral peplum tops', 'peplum', 'tie waist', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sophisticated collared floral shirt with wrap-around sash belt that cinches the waist into a flared peplum silhouette.',
  },
  {
    _id: 'fb-west-peplum-5',
    name: 'Tiered Ruffle Hem Pastel Floral Peplum Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1249,
    discountPrice: 329,
    ratings: 4.6,
    numReviews: 32,
    isFeatured: false,
    tags: ['women', 'western', 'floral peplum tops', 'peplum', 'ruffle', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sunny spring floral sleeveless top featuring a double-tiered ruffled peplum hem and button-back fastening.',
  },

  // 2.5 Casual Tunics (5 items)
  {
    _id: 'fb-west-tunic-1',
    name: 'Bohemian Embroidered Rayon Tunic Top',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1499,
    discountPrice: 529,
    ratings: 4.7,
    numReviews: 44,
    isFeatured: true,
    tags: ['women', 'western', 'casual tunics', 'tunic', 'top', 'boho'],
    images: [{ url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Relaxed bohemian tunic featuring multi-colored geometric threadwork across the V-neck placket, 3/4 sleeves, and side vents.',
  },
  {
    _id: 'fb-west-tunic-2',
    name: 'High-Low Asymmetric Flowy Linen Relaxed Tunic',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1599,
    discountPrice: 729,
    ratings: 4.8,
    numReviews: 53,
    isFeatured: true,
    tags: ['women', 'western', 'casual tunics', 'tunic', 'linen', 'high-low'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pure breathable linen blend tunic with contemporary high-low curved hemline, dropped shoulder seams, and relaxed fit.',
  },
  {
    _id: 'fb-west-tunic-3',
    name: 'Roll-Up Sleeve Mandarin Collar Button-Down Tunic',
    brand: 'ZYRIVO BASICS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1399,
    discountPrice: 979,
    ratings: 4.7,
    numReviews: 38,
    isFeatured: false,
    tags: ['women', 'western', 'casual tunics', 'tunic', 'shirt tunic'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Crisp cotton-poplin tunic shirt with mandarin collar, chest patch pocket, and convertible roll-up button tabs.',
  },
  {
    _id: 'fb-west-tunic-4',
    name: 'Relaxed Striped Slub Cotton Side-Slit Everyday Tunic',
    brand: 'ZYRIVO BASICS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1449,
    discountPrice: 1149,
    ratings: 4.8,
    numReviews: 47,
    isFeatured: true,
    tags: ['women', 'western', 'casual tunics', 'tunic', 'striped'],
    images: [{ url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' }],
    description: 'Muted grey and ivory horizontal textured slub stripes, crewneck line, deep side-slits, and hip-covering tunic length.',
  },
  {
    _id: 'fb-west-tunic-5',
    name: 'Embroidered Split-Neck Breezy Bohemian Summer Tunic',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1549,
    discountPrice: 219,
    ratings: 4.6,
    numReviews: 31,
    isFeatured: false,
    tags: ['women', 'western', 'casual tunics', 'tunic', 'summer tunic'],
    images: [{ url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Crinkle gauze cotton tunic with tassel-tie split neckline, bell cuffs, and artisan floral embroidery detail.',
  },

  // 2.6 Dresses & Jumpsuits (5 items)
  {
    _id: 'fb-west-dress-1',
    name: 'Ribbed Knit Bodycon Side-Slit Midi Dress',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1999,
    discountPrice: 419,
    ratings: 4.8,
    numReviews: 53,
    isFeatured: true,
    tags: ['women', 'western', 'dresses & jumpsuits', 'dress', 'bodycon', 'midi dress'],
    images: [{ url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' }],
    description: 'Figure-hugging medium-weight stretch ribbed knit midi dress with crewneck collar and subtle knee-height side leg slit.',
  },
  {
    _id: 'fb-west-dress-2',
    name: 'Tailored Wide-Leg Belted Minimalist Utility Jumpsuit',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2799,
    discountPrice: 619,
    ratings: 4.9,
    numReviews: 66,
    isFeatured: true,
    tags: ['women', 'western', 'dresses & jumpsuits', 'jumpsuit', 'wide-leg'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sophisticated day-to-night jumpsuit crafted from structured fluid crepe, featuring notch lapels, removable D-ring belt, and wide leg cut.',
  },
  {
    _id: 'fb-west-dress-3',
    name: 'Satin Cowl Back Evening Slip Midi Cocktail Dress',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2299,
    discountPrice: 819,
    ratings: 4.9,
    numReviews: 72,
    isFeatured: true,
    tags: ['women', 'western', 'dresses & jumpsuits', 'dress', 'satin dress', 'slip dress'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Lustrous bias-cut heavyweight satin slip dress featuring spaghetti shoulder straps and a show-stopping low draped cowl back.',
  },
  {
    _id: 'fb-west-dress-4',
    name: 'Structured Double-Breasted Tailored Blazer Dress',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2999,
    discountPrice: 1019,
    ratings: 4.8,
    numReviews: 45,
    isFeatured: false,
    tags: ['women', 'western', 'dresses & jumpsuits', 'dress', 'blazer dress'],
    images: [{ url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Power-dressing redefined: sharp padded shoulders, satin-faced peak lapels, and tailored double-breasted horn buttons.',
  },
  {
    _id: 'fb-west-dress-5',
    name: 'Off-Shoulder Flared Party Evening Jumpsuit with Belt',
    brand: 'ZYRIVO COUTURE',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2699,
    discountPrice: 369,
    ratings: 4.8,
    numReviews: 39,
    isFeatured: false,
    tags: ['women', 'western', 'dresses & jumpsuits', 'jumpsuit', 'partywear'],
    images: [{ url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' }],
    description: 'Dramatic fold-over off-shoulder neckline paired with a cinched gold buckle waist and sweeping flared trousers in rich noir crepe.',
  },

  // 2.7 Floral Maxi Dresses (5 items)
  {
    _id: 'fb-west-maxi-1',
    name: 'Floral Print Tiered Georgette Maxi Dress',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2299,
    discountPrice: 569,
    ratings: 4.8,
    numReviews: 76,
    isFeatured: true,
    tags: ['women', 'western', 'floral maxi dresses', 'maxi dress', 'dress', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' }],
    description: 'Vibrant botanical print maxi dress with sweetheart neckline, smocked elasticated waist, and tiered A-line skirt with flutter sleeves.',
  },
  {
    _id: 'fb-west-maxi-2',
    name: 'Bohemian Botanical Print Off-Shoulder Ruffle Maxi Dress',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2499,
    discountPrice: 769,
    ratings: 4.9,
    numReviews: 64,
    isFeatured: true,
    tags: ['women', 'western', 'floral maxi dresses', 'maxi dress', 'off-shoulder', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }],
    description: 'Breezy tropical floral maxi featuring an elasticated bardot neckline with wide ruffled trim and a flowy side thigh slit.',
  },
  {
    _id: 'fb-west-maxi-3',
    name: 'Sweetheart Neckline Tiered Slit Summer Sundress Maxi',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2199,
    discountPrice: 1099,
    ratings: 4.7,
    numReviews: 48,
    isFeatured: false,
    tags: ['women', 'western', 'floral maxi dresses', 'maxi dress', 'sundress', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pastel yellow wildflower print sundress with underwire sweetheart bustier, adjustable tie straps, and breezy tiered skirt.',
  },
  {
    _id: 'fb-west-maxi-4',
    name: 'Watercolor Pastel Floral Chiffon A-Line Holiday Maxi Dress',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2599,
    discountPrice: 1249,
    ratings: 4.9,
    numReviews: 57,
    isFeatured: true,
    tags: ['women', 'western', 'floral maxi dresses', 'maxi dress', 'chiffon', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Artistic blush pink watercolor blossoms on flowing sheer chiffon with opaque inner slip, halter neckline, and keyhole tie.',
  },
  {
    _id: 'fb-west-maxi-5',
    name: 'Vintage Cottagecore Puff Sleeve Shirred Bodice Maxi Dress',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2399,
    discountPrice: 239,
    ratings: 4.8,
    numReviews: 42,
    isFeatured: false,
    tags: ['women', 'western', 'floral maxi dresses', 'maxi dress', 'cottagecore', 'floral'],
    images: [{ url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' }],
    description: 'Enchanting meadow flower print cotton maxi with voluminous elasticated puff sleeves, stretchy smocked bodice, and gathered hem.',
  },

  // 2.8 Denim Jeans (5 items)
  {
    _id: 'fb-west-jeans-1',
    name: 'High-Rise Vintage Wide Leg Denim Jeans',
    brand: 'ZYRIVO DENIM',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2199,
    discountPrice: 439,
    ratings: 4.8,
    numReviews: 82,
    isFeatured: true,
    tags: ['women', 'western', 'denim jeans', 'jeans', 'denim', 'wide leg'],
    images: [{ url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop' }],
    description: 'Classic 5-pocket high-waisted denim jeans crafted from rigid-feel stretch cotton denim with authentic vintage fading.',
  },
  {
    _id: 'fb-west-jeans-2',
    name: 'Classic 90s Straight Leg Light Wash Cotton Denim Jeans',
    brand: 'ZYRIVO DENIM',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1999,
    discountPrice: 639,
    ratings: 4.7,
    numReviews: 69,
    isFeatured: true,
    tags: ['women', 'western', 'denim jeans', 'jeans', 'denim', 'straight leg'],
    images: [{ url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop' }],
    description: 'Effortless retro aesthetic featuring straight-cut leg opening, silver rivet hardware, and authentic whiskering wash.',
  },
  {
    _id: 'fb-west-jeans-3',
    name: 'High-Waisted Ankle Grazer Stretch Skinny Jeans',
    brand: 'ZYRIVO DENIM',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1899,
    discountPrice: 839,
    ratings: 4.8,
    numReviews: 74,
    isFeatured: false,
    tags: ['women', 'western', 'denim jeans', 'jeans', 'denim', 'skinny'],
    images: [{ url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=800&auto=format&fit=crop' }],
    description: 'Ultra-flexible sculpting power-stretch denim hugs your contours while retaining shape all day. Raw cut ankle-length hem.',
  },
  {
    _id: 'fb-west-jeans-4',
    name: 'Retro 70s Flared Bell Bottom Raw Hem Denim Jeans',
    brand: 'ZYRIVO DENIM',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2299,
    discountPrice: 1039,
    ratings: 4.9,
    numReviews: 58,
    isFeatured: true,
    tags: ['women', 'western', 'denim jeans', 'jeans', 'denim', 'flare'],
    images: [{ url: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop' }],
    description: 'Statement bell-bottom flared jeans fitted smoothly through the thigh and opening widely at the knees. Deep indigo wash.',
  },
  {
    _id: 'fb-west-jeans-5',
    name: 'Relaxed Boyfriend Distressed Multi-Pocket Cargo Jeans',
    brand: 'ZYRIVO STREET',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2399,
    discountPrice: 299,
    ratings: 4.7,
    numReviews: 49,
    isFeatured: false,
    tags: ['women', 'western', 'denim jeans', 'jeans', 'denim', 'cargo'],
    images: [{ url: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=800&auto=format&fit=crop' }],
    description: 'Urban streetwear cargo denim equipped with roomy utility flap pockets, relaxed slouchy rise, and subtle distressed knees.',
  },

  // 2.9 Formal Trousers (5 items)
  {
    _id: 'fb-west-trouser-1',
    name: 'Pleated High-Waisted Straight Leg Work Trousers',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1899,
    discountPrice: 499,
    ratings: 4.8,
    numReviews: 63,
    isFeatured: true,
    tags: ['women', 'western', 'formal trousers', 'trousers', 'formal pants', 'workwear'],
    images: [{ url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' }],
    description: 'Impeccably tailored business trousers with double front pleats, crisp pressed center creases, and slant side pockets.',
  },
  {
    _id: 'fb-west-trouser-2',
    name: 'Tailored Ankle-Length Slim Cigarette Office Pants',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1799,
    discountPrice: 699,
    ratings: 4.8,
    numReviews: 54,
    isFeatured: true,
    tags: ['women', 'western', 'formal trousers', 'trousers', 'cigarette pants', 'office'],
    images: [{ url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sleek 7/8 ankle cigarette trousers tailored in bi-stretch cotton blend with waistband belt loops and clean back welt pockets.',
  },
  {
    _id: 'fb-west-trouser-3',
    name: 'Paperbag Waist Belted Fluid Drape Formal Trousers',
    brand: 'ZYRIVO STUDIO',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1999,
    discountPrice: 899,
    ratings: 4.7,
    numReviews: 41,
    isFeatured: false,
    tags: ['women', 'western', 'formal trousers', 'trousers', 'paperbag'],
    images: [{ url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' }],
    description: 'High-rise paperbag waist with self-fabric buckle belt, relaxed tapered legs, and breathable fluid twill fabric.',
  },
  {
    _id: 'fb-west-trouser-4',
    name: 'Minimalist Front-Seam Crepe Flare Formal Pants',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 1849,
    discountPrice: 1299,
    ratings: 4.9,
    numReviews: 58,
    isFeatured: true,
    tags: ['women', 'western', 'formal trousers', 'trousers', 'crepe pants'],
    images: [{ url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop' }],
    description: 'Flattering vertical pintuck front seams elongate the silhouette on these subtle bootcut stretch crepe dress trousers.',
  },
  {
    _id: 'fb-west-trouser-5',
    name: 'Wide-Leg Palazzo Cut Tailored Business Trousers',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2099,
    discountPrice: 199,
    ratings: 4.8,
    numReviews: 47,
    isFeatured: false,
    tags: ['women', 'western', 'formal trousers', 'trousers', 'wide leg'],
    images: [{ url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=800&auto=format&fit=crop' }],
    description: 'Wide-leg flowing trousers featuring a structured flat waistband, concealed zip fly, and rich navy suiting drape.',
  },

  // 2.10 Blazers & Jackets (5 items)
  {
    _id: 'fb-west-blazer-1',
    name: 'Tailored Double-Breasted Formal Structured Blazer',
    brand: 'ZYRIVO PARIS',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 3499,
    discountPrice: 399,
    ratings: 4.9,
    numReviews: 73,
    isFeatured: true,
    tags: ['women', 'western', 'blazers & jackets', 'blazer', 'jacket', 'formal'],
    images: [{ url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop' }],
    description: 'Impeccably tailored double-breasted suit blazer with sharp peak lapels, tortoiseshell buttons, and silky satin inner lining.',
  },
  {
    _id: 'fb-west-blazer-2',
    name: 'Oversized Houndstooth Wool Blend Winter Blazer',
    brand: 'ZYRIVO ATELIER',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 3999,
    discountPrice: 599,
    ratings: 4.9,
    numReviews: 81,
    isFeatured: true,
    tags: ['women', 'western', 'blazers & jackets', 'blazer', 'wool', 'winter'],
    images: [{ url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' }],
    description: 'Classic monochrome houndstooth check pattern woven with warm wool-blend yarn in an effortlessly chic relaxed oversized cut.',
  },
  {
    _id: 'fb-west-blazer-3',
    name: 'Buttery Soft Vegan Faux Leather Moto Biker Jacket',
    brand: 'ZYRIVO STREET',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 3299,
    discountPrice: 249,
    ratings: 4.8,
    numReviews: 69,
    isFeatured: true,
    tags: ['women', 'western', 'blazers & jackets', 'jacket', 'leather jacket', 'biker'],
    images: [{ url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' }],
    description: 'Asymmetric front zipper, notched lapel snap buttons, zippered cuffs, and belted waist in supple pebble-grain vegan leather.',
  },
  {
    _id: 'fb-west-blazer-4',
    name: 'Classic Vintage Wash Denim Trucker Jacket with Metal Buttons',
    brand: 'ZYRIVO DENIM',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 2499,
    discountPrice: 799,
    ratings: 4.7,
    numReviews: 52,
    isFeatured: false,
    tags: ['women', 'western', 'blazers & jackets', 'jacket', 'denim jacket'],
    images: [{ url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' }],
    description: 'Heritage medium blue wash cotton denim trucker jacket with twin flap chest pockets, adjustable waist tabs, and copper buttons.',
  },
  {
    _id: 'fb-west-blazer-5',
    name: 'Boucle Tweed Gold Button Luxury Fringe-Trim Jacket',
    brand: 'ZYRIVO ATELIER',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 3799,
    discountPrice: 349,
    ratings: 5.0,
    numReviews: 64,
    isFeatured: true,
    tags: ['women', 'western', 'blazers & jackets', 'jacket', 'tweed', 'luxury'],
    images: [{ url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop' }],
    description: 'Chanel-inspired ivory and gold textured boucle tweed jacket featuring braided fringe trims and ornate embossed crested buttons.',
  },

  // ═════════════════════════════════════════════════════════════
  // 3. SHOES, BAGS, WATCHES & MEN
  // ═════════════════════════════════════════════════════════════
  {
    _id: 'fb-shoe-1',
    name: 'Breathable Lightweight Mesh Running Sneakers',
    brand: 'ZYRIVO SPORT',
    category: { name: 'Footwear & Sneakers', slug: 'footwear-sneakers' },
    price: 2999,
    discountPrice: 999,
    ratings: 4.9,
    numReviews: 114,
    isFeatured: true,
    tags: ['shoes', 'sports shoes', 'running shoes', 'footwear', 'sports'],
    images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' }],
    description: 'Engineered breathable mesh upper with cushioned responsive EVA sole for all-day athletic performance.',
  },
  {
    _id: 'fb-shoe-2',
    name: 'Pointed-Toe Classic Stiletto Pumps',
    brand: 'ZYRIVO STEPS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 2499,
    discountPrice: 449,
    ratings: 4.8,
    numReviews: 40,
    isFeatured: true,
    tags: ['women', 'shoes', 'footwear', 'heels & wedges', 'heels'],
    images: [{ url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' }],
    description: 'Sleek 3-inch stiletto heels with anti-skid rubber sole and padded footbed.',
  },
  {
    _id: 'fb-shoe-3',
    name: 'Classic Suede Tassel Penny Loafers',
    brand: 'ZYRIVO FOOTWEAR',
    category: { name: 'Footwear & Sneakers', slug: 'footwear-sneakers' },
    price: 3499,
    discountPrice: 699,
    ratings: 4.8,
    numReviews: 53,
    isFeatured: false,
    tags: ['men', 'shoes', 'loafers', 'footwear', 'casual shoes'],
    images: [{ url: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop' }],
    description: 'Hand-burnished Italian suede loafers with cushioned footbed and classic front tassel accent.',
  },
  {
    _id: 'fb-shoe-4',
    name: 'Embroidered Punjabi Juttis with Zardozi Work',
    brand: 'ZYRIVO STEPS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 1399,
    discountPrice: 299,
    ratings: 4.8,
    numReviews: 38,
    isFeatured: false,
    tags: ['women', 'shoes', 'footwear', 'flats & sandals', 'juttis'],
    images: [{ url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop' }],
    description: 'Pure genuine leather sole Punjabi juttis accented with genuine zari and mirror embroidery.',
  },
  {
    _id: 'fb-shoe-5',
    name: 'Strappy Metallic Ankle-Wrap Block Heels',
    brand: 'ZYRIVO STEPS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 2299,
    discountPrice: 549,
    ratings: 4.7,
    numReviews: 48,
    isFeatured: true,
    tags: ['women', 'shoes', 'heels', 'sandals', 'footwear'],
    images: [{ url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' }],
    description: 'Shimmering metallic gold strappy block heels featuring adjustable ankle buckle and comfort arch.',
  },
  {
    _id: 'fb-bag-1',
    name: 'Structured Canvas & Vegan Leather Tote Bag',
    brand: 'ZYRIVO BAGS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 1999,
    discountPrice: 849,
    ratings: 4.7,
    numReviews: 52,
    isFeatured: true,
    tags: ['women', 'bags', 'bag', 'tote bags', 'canvas tote'],
    images: [{ url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop' }],
    description: 'Spacious everyday tote bag with laptop sleeve, inner zippered pouch, and reinforced dual shoulder straps.',
  },
  {
    _id: 'fb-bag-2',
    name: 'Quilted Chain Strap Crossbody Handbag',
    brand: 'ZYRIVO BAGS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 2799,
    discountPrice: 1099,
    ratings: 4.9,
    numReviews: 84,
    isFeatured: true,
    tags: ['women', 'bags', 'bag', 'handbags & clutches', 'crossbody', 'handbag'],
    images: [{ url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' }],
    description: 'Premium vegan leather with elegant diamond quilting, gold-tone twist-lock closure, and dual compartments.',
  },
  {
    _id: 'fb-bag-3',
    name: 'Pebbled Leather Minimalist Shoulder Hobo Bag',
    brand: 'ZYRIVO BAGS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 2599,
    discountPrice: 649,
    ratings: 4.8,
    numReviews: 67,
    isFeatured: true,
    tags: ['women', 'bags', 'bag', 'handbag', 'shoulder bag'],
    images: [{ url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop' }],
    description: 'Supple full-grain pebbled faux leather shoulder bag with spacious magnetic-snap compartment and wide strap.',
  },
  {
    _id: 'fb-bag-4',
    name: 'Multi-Pocket Water-Resistant Travel Laptop Backpack',
    brand: 'ZYRIVO GEAR',
    category: { name: 'Bags & Leather', slug: 'bags-leather' },
    price: 2899,
    discountPrice: 749,
    ratings: 4.9,
    numReviews: 89,
    isFeatured: false,
    tags: ['bags', 'bag', 'backpack', 'laptop bag', 'travel'],
    images: [{ url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' }],
    description: 'Ergonomic urban backpack featuring padded 15.6-inch laptop compartment and water-repellent fabric.',
  },
  {
    _id: 'fb-bag-5',
    name: 'Glamour Crystal Box Evening Party Clutch',
    brand: 'ZYRIVO BAGS',
    category: { name: 'Women Footwear & Bags', slug: 'women-footwear-bags' },
    price: 2199,
    discountPrice: 499,
    ratings: 4.8,
    numReviews: 36,
    isFeatured: true,
    tags: ['women', 'bags', 'bag', 'clutch', 'party wear'],
    images: [{ url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' }],
    description: 'Dazzling rhinestone-encrusted evening minaudiere clutch with detachable golden chain strap.',
  },
  {
    _id: 'fb-watch-1',
    name: 'Chronograph Eclipse Skeleton Watch',
    brand: 'ZYRIVO HOROLOGY',
    category: { name: 'Watches & Timepieces', slug: 'watches-timepieces' },
    price: 8999,
    discountPrice: 899,
    ratings: 5.0,
    numReviews: 24,
    isFeatured: true,
    tags: ['men', 'unisex', 'watches', 'watch', 'accessories'],
    images: [{ url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop' }],
    description: 'Precision Swiss automatic movement encased in 316L aerospace-grade stainless steel with sapphire crystal glass.',
  },
  {
    _id: 'fb-watch-2',
    name: 'Rose Gold Minimalist Mesh Analog Watch',
    brand: 'ZYRIVO HOROLOGY',
    category: { name: 'Watches & Timepieces', slug: 'watches-timepieces' },
    price: 3999,
    discountPrice: 1199,
    ratings: 4.9,
    numReviews: 58,
    isFeatured: true,
    tags: ['women', 'unisex', 'watches', 'watch', 'accessories'],
    images: [{ url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop' }],
    description: 'Ultra-thin 6mm case with clean sunray dial and adjustable stainless steel mesh strap.',
  },
  {
    _id: 'fb-coat-1',
    name: 'ZYRIVO Royal Cashmere Trench Coat',
    brand: 'ZYRIVO ATELIER',
    category: { name: 'Women Western Wear', slug: 'women-western-wear' },
    price: 24999,
    discountPrice: 349,
    ratings: 4.9,
    numReviews: 12,
    isFeatured: true,
    tags: ['coat', 'cashmere', 'winter', 'luxury', 'women', 'western', 'blazers & jackets'],
    images: [{ url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop' }],
    description: 'Expertly crafted from pure Mongolian cashmere, this double-breasted trench features bespoke tortoiseshell buttons and silk satin lining.',
  },

  // ═════════════════════════════════════════════════════════════
  // 3. MEN FASHION: 10 Subcategories × 5 Exact Products = 50
  // ═════════════════════════════════════════════════════════════
  {
    "_id": "fb-men-tshirt-1",
    "name": "Men Solid Crewneck Pure Supima Cotton T-Shirt",
    "brand": "ZYRIVO BASICS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.8,
    "numReviews": 94,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "t-shirts",
      "men t-shirts",
      "crewneck",
      "cotton",
      "basics"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Everyday staple crewneck tee crafted from 100% long-staple Supima cotton with ribbed collar and breathable finish."
  },
  {
    "_id": "fb-men-tshirt-2",
    "name": "Men Slim Fit Classic Solid White V-Neck T-Shirt",
    "brand": "ZYRIVO BASICS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1099,
    "discountPrice": 449,
    "ratings": 4.7,
    "numReviews": 68,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "t-shirts",
      "men t-shirts",
      "v-neck",
      "white tee",
      "slim fit"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Crisp minimal white V-neck t-shirt in combed organic cotton, designed with a modern contoured slim fit."
  },
  {
    "_id": "fb-men-tshirt-3",
    "name": "Men Vintage Washed Mineral Black Bio-Wash T-Shirt",
    "brand": "ZYRIVO DENIM",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.9,
    "numReviews": 112,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "t-shirts",
      "men t-shirts",
      "mineral wash",
      "black tee"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Acid-mineral washed vintage charcoal black t-shirt treated with bio-softening enzymes for an authentic broken-in feel."
  },
  {
    "_id": "fb-men-tshirt-4",
    "name": "Men Bold Typography Chest Print Casual T-Shirt",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 83,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "t-shirts",
      "men t-shirts",
      "graphic tee",
      "casual t-shirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Statement casual t-shirt with premium rubberized micro-typography chest print on 200 GSM breathable jersey knit."
  },
  {
    "_id": "fb-men-tshirt-5",
    "name": "Men Nautical Breton Striped Premium Cotton T-Shirt",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "t-shirts",
      "men t-shirts",
      "striped",
      "casual t-shirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "French Riviera inspired yarn-dyed navy and white Breton striped t-shirt made with ultra-soft combed cotton."
  },
  {
    "_id": "fb-men-polo-1",
    "name": "Men Honeycomb Pique Textured Solid Polo T-Shirt",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "polo t-shirts",
      "polo",
      "pique polo",
      "collared"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Refined 240 GSM honeycomb pique knit polo t-shirt featuring ribbed flat-knit collar and mother-of-pearl buttons."
  },
  {
    "_id": "fb-men-polo-2",
    "name": "Men Contrast Tipped Collar Slim Fit Polo T-Shirt",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1799,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 72,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "polo t-shirts",
      "polo",
      "tipped polo",
      "smart casual"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern preppy polo shirt featuring dual contrast tipping stripes along the collar edges and sleeve cuffs."
  },
  {
    "_id": "fb-men-polo-3",
    "name": "Men Mercerized Cotton Luxe Smart Casual Polo T-Shirt",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.9,
    "numReviews": 88,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "polo t-shirts",
      "polo",
      "luxury polo",
      "mercerized cotton"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-sheen mercerized double-twisted cotton polo with an ultra-smooth silky hand-feel and clean French placket."
  },
  {
    "_id": "fb-men-polo-4",
    "name": "Men Retro Zipper Placket Textured Knit Polo T-Shirt",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.7,
    "numReviews": 61,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "polo t-shirts",
      "polo",
      "zip polo",
      "textured polo"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary polo shirt styled with an antique silver quarter-zip front fastener and subtle micro-waffle weave."
  },
  {
    "_id": "fb-men-polo-5",
    "name": "Men Colorblock Athletic Moisture-Wicking Polo T-Shirt",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1699,
    "discountPrice": 699,
    "ratings": 4.8,
    "numReviews": 54,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "polo t-shirts",
      "polo",
      "sports polo",
      "quick dry"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Performance-ready sports polo engineered with quick-dry breathable polyester mesh fabric and contrast raglan sleeves."
  },
  {
    "_id": "fb-men-oversized-1",
    "name": "Tokyo Underground Acid-Wash Oversized Graphic Tee",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.9,
    "numReviews": 128,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "oversized streetwear tees",
      "oversized tee",
      "streetwear",
      "drop shoulder"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavyweight 260 GSM drop-shoulder boxy silhouette tee featuring Japanese cyberpunk typography back artwork."
  },
  {
    "_id": "fb-men-oversized-2",
    "name": "Minimalist Monolith Heavyweight Drop-Shoulder Tee",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1699,
    "discountPrice": 649,
    "ratings": 4.8,
    "numReviews": 91,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "oversized streetwear tees",
      "oversized tee",
      "drop shoulder",
      "minimalist"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-heavyweight 280 GSM French Terry oversized t-shirt in washed earth tone with thick ribbed neckband."
  },
  {
    "_id": "fb-men-oversized-3",
    "name": "Rebel Horizon Distressed Raw-Hem Oversized T-Shirt",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1899,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 77,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "oversized streetwear tees",
      "oversized tee",
      "distressed",
      "skater tee"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vintage-washed streetwear boxy t-shirt with subtle distress grinding along the collar and raw unfinished hemline."
  },
  {
    "_id": "fb-men-oversized-4",
    "name": "Neo Cyber Aesthetic Back-Print Oversized Skater Tee",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.7,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "oversized streetwear tees",
      "oversized tee",
      "skater tee",
      "graphic"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Loose oversized fit skate tee with high-density gradient puff-print on chest and expansive abstract cyber graphic across back."
  },
  {
    "_id": "fb-men-oversized-5",
    "name": "Urban Monochrome Boxy Relaxed Cotton Streetwear Tee",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 1599,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 82,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "oversized streetwear tees",
      "oversized tee",
      "boxy tee",
      "monochrome"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Clean monochrome oversized tee tailored with wider sleeves and a slouchy dropped shoulder for relaxed modern layering."
  },
  {
    "_id": "fb-men-linenshirt-1",
    "name": "Pure French Flax Relaxed Mandarin Collar Linen Shirt",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2499,
    "discountPrice": 1199,
    "ratings": 4.9,
    "numReviews": 104,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "casual linen shirts",
      "linen shirts",
      "linen",
      "mandarin collar"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "100% Normandy French flax linen shirt in relaxed band-collar design with natural shell buttons and airy breathable drape."
  },
  {
    "_id": "fb-men-linenshirt-2",
    "name": "Washed Indigo Chambray-Linen Spread Collar Casual Shirt",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2299,
    "discountPrice": 1049,
    "ratings": 4.8,
    "numReviews": 79,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "casual linen shirts",
      "linen shirts",
      "chambray",
      "spread collar"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Garment-washed linen-cotton blend casual shirt featuring an easy spread collar, patch chest pocket, and curved hem."
  },
  {
    "_id": "fb-men-linenshirt-3",
    "name": "Cuban Camp Collar Breathable Summer Striped Linen Shirt",
    "brand": "ZYRIVO RESORT",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2399,
    "discountPrice": 1099,
    "ratings": 4.8,
    "numReviews": 66,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "casual linen shirts",
      "linen shirts",
      "cuban collar",
      "resort wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Resort-ready Cuban notched collar linen shirt with vertical awning stripes, boxy short cut, and lightweight texture."
  },
  {
    "_id": "fb-men-linenshirt-4",
    "name": "Solid Olive Green Pre-Washed Roll-Tab Sleeve Linen Shirt",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2199,
    "discountPrice": 999,
    "ratings": 4.7,
    "numReviews": 53,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "casual linen shirts",
      "linen shirts",
      "roll-tab",
      "casual shirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Earthy olive hue linen shirt with adjustable roll-tab sleeve loops, double chest flap pockets, and washed finish."
  },
  {
    "_id": "fb-men-linenshirt-5",
    "name": "Coastal Beige Button-Down Classic Fit Pure Linen Shirt",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2599,
    "discountPrice": 1249,
    "ratings": 4.9,
    "numReviews": 87,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "casual linen shirts",
      "linen shirts",
      "pure linen",
      "button down"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Timeless beige pure linen button-down casual shirt with box pleat back and natural thermoregulating properties."
  },
  {
    "_id": "fb-men-formalshirt-1",
    "name": "Men Executive Crisp White 100s Two-Ply Formal Shirt",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2799,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 142,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "formal shirts",
      "formal shirt",
      "white formal shirt",
      "office wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Impeccably tailored 100s 2-ply Egyptian cotton executive shirt with stiff semi-spread collar and single cuff link option."
  },
  {
    "_id": "fb-men-formalshirt-2",
    "name": "Men Sky Blue Fine Herringbone Weave Tailored Formal Shirt",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2599,
    "discountPrice": 1199,
    "ratings": 4.8,
    "numReviews": 96,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "formal shirts",
      "formal shirt",
      "blue formal",
      "herringbone"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Distinguished sky-blue tailored shirt in subtle herringbone dobby weave with wrinkle-resistant easy-iron finish."
  },
  {
    "_id": "fb-men-formalshirt-3",
    "name": "Men Royal Oxford Weave Cutaway Collar Slim Formal Shirt",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2699,
    "discountPrice": 1249,
    "ratings": 4.8,
    "numReviews": 81,
    "isFeatured": true,
    "tags": [
      "men",
      "men top wear",
      "formal shirts",
      "formal shirt",
      "oxford shirt",
      "cutaway collar"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Lustrous royal Oxford weave formal shirt equipped with modern wide cutaway collar built to accommodate full Windsor tie knots."
  },
  {
    "_id": "fb-men-formalshirt-4",
    "name": "Men Subtle Micro-Check Executive French Cuff Formal Shirt",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2899,
    "discountPrice": 1349,
    "ratings": 4.9,
    "numReviews": 69,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "formal shirts",
      "formal shirt",
      "french cuff",
      "micro-check"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Boardroom-ready micro-grid check formal shirt finished with double French cuffs for cufflinks and a streamlined darted back."
  },
  {
    "_id": "fb-men-formalshirt-5",
    "name": "Men Midnight Navy Luxe Satin-Finish Formal Evening Shirt",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Top Wear",
      "slug": "men-top-wear"
    },
    "price": 2999,
    "discountPrice": 1399,
    "ratings": 4.8,
    "numReviews": 58,
    "isFeatured": false,
    "tags": [
      "men",
      "men top wear",
      "formal shirts",
      "formal shirt",
      "navy formal",
      "evening shirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sophisticated midnight navy evening dress shirt in silk-cotton sateen with clean concealed button placket."
  },
  {
    "_id": "fb-men-jeans-1",
    "name": "Men Slim Tapered Indigo Stretch Washed Denim Jeans",
    "brand": "ZYRIVO DENIM",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.8,
    "numReviews": 156,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "denim jeans",
      "men denim jeans",
      "jeans",
      "indigo denim",
      "slim tapered"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Premium 12.5 oz comfort-stretch indigo denim jeans with authentic whiskering, hand-sanding, and a tailored slim tapered leg."
  },
  {
    "_id": "fb-men-jeans-2",
    "name": "Men Vintage Washed Straight-Fit Rigid Selvedge Jeans",
    "brand": "ZYRIVO DENIM",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2999,
    "discountPrice": 1399,
    "ratings": 4.9,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "denim jeans",
      "men denim jeans",
      "jeans",
      "selvedge",
      "straight fit"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heritage straight-fit jeans crafted from 13.5 oz red-line shuttle-loom selvedge denim with antique brass hardware."
  },
  {
    "_id": "fb-men-jeans-3",
    "name": "Men Jet Black Stay-Black Slim-Straight Denim Jeans",
    "brand": "ZYRIVO DENIM",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2399,
    "discountPrice": 1049,
    "ratings": 4.8,
    "numReviews": 114,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "denim jeans",
      "men denim jeans",
      "jeans",
      "black jeans",
      "slim fit"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Fade-resistant jet black reactive-dyed denim jeans designed to retain rich black intensity through 40+ washes."
  },
  {
    "_id": "fb-men-jeans-4",
    "name": "Men Light Acid Washed Relaxed Baggy Skate Denim Jeans",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2599,
    "discountPrice": 1149,
    "ratings": 4.7,
    "numReviews": 73,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "denim jeans",
      "men denim jeans",
      "jeans",
      "baggy jeans",
      "streetwear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "90s skate-inspired baggy loose denim jeans featuring bleached marble wash, wide straight cuffs, and deep utility pockets."
  },
  {
    "_id": "fb-men-jeans-5",
    "name": "Men Charcoal Grey Cloud-Wash Tapered Fit Denim Jeans",
    "brand": "ZYRIVO DENIM",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.8,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "denim jeans",
      "men denim jeans",
      "jeans",
      "grey jeans",
      "tapered"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern muted charcoal grey denim jeans with cloud washing, 2% elastane flex stretch, and clean tonal stitching."
  },
  {
    "_id": "fb-men-chinos-1",
    "name": "Men Tailored Stretch Cotton Khaki Slim Fit Chinos",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.9,
    "numReviews": 135,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "chinos & trousers",
      "chinos",
      "trousers",
      "khakis",
      "smart casual"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Essential British khaki chinos tailored in high-density cotton twill with 3% spandex for all-day comfort and sharp crease."
  },
  {
    "_id": "fb-men-chinos-2",
    "name": "Men Smart Wrinkle-Free Navy Pleated Dress Trousers",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2699,
    "discountPrice": 1199,
    "ratings": 4.8,
    "numReviews": 97,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "chinos & trousers",
      "trousers",
      "formal trousers",
      "pleated trousers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Classic navy dress trousers with single front pleats, expandable flex waistband, and stain-resistant poly-viscose finish."
  },
  {
    "_id": "fb-men-chinos-3",
    "name": "Men Olive Green Heavyweight Garment-Dyed Chino Pants",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "chinos & trousers",
      "chinos",
      "trousers",
      "olive chinos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Garment-dyed military olive chinos with vintage-washed seams, angled coin pocket, and durable bar-tack reinforcement."
  },
  {
    "_id": "fb-men-chinos-4",
    "name": "Men Minimalist Charcoal Grey Wool-Touch Formal Trousers",
    "brand": "ZYRIVO FORMAL",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2799,
    "discountPrice": 1249,
    "ratings": 4.9,
    "numReviews": 84,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "chinos & trousers",
      "trousers",
      "formal trousers",
      "charcoal trousers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sophisticated flat-front formal trousers in micro-textured charcoal grey wool-touch fabric with French fly and blind hem."
  },
  {
    "_id": "fb-men-chinos-5",
    "name": "Men Sand Beige Elasticated Drawstring Comfort Chinos",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.7,
    "numReviews": 61,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "chinos & trousers",
      "chinos",
      "trousers",
      "drawstring chinos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern hybrid pants blending crisp chino styling with an interior drawstring elastic waistband for smart casual ease."
  },
  {
    "_id": "fb-men-joggers-1",
    "name": "Men Heavyweight French Terry Cuffed Athletic Joggers",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 1999,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 148,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "track pants & joggers",
      "joggers",
      "track pants",
      "sweatpants",
      "gym wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "320 GSM dense French Terry cotton joggers equipped with zippered hip pockets, metal-tipped drawcord, and snug ankle cuffs."
  },
  {
    "_id": "fb-men-joggers-2",
    "name": "Men Tactical Multi-Pocket Cargo Utility Track Pants",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 103,
    "isFeatured": true,
    "tags": [
      "men",
      "men bottom wear",
      "track pants & joggers",
      "joggers",
      "cargo pants",
      "utility pants"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Urban streetwear cargo track pants with 6 functional compartments, D-ring loop, water-resistant stretch twill, and tapered legs."
  },
  {
    "_id": "fb-men-joggers-3",
    "name": "Men Dry-Fit Moisture-Wicking Performance Gym Joggers",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 1899,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 89,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "track pants & joggers",
      "joggers",
      "dry fit",
      "training pants"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Breathable 4-way stretch polyester elastane running joggers with laser-perforated knee ventilation and reflective calf logos."
  },
  {
    "_id": "fb-men-joggers-4",
    "name": "Men Contrast Side-Stripe Classic Knit Track Pants",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.7,
    "numReviews": 71,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "track pants & joggers",
      "track pants",
      "side stripe",
      "sweatpants"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Retro 90s athletic track pants with dual contrast side tape stripes, open straight hem with ankle zips, and elastic waist."
  },
  {
    "_id": "fb-men-joggers-5",
    "name": "Men Melange Grey Loungewear Everyday Fleece Joggers",
    "brand": "ZYRIVO BASICS",
    "category": {
      "name": "Men Bottom Wear",
      "slug": "men-bottom-wear"
    },
    "price": 1699,
    "discountPrice": 649,
    "ratings": 4.8,
    "numReviews": 82,
    "isFeatured": false,
    "tags": [
      "men",
      "men bottom wear",
      "track pants & joggers",
      "joggers",
      "fleece joggers",
      "loungewear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-soft brushed fleece joggers in heather melange grey, tailored for maximum lounge coziness and easy casual wear."
  },
  {
    "_id": "fb-men-sneakers-1",
    "name": "Men Retro Leather Low-Top Street Court Casual Sneakers",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3499,
    "discountPrice": 1599,
    "ratings": 4.9,
    "numReviews": 182,
    "isFeatured": true,
    "tags": [
      "men",
      "footwear",
      "casual sneakers",
      "sneakers",
      "court sneakers",
      "shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Classic minimalist low-top court sneakers handcrafted from full-grain leather with cushioned Ortholite insoles and gum rubber cupsole."
  },
  {
    "_id": "fb-men-sneakers-2",
    "name": "Men Air-Cushioned Lightweight Athletic Running Sneakers",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3999,
    "discountPrice": 1799,
    "ratings": 4.9,
    "numReviews": 215,
    "isFeatured": true,
    "tags": [
      "men",
      "footwear",
      "casual sneakers",
      "sneakers",
      "running shoes",
      "sports sneakers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-rebound responsive EVA foam midsole running sneakers with dynamic mesh upper and slip-resistant rubber traction pod sole."
  },
  {
    "_id": "fb-men-sneakers-3",
    "name": "Men Chunky Platform Triple-White Urban Streetwear Sneakers",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3799,
    "discountPrice": 1699,
    "ratings": 4.8,
    "numReviews": 142,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "casual sneakers",
      "sneakers",
      "white sneakers",
      "chunky sneakers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Statement triple-white chunky streetwear silhouette with layered vegan leather panels and an elevated sculpted midsole."
  },
  {
    "_id": "fb-men-sneakers-4",
    "name": "Men Canvas Vulcanized Skate Low-Profile Casual Sneakers",
    "brand": "ZYRIVO CASUALS",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 2499,
    "discountPrice": 999,
    "ratings": 4.7,
    "numReviews": 118,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "casual sneakers",
      "sneakers",
      "canvas shoes",
      "skate sneakers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Durable 16 oz heavy canvas skate sneakers with waffle vulcanized rubber outsoles and reinforced double-stitched toe caps."
  },
  {
    "_id": "fb-men-sneakers-5",
    "name": "Men Suede Panel Vintage Runner Breathable Casual Sneakers",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3299,
    "discountPrice": 1499,
    "ratings": 4.8,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "casual sneakers",
      "sneakers",
      "suede sneakers",
      "vintage runner"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Retro 80s runner styling with genuine suede overlays, breathable ripstop nylon mesh, and dual-density comfort midsole."
  },
  {
    "_id": "fb-men-derby-1",
    "name": "Men Handcrafted Tan Genuine Leather Classic Derby Shoes",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4999,
    "discountPrice": 2299,
    "ratings": 4.9,
    "numReviews": 124,
    "isFeatured": true,
    "tags": [
      "men",
      "footwear",
      "derby leather shoes",
      "derby shoes",
      "formal shoes",
      "leather shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Artisanal hand-burnished tan crust leather Derby shoes with Blake-stitched leather soles and memory foam cushioned footbed."
  },
  {
    "_id": "fb-men-derby-2",
    "name": "Men Black Polished Calfskin Plain-Toe Formal Derby Shoes",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5499,
    "discountPrice": 2499,
    "ratings": 4.9,
    "numReviews": 168,
    "isFeatured": true,
    "tags": [
      "men",
      "footwear",
      "derby leather shoes",
      "derby shoes",
      "formal shoes",
      "black shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sleek formal plain-toe black Derby shoes crafted from mirror-polished full calfskin leather with durable non-slip stacked heels."
  },
  {
    "_id": "fb-men-derby-3",
    "name": "Men Wingtip Brogue Detail Hand-Burnished Brown Derby Shoes",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5299,
    "discountPrice": 2399,
    "ratings": 4.8,
    "numReviews": 96,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "derby leather shoes",
      "derby shoes",
      "brogues",
      "formal shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Exquisite wingtip brogue perforations embellish these rich cognac brown Derby shoes featuring Goodyear welt construction."
  },
  {
    "_id": "fb-men-derby-4",
    "name": "Men Contemporary Commando-Sole Rugged Leather Derby Shoes",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5799,
    "discountPrice": 2699,
    "ratings": 4.8,
    "numReviews": 83,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "derby leather shoes",
      "derby shoes",
      "commando sole",
      "smart casual"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern heavy-tread Derby shoes combining oiled matte pull-up cowhide leather with a rugged lightweight commando lug sole."
  },
  {
    "_id": "fb-men-derby-5",
    "name": "Men Suede Leather Apron-Toe Derby Casual Dress Shoes",
    "brand": "ZYRIVO FOOTWEAR",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4799,
    "discountPrice": 2199,
    "ratings": 4.8,
    "numReviews": 71,
    "isFeatured": false,
    "tags": [
      "men",
      "footwear",
      "derby leather shoes",
      "derby shoes",
      "suede shoes",
      "derby"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Supple snuff suede apron-toe Derby shoes featuring contrast edge stitching and flexible crepe rubber soles."
  },,
{
    "_id": "fb-footwear-heels-1",
    "name": "Women Pointed-Toe Stiletto Glossy Nude Party Pumps",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2699,
    "discountPrice": 1199,
    "ratings": 4.8,
    "numReviews": 86,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "heels & pumps",
      "heels",
      "pumps",
      "stilettos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sleek 3.5-inch patent nude stiletto pumps with anti-skid TPR sole and memory foam cushioned arch support."
  },
  {
    "_id": "fb-footwear-heels-2",
    "name": "Women Velvet Black D'Orsay Pointed Evening Stilettos",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2899,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "heels & pumps",
      "heels",
      "pumps",
      "party wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Midnight black luxe velvet side cut-out D'Orsay pumps designed for black-tie soirees and glamorous evenings."
  },
  {
    "_id": "fb-footwear-heels-3",
    "name": "Women Shimmer Metallic Rose Gold Ankle Strap Pumps",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2999,
    "discountPrice": 1349,
    "ratings": 4.8,
    "numReviews": 92,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "heels & pumps",
      "heels",
      "rose gold",
      "festive"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Festive metallic glitter finish pumps with adjustable buckle ankle strap and reinforced heel counters."
  },
  {
    "_id": "fb-footwear-heels-4",
    "name": "Women Suede Kitten Heel Formal Office Work Pumps",
    "brand": "ZYRIVO DAILY",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.7,
    "numReviews": 73,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "heels & pumps",
      "pumps",
      "kitten heel",
      "office"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Comfortable 2-inch modest kitten heels crafted in rich faux suede, designed for 9-to-5 boardroom comfort."
  },
  {
    "_id": "fb-footwear-heels-5",
    "name": "Women Sculpted Heel Statement Square Toe Formal Pumps",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3299,
    "discountPrice": 1499,
    "ratings": 4.9,
    "numReviews": 51,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "heels & pumps",
      "heels",
      "square toe",
      "designer"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary architectural flared sculpted heel pumps with modern square toe silhouette in vegan ivory leather."
  },
  {
    "_id": "fb-footwear-flats-1",
    "name": "Women Braided Strappy Open-Toe Casual Slide Sandals",
    "brand": "ZYRIVO DAILY",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 108,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "flats & sandals",
      "flats",
      "sandals",
      "slides"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dual woven braided strap slip-on flat slides with flexible cushioned footbed and textured non-slip sole."
  },
  {
    "_id": "fb-footwear-flats-2",
    "name": "Women Pearl Embellished Slip-On Pointed Flat Mules",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1699,
    "discountPrice": 749,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "flats & sandals",
      "flats",
      "mules",
      "pearls"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Elegant ivory pointed backless flat mules adorned with faux pearl clusters across the vamp."
  },
  {
    "_id": "fb-footwear-flats-3",
    "name": "Women T-Strap Bohemian Beaded Ankle Flat Sandals",
    "brand": "ZYRIVO ETHNIC",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.7,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "flats & sandals",
      "sandals",
      "boho",
      "beaded"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Artisanal colorful seed-bead hand-strung T-strap sandals with elasticated heel strap for custom fit."
  },
  {
    "_id": "fb-footwear-flats-4",
    "name": "Women Criss-Cross Minimalist Tan Leather Flat Slides",
    "brand": "ZYRIVO BASICS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 81,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "flats & sandals",
      "flats",
      "tan slides"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Buttery soft tan vegan leather wide criss-cross strap flat slides paired with ergonomic contoured insole."
  },
  {
    "_id": "fb-footwear-flats-5",
    "name": "Women Metallic Toe-Ring Comfort Everyday Kolhapuri Flats",
    "brand": "ZYRIVO RIWAAZ",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "flats & sandals",
      "kolhapuri",
      "toe ring"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary metallic rose-gold braided toe-ring ethnic flats featuring cushioned footbed and handmade pom-poms."
  },
  {
    "_id": "fb-footwear-juttis-1",
    "name": "Women Pure Leather Handcrafted Floral Threadwork Juttis",
    "brand": "ZYRIVO RIWAAZ",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1599,
    "discountPrice": 699,
    "ratings": 4.9,
    "numReviews": 114,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "punjabi juttis",
      "juttis",
      "mojari",
      "ethnic shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "100% genuine buffalo leather sole Punjabi jutti embellished with pastel silk thread floral needlework."
  },
  {
    "_id": "fb-footwear-juttis-2",
    "name": "Women Mirror & Dabka Work Bridal Velvet Maroon Juttis",
    "brand": "ZYRIVO HERITAGE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1999,
    "discountPrice": 899,
    "ratings": 4.9,
    "numReviews": 98,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "punjabi juttis",
      "juttis",
      "bridal",
      "velvet juttis"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Opulent royal maroon velvet festive juttis adorned with antique gold dabka, cutdana, and real mirror work."
  },
  {
    "_id": "fb-footwear-juttis-3",
    "name": "Women Ghungroo & Gota Lace Festive Mustard Yellow Juttis",
    "brand": "ZYRIVO RIWAAZ",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1699,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 83,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "punjabi juttis",
      "juttis",
      "haldi",
      "yellow juttis"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vibrant haldi/mehendi mustard silk juttis bordered with delicate musical brass ghungroos and gota patti."
  },
  {
    "_id": "fb-footwear-juttis-4",
    "name": "Women Muted Champagne Sequin Embellished Mojari Juttis",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1799,
    "discountPrice": 799,
    "ratings": 4.8,
    "numReviews": 72,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "punjabi juttis",
      "juttis",
      "sequin juttis"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Subtle shimmering champagne sequins on raw silk base with double-cushioned bite-free heel padding."
  },
  {
    "_id": "fb-footwear-juttis-5",
    "name": "Women Phulkari Embroidered Colorful Georgette Casual Juttis",
    "brand": "ZYRIVO RIWAAZ",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.7,
    "numReviews": 65,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "punjabi juttis",
      "juttis",
      "phulkari"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Authentic Punjabi Phulkari geometric silk floss embroidery with bite-free rolled leather borders."
  },
  {
    "_id": "fb-footwear-blockheels-1",
    "name": "Women Dual Band Chunky 2.5-Inch Modern Block Heels",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 120,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "block heel sandals",
      "block heels",
      "sandals",
      "heels"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Everyday comfortable 2.5-inch wide cylinder block heels with cushioned dual strap bands in soft vegan leather."
  },
  {
    "_id": "fb-footwear-blockheels-2",
    "name": "Women Strappy Metallic Gold Ankle-Buckle Block Heels",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.9,
    "numReviews": 94,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "block heel sandals",
      "block heels",
      "gold heels"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Party & festive block heels with delicate multi-strap cross detailing and secure adjustable metallic ankle buckle."
  },
  {
    "_id": "fb-footwear-blockheels-3",
    "name": "Women Clear Lucite Transparent Strap Chunky Block Heels",
    "brand": "ZYRIVO TREND",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2399,
    "discountPrice": 1049,
    "ratings": 4.7,
    "numReviews": 87,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "block heel sandals",
      "clear heels",
      "transparent heels"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern clear vinyl strap open-toe block heel mules with faux woodgrain stacked heel."
  },
  {
    "_id": "fb-footwear-blockheels-4",
    "name": "Women Quilted Padded Strap Slip-On Low Block Heel Mules",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "block heel sandals",
      "block heels",
      "quilted mules"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Cloud-soft quilted padded front strap low 2-inch block heels tailored for all-day painless walking."
  },
  {
    "_id": "fb-footwear-blockheels-5",
    "name": "Women Woven Jute Espadrille Platform Ankle Tie Block Heels",
    "brand": "ZYRIVO DAILY",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2599,
    "discountPrice": 1149,
    "ratings": 4.8,
    "numReviews": 68,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "block heel sandals",
      "espadrilles",
      "summer heels"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Summer holiday natural woven jute wrapped block heel sandals with wrap-around linen ankle ribbons."
  },
  {
    "_id": "fb-footwear-stilettos-1",
    "name": "Women Crystal Rhinestone Bow Satin Party Stiletto Heels",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3499,
    "discountPrice": 1599,
    "ratings": 4.9,
    "numReviews": 132,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "party stilettos",
      "stilettos",
      "rhinestone heels",
      "party wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Celebrity-inspired pointed satin stiletto pumps crowned with an intricate sparkling crystal double-bow brooch."
  },
  {
    "_id": "fb-footwear-stilettos-2",
    "name": "Women Spiral Snake Crystal Coil Ankle Wrap Stilettos",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3999,
    "discountPrice": 1799,
    "ratings": 5,
    "numReviews": 89,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "party stilettos",
      "stilettos",
      "gladiator stilettos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sensational spiral crystal snake winding coil strap stilettos featuring 4-inch metallic pin heels."
  },
  {
    "_id": "fb-footwear-stilettos-3",
    "name": "Women Metallic Mirror Chrome High-Shine Open-Toe Stilettos",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2999,
    "discountPrice": 1399,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "party stilettos",
      "stilettos",
      "silver stilettos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Futuristic mirror silver chrome stiletto sandals with minimalist single toe band and slim ankle closure."
  },
  {
    "_id": "fb-footwear-stilettos-4",
    "name": "Women Emerald Velvet Platform High Heel Party Stilettos",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3299,
    "discountPrice": 1499,
    "ratings": 4.8,
    "numReviews": 61,
    "isFeatured": false,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "party stilettos",
      "platform heels",
      "velvet stilettos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Deep jewel-toned emerald green plush velvet stilettos with 1-inch front platform for effortless height balance."
  },
  {
    "_id": "fb-footwear-stilettos-5",
    "name": "Women Neon Pink Flirty Feather Detail Cocktail Stilettos",
    "brand": "ZYRIVO TREND",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3199,
    "discountPrice": 1449,
    "ratings": 4.7,
    "numReviews": 54,
    "isFeatured": true,
    "tags": [
      "women",
      "shoes",
      "footwear",
      "party stilettos",
      "feather heels",
      "cocktail stilettos"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Playful cocktail party stiletto heels with fluffy marabou feather front strap and lacquered pink stiletto heel."
  },
  {
    "_id": "fb-bags-tote-1",
    "name": "Women Structured Canvas & Vegan Leather Dual-Handle Tote Bag",
    "brand": "ZYRIVO BAGS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2199,
    "discountPrice": 899,
    "ratings": 4.8,
    "numReviews": 122,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "tote bags",
      "tote",
      "canvas tote",
      "shoulder bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavyweight organic cotton canvas tote paired with saddle tan vegan leather straps, zippered inner pouch, and key leash."
  },
  {
    "_id": "fb-bags-tote-2",
    "name": "Women Classic Black Pebbled Faux Leather Work Laptop Tote",
    "brand": "ZYRIVO WORK",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2799,
    "discountPrice": 1199,
    "ratings": 4.9,
    "numReviews": 148,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "tote bags",
      "laptop tote",
      "office bag",
      "work bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Spacious work tote bag with dedicated 14-inch padded laptop sleeve, multiple pen holders, and water bottle pocket."
  },
  {
    "_id": "fb-bags-tote-3",
    "name": "Women Minimalist Raw-Edge Suede Slouchy Everyday Tote",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.7,
    "numReviews": 89,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "tote bags",
      "suede tote",
      "slouchy bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Effortlessly chic caramel brown micro-suede hobo tote bag with magnetic snap closure and removable coin purse."
  },
  {
    "_id": "fb-bags-tote-4",
    "name": "Women Reversible Dual-Color Soft Faux Leather Shopper Tote",
    "brand": "ZYRIVO DAILY",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.8,
    "numReviews": 97,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "tote bags",
      "shopper tote",
      "reversible tote"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Innovative 2-in-1 reversible tote featuring burgundy on one side and powder blush on the other with matching clutch."
  },
  {
    "_id": "fb-bags-tote-5",
    "name": "Women Geometric Laser-Cut Pattern Handcrafted Summer Tote",
    "brand": "ZYRIVO TREND",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 73,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "tote bags",
      "laser cut tote",
      "summer tote"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Airy geometric laser-cut motif tote with removable printed canvas drawstring liner pouch and sturdy gold hardware."
  },
  {
    "_id": "fb-bags-crossbody-1",
    "name": "Women Quilted Chevron Golden Turn-Lock Crossbody Bag",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.9,
    "numReviews": 142,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "crossbody bags",
      "crossbody",
      "quilted bag",
      "sling bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic chevron stitched crossbody bag with polished metallic gold turn-lock closure and interwoven leather chain strap."
  },
  {
    "_id": "fb-bags-crossbody-2",
    "name": "Women Saddle Flap Vintage Distressed Vegan Leather Sling Bag",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 118,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "crossbody bags",
      "crossbody",
      "saddle bag",
      "sling bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Curved equestrian-inspired saddle crossbody with antique brass hardware, magnetic snap, and adjustable shoulder belt."
  },
  {
    "_id": "fb-bags-crossbody-3",
    "name": "Women Compact Dual-Zipper Camera Crossbody Bag with Guitar Strap",
    "brand": "ZYRIVO STREET",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.7,
    "numReviews": 86,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "crossbody bags",
      "crossbody",
      "camera bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Trendy camera bag silhouette featuring twin zippered main chambers and interchangeable ethnic jacquard guitar strap."
  },
  {
    "_id": "fb-bags-crossbody-4",
    "name": "Women Half-Moon Crescent Minimalist Vegan Leather Crossbody",
    "brand": "ZYRIVO TREND",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.8,
    "numReviews": 74,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "crossbody bags",
      "crossbody",
      "crescent bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern curved half-moon silhouette crossbody bag made from smooth vegan nappa leather with sleek matte metal zippers."
  },
  {
    "_id": "fb-bags-crossbody-5",
    "name": "Women Multi-Compartment Phone Wallet Pouch Crossbody Sling",
    "brand": "ZYRIVO DAILY",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.7,
    "numReviews": 104,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "crossbody bags",
      "crossbody",
      "phone pouch",
      "wallet sling"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-light compact crossbody phone sling with 8 card slots, currency dividers, and clear ID window."
  },
  {
    "_id": "fb-bags-clutch-1",
    "name": "Women Dazzling Crystal Rhinestone Minaudiere Box Clutch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.9,
    "numReviews": 88,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "evening party clutches",
      "clutches",
      "clutch",
      "party clutch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Glistening hand-set rhinestone evening hard-shell box clutch with magnetic crystal clasp and detachable gold chain."
  },
  {
    "_id": "fb-bags-clutch-2",
    "name": "Women Pleated Silk Envelope Golden Accent Cocktail Clutch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "evening party clutches",
      "clutches",
      "envelope clutch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Timeless asymmetrical envelope flap clutch crafted in shimmering pleated satin with interior slip pocket."
  },
  {
    "_id": "fb-bags-clutch-3",
    "name": "Women Mother-of-Pearl Inlay Handcrafted Brass Minaudiere",
    "brand": "ZYRIVO HERITAGE",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 3299,
    "discountPrice": 1499,
    "ratings": 5,
    "numReviews": 62,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "evening party clutches",
      "clutches",
      "clutch",
      "ethnic clutch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heritage hand-carved floral brass frame studded with iridescent natural mother-of-pearl mosaic tiles."
  },
  {
    "_id": "fb-bags-clutch-4",
    "name": "Women Glitter Sparkle Flap Bridal Wristlet Party Clutch",
    "brand": "ZYRIVO STEPS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1799,
    "discountPrice": 799,
    "ratings": 4.7,
    "numReviews": 81,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "evening party clutches",
      "clutches",
      "wristlet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-sparkle non-shedding metallic silver glitter clutch featuring a detachable wristlet loop for dancing."
  },
  {
    "_id": "fb-bags-clutch-5",
    "name": "Women Antique Zardozi Embroidered Velvet Potli Clutch",
    "brand": "ZYRIVO RIWAAZ",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 1899,
    "discountPrice": 849,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "evening party clutches",
      "clutches",
      "potli bag",
      "potli"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Royal maroon velvet potli pouch bordered with shimmering golden zari cords, pearls, and pearl tassel tie-ups."
  },
  {
    "_id": "fb-bags-backpack-1",
    "name": "Unisex Anti-Theft Water-Resistant 15.6-Inch Laptop Backpack",
    "brand": "ZYRIVO GEAR",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 2999,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 164,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "backpack",
      "backpacks & travel",
      "laptop backpacks",
      "laptop bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavy-duty 900D water-repellent oxford fabric backpack with TSA lock, hidden back pocket, and USB charging pass-through."
  },
  {
    "_id": "fb-bags-backpack-2",
    "name": "Men Slim Minimalist Vegan Leather Commuter Laptop Backpack",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3499,
    "discountPrice": 1599,
    "ratings": 4.8,
    "numReviews": 129,
    "isFeatured": true,
    "tags": [
      "men",
      "bags",
      "bag",
      "backpack",
      "backpacks & travel",
      "laptop backpacks",
      "leather backpack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Streamlined executive commuter backpack crafted from weather-resistant matte black vegan leather with padded 16-inch compartment."
  },
  {
    "_id": "fb-bags-backpack-3",
    "name": "Unisex Roll-Top Waterproof Urban Cycling Travel Backpack",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 2799,
    "discountPrice": 1199,
    "ratings": 4.8,
    "numReviews": 93,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "backpack",
      "backpacks & travel",
      "laptop backpacks",
      "travel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Expandable 25L to 30L roll-top waterproof daypack with aluminum buckle and breathable airflow back padding."
  },
  {
    "_id": "fb-bags-backpack-4",
    "name": "Women Chic Quilted Nylon Multi-Pocket College Backpack",
    "brand": "ZYRIVO BAGS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1049,
    "ratings": 4.7,
    "numReviews": 112,
    "isFeatured": false,
    "tags": [
      "women",
      "bags",
      "bag",
      "backpack",
      "backpacks & travel",
      "laptop backpacks",
      "college backpack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Featherlight quilted olive nylon backpack with gold metal zippers, tablet sleeve, and water-repellent exterior."
  },
  {
    "_id": "fb-bags-backpack-5",
    "name": "Unisex Ergonomic Orthopedic Lumbar Support Travel Backpack",
    "brand": "ZYRIVO GEAR",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3199,
    "discountPrice": 1399,
    "ratings": 4.9,
    "numReviews": 87,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "backpack",
      "backpacks & travel",
      "laptop backpacks",
      "ergonomic"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Doctor-endorsed S-curve ergonomic shoulder straps, integrated luggage trolley sleeve, and padded velvet laptop compartment."
  },
  {
    "_id": "fb-bags-duffel-1",
    "name": "Unisex Handcrafted Vintage Tan Leather Weekender Duffel Bag",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4999,
    "discountPrice": 2299,
    "ratings": 4.9,
    "numReviews": 138,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "duffel bag",
      "backpacks & travel",
      "leather duffel bags",
      "weekender",
      "travel duffel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Full-grain vintage pull-up distressed leather weekender duffel with reinforced brass feet, side shoe compartment, and cotton lining."
  },
  {
    "_id": "fb-bags-duffel-2",
    "name": "Men Waterproof Matte Black Gym & Overnight Duffel Bag",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 2999,
    "discountPrice": 1299,
    "ratings": 4.8,
    "numReviews": 104,
    "isFeatured": true,
    "tags": [
      "men",
      "bags",
      "bag",
      "duffel bag",
      "backpacks & travel",
      "leather duffel bags",
      "gym duffel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sleek gym-to-office duffel featuring independent wet towel compartment, ventilated sneaker chamber, and padded shoulder strap."
  },
  {
    "_id": "fb-bags-duffel-3",
    "name": "Unisex Heavyweight Washed Canvas & Leather Trim Duffel Bag",
    "brand": "ZYRIVO GEAR",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3299,
    "discountPrice": 1449,
    "ratings": 4.8,
    "numReviews": 89,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "duffel bag",
      "backpacks & travel",
      "leather duffel bags",
      "canvas duffel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sturdy military green 16oz stonewashed canvas duffel with full-grain leather zipper pulls and detachable strap."
  },
  {
    "_id": "fb-bags-duffel-4",
    "name": "Men Executive Monogrammed Cabin-Size Leather Carry-On Duffel",
    "brand": "ZYRIVO ATELIER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4499,
    "discountPrice": 1999,
    "ratings": 4.9,
    "numReviews": 75,
    "isFeatured": false,
    "tags": [
      "men",
      "bags",
      "bag",
      "duffel bag",
      "backpacks & travel",
      "leather duffel bags",
      "cabin bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Airline cabin-compliant 40L structured leather travel duffel with passport organizer and suit hanger strap."
  },
  {
    "_id": "fb-bags-duffel-5",
    "name": "Women Blush Pink Compact Lightweight Weekend Getaway Duffel",
    "brand": "ZYRIVO BAGS",
    "category": {
      "name": "Women Footwear & Bags",
      "slug": "women-footwear-bags"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.7,
    "numReviews": 92,
    "isFeatured": true,
    "tags": [
      "women",
      "bags",
      "bag",
      "duffel bag",
      "backpacks & travel",
      "leather duffel bags",
      "travel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic blush pink travel duffel with gold-plated metallic zippers and rear luggage trolley pass-through sleeve."
  },
{
    "_id": "prod-watch-chrono-1",
    "name": "Heritage Chronograph Tachymeter Stainless Steel Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 8999,
    "discountPrice": 3899,
    "ratings": 4.9,
    "numReviews": 114,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "chronograph watches",
      "chronograph",
      "accessories",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Precision Japanese quartz movement chronograph featuring triple sub-dials, sapphire crystal glass, and 316L solid surgical steel link bracelet."
  },
  {
    "_id": "prod-watch-chrono-2",
    "name": "Midnight Black Chrono Dial Leather Strap Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 7499,
    "discountPrice": 3299,
    "ratings": 4.8,
    "numReviews": 87,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "chronograph watches",
      "chronograph",
      "leather strap watch",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Matte black ion-plated case with contrasting bronze hands, calendar aperture, and hand-stitched Italian genuine cowhide leather strap."
  },
  {
    "_id": "prod-watch-chrono-3",
    "name": "Navy Blue Sunray Chronograph Aviation Pilot Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 9499,
    "discountPrice": 4199,
    "ratings": 4.9,
    "numReviews": 92,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "chronograph watches",
      "chronograph",
      "pilot watch",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Aeronautic-inspired sunray royal blue dial with high-contrast luminous indices, stop-seconds function, and stainless steel deployant clasp."
  },
  {
    "_id": "prod-watch-chrono-4",
    "name": "Silver Classic Sport Multi-Function Date Chronograph",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 8299,
    "discountPrice": 3599,
    "ratings": 4.7,
    "numReviews": 69,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "chronograph watches",
      "chronograph",
      "sport watch",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Brushed silver stainless steel bezel with tachymetric inner scale, 50-meter water resistance, and polished push buttons."
  },
  {
    "_id": "prod-watch-chrono-5",
    "name": "Dual-Time Zone World Timer Brown Leather Chronograph",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 9999,
    "discountPrice": 4499,
    "ratings": 4.9,
    "numReviews": 76,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "chronograph watches",
      "chronograph",
      "world timer",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Executive globetrotter timepiece with dual 24-hour sub-dial, ivory dial face, and embossed crocodile pattern genuine leather strap."
  },
  {
    "_id": "prod-watch-skel-1",
    "name": "Open-Heart Automatic Self-Winding Skeleton Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 12999,
    "discountPrice": 5499,
    "ratings": 4.9,
    "numReviews": 130,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "skeleton automatic watches",
      "skeleton watch",
      "automatic watch",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Exquisite 21-jewel self-winding mechanical engine exposed front and back through exhibition caseback, requiring no battery."
  },
  {
    "_id": "prod-watch-skel-2",
    "name": "Gunmetal Grey Steampunk Architectural Skeleton Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 11499,
    "discountPrice": 4899,
    "ratings": 4.8,
    "numReviews": 82,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "skeleton automatic watches",
      "skeleton watch",
      "mechanical watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Bold industrial geometric open bridge construction in brushed gunmetal grey with blued screws and exhibition glass."
  },
  {
    "_id": "prod-watch-skel-3",
    "name": "Gold Accent Luxury Automatic Tourbillon-Style Skeleton Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 13999,
    "discountPrice": 5999,
    "ratings": 5,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "skeleton automatic watches",
      "skeleton watch",
      "gold watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ornate 18K yellow gold ion-plated skeletonized bridge showing oscillating balance wheel with Roman numeral bezel."
  },
  {
    "_id": "prod-watch-skel-4",
    "name": "Matte Ceramic Black Hollow Mechanical Skeleton Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 10999,
    "discountPrice": 4699,
    "ratings": 4.8,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "skeleton automatic watches",
      "skeleton watch",
      "black watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Monochromatic ultra-modern silhouette featuring scratch-resistant ceramic-coated steel and transparent balance escapement."
  },
  {
    "_id": "prod-watch-skel-5",
    "name": "Bespoke Rose Gold Skeleton Watch with Alligator Texture Strap",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 12499,
    "discountPrice": 5299,
    "ratings": 4.9,
    "numReviews": 88,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "skeleton automatic watches",
      "skeleton watch",
      "rose gold"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Regal warm rose gold casing displaying intricate gear train mechanics, paired with deep espresso brown genuine leather."
  },
  {
    "_id": "prod-watch-mesh-1",
    "name": "Ultra-Slim Rose Gold Mesh Strap Minimalist Analog Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5499,
    "discountPrice": 2299,
    "ratings": 4.8,
    "numReviews": 142,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "rose gold analog watches",
      "minimalist mesh watches",
      "rose gold",
      "mesh watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sleek 6.8mm ultra-thin profile with sunray champagne dial and infinitely adjustable Milanese stainless steel magnetic mesh band."
  },
  {
    "_id": "prod-watch-mesh-2",
    "name": "Silver Sunburst Dial Scandinavian Mesh Analog Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 4999,
    "discountPrice": 1999,
    "ratings": 4.7,
    "numReviews": 98,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "minimalist mesh watches",
      "rose gold analog watches",
      "silver watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Nordic minimalist aesthetics with two-hand movement, crisp silver brushed dial, and hypoallergenic stainless steel woven mesh."
  },
  {
    "_id": "prod-watch-mesh-3",
    "name": "All-Black Stealth Minimalist Mesh Unisex Dress Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5299,
    "discountPrice": 2199,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "minimalist mesh watches",
      "black watch",
      "unisex watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Deep obsidian matte black finish with gloss black stick indices and ultra-durable PVD coated fluid mesh strap."
  },
  {
    "_id": "prod-watch-mesh-4",
    "name": "Mother of Pearl Dial Crystal Bezel Rose Gold Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5999,
    "discountPrice": 2499,
    "ratings": 4.9,
    "numReviews": 125,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "rose gold analog watches",
      "women watch",
      "crystal watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Iridescent natural mother-of-pearl face framed with micro-pave Austrian crystals and refined rose gold case."
  },
  {
    "_id": "prod-watch-mesh-5",
    "name": "Champagne Gold Textured Dial Classic Mesh Dress Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5799,
    "discountPrice": 2399,
    "ratings": 4.8,
    "numReviews": 83,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "minimalist mesh watches",
      "gold watch",
      "analog watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vintage-inspired guilloche patterned dial with golden faceted lance hands and quick-release interchangeable mesh bracelet."
  },
  {
    "_id": "prod-watch-smart-1",
    "name": "Titanium Smartwatch with AMOLED Display & Bluetooth Calling",
    "brand": "ZYRIVO TECH",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 6999,
    "discountPrice": 2799,
    "ratings": 4.8,
    "numReviews": 210,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "smartwatches",
      "smartwatch",
      "fitness tracker",
      "amoled"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vibrant 1.43-inch Always-On AMOLED screen with 60Hz refresh rate, continuous SpO2/heart rate monitoring, and 7-day battery life."
  },
  {
    "_id": "prod-watch-smart-2",
    "name": "Rose Gold Smartwatch with Floral Milanese Strap",
    "brand": "ZYRIVO TECH",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 6499,
    "discountPrice": 2599,
    "ratings": 4.9,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "smartwatches",
      "smartwatch",
      "women smartwatch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Elegant jewelry-styled smartwatch designed for women with menstrual cycle tracking, sleep stages, and customized designer watch faces."
  },
  {
    "_id": "prod-watch-smart-3",
    "name": "Rugged Military Outdoor GPS Sport Smartwatch",
    "brand": "ZYRIVO TECH",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 7999,
    "discountPrice": 3299,
    "ratings": 4.8,
    "numReviews": 130,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "smartwatches",
      "smartwatch",
      "sports smartwatch",
      "gps"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Impact-resistant reinforced polycarbonate body with dual-satellite GPS, 100+ workout modes, and 5ATM waterproof certification."
  },
  {
    "_id": "prod-watch-smart-4",
    "name": "Minimalist Square Smart Watch with Silicone Sport Band",
    "brand": "ZYRIVO TECH",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 4999,
    "discountPrice": 1999,
    "ratings": 4.7,
    "numReviews": 188,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "smartwatches",
      "smartwatch",
      "smart fitness"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Feather-light 38g ergonomic square form factor with IP68 dust-waterproof rating, camera shutter remote, and music control."
  },
  {
    "_id": "prod-watch-smart-5",
    "name": "Executive Ceramic Bezel Smartwatch with Leather Hybrid Strap",
    "brand": "ZYRIVO TECH",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 8499,
    "discountPrice": 3499,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "smartwatches",
      "smartwatch",
      "executive smartwatch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Seamlessly pairs executive boardroom styling with full digital capabilities, voice assistant integration, and wireless fast charging."
  },
  {
    "_id": "prod-watch-sunglass-1",
    "name": "Classic Gold Frame Green Polarized Aviator Sunglasses",
    "brand": "ZYRIVO EYEWEAR",
    "category": {
      "name": "Accessories & Jewelry",
      "slug": "accessories-jewelry"
    },
    "price": 3499,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 165,
    "isFeatured": true,
    "tags": [
      "sunglasses",
      "polarized sunglasses",
      "aviator sunglasses",
      "aviators",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Timeless teardrop aviator silhouette with scratch-resistant polarized G-15 crystal glass lenses offering 100% UV400 defense."
  },
  {
    "_id": "prod-watch-sunglass-2",
    "name": "Retro Square Acetate Polarized Sunglasses in Gloss Black",
    "brand": "ZYRIVO EYEWEAR",
    "category": {
      "name": "Accessories & Jewelry",
      "slug": "accessories-jewelry"
    },
    "price": 3299,
    "discountPrice": 1199,
    "ratings": 4.8,
    "numReviews": 120,
    "isFeatured": false,
    "tags": [
      "sunglasses",
      "polarized sunglasses",
      "square sunglasses",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Handcrafted Italian cellulose acetate frames with five-barrel hinges and anti-glare polarized grey gradient lenses."
  },
  {
    "_id": "prod-watch-sunglass-3",
    "name": "Vintage Tortoise Shell Round Polarized Sunglasses",
    "brand": "ZYRIVO EYEWEAR",
    "category": {
      "name": "Accessories & Jewelry",
      "slug": "accessories-jewelry"
    },
    "price": 3199,
    "discountPrice": 1149,
    "ratings": 4.8,
    "numReviews": 94,
    "isFeatured": true,
    "tags": [
      "sunglasses",
      "polarized sunglasses",
      "round sunglasses",
      "tortoise shell",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Warm amber tortoise finish with keyhole nose bridge and copper-tinted polarized optics that elevate contrast in bright sun."
  },
  {
    "_id": "prod-watch-sunglass-4",
    "name": "Gunmetal Modern Rimless Lightweight Aviator Sunglasses",
    "brand": "ZYRIVO EYEWEAR",
    "category": {
      "name": "Accessories & Jewelry",
      "slug": "accessories-jewelry"
    },
    "price": 3699,
    "discountPrice": 1399,
    "ratings": 4.7,
    "numReviews": 88,
    "isFeatured": false,
    "tags": [
      "sunglasses",
      "aviator sunglasses",
      "polarized sunglasses",
      "rimless",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Aerodynamic feather-weight titanium alloy construction with flexible spring temples and shatterproof polycarbonate lenses."
  },
  {
    "_id": "prod-watch-sunglass-5",
    "name": "Mirrored Blue Lens Polarized Sports Sunglasses",
    "brand": "ZYRIVO EYEWEAR",
    "category": {
      "name": "Accessories & Jewelry",
      "slug": "accessories-jewelry"
    },
    "price": 3399,
    "discountPrice": 1249,
    "ratings": 4.9,
    "numReviews": 105,
    "isFeatured": true,
    "tags": [
      "sunglasses",
      "polarized sunglasses",
      "sport sunglasses",
      "mirrored sunglasses",
      "accessories"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-energy sapphire blue flash mirror coating with rubberized non-slip nose grips, ideal for driving, outdoor sports, and beach."
  },
  {
    "_id": "prod-kids-boy-tee-1",
    "name": "Boys Pure Organic Cotton Dinosaur Graphic Print T-Shirt",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 899,
    "discountPrice": 399,
    "ratings": 4.8,
    "numReviews": 85,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys t-shirts",
      "boys tees",
      "t-shirt",
      "graphic tee"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "100% combed skin-friendly breathable cotton t-shirt with cheerful non-toxic water-based dinosaur screen print and tagless neck label."
  },
  {
    "_id": "prod-kids-boy-tee-2",
    "name": "Boys Striped Collar Pique Cotton Casual Polo T-Shirt",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1099,
    "discountPrice": 479,
    "ratings": 4.9,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "kids",
      "boys",
      "boys t-shirts",
      "polo",
      "boys polo"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Smart ribbed collar with color-block dual tipping, two-button placket placket, and breathable honeycomb knit fabric."
  },
  {
    "_id": "prod-kids-boy-tee-3",
    "name": "Boys Super-Hero Space Astronaut Soft Cotton T-Shirt",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 949,
    "discountPrice": 429,
    "ratings": 4.8,
    "numReviews": 72,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys t-shirts",
      "astronaut",
      "t-shirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Deep galaxy navy blue graphic tee with glow-in-the-dark space shuttle elements and reinforced double needle hems."
  },
  {
    "_id": "prod-kids-boy-tee-4",
    "name": "Boys Color-Blocked Cotton Raglan Sleeve Everyday Tee",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 849,
    "discountPrice": 379,
    "ratings": 4.7,
    "numReviews": 53,
    "isFeatured": false,
    "tags": [
      "kids",
      "boys",
      "boys t-shirts",
      "raglan tee",
      "cotton"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sporty baseball style raglan cut sleeves offering complete freedom of movement during playground running and sports."
  },
  {
    "_id": "prod-kids-boy-tee-5",
    "name": "Boys Summer Tropical Surf Board Graphic Crew Neck T-Shirt",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 899,
    "discountPrice": 399,
    "ratings": 4.8,
    "numReviews": 61,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys t-shirts",
      "summer tee",
      "kids clothing"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vibrant sun yellow t-shirt with coastal surf artwork, made from pre-shrunk cotton that stays soft after dozens of washes."
  },
  {
    "_id": "prod-kids-boy-jean-1",
    "name": "Boys Elastic Waistband Comfort Stretch Denim Jeans",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 92,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys jeans",
      "kids jeans",
      "denim"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Easy pull-on elastic waistband with internal adjustable drawcord, flexible spandex stretch denim, and soft interior seams."
  },
  {
    "_id": "prod-kids-boy-jean-2",
    "name": "Boys Ribbed Cuff French Terry Cargo Jogger Pants",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1199,
    "discountPrice": 529,
    "ratings": 4.9,
    "numReviews": 78,
    "isFeatured": false,
    "tags": [
      "kids",
      "boys",
      "boys jeans",
      "boys joggers",
      "cargo pants"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Cozy combed cotton loopback terry with dual utilitarian cargo pockets and snug ankle cuffs for all-day active play."
  },
  {
    "_id": "prod-kids-boy-jean-3",
    "name": "Boys Slim Fit Washed Blue Denim Jeans with Pockets",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.7,
    "numReviews": 66,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys jeans",
      "slim jeans",
      "denim"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Trendy stone-washed fade aesthetic with functional 5-pocket design, rivet accents, and child-safe snap closure."
  },
  {
    "_id": "prod-kids-boy-jean-4",
    "name": "Boys Camouflage Print Athletic Cotton Track Pants",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1099,
    "discountPrice": 479,
    "ratings": 4.8,
    "numReviews": 57,
    "isFeatured": false,
    "tags": [
      "kids",
      "boys",
      "boys jeans",
      "track pants",
      "camo"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Tactical woodland green camo print joggers crafted with reinforced knee panels to prevent wear and tear during play."
  },
  {
    "_id": "prod-kids-boy-jean-5",
    "name": "Boys Khaki Chino Trousers with Adjustable Waistband",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.9,
    "numReviews": 81,
    "isFeatured": true,
    "tags": [
      "kids",
      "boys",
      "boys jeans",
      "chinos",
      "boys trousers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Crisp pre-washed cotton twill chinos suitable for birthdays, school functions, and family gatherings."
  },
  {
    "_id": "prod-kids-girl-frock-1",
    "name": "Girls Pastel Floral Print Cotton Tiered Summer Frock",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1499,
    "discountPrice": 599,
    "ratings": 4.9,
    "numReviews": 108,
    "isFeatured": true,
    "tags": [
      "kids",
      "girls",
      "girls frocks & dresses",
      "frocks",
      "dresses",
      "girls dress"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Flowing tiered A-line cotton dress with delicate wildflower prints, flutter butterfly sleeves, and soft inner lining."
  },
  {
    "_id": "prod-kids-girl-frock-2",
    "name": "Girls Sequin Embellished Fluffy Net Party Tutu Dress",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 124,
    "isFeatured": true,
    "tags": [
      "kids",
      "girls",
      "girls frocks & dresses",
      "party dress",
      "tutu dress"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Birthday princess aesthetic with shimmering sequined bodice, multi-layer puffy tulle skirt, and satin waist bow tie."
  },
  {
    "_id": "prod-kids-girl-frock-3",
    "name": "Girls Yellow Polka Dot Ruffled Hem Casual Sundress",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1299,
    "discountPrice": 529,
    "ratings": 4.8,
    "numReviews": 89,
    "isFeatured": false,
    "tags": [
      "kids",
      "girls",
      "girls frocks & dresses",
      "polka dot",
      "frock"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Cheerful retro sunshine yellow frock with white polka dots, cross-back button straps, and playful ruffled bottom hem."
  },
  {
    "_id": "prod-kids-girl-frock-4",
    "name": "Girls Lace Collar Embroidery Velvet Winter Party Frock",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.9,
    "numReviews": 76,
    "isFeatured": true,
    "tags": [
      "kids",
      "girls",
      "girls frocks & dresses",
      "velvet dress",
      "winter frock"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Rich royal ruby velvet with vintage Peter Pan lace collar, gathered waistline, and back zipper closure."
  },
  {
    "_id": "prod-kids-girl-frock-5",
    "name": "Girls Rainbow Striped Knit Cotton Skater Dress",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.7,
    "numReviews": 63,
    "isFeatured": false,
    "tags": [
      "kids",
      "girls",
      "girls frocks & dresses",
      "rainbow dress",
      "cotton dress"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Bright cheerful horizontal rainbow stripes in stretchy rib-knit cotton, perfect for school picnics and everyday wear."
  },
  {
    "_id": "prod-kids-baby-romp-1",
    "name": "Newborn 100% Organic Bamboo Cotton Snap-Button Romper",
    "brand": "ZYRIVO BABY",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 999,
    "discountPrice": 429,
    "ratings": 4.9,
    "numReviews": 145,
    "isFeatured": true,
    "tags": [
      "kids",
      "baby",
      "baby rompers",
      "onesie",
      "infant wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hypoallergenic silky-soft organic bamboo fabric with full crotch snap buttons for swift and hassle-free diaper changes."
  },
  {
    "_id": "prod-kids-baby-romp-2",
    "name": "Infant Animal Ears Hooded Fleece Cozy Winter Sleepsuit",
    "brand": "ZYRIVO BABY",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 5,
    "numReviews": 160,
    "isFeatured": true,
    "tags": [
      "kids",
      "baby",
      "baby rompers",
      "sleepsuit",
      "baby fleece"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Adorable bear ear hood with ultra-plush sherpa fleece, enclosed footies, and two-way zipper from neck to feet."
  },
  {
    "_id": "prod-kids-baby-romp-3",
    "name": "Baby Unisex Pastel Cloud Print Cotton Sleeveless Jumpsuit",
    "brand": "ZYRIVO BABY",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 899,
    "discountPrice": 389,
    "ratings": 4.8,
    "numReviews": 94,
    "isFeatured": false,
    "tags": [
      "kids",
      "baby",
      "baby rompers",
      "onesie",
      "baby jumpsuit"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Airy combed cotton muslin blend keeping baby cool during sweltering summers, with flatlock non-scratch seams."
  },
  {
    "_id": "prod-kids-baby-romp-4",
    "name": "Infant Striped Cotton Dungaree Romper with Mock T-Shirt",
    "brand": "ZYRIVO BABY",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": true,
    "tags": [
      "kids",
      "baby",
      "baby rompers",
      "dungaree",
      "baby wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Charming 2-in-1 layered effect dungaree suit featuring anchor embroidery, adjustable shoulder straps, and soft rib knit."
  },
  {
    "_id": "prod-kids-baby-romp-5",
    "name": "Pack of 3 Cotton Short Sleeve Bodysuits for Babies",
    "brand": "ZYRIVO BABY",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.9,
    "numReviews": 182,
    "isFeatured": false,
    "tags": [
      "kids",
      "baby",
      "baby rompers",
      "bodysuit",
      "multipack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Envelope neck design stretches gently over baby head without stretching out, crafted from 100% natural pure cotton."
  },
  {
    "_id": "prod-kids-shoes-1",
    "name": "Kids Lightweight Breathable Mesh Velcro Sport Sneakers",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.8,
    "numReviews": 115,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids sneakers",
      "kids shoes",
      "footwear",
      "velcro shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Self-fastening hook-and-loop velcro closure, featherweight shock-absorbing EVA foam sole, and anti-slip rubber traction."
  },
  {
    "_id": "prod-kids-shoes-2",
    "name": "Kids Classic White Low-Top Leather Court Sneakers",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1699,
    "discountPrice": 729,
    "ratings": 4.9,
    "numReviews": 98,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids sneakers",
      "kids shoes",
      "white sneakers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Easy-to-clean synthetic leather upper with cushioned OrthoLite insole and non-marking vulcanized rubber cupsole."
  },
  {
    "_id": "prod-kids-shoes-3",
    "name": "Kids LED Light-Up Sole Casual Running Shoes",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1599,
    "discountPrice": 689,
    "ratings": 4.9,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids sneakers",
      "kids shoes",
      "led shoes",
      "light up shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Multi-colored flashing heel lights that ignite with every jump and step, housed in a waterproof sealed transparent midsole."
  },
  {
    "_id": "prod-kids-shoes-4",
    "name": "Kids Canvas Slip-On Casual Loafers with Elastic Gores",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.7,
    "numReviews": 83,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids sneakers",
      "kids shoes",
      "canvas shoes",
      "slip on"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Durable washed canvas with dual stretch elastic gores for effortless slip-on wear, padded collars, and waffle tread."
  },
  {
    "_id": "prod-kids-shoes-5",
    "name": "Kids Smart Formal Uniform School Shoes with Cushioned Sole",
    "brand": "ZYRIVO KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1399,
    "discountPrice": 579,
    "ratings": 4.8,
    "numReviews": 112,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids sneakers",
      "school shoes",
      "kids shoes",
      "formal"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-shine scuff-resistant polished black upper with antibacterial sanitized insole, built for rigorous daily school routine."
  },
  {
    "_id": "prod-home-bed-1",
    "name": "300 TC 100% Pure Glace Cotton King Size Bedsheet with 2 Pillow Covers",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 899,
    "ratings": 4.9,
    "numReviews": 180,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cotton bedsheets",
      "bedsheets",
      "bedding",
      "king size"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Luxurious 300 thread count long-staple combed cotton bedsheet with geometric damask print, color-fast dyeing, and breathable weave."
  },
  {
    "_id": "prod-home-bed-2",
    "name": "Floral Jaipuri Hand-Block Print Sanganeri Cotton Bedsheet",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2199,
    "discountPrice": 799,
    "ratings": 4.8,
    "numReviews": 142,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cotton bedsheets",
      "bedsheets",
      "jaipuri",
      "block print"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Traditional artisan hand-block stamped bedsheet crafted in pure Rajasthani cotton with matching border-printed envelope pillow covers."
  },
  {
    "_id": "prod-home-bed-3",
    "name": "Hotel Luxury Egyptian Satin Striped White King Fitted Sheet",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2999,
    "discountPrice": 1099,
    "ratings": 5,
    "numReviews": 215,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cotton bedsheets",
      "bedsheets",
      "hotel luxury",
      "white bedsheet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Crisp 5-star hotel 1cm satin weave stripe pattern offering silky smooth drape, deep corner pockets, and cooling airflow."
  },
  {
    "_id": "prod-home-bed-4",
    "name": "Bohemian Mandala Indigo Blue Printed Queen Bedsheet",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 749,
    "ratings": 4.7,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cotton bedsheets",
      "bedsheets",
      "mandala",
      "boho"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Intricate circular kaleidoscope mandala artwork in natural indigo and teal, pre-washed for zero shrinkage and ultra softness."
  },
  {
    "_id": "prod-home-bed-5",
    "name": "All-Weather Microfiber Micro-Quilted Reversible AC Comforter",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3499,
    "discountPrice": 1399,
    "ratings": 4.9,
    "numReviews": 168,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cotton bedsheets",
      "blankets & quilts",
      "comforter",
      "ac quilt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hypoallergenic 200 GSM hollow siliconized microfiber filling with diamond baffle box stitching to prevent clumping."
  },
  {
    "_id": "prod-home-curt-1",
    "name": "Thermal Insulated Blackout Grommet Eyelet Window Curtains (Set of 2)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2699,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 154,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "curtains & drapes",
      "curtains",
      "blackout curtains",
      "drapes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Triple weave high-density blackout fabric blocks 95% sunlight and UV rays, reduces outside noise, and balances room temperature."
  },
  {
    "_id": "prod-home-curt-2",
    "name": "Sheer Linen Blend Textured Semi-Transparent Door Curtains (Set of 2)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 749,
    "ratings": 4.9,
    "numReviews": 120,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "curtains & drapes",
      "curtains",
      "sheer curtains"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Airy flax linen textured semi-sheer panels that gently filter harsh natural light while preserving living room daytime privacy."
  },
  {
    "_id": "prod-home-curt-3",
    "name": "Lustrous Velvet Heavy Drape Bedroom Eyelet Curtains",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3299,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 88,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "curtains & drapes",
      "curtains",
      "velvet curtains"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sumptuous plush velvet curtains in deep forest green with rust-proof silver eyelets, creating an ultra-luxurious palace ambience."
  },
  {
    "_id": "prod-home-curt-4",
    "name": "Geometric Modern Jacquard Weave Living Room Long Drapes",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 949,
    "ratings": 4.7,
    "numReviews": 73,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "curtains & drapes",
      "curtains",
      "jacquard"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary Scandinavian chevron metallic weave with weighted hem corners to guarantee flawless vertical draping."
  },
  {
    "_id": "prod-home-curt-5",
    "name": "Embroidered Sheer Voile White Window Curtains with Rod Pocket",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.8,
    "numReviews": 65,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "curtains & drapes",
      "curtains",
      "voile"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Delicate white floral trail embroidery on crisp sheer voile fabric, creating a breezy, serene and sunlit room vibe."
  },
  {
    "_id": "prod-home-cush-1",
    "name": "Bohemian Tufted Cotton Throw Pillow Cushion Covers (Set of 5)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 749,
    "ratings": 4.9,
    "numReviews": 162,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cushions & covers",
      "cushion covers",
      "pillow covers",
      "boho"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Handcrafted artisan woven textured tufts with chic corner fringe tassels, hidden invisible zipper, and thick canvas backing."
  },
  {
    "_id": "prod-home-cush-2",
    "name": "Soft Velvet Solid Color Sofa Decorative Cushion Covers (Pack of 5)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.8,
    "numReviews": 135,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cushions & covers",
      "cushion covers",
      "velvet cushions"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Silky smooth high-grade velvet in opulent jewel tones (emerald, mustard, teal, ruby, navy) with robust surge overlock stitching."
  },
  {
    "_id": "prod-home-cush-3",
    "name": "Embroidered Metallic Zari Silk Festive Cushion Covers (Pack of 5)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2299,
    "discountPrice": 899,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cushions & covers",
      "cushion covers",
      "festive cushions"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Raw silk dupion base adorned with traditional Mughal floral resham embroidery and golden cord piping for festive celebrations."
  },
  {
    "_id": "prod-home-cush-4",
    "name": "Abstract Geometric Modern Canvas Couch Throw Pillows",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1599,
    "discountPrice": 599,
    "ratings": 4.7,
    "numReviews": 74,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cushions & covers",
      "cushion covers",
      "modern decor"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary minimalist mid-century Bauhaus graphic prints on thick eco-friendly combed cotton linen canvas."
  },
  {
    "_id": "prod-home-cush-5",
    "name": "Faux Fur Fluffy Shaggy Luxury Accent Pillows with Inserts",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 999,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cushions & covers",
      "cushion covers",
      "faux fur"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-cuddly high-pile Mongolian faux fur with plush microfiber micro-cushion filler included for ultimate cozy comfort."
  },
  {
    "_id": "prod-home-cook-1",
    "name": "Granite Finish 5-Layer Induction Non-Stick Cookware Set (3 Pcs)",
    "brand": "ZYRIVO CHEF",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 4999,
    "discountPrice": 1999,
    "ratings": 4.8,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cookware sets",
      "kitchenware",
      "non stick",
      "cookware"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Includes Frying Pan, Kadhai with Tempered Glass Lid, and Dosa Tawa coated with 100% PFOA-free Greblon German non-stick granite coating."
  },
  {
    "_id": "prod-home-cook-2",
    "name": "Tri-Ply Heavy Gauge Stainless Steel Cooking Pot Casserole Set",
    "brand": "ZYRIVO CHEF",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 5499,
    "discountPrice": 2299,
    "ratings": 4.9,
    "numReviews": 130,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cookware sets",
      "tri-ply",
      "stainless steel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "3-layer construction (SS 304 inner + pure aluminum core + SS 430 outer) prevents food scorching and distributes heat 3X faster."
  },
  {
    "_id": "prod-home-cook-3",
    "name": "Pre-Seasoned Heavy Cast Iron Dutch Oven Pot with Lid",
    "brand": "ZYRIVO CHEF",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3999,
    "discountPrice": 1699,
    "ratings": 4.9,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cookware sets",
      "cast iron",
      "dutch oven"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Naturally non-stick 100% pure cast iron oven enriched with 100% organic flaxseed oil seasoning, locks in flavors for stews, curries, and roasts."
  },
  {
    "_id": "prod-home-cook-4",
    "name": "Hard Anodized Aluminum Pressure Cooker with Safety Valve (5 Liters)",
    "brand": "ZYRIVO CHEF",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3499,
    "discountPrice": 1499,
    "ratings": 4.7,
    "numReviews": 148,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "cookware sets",
      "pressure cooker",
      "kitchen"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Black hard-anodized surface that never tarnishes or reacts with acidic ingredients, featuring stay-cool Bakelite heat-resistant handles."
  },
  {
    "_id": "prod-home-cook-5",
    "name": "Silicone & Acacia Wood Non-Scratch Cooking Utensil Set (12 Pcs)",
    "brand": "ZYRIVO CHEF",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 125,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "cookware sets",
      "utensil set",
      "spatula"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "BPA-free heat-resistant silicone spoons and spatulas that safeguard non-stick pans from scuffs, complete with utensil holder."
  },
  {
    "_id": "prod-home-din-1",
    "name": "Artisan Handcrafted Ceramic Stoneware Dinner Set (18 Pieces)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 5999,
    "discountPrice": 2499,
    "ratings": 4.9,
    "numReviews": 118,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "dinnerware sets",
      "dinner set",
      "crockery",
      "plates"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Complete family dining set with full dinner plates, quarter snack plates, and soup bowls finished in a reactive speckled eggshell glaze."
  },
  {
    "_id": "prod-home-din-2",
    "name": "24K Real Gold Rimmed Royal Bone China Luxury Dinnerware Set",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 8999,
    "discountPrice": 3899,
    "ratings": 5,
    "numReviews": 86,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "dinnerware sets",
      "bone china",
      "luxury dining"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Translucent high-strength bone china framed with genuine 24-karat gold filigree detailing, chip-resistant and lightweight."
  },
  {
    "_id": "prod-home-din-3",
    "name": "Matte Black Minimalist Nordic Ceramic Pasta Bowls (Set of 6)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 104,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "dinnerware sets",
      "pasta bowls",
      "ceramic bowls"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Wide shallow lip design crafted for serving pasta, salads, curries, and grain bowls, microwave and dishwasher safe."
  },
  {
    "_id": "prod-home-din-4",
    "name": "Vintage Blue Pottery Mughal Hand-Painted Coffee Mugs (Set of 6)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1899,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 130,
    "isFeatured": true,
    "tags": [
      "home",
      "home & living",
      "dinnerware sets",
      "coffee mugs",
      "mugs",
      "blue pottery"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "350ml glazed ceramic mugs hand-painted with cobalt blue traditional floral jaal motifs and comfortable ergonomic thumb rest handles."
  },
  {
    "_id": "prod-home-din-5",
    "name": "Opalware Break-Resistant Everyday Lightweight Dinner Set (24 Pcs)",
    "brand": "ZYRIVO HOME",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3999,
    "discountPrice": 1699,
    "ratings": 4.7,
    "numReviews": 155,
    "isFeatured": false,
    "tags": [
      "home",
      "home & living",
      "dinnerware sets",
      "opalware",
      "dinner set"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Tough thermal-shock resistant European opal glass tableware that does not absorb odors or food stains, perfect for daily family meals."
  },
  {
    "_id": "prod-beauty-cleanse-1",
    "name": "Salicylic Acid 2% + Tea Tree Gentle Foaming Cleanser for Acne",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 899,
    "discountPrice": 349,
    "ratings": 4.9,
    "numReviews": 240,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "face wash & cleansers",
      "face wash",
      "cleanser",
      "acne"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dermatologist-tested sulfate-free clarifying cleanser deep cleans pores, dissolves excess sebum, and soothes redness without stripping skin barrier."
  },
  {
    "_id": "prod-beauty-cleanse-2",
    "name": "Hydrating Ceramide + Hyaluronic Acid Cream Cleanser for Dry Skin",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 949,
    "discountPrice": 389,
    "ratings": 4.8,
    "numReviews": 180,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "face wash & cleansers",
      "cleanser",
      "ceramides"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Non-foaming milky cleansing emulsion packed with 3 essential ceramides that retains natural moisture while melting makeup and pollution."
  },
  {
    "_id": "prod-beauty-cleanse-3",
    "name": "Vitamin C Brightening Foaming Face Wash with Built-In Silicone Brush",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 4.9,
    "numReviews": 215,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "face wash & cleansers",
      "face wash",
      "vitamin c",
      "brightening"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Infused with Kakadu Plum Vitamin C and citrus extracts, the ergonomic micro-bristle brush micro-exfoliates dead skin cells for instant radiant glow."
  },
  {
    "_id": "prod-beauty-cleanse-4",
    "name": "Centella Asiatica (Cica) Calming Low pH Gel Face Cleanser",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1099,
    "discountPrice": 449,
    "ratings": 4.8,
    "numReviews": 135,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "face wash & cleansers",
      "cleanser",
      "cica",
      "k-beauty"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Gentle pH 5.5 balancing gel formula enriched with pure Korean Centella Asiatica to restore stressed and irritated skin barriers."
  },
  {
    "_id": "prod-beauty-cleanse-5",
    "name": "Activated Bamboo Charcoal Deep Pore Detox Face Wash",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 849,
    "discountPrice": 329,
    "ratings": 4.7,
    "numReviews": 158,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "face wash & cleansers",
      "face wash",
      "charcoal"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Magnetic activated charcoal pulls out deep-seated micro-pollutants and blackheads, leaving skin refreshed and invigorated."
  },
  {
    "_id": "prod-beauty-serum-1",
    "name": "Pure Hyaluronic Acid 2% + B5 Intense Hydration Plumping Serum",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 499,
    "ratings": 4.9,
    "numReviews": 290,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "moisturizers & serums",
      "serums",
      "hyaluronic acid",
      "face serum"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Multi-molecular weight hyaluronic acid penetrates multiple skin layers to deliver intense 72-hour moisture plumping and bounce."
  },
  {
    "_id": "prod-beauty-serum-2",
    "name": "Niacinamide 10% + Zinc 1% Dark Spot Correcting Serum",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1199,
    "discountPrice": 469,
    "ratings": 4.9,
    "numReviews": 310,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "moisturizers & serums",
      "serums",
      "niacinamide",
      "dark spots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-potency clinical formulation fades post-acne blemishes, tightens enlarged pores, and unifies uneven skin texture."
  },
  {
    "_id": "prod-beauty-serum-3",
    "name": "Oil-Free Lightweight Hydro Gel Moisturizer with Aloe & Green Tea",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 4.8,
    "numReviews": 195,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "moisturizers & serums",
      "moisturizers",
      "gel moisturizer"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Zero-grease water-burst gel formulation absorbs in 3 seconds, delivering instant cooling hydration without clogging pores."
  },
  {
    "_id": "prod-beauty-serum-4",
    "name": "Retinol 0.3% + Peptide Anti-Aging Night Renewal Cream",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1499,
    "discountPrice": 599,
    "ratings": 4.9,
    "numReviews": 172,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "moisturizers & serums",
      "retinol",
      "night cream",
      "anti aging"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Encapsulated gentle retinol stimulates overnight cellular turnover to smooth fine lines and improve skin firmness."
  },
  {
    "_id": "prod-beauty-serum-5",
    "name": "Rosehip Seed + Argan Luxury Organic Facial Glow Oil",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1399,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 128,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "moisturizers & serums",
      "facial oil",
      "glow oil"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Cold-pressed 100% pure botanical elixir loaded with essential fatty acids and antioxidants for a healthy, lit-from-within complexion."
  },
  {
    "_id": "prod-beauty-sun-1",
    "name": "SPF 50+ PA++++ Ultra-Light Dewy Sunscreen with Zero White Cast",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 5,
    "numReviews": 320,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "sunscreens",
      "sunscreen",
      "spf 50",
      "sunblock"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Next-generation hybrid chemical-mineral UV filters leave a non-sticky invisible satin finish, perfect under daily makeup."
  },
  {
    "_id": "prod-beauty-sun-2",
    "name": "Matte Finish Silicone Gel SPF 50 Water-Resistant Sunscreen",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1099,
    "discountPrice": 429,
    "ratings": 4.9,
    "numReviews": 240,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "sunscreens",
      "sunscreen",
      "matte sunscreen"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Velvety pore-blurring primer finish with 80-minute sweat resistance, custom formulated for oily and combination Indian skin."
  },
  {
    "_id": "prod-beauty-sun-3",
    "name": "100% Mineral Zinc Oxide Tinted Sunscreen with Broad Spectrum Defense",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 499,
    "ratings": 4.8,
    "numReviews": 165,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "sunscreens",
      "sunscreen",
      "mineral sunscreen",
      "tinted"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Universal tint prevents ashiness while non-nano zinc oxide provides reef-safe, irritation-free defense for sensitive skin."
  },
  {
    "_id": "prod-beauty-sun-4",
    "name": "Vitamin C Glow Sunscreen Serum SPF 50 with Niacinamide",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1149,
    "discountPrice": 449,
    "ratings": 4.9,
    "numReviews": 190,
    "isFeatured": false,
    "tags": [
      "beauty",
      "skincare",
      "sunscreens",
      "sunscreen",
      "glow sunscreen"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dual protection combines potent antioxidants with broad-spectrum photostable UV shields to combat tanning and sun spots."
  },
  {
    "_id": "prod-beauty-sun-5",
    "name": "On-The-Go Sunscreen Stick SPF 50+ Easy Reapplication Bar",
    "brand": "ZYRIVO BOTANICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1199,
    "discountPrice": 479,
    "ratings": 4.8,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "beauty",
      "skincare",
      "sunscreens",
      "sunscreen",
      "sun stick"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Mess-free pocket twist stick glides easily over makeup without smudging, offering seamless two-finger UV touchups everywhere."
  },
  {
    "_id": "prod-beauty-lip-1",
    "name": "Velvet Matte Long-Wear Transfer-Proof Liquid Lipstick (Royal Crimson)",
    "brand": "ZYRIVO COSMETICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 899,
    "discountPrice": 349,
    "ratings": 4.9,
    "numReviews": 280,
    "isFeatured": true,
    "tags": [
      "beauty",
      "makeup",
      "lipsticks & lip gloss",
      "lipstick",
      "matte lipstick",
      "liquid lipstick"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Intensely pigmented 16-hour stay formula with infused vitamin E and avocado oil that prevents lip drying and flaking."
  },
  {
    "_id": "prod-beauty-lip-2",
    "name": "Nude Brown Satin Hydrating Bullet Lipstick with Shea Butter",
    "brand": "ZYRIVO COSMETICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 799,
    "discountPrice": 299,
    "ratings": 4.8,
    "numReviews": 215,
    "isFeatured": false,
    "tags": [
      "beauty",
      "makeup",
      "lipsticks & lip gloss",
      "lipstick",
      "nude lipstick"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Everyday flattering nude for Indian skin tones, enriched with rich shea butter for a cushiony satin pillow glide."
  },
  {
    "_id": "prod-beauty-lip-3",
    "name": "Glass-Shine Hydrating Non-Sticky Lip Gloss with Hyaluronic Acid",
    "brand": "ZYRIVO COSMETICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 749,
    "discountPrice": 279,
    "ratings": 4.9,
    "numReviews": 198,
    "isFeatured": true,
    "tags": [
      "beauty",
      "makeup",
      "lipsticks & lip gloss",
      "lip gloss",
      "gloss"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-glossy mirrored finish with fine multidimensional micro-pearls and plumping hyaluronic filling spheres."
  },
  {
    "_id": "prod-beauty-lip-4",
    "name": "Berry Plum Matte Lip Crayon with Built-In Precision Sharpener",
    "brand": "ZYRIVO COSMETICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 849,
    "discountPrice": 329,
    "ratings": 4.7,
    "numReviews": 135,
    "isFeatured": false,
    "tags": [
      "beauty",
      "makeup",
      "lipsticks & lip gloss",
      "lip crayon",
      "lipstick"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chubby precision crayon outlines and fills in a single swipe with lightweight suede finish and smudge-proof hold."
  },
  {
    "_id": "prod-beauty-lip-5",
    "name": "pH Tinted Nourishing Magic Lip Oil (Blush Pink Tint)",
    "brand": "ZYRIVO COSMETICS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 799,
    "discountPrice": 299,
    "ratings": 4.9,
    "numReviews": 245,
    "isFeatured": true,
    "tags": [
      "beauty",
      "makeup",
      "lipsticks & lip gloss",
      "lip oil",
      "lip tint"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Reacts to personal lip pH to deliver a bespoke natural rose-pink flush, packed with jojoba and cherry seed oil."
  },
  {
    "_id": "prod-beauty-perf-1",
    "name": "Oud & Amber Royal Extrait de Parfum (100 ml Luxury Spray)",
    "brand": "ZYRIVO PARFUMS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 3999,
    "discountPrice": 1599,
    "ratings": 5,
    "numReviews": 310,
    "isFeatured": true,
    "tags": [
      "beauty",
      "fragrances",
      "eau de parfum",
      "perfume",
      "oud perfume",
      "fragrance"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Regal oriental woody symphony blending smoky Cambodian agarwood, velvety amber, and Damascus rose with 24-hour longevity."
  },
  {
    "_id": "prod-beauty-perf-2",
    "name": "French Vanilla & Jasmine Eau de Parfum for Women (100 ml)",
    "brand": "ZYRIVO PARFUMS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 3499,
    "discountPrice": 1399,
    "ratings": 4.9,
    "numReviews": 260,
    "isFeatured": true,
    "tags": [
      "beauty",
      "fragrances",
      "eau de parfum",
      "perfume",
      "women perfume",
      "vanilla"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sensual gourmand fragrance opening with sweet Madagascar vanilla bean and blooming white night-jasmine."
  },
  {
    "_id": "prod-beauty-perf-3",
    "name": "Aqua Marine & Italian Bergamot Citrus Eau de Parfum (100 ml)",
    "brand": "ZYRIVO PARFUMS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 3299,
    "discountPrice": 1299,
    "ratings": 4.8,
    "numReviews": 185,
    "isFeatured": false,
    "tags": [
      "beauty",
      "fragrances",
      "eau de parfum",
      "perfume",
      "men perfume",
      "citrus"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Crisp invigorating oceanic breeze with zesty Calabrian bergamot, sea salt accords, and a dry-down of cedarwood."
  },
  {
    "_id": "prod-beauty-perf-4",
    "name": "Smoked Tobacco & Tonka Bean Dark Unisex Eau de Parfum",
    "brand": "ZYRIVO PARFUMS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 3699,
    "discountPrice": 1499,
    "ratings": 4.9,
    "numReviews": 195,
    "isFeatured": true,
    "tags": [
      "beauty",
      "fragrances",
      "eau de parfum",
      "perfume",
      "tobacco perfume",
      "unisex perfume"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Mysterious evening scent with sweet blonde tobacco leaf, roasted tonka bean, and spicy cardamom wrapped in cacao."
  },
  {
    "_id": "prod-beauty-perf-5",
    "name": "Blooming Peony & Blush Suede Floral Eau de Toilette (100 ml)",
    "brand": "ZYRIVO PARFUMS",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 2999,
    "discountPrice": 1199,
    "ratings": 4.7,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "beauty",
      "fragrances",
      "eau de parfum",
      "perfume",
      "floral perfume"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Airy romantic springtime bouquet with blooming pink peonies, crisp red apple, and tender blush suede texture."
  },
{
    "_id": "prod-watch-leather-1",
    "name": "Minimalist Tan Italian Leather Strap Analog Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 4999,
    "discountPrice": 2199,
    "ratings": 4.8,
    "numReviews": 142,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "leather strap watches",
      "minimalist watches",
      "tan watch",
      "analog watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-clean white dial accented with brushed stainless steel bezel and vegetable-tanned Italian saddle leather strap."
  },
  {
    "_id": "prod-watch-leather-2",
    "name": "Midnight Black Leather Dress Watch with Rose Accents",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5499,
    "discountPrice": 2399,
    "ratings": 4.9,
    "numReviews": 89,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "leather strap watches",
      "black watch",
      "dress watch",
      "analog watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Low-profile 7mm casing with matte dial, slender hands, and supple padded calfskin leather strap."
  },
  {
    "_id": "prod-watch-leather-3",
    "name": "Vintage Distressed Brown Leather Field Quartz Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 4799,
    "discountPrice": 1999,
    "ratings": 4.7,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "leather strap watches",
      "vintage watch",
      "brown watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Rugged aviation-inspired dial with luminous markers and hand-waxed vintage pull-up leather strap."
  },
  {
    "_id": "prod-watch-leather-4",
    "name": "Champagne Dial Crocodile Embossed Leather Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5899,
    "discountPrice": 2499,
    "ratings": 4.9,
    "numReviews": 104,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "leather strap watches",
      "gold watch",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sunburst champagne gold face with glossy alligator-grain genuine leather strap and deployant buckle."
  },
  {
    "_id": "prod-watch-leather-5",
    "name": "Navy Blue Sunray Dial Textured Leather Chrono Look Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5299,
    "discountPrice": 2249,
    "ratings": 4.8,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "leather strap watches",
      "blue watch",
      "analog watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Rich royal blue sunray dial complemented by dark navy top-grain leather with contrast perimeter stitching."
  },
  {
    "_id": "prod-watch-sports-1",
    "name": "All-Terrain Rugged Multi-Function Shock Digital Watch",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 3999,
    "discountPrice": 1699,
    "ratings": 4.8,
    "numReviews": 215,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "sports digital watches",
      "digital watch",
      "shock watch",
      "sports watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavy-duty resin armor with 200M water resistance, world time, stopwatch, dual LED illuminators, and 5 alarms."
  },
  {
    "_id": "prod-watch-sports-2",
    "name": "Stealth Black Matte Solar Digital Tactical Watch",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 4499,
    "discountPrice": 1899,
    "ratings": 4.9,
    "numReviews": 180,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "sports digital watches",
      "tactical watch",
      "digital watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Anti-reflective negative LCD display with auto-light, countdown timer, and shock-resistant polymer core."
  },
  {
    "_id": "prod-watch-sports-3",
    "name": "Army Green Outdoor Dual-Time Analog Digital Sport Watch",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 3799,
    "discountPrice": 1549,
    "ratings": 4.7,
    "numReviews": 135,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "sports digital watches",
      "army green watch",
      "sports watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hybrid ana-digi display with compass bezel marking, reinforced mineral crystal, and flexible silicone strap."
  },
  {
    "_id": "prod-watch-sports-4",
    "name": "Vibrant Orange Accent High-Impact Silicone Sport Watch",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 3499,
    "discountPrice": 1449,
    "ratings": 4.8,
    "numReviews": 110,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "sports digital watches",
      "running watch",
      "silicone watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ergonomic lightweight sports design crafted for runners and athletes with high-precision lap split timing."
  },
  {
    "_id": "prod-watch-sports-5",
    "name": "Arctic White High-Gloss Water-Resistant Digital Sport Watch",
    "brand": "ZYRIVO SPORTS",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 3699,
    "discountPrice": 1599,
    "ratings": 4.8,
    "numReviews": 95,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "sports digital watches",
      "white watch",
      "digital watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Gloss white case with turquoise accents, EL backlight, auto calendar, and scratch-resistant acrylic glass."
  },
  {
    "_id": "prod-watch-diamond-1",
    "name": "Austrian Crystal Pave Bezel Mother of Pearl Luxury Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 7999,
    "discountPrice": 3499,
    "ratings": 4.9,
    "numReviews": 128,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "diamond dial watches",
      "crystal watch",
      "women watch",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Exquisite genuine crystal baguette bezel encircling an iridescent natural pearl face with Roman numerals."
  },
  {
    "_id": "prod-watch-diamond-2",
    "name": "Golden Starlight Studded Indices Solid Link Bracelet Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 7499,
    "discountPrice": 3299,
    "ratings": 4.8,
    "numReviews": 86,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "diamond dial watches",
      "gold watch",
      "crystal watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Brilliant faceted crystal hour points set on champagne sunray dial with double-locking jewelry clasp."
  },
  {
    "_id": "prod-watch-diamond-3",
    "name": "Silver Halo Crystal Floating Dial Minimalist Evening Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 6999,
    "discountPrice": 2999,
    "ratings": 4.9,
    "numReviews": 94,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "diamond dial watches",
      "silver watch",
      "evening watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic dual-ring floating crystal track that shimmers at every angle, matched with polished steel mesh."
  },
  {
    "_id": "prod-watch-diamond-4",
    "name": "Rose Gold Fluted Bezel Crystal Encrusted Dress Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 8499,
    "discountPrice": 3799,
    "ratings": 4.9,
    "numReviews": 112,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "diamond dial watches",
      "rose gold watch",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Classic fluted bezel with 12 brilliant-cut crystal markers and Jubilee-style three-piece link bracelet."
  },
  {
    "_id": "prod-watch-diamond-5",
    "name": "Emerald Green Dial Crystal Hour Markers Luxury Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 7699,
    "discountPrice": 3399,
    "ratings": 4.8,
    "numReviews": 81,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "diamond dial watches",
      "green watch",
      "crystal watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Deep royal emerald dial showcasing prong-set crystal accents with yellow gold PVD case."
  },
  {
    "_id": "prod-watch-square-1",
    "name": "Heritage Octagonal Bezel Stainless Steel Integrated Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 9999,
    "discountPrice": 4299,
    "ratings": 4.9,
    "numReviews": 156,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "vintage square watches",
      "octagonal watch",
      "integrated bracelet",
      "luxury watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Iconic octagonal brushed steel geometry with waffle tapisserie dial and seamlessly integrated tapered bracelet."
  },
  {
    "_id": "prod-watch-square-2",
    "name": "Retro Square Tank Roman Numeral Black Leather Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 6499,
    "discountPrice": 2799,
    "ratings": 4.8,
    "numReviews": 102,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "vintage square watches",
      "tank watch",
      "leather watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Timeless Art Deco rectangular tank proportion with blued sword hands and sapphire cabochon crown."
  },
  {
    "_id": "prod-watch-square-3",
    "name": "Gold Plated Cushion Case Vintage Sunburst Analog Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 6999,
    "discountPrice": 2999,
    "ratings": 4.8,
    "numReviews": 78,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "vintage square watches",
      "gold watch",
      "cushion case"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Subtly rounded 1970s cushion silhouette in 18K yellow gold ion plating with scratchproof sapphire crystal."
  },
  {
    "_id": "prod-watch-square-4",
    "name": "Smoked Grey Square Skeleton Automatic Mechanical Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 11499,
    "discountPrice": 4899,
    "ratings": 4.9,
    "numReviews": 69,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "vintage square watches",
      "skeleton watch",
      "automatic watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Openworked square dial showcasing self-winding rotor mechanics through dual exhibition sapphire casebacks."
  },
  {
    "_id": "prod-watch-square-5",
    "name": "Matte Gunmetal Square Dial Minimalist Mesh Watch",
    "brand": "ZYRIVO HOROLOGY",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 5999,
    "discountPrice": 2499,
    "ratings": 4.7,
    "numReviews": 84,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "vintage square watches",
      "mesh watch",
      "gunmetal watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Architectural sharp-cornered square case finished in matte charcoal with ultra-fine Milanese mesh bracelet."
  },
  {
    "_id": "prod-watch-ceramic-1",
    "name": "High-Tech Scratchproof Black Gloss Ceramic Luxury Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 12999,
    "discountPrice": 5499,
    "ratings": 4.9,
    "numReviews": 160,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "ceramic two tone watches",
      "ceramic watch",
      "luxury watch",
      "black watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sintered pure zirconium oxide ceramic construction that is virtually scratchproof, lightweight, and hypoallergenic."
  },
  {
    "_id": "prod-watch-ceramic-2",
    "name": "Two-Tone Silver & Rose Gold Stainless Steel Date Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 8999,
    "discountPrice": 3899,
    "ratings": 4.8,
    "numReviews": 118,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "ceramic two tone watches",
      "two tone watch",
      "rose gold watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Interlocking silver and rose-gold links with cyclops date magnifier at 3 o’clock and luminous hands."
  },
  {
    "_id": "prod-watch-ceramic-3",
    "name": "Pure White Ceramic Bezel Rose Gold Link Dress Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 10499,
    "discountPrice": 4499,
    "ratings": 4.9,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "ceramic two tone watches",
      "white ceramic watch",
      "women watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pristine white polished ceramic center links flanked by warm rose-gold steel with diamond-cut crystal bezel."
  },
  {
    "_id": "prod-watch-ceramic-4",
    "name": "Two-Tone Gold & Silver Jubilee Automatic Diver Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 11999,
    "discountPrice": 4999,
    "ratings": 4.8,
    "numReviews": 105,
    "isFeatured": true,
    "tags": [
      "watches",
      "watch",
      "ceramic two tone watches",
      "diver watch",
      "automatic watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Unidirectional 120-click ceramic rotating bezel, screw-down crown, and solid two-tone gold-steel oyster bracelet."
  },
  {
    "_id": "prod-watch-ceramic-5",
    "name": "Midnight Navy Dial Two-Tone Champagne Gold Luxury Watch",
    "brand": "ZYRIVO LUXE",
    "category": {
      "name": "Watches & Timepieces",
      "slug": "watches-timepieces"
    },
    "price": 9499,
    "discountPrice": 4099,
    "ratings": 4.9,
    "numReviews": 87,
    "isFeatured": false,
    "tags": [
      "watches",
      "watch",
      "ceramic two tone watches",
      "two tone watch",
      "blue watch"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contrasting royal blue face encased in dual-finish yellow gold and mirror-polished surgical steel."
  },
  {
    "_id": "prod-kids-skirts-1",
    "name": "Girls Peplum Ruffle Top & Floral Flared Tiered Skirt Set",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.8,
    "numReviews": 120,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls tops & skirts",
      "skirt set",
      "girls fashion"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Breathable 100% organic cotton sleeveless peplum blouse paired with a vibrant botanical print twirl skirt."
  },
  {
    "_id": "prod-kids-skirts-2",
    "name": "Girls Pastel Butterfly Print Cotton Top & Denim Skort Set",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "girls tops & skirts",
      "skort set",
      "girls top"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-soft stretch ribbed tee matched with comfortable built-in shorts denim skort for all-day play."
  },
  {
    "_id": "prod-kids-skirts-3",
    "name": "Girls Polka Dot Smocked Crop Top & Midi Cotton Skirt",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1799,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 88,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls tops & skirts",
      "polka dot",
      "summer wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Vintage-inspired smocked bodice top with elastic ruffle straps and flowing polka dot cotton midi skirt."
  },
  {
    "_id": "prod-kids-skirts-4",
    "name": "Girls Daisy Embroidered Knitted Tee & Pleated Tennis Skirt",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1999,
    "discountPrice": 899,
    "ratings": 4.7,
    "numReviews": 64,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "girls tops & skirts",
      "tennis skirt",
      "embroidered"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic preppy aesthetic set featuring delicate floral chest embroidery and high-waist pleated athletic skirt."
  },
  {
    "_id": "prod-kids-skirts-5",
    "name": "Girls Bohemian Tie-Dye Knot-Hem Top with Layered Tulle Skirt",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls tops & skirts",
      "tulle skirt",
      "party skirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dreamy pastel tie-dye tee tied at the front with a glitter-fused voluminous double-layer tulle skirt."
  },
  {
    "_id": "prod-kids-ethnic-1",
    "name": "Boys Silk Blend Embroidered Kurta Pajama with Nehru Jacket",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 2999,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 145,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids ethnic sets",
      "boys kurta",
      "nehru jacket",
      "festive wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Festive royal jacquard woven sleeveless Nehru jacket layered over a comfortable cream cotton silk kurta and churidar."
  },
  {
    "_id": "prod-kids-ethnic-2",
    "name": "Boys Traditional Zari Work Bandhgala Indo-Western Sherwani",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3499,
    "discountPrice": 1499,
    "ratings": 4.8,
    "numReviews": 89,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids ethnic sets",
      "boys sherwani",
      "wedding wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Regal maroon velvet collar accent with intricate golden metallic thread embroidery and antique metal buttons."
  },
  {
    "_id": "prod-kids-ethnic-3",
    "name": "Boys Cotton Chikankari Handloom Kurta & Dhoti Pants Set",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 2499,
    "discountPrice": 1049,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids ethnic sets",
      "dhoti kurta",
      "cotton kurta"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pure breathable cotton Lucknowi chikankari kurta with pre-stitched elastic waistband readymade dhoti pants."
  },
  {
    "_id": "prod-kids-ethnic-4",
    "name": "Boys Floral Printed Linen Kurta with Slim Fit White Trousers",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.7,
    "numReviews": 68,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids ethnic sets",
      "linen kurta",
      "printed kurta"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary pastel mint botanical digital print on lightweight linen fabric with roll-up sleeve tabs."
  },
  {
    "_id": "prod-kids-ethnic-5",
    "name": "Toddler Royal Blue Angrakha Style Kurta & Pajama Set",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.9,
    "numReviews": 92,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids ethnic sets",
      "angrakha kurta",
      "toddler ethnic"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Side-tie crossover Angrakha silhouette with gota patti lace border designed for zero pinch and maximum infant comfort."
  },
  {
    "_id": "prod-kids-lehenga-1",
    "name": "Girls Heavy Sequin Embroidered Net Lehenga Choli Set",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3999,
    "discountPrice": 1699,
    "ratings": 4.9,
    "numReviews": 134,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls festive lehengas",
      "girls lehenga",
      "festive wear",
      "lehenga choli"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Blush pink layered flare lehenga with iridescent sequins, sweetheart choli, and scalloped net dupatta."
  },
  {
    "_id": "prod-kids-lehenga-2",
    "name": "Girls Banarasi Brocade Jacquard Festive Lehenga Set",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3699,
    "discountPrice": 1549,
    "ratings": 4.8,
    "numReviews": 98,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "girls festive lehengas",
      "banarasi lehenga",
      "kids lehenga"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Traditional golden zari woven floral motifs in regal rani pink with soft butter crepe lining for delicate skin."
  },
  {
    "_id": "prod-kids-lehenga-3",
    "name": "Girls Floor Length Mirror Work Anarkali Gown with Dupatta",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3299,
    "discountPrice": 1399,
    "ratings": 4.9,
    "numReviews": 104,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls festive lehengas",
      "anarkali gown",
      "mirror work"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Mustard yellow festive flared silhouette adorned with reflective acrylic mirror work and latkan tassel accents."
  },
  {
    "_id": "prod-kids-lehenga-4",
    "name": "Girls Bandhani Printed Pure Silk Lehenga with Handloom Choli",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3499,
    "discountPrice": 1449,
    "ratings": 4.8,
    "numReviews": 76,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "girls festive lehengas",
      "bandhani lehenga",
      "silk lehenga"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Authentic tie-dye Rajasthani bandhej print highlighted with gota borders and handmade pom-pom tie strings."
  },
  {
    "_id": "prod-kids-lehenga-5",
    "name": "Girls Tiered Organza Ruffled Party Lehenga & Crop Top",
    "brand": "ZYRIVO ETHNIC KIDS",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 3899,
    "discountPrice": 1649,
    "ratings": 4.9,
    "numReviews": 115,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "girls festive lehengas",
      "organza lehenga",
      "crop top"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Contemporary pastel lavender multi-tier ruffled organza skirt paired with an embroidered jewel-neck blouse."
  },
  {
    "_id": "prod-kids-hoodie-1",
    "name": "Kids Fleece-Lined Colorblock Kangaroo Pocket Pullover Hoodie",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1799,
    "discountPrice": 799,
    "ratings": 4.8,
    "numReviews": 168,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids winter hoodies",
      "kids hoodie",
      "sweatshirt",
      "winter wear"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Super-cozy 320 GSM heavyweight brushed fleece with ribbed cuffs, roomy hood, and front kangaroo handwarmer pocket."
  },
  {
    "_id": "prod-kids-hoodie-2",
    "name": "Kids Graphic Dino Print Cotton Terry Crewneck Sweatshirt",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.9,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids winter hoodies",
      "sweatshirt",
      "dino sweatshirt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pre-shrunk 100% French terry cotton with high-density puff printed dinosaur artwork and tagless neck label."
  },
  {
    "_id": "prod-kids-hoodie-3",
    "name": "Girls Sherpa Teddy Bear Zip-Up Hooded Jacket with Ears",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.9,
    "numReviews": 185,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids winter hoodies",
      "teddy jacket",
      "sherpa hoodie"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Fluffy high-loft faux sherpa fleece with cute bear ear hood accents, smooth nylon inner lining, and chin zipper guard."
  },
  {
    "_id": "prod-kids-hoodie-4",
    "name": "Boys Athletic Track Zip Hoodie with Reflective Stripes",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1899,
    "discountPrice": 849,
    "ratings": 4.7,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids winter hoodies",
      "zip hoodie",
      "sports hoodie"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Thermal activewear fabric with stretch mobility, YKK full-zip closure, and night-safe 3M reflective sleeve accents."
  },
  {
    "_id": "prod-kids-hoodie-5",
    "name": "Kids Solid Pastel Oversized Drop-Shoulder Casual Hoodie",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1699,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids winter hoodies",
      "oversized hoodie",
      "pastel hoodie"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Trendy streetwear-inspired relaxed silhouette crafted from combed bio-washed cotton fleece."
  },
  {
    "_id": "prod-kids-night-1",
    "name": "Kids 100% Organic Cotton Space Print Button-Down Sleepsuit",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.9,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids nightwear",
      "pyjama set",
      "night suit",
      "organic cotton"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Notch collar full-sleeve button-down pyjama set with glow-in-the-dark stars and planets print."
  },
  {
    "_id": "prod-kids-night-2",
    "name": "Kids Animal Jungle Friends Soft Cotton Pyjama Lounge Set",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 130,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids nightwear",
      "animal print",
      "lounge set"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Comfort-fit round-neck short sleeve tee with elasticated drawstring track bottoms in cheerful safari prints."
  },
  {
    "_id": "prod-kids-night-3",
    "name": "Girls Sweet Dreams Starry Sky Ruffle Cotton Nighty Gown",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 88,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids nightwear",
      "night gown",
      "girls nighty"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-lightweight modal cotton blend night dress with flutter cap sleeves and delicate lace hem trims."
  },
  {
    "_id": "prod-kids-night-4",
    "name": "Boys Superhero Comic Strip Waffle Knit Pajama Set",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1599,
    "discountPrice": 699,
    "ratings": 4.9,
    "numReviews": 112,
    "isFeatured": true,
    "tags": [
      "kids",
      "kids wear",
      "kids nightwear",
      "waffle knit",
      "boys pyjama"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Breathable honeycomb textured thermal waffle knit that regulates sleep temperature all night long."
  },
  {
    "_id": "prod-kids-night-5",
    "name": "Toddler Pastel Cloud Soft Ribbed Two-Piece Sleepwear Set",
    "brand": "ZYRIVO JUNIOR",
    "category": {
      "name": "Kids Wear",
      "slug": "kids-wear"
    },
    "price": 1349,
    "discountPrice": 579,
    "ratings": 4.8,
    "numReviews": 96,
    "isFeatured": false,
    "tags": [
      "kids",
      "kids wear",
      "kids nightwear",
      "ribbed sleepwear",
      "toddler pyjama"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Extra-soft 2x2 fine rib cotton knit with flat-lock anti-chafing seams and flexible waistband."
  },
  {
    "_id": "prod-home-quilt-1",
    "name": "All-Season Microfiber Reversible Comforter Duvet (King Size)",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3999,
    "discountPrice": 1799,
    "ratings": 4.9,
    "numReviews": 240,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "blankets & quilts",
      "comforter",
      "bedding",
      "duvet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hypoallergenic 350 GSM microfiber siliconized down-alternative filling with diamond baffle-box stitching."
  },
  {
    "_id": "prod-home-quilt-2",
    "name": "Traditional Handcrafted Jaipur Cotton Jaipuri Razai Quilt",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3499,
    "discountPrice": 1499,
    "ratings": 4.8,
    "numReviews": 165,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "blankets & quilts",
      "jaipuri razai",
      "cotton quilt"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Lightweight feather-feel pure mulmul cotton hand-block printed quilt filled with pure carded cotton batting."
  },
  {
    "_id": "prod-home-quilt-3",
    "name": "Ultra-Plush Flannel Fleece Throw Blanket for Couch & Bed",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 198,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "blankets & quilts",
      "fleece blanket",
      "throw blanket"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Velvety anti-pilling 300 GSM microfiber fleece throw offering decadent cloud-like warmth and easy machine washing."
  },
  {
    "_id": "prod-home-quilt-4",
    "name": "Boho Knitted Textured Waffle Bed Throw with Fringed Tassels",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 1049,
    "ratings": 4.8,
    "numReviews": 112,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "blankets & quilts",
      "waffle throw",
      "boho throw"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic Scandinavian geometric knit pattern with bohemian hand-tied corner tassels for living room aesthetic styling."
  },
  {
    "_id": "prod-home-quilt-5",
    "name": "Heavy Winter Dual-Layer Embossed Korean Mink Blanket",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 4499,
    "discountPrice": 1999,
    "ratings": 4.9,
    "numReviews": 145,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "blankets & quilts",
      "mink blanket",
      "winter blanket"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavyweight 5kg dual-ply thermal insulation blanket featuring floral embossed textures and satin-bound edge hems."
  },
  {
    "_id": "prod-home-towel-1",
    "name": "600 GSM Turkish Cotton 4-Piece Quick-Dry Bath Towel Set",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2999,
    "discountPrice": 1299,
    "ratings": 4.9,
    "numReviews": 210,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "bath towels & mats",
      "bath towels",
      "towels",
      "bathroom"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Zero-twist long-staple Turkish combed cotton loops delivering instant absorbency and durable spa-grade plushness."
  },
  {
    "_id": "prod-home-towel-2",
    "name": "Memory Foam Non-Slip Anti-Bacterial Bathroom Floor Mat",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1299,
    "discountPrice": 499,
    "ratings": 4.8,
    "numReviews": 185,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "bath towels & mats",
      "bath mat",
      "door mat"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-density memory foam core wrapped in velvety quick-dry microfiber with textured non-skid rubber backing."
  },
  {
    "_id": "prod-home-towel-3",
    "name": "Organic Bamboo Charcoal Anti-Odor Oversized Bath Sheet",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 130,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "bath towels & mats",
      "bath sheet",
      "bamboo towel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Infused with natural bamboo charcoal fibers that naturally neutralize damp odors and resist mildew."
  },
  {
    "_id": "prod-home-towel-4",
    "name": "Waffle Weave Lightweight Honeycomb Hand & Face Towel Set",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1199,
    "discountPrice": 449,
    "ratings": 4.7,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "bath towels & mats",
      "hand towels",
      "face towels"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern 3D honeycomb air-flow weave dries 40% faster than standard terry towels without lint shedding."
  },
  {
    "_id": "prod-home-towel-5",
    "name": "Fluffy Chenille Shaggy Water Absorbent Microfiber Bath Rug",
    "brand": "ZYRIVO LIVING",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1499,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 118,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "bath towels & mats",
      "chenille rug",
      "bath rug"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Thick 1-inch shaggy chenille fingers soothe tired feet and trap bathroom moisture instantly."
  },
  {
    "_id": "prod-home-art-1",
    "name": "Modern Minimalist Framed Canvas Wall Art Set of 3 (Botanical)",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3499,
    "discountPrice": 1499,
    "ratings": 4.9,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "wall art & clocks",
      "canvas art",
      "wall decor",
      "wall frames"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-definition giclée print on waterproof canvas stretched over moisture-resistant natural wood inner frames."
  },
  {
    "_id": "prod-home-art-2",
    "name": "Mid-Century Nordic Silent Quartz Large Metal Wall Clock",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2999,
    "discountPrice": 1249,
    "ratings": 4.8,
    "numReviews": 140,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "wall art & clocks",
      "wall clock",
      "clock",
      "home decor"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "18-inch minimalist open-face radial clock with silent non-ticking sweeping movement and golden lance hands."
  },
  {
    "_id": "prod-home-art-3",
    "name": "Handmade Macrame Cotton Bohemian Wall Hanging Tapestry",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.8,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "wall art & clocks",
      "macrame tapestry",
      "boho decor"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pure untreated cotton rope hand-knotted around a smooth natural wooden dowel with geometric tassel cascades."
  },
  {
    "_id": "prod-home-art-4",
    "name": "Abstract Gold Foil Textured Oil Painting on Stretched Canvas",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 4499,
    "discountPrice": 1899,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "wall art & clocks",
      "oil painting",
      "gold foil art"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hand-embellished metallic gold leaf on neutral abstract acrylic backdrop creates a grand gallery ambiance."
  },
  {
    "_id": "prod-home-art-5",
    "name": "Vintage Iron Decorative Round Wall Mirror with Sunburst Frame",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 3899,
    "discountPrice": 1649,
    "ratings": 4.8,
    "numReviews": 88,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "wall art & clocks",
      "wall mirror",
      "round mirror"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-definition silver-backed glass reflection encased in a dimensional hand-burnished golden petal metal frame."
  },
  {
    "_id": "prod-home-vase-1",
    "name": "Nordic Matte White Donut Ceramic Vase for Pampas Grass",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 215,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "ceramic vases & decor",
      "ceramic vase",
      "table decor",
      "pampas vase"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Trending hollow circular donut geometry with textured bisqued unglazed finish for contemporary consoles."
  },
  {
    "_id": "prod-home-vase-2",
    "name": "Modern Fluted Ribbed Ceramic Flower Vase (Terracotta)",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1699,
    "discountPrice": 699,
    "ratings": 4.8,
    "numReviews": 124,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "ceramic vases & decor",
      "flower vase",
      "terracotta"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Warm earth-toned terracotta clay fired at 1200°C with waterproof interior glaze for fresh cut stems."
  },
  {
    "_id": "prod-home-vase-3",
    "name": "Aromatherapy Scented Soy Candle in Amber Glass Jar Set of 3",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1599,
    "discountPrice": 649,
    "ratings": 4.9,
    "numReviews": 160,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "ceramic vases & decor",
      "scented candles",
      "aromatherapy"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "100% natural organic soy wax candles scented with lavender, French vanilla, and woody cedarwood essential oils."
  },
  {
    "_id": "prod-home-vase-4",
    "name": "Handmade Carved Mango Wood Centerpiece Serving Bowl",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2299,
    "discountPrice": 999,
    "ratings": 4.8,
    "numReviews": 86,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "ceramic vases & decor",
      "wooden bowl",
      "centerpiece"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sustainably harvested solid mango wood turned by artisans and treated with food-safe botanical mineral wax."
  },
  {
    "_id": "prod-home-vase-5",
    "name": "Golden Geometric Tealight Candle Holders Tabletop Accents",
    "brand": "ZYRIVO DECOR",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1499,
    "discountPrice": 599,
    "ratings": 4.7,
    "numReviews": 92,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "ceramic vases & decor",
      "candle holder",
      "gold decor"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Wireframe prism iron lantern candle stands with electroplated brass coating that casts geometric ambient shadows."
  },
  {
    "_id": "prod-home-storage-1",
    "name": "Airtight Borosilicate Glass Food Storage Jars with Bamboo Lids (Set of 6)",
    "brand": "ZYRIVO KITCHEN",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2499,
    "discountPrice": 1099,
    "ratings": 4.9,
    "numReviews": 230,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "storage containers & jars",
      "glass jars",
      "kitchen storage",
      "spice jars"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heat-resistant crystal-clear borosilicate glass containers sealed with food-grade silicone ring bamboo airtight lids."
  },
  {
    "_id": "prod-home-storage-2",
    "name": "360° Rotating Stainless Steel Revolving Masala Spice Rack (16 Jars)",
    "brand": "ZYRIVO KITCHEN",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 2199,
    "discountPrice": 949,
    "ratings": 4.8,
    "numReviews": 180,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "storage containers & jars",
      "spice rack",
      "masala rack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Smooth turntable bearing tower equipped with 16 shatterproof dispenser bottles with shaker lids."
  },
  {
    "_id": "prod-home-storage-3",
    "name": "BPA-Free Leakproof Cereal & Grain Dispenser Containers (Set of 4)",
    "brand": "ZYRIVO KITCHEN",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1899,
    "discountPrice": 799,
    "ratings": 4.7,
    "numReviews": 145,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "storage containers & jars",
      "cereal dispenser",
      "plastic containers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ergonomic easy-pour silicone spout with 4-sided snap locking clips and stackable pantry organization design."
  },
  {
    "_id": "prod-home-storage-4",
    "name": "Stainless Steel Insulated Airtight Roti Dabba & Casserole Hotpot",
    "brand": "ZYRIVO KITCHEN",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1799,
    "discountPrice": 749,
    "ratings": 4.9,
    "numReviews": 195,
    "isFeatured": true,
    "tags": [
      "home & living",
      "home",
      "storage containers & jars",
      "roti dabba",
      "casserole"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Double-walled polyurethane thermal foam keeps rotis, puris, and curries steaming hot for over 6 hours."
  },
  {
    "_id": "prod-home-storage-5",
    "name": "Under-Sink Expandable 2-Tier Kitchen Cabinet Storage Organizer",
    "brand": "ZYRIVO KITCHEN",
    "category": {
      "name": "Home & Living",
      "slug": "home-living"
    },
    "price": 1999,
    "discountPrice": 849,
    "ratings": 4.8,
    "numReviews": 110,
    "isFeatured": false,
    "tags": [
      "home & living",
      "home",
      "storage containers & jars",
      "cabinet organizer",
      "kitchen rack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavy-gauge rustproof carbon steel slide-out storage drawers for organizing cleaning supplies and cookware."
  },
  {
    "_id": "prod-beauty-hair-1",
    "name": "Moroccan Argan Oil Sulfate-Free Hydrating Therapy Shampoo",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.9,
    "numReviews": 240,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "shampoos & conditioners",
      "shampoo",
      "hair care",
      "argan oil"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Cold-pressed Moroccan argan oil and botanical keratin formula restores elasticity, shine, and deeply cleanses dry damaged hair."
  },
  {
    "_id": "prod-beauty-hair-2",
    "name": "Red Onion & Biotin Anti-Hair Fall Deep Conditioning Cream Mask",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 195,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "shampoos & conditioners",
      "conditioner",
      "hair fall control"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Fortified with 10,000 mcg Biotin, red onion seed extract, and shea butter to reduce breakage and strengthen follicle roots."
  },
  {
    "_id": "prod-beauty-hair-3",
    "name": "Tea Tree & Salicylic Acid Anti-Dandruff Clarifying Shampoo",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1099,
    "discountPrice": 449,
    "ratings": 4.8,
    "numReviews": 160,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "shampoos & conditioners",
      "anti dandruff",
      "tea tree"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Clinically proven 1% Salicylic Acid and Australian tea tree oil soothe itchy scalps and eradicate stubborn flaky flakes."
  },
  {
    "_id": "prod-beauty-hair-4",
    "name": "Coconut Milk & Peptide Volume Boosting Moisture Conditioner",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1149,
    "discountPrice": 479,
    "ratings": 4.7,
    "numReviews": 112,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "shampoos & conditioners",
      "coconut conditioner",
      "volumizing"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Weightless micro-emulsion detangles wet hair instantly while adding noticeable bouncy volume and mirror reflection shine."
  },
  {
    "_id": "prod-beauty-hair-5",
    "name": "Color-Protecting Hibiscus & Rosehip Sulfate-Free Shampoo",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1349,
    "discountPrice": 599,
    "ratings": 4.9,
    "numReviews": 135,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "shampoos & conditioners",
      "color safe",
      "sulfate free"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Antioxidant-rich organic hibiscus blossom water shields color-treated highlights from brassiness and UV fading."
  },
  {
    "_id": "prod-beauty-oil-1",
    "name": "Rosemary & Mint Biotin Infused Hair Growth Stimulating Scalp Oil",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1499,
    "discountPrice": 649,
    "ratings": 4.9,
    "numReviews": 310,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "hair serums & oils",
      "hair serum",
      "hair oil",
      "rosemary oil"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pure Mediterranean rosemary essential oil blended with cold-pressed castor oil and invigorating cooling spearmint."
  },
  {
    "_id": "prod-beauty-oil-2",
    "name": "Anti-Frizz Thermal Shield Argan Gloss Hair Finishing Serum",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 220,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "hair serums & oils",
      "hair serum",
      "frizz control",
      "heat protectant"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Non-greasy lightweight silk serum protects strands up to 230°C heat styling while sealing split ends and flyaways."
  },
  {
    "_id": "prod-beauty-oil-3",
    "name": "Bhringraj & Amla Traditional Ayurvedic Rejuvenating Hair Oil",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.8,
    "numReviews": 180,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "hair serums & oils",
      "ayurvedic hair oil",
      "bhringraj"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Slow-infused hand-pressed sesame oil steeped with 16 herbs to promote deep restful sleep and prevent premature greying."
  },
  {
    "_id": "prod-beauty-oil-4",
    "name": "Pure Golden Jojoba 100% Cold-Pressed Multipurpose Oil",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.9,
    "numReviews": 145,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "hair serums & oils",
      "jojoba oil",
      "cold pressed"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Virgin unrefined liquid wax mimics natural skin sebum, making it the supreme non-comedogenic face and hair elixir."
  },
  {
    "_id": "prod-beauty-oil-5",
    "name": "Keratin Peptide Bond-Repair Night Hair Leave-In Serum",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1599,
    "discountPrice": 699,
    "ratings": 4.9,
    "numReviews": 165,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "hair serums & oils",
      "keratin serum",
      "overnight treatment"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Overnight cellular bond-builder penetrates cortex layers to reconnect broken disulfide bonds from bleaching."
  },
  {
    "_id": "prod-beauty-body-1",
    "name": "Arabica Coffee & Brown Sugar Cellulite Exfoliating Body Scrub",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.9,
    "numReviews": 275,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "body washes & scrubs",
      "body scrub",
      "coffee scrub",
      "exfoliating"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Roasted Arabica granules, organic raw demerara sugar, and sweet almond oil slough dead cells for velvety smooth skin."
  },
  {
    "_id": "prod-beauty-body-2",
    "name": "Japanese Cherry Blossom & Niacinamide Glowing Body Wash",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 4.8,
    "numReviews": 210,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "body washes & scrubs",
      "body wash",
      "shower gel",
      "cherry blossom"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Luxurious lathering shower foam enriched with 2% Niacinamide and soothing Sakura extracts that brighten dull complexions."
  },
  {
    "_id": "prod-beauty-body-3",
    "name": "Himalayan Pink Salt & Grapefruit Detoxifying Body Polish",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1399,
    "discountPrice": 599,
    "ratings": 4.8,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "body washes & scrubs",
      "salt scrub",
      "detox scrub"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Mineral-dense Himalayan pink salt combined with pink grapefruit essential oil stimulates lymphatic drainage."
  },
  {
    "_id": "prod-beauty-body-4",
    "name": "Shea Butter & Warm Vanilla Deep Moisturizing Shower Cream",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1099,
    "discountPrice": 449,
    "ratings": 4.9,
    "numReviews": 165,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "body washes & scrubs",
      "shower cream",
      "shea butter"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-creamy, non-stripping soap-free wash infused with African raw shea butter and decadent Tahitian vanilla bean."
  },
  {
    "_id": "prod-beauty-body-5",
    "name": "Salicylic Acid 2% Smoothing Body Cleanser for Strawberry Legs & Acne",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1249,
    "discountPrice": 529,
    "ratings": 4.9,
    "numReviews": 198,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "body washes & scrubs",
      "acne wash",
      "body cleanser"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228852-6d35a585d566?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dermatologist-formulated gentle foaming wash unclogs rough keratosis pilaris bumps and clears backne blemishes."
  },
  {
    "_id": "prod-beauty-eye-1",
    "name": "24H Waterproof Matte Jet Black Precision Liquid Eyeliner Pen",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 899,
    "discountPrice": 349,
    "ratings": 4.9,
    "numReviews": 320,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "eyeliners & mascaras",
      "eyeliner",
      "liquid eyeliner",
      "eye makeup"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-fine 0.01mm Japanese felt tip glides smoothly to deliver intensely pigmented smudge-proof cat eye wings."
  },
  {
    "_id": "prod-beauty-eye-2",
    "name": "False Lash Effect Volumizing & Curling Fiber Waterproof Mascara",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1099,
    "discountPrice": 449,
    "ratings": 4.9,
    "numReviews": 280,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "eyeliners & mascaras",
      "mascara",
      "waterproof mascara"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hourglass silicone brush coats every tiny lash with micro-silk lengthening fibers without clumping or flaking."
  },
  {
    "_id": "prod-beauty-eye-3",
    "name": "Smudge-Proof Kohl Kajal Stick with Built-In Sharpener (Carbon Black)",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 699,
    "discountPrice": 279,
    "ratings": 4.8,
    "numReviews": 245,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "eyeliners & mascaras",
      "kajal",
      "kohl pencil"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Enriched with almond oil and Vitamin E, this creamy waterline-safe kajal lasts 16 hours without running."
  },
  {
    "_id": "prod-beauty-eye-4",
    "name": "Metallic Rose Gold & Copper Dual-Chrome Liquid Eyeshadow",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 4.8,
    "numReviews": 135,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "eyeliners & mascaras",
      "eyeshadow",
      "glitter eyeshadow"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "High-shine multi-reflective pearl pigment sets down to a crease-proof, all-night sparkling foil finish."
  },
  {
    "_id": "prod-beauty-eye-5",
    "name": "Micro-Blade Ultra-Fine Waterproof Eyebrow Definer Pencil",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 799,
    "discountPrice": 319,
    "ratings": 4.8,
    "numReviews": 170,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "eyeliners & mascaras",
      "eyebrow pencil",
      "brow definer"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Retractable 1.5mm precision tip creates realistic hair-like strokes with a built-in spoolie brush to blend."
  },
  {
    "_id": "prod-beauty-mask-1",
    "name": "French Pink Clay & Rose Water Pore Refining Clarifying Face Mask",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1199,
    "discountPrice": 499,
    "ratings": 4.9,
    "numReviews": 260,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "face packs & masks",
      "face mask",
      "clay mask",
      "pore refining"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Mineral-packed Kaolin clay detoxifies impurities from deep inside congested pores without drying out sensitive skin."
  },
  {
    "_id": "prod-beauty-mask-2",
    "name": "Hyaluronic Acid & Centella Asiatica Hydrating Biodegradable Sheet Masks (Pack of 5)",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 999,
    "discountPrice": 399,
    "ratings": 4.9,
    "numReviews": 315,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "face packs & masks",
      "sheet masks",
      "sheet mask pack",
      "hydrating mask"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Drenched in 25ml multi-molecular hydrating serum, these 100% natural eucalyptus fiber masks deliver instant glass skin glow."
  },
  {
    "_id": "prod-beauty-mask-3",
    "name": "Activated Bamboo Charcoal Peel-Off Blackhead Remover Mask",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 899,
    "discountPrice": 349,
    "ratings": 4.7,
    "numReviews": 185,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "face packs & masks",
      "peel off mask",
      "blackhead mask"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228852-6d35a585d566?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Magnetizes and strips away stubborn nose blackheads, dead sebum plugs, and pollution grime in one gentle peel."
  },
  {
    "_id": "prod-beauty-mask-4",
    "name": "Turmeric Haldi & Chandan Glowing Ubtan Ayurvedic Face Pack",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1049,
    "discountPrice": 429,
    "ratings": 4.8,
    "numReviews": 220,
    "isFeatured": true,
    "tags": [
      "beauty",
      "beauty & personal care",
      "face packs & masks",
      "ubtan mask",
      "turmeric face pack"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Time-tested wedding glow formulation with pure sandalwood powder, saffron threads, and chickpea flour to fade tanning."
  },
  {
    "_id": "prod-beauty-mask-5",
    "name": "Matcha Green Tea & Vitamin E Anti-Aging Overnight Sleeping Mask",
    "brand": "ZYRIVO BEAUTY",
    "category": {
      "name": "Beauty & Personal Care",
      "slug": "beauty-personal-care"
    },
    "price": 1299,
    "discountPrice": 549,
    "ratings": 4.8,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "beauty",
      "beauty & personal care",
      "face packs & masks",
      "sleeping mask",
      "overnight mask"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Pillow-safe gel sleeping pack that replenishes moisture barriers and repairs oxidative stress while you slumber."
  },
  {
    "_id": "prod-bags-hobo-1",
    "name": "Slouchy Soft Pebbled Vegan Leather Crescent Hobo Bag",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3899,
    "discountPrice": 1599,
    "ratings": 4.9,
    "numReviews": 185,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "shoulder & hobo bags",
      "hobo bag",
      "shoulder bag",
      "leather bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Generously proportioned relaxed slouch silhouette with wide ergonomic shoulder strap and magnetic snap closure."
  },
  {
    "_id": "prod-bags-hobo-2",
    "name": "Structured Saddle Vegan Leather Shoulder Flap Handbag",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3499,
    "discountPrice": 1449,
    "ratings": 4.8,
    "numReviews": 120,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "shoulder & hobo bags",
      "saddle bag",
      "shoulder bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Clean curved contours with burnished edge staining and adjustable shoulder strap for day-to-night versatility."
  },
  {
    "_id": "prod-bags-hobo-3",
    "name": "Minimalist 90s Baguette Shoulder Bag with Croc Texture",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 2999,
    "discountPrice": 1199,
    "ratings": 4.9,
    "numReviews": 140,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "shoulder & hobo bags",
      "baguette bag",
      "croc bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Chic underarm short-strap baguette silhouette finished in high-gloss embossed mock-croc vegan leather."
  },
  {
    "_id": "prod-bags-hobo-4",
    "name": "Vintage Tan Braided Handle Leather Slouch Shoulder Tote",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4199,
    "discountPrice": 1749,
    "ratings": 4.8,
    "numReviews": 96,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "shoulder & hobo bags",
      "tan bag",
      "braided handle"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hand-braided tubular shoulder straps with deep interior multi-pockets and secure zipper top compartment."
  },
  {
    "_id": "prod-bags-hobo-5",
    "name": "Crescent Moon Half-Circle Minimalist Shoulder Bag (Black)",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3299,
    "discountPrice": 1349,
    "ratings": 4.8,
    "numReviews": 115,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "shoulder & hobo bags",
      "crescent bag",
      "black shoulder bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sculptural curved geometry in smooth matte finish with polished golden zipper pull and tonal fabric lining."
  },
  {
    "_id": "prod-bags-satchel-1",
    "name": "Signature Diamond Quilted Vegan Leather Top-Handle Satchel",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4499,
    "discountPrice": 1899,
    "ratings": 4.9,
    "numReviews": 210,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "quilted satchels & handbags",
      "satchel bag",
      "quilted bag",
      "handbag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Luxurious chevron quilted stitching with structured top grab handle, golden turn-lock clasp, and detachable sling."
  },
  {
    "_id": "prod-bags-satchel-2",
    "name": "Executive Trapeze Dual-Compartment Work Satchel Handbag",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4999,
    "discountPrice": 2099,
    "ratings": 4.9,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "quilted satchels & handbags",
      "work satchel",
      "office bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sleek wing silhouette with padded tablet sleeve, protective metal base studs, and center zippered security divider."
  },
  {
    "_id": "prod-bags-satchel-3",
    "name": "Vintage Doctor Bag Kiss-Lock Frame Leather Satchel",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 4299,
    "discountPrice": 1799,
    "ratings": 4.8,
    "numReviews": 98,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "quilted satchels & handbags",
      "doctor bag",
      "vintage satchel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Retro hinged frame opening provides panoramic visibility into the spacious microfiber-lined interior compartment."
  },
  {
    "_id": "prod-bags-satchel-4",
    "name": "Petite Boston Barrel Duffle Handbag with Chain Accent",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3699,
    "discountPrice": 1549,
    "ratings": 4.7,
    "numReviews": 84,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "quilted satchels & handbags",
      "boston bag",
      "barrel bag"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Compact cylindrical silhouette with chunky golden Cuban chain ornament and dual-direction glide metal zippers."
  },
  {
    "_id": "prod-bags-satchel-5",
    "name": "Colorblock Structured Vegan Leather Accordion Satchel",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 3999,
    "discountPrice": 1699,
    "ratings": 4.8,
    "numReviews": 120,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "quilted satchels & handbags",
      "colorblock bag",
      "accordion satchel"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Tri-tone ivory, camel, and espresso accordion gussets that expand to hold all daily cosmetics and accessories."
  },
  {
    "_id": "prod-bags-wallet-1",
    "name": "Genuine Leather RFID Blocking Zip-Around Continental Wallet",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 2499,
    "discountPrice": 999,
    "ratings": 4.9,
    "numReviews": 240,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "rfid wallets & wristlets",
      "wallet",
      "leather wallet",
      "rfid wallet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Equipped with 12 card slots, full-length cash slots, zippered coin pouch, and certified 13.56 MHz RFID signal shield."
  },
  {
    "_id": "prod-bags-wallet-2",
    "name": "Men Slim Bifold Genuine Leather Card Holder with Money Clip",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 1799,
    "discountPrice": 699,
    "ratings": 4.8,
    "numReviews": 195,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "rfid wallets & wristlets",
      "men wallet",
      "money clip",
      "card holder"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Ultra-thin 0.4-inch front-pocket profile crafted from top-grain oil-waxed leather with stainless steel spring money clip."
  },
  {
    "_id": "prod-bags-wallet-3",
    "name": "Women Detachable Wristlet Strap Multi-Card Clutch Wallet",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 1999,
    "discountPrice": 799,
    "ratings": 4.9,
    "numReviews": 160,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "rfid wallets & wristlets",
      "wristlet",
      "clutch wallet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Convenient wrist loop lets you carry your phone, cards, and keys hands-free for quick errands or night outings."
  },
  {
    "_id": "prod-bags-wallet-4",
    "name": "Minimalist Aluminum Pop-Up Quick-Access RFID Cardholder",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 1599,
    "discountPrice": 649,
    "ratings": 4.7,
    "numReviews": 130,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "rfid wallets & wristlets",
      "pop up wallet",
      "aluminum cardholder"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Patented mechanical bottom trigger fans out your credit cards sequentially for seamless one-handed payment."
  },
  {
    "_id": "prod-bags-wallet-5",
    "name": "Textured Saffiano Leather Trifold Compact Coin Wallet",
    "brand": "ZYRIVO LEATHER",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 1899,
    "discountPrice": 749,
    "ratings": 4.8,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "rfid wallets & wristlets",
      "trifold wallet",
      "saffiano wallet"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Scratch-resistant cross-hatch Saffiano coating with snap-button flap coin compartment and transparent ID window."
  },
  {
    "_id": "prod-bags-trolley-1",
    "name": "Unbreakable Polycarbonate 20-Inch Cabin Carry-On Trolley Suitcase",
    "brand": "ZYRIVO TRAVEL",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 6999,
    "discountPrice": 2899,
    "ratings": 4.9,
    "numReviews": 290,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "cabin trolley suitcases",
      "trolley bag",
      "suitcase",
      "cabin luggage",
      "travel luggage"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "100% virgin Bayer Makrolon polycarbonate hard shell with 360° whisper-quiet dual spinner wheels and TSA lock."
  },
  {
    "_id": "prod-bags-trolley-2",
    "name": "Aluminum Frame Corner Guard Expandable Check-In Suitcase (24-Inch)",
    "brand": "ZYRIVO TRAVEL",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 8999,
    "discountPrice": 3799,
    "ratings": 4.9,
    "numReviews": 180,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "cabin trolley suitcases",
      "check in luggage",
      "trolley suitcase"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Reinforced aviation-grade aluminum bumper corners and heavy-duty puncture-resistant YKK explosion-proof zippers."
  },
  {
    "_id": "prod-bags-trolley-3",
    "name": "Matte Gunmetal USB Charging Port Smart Cabin Trolley Bag",
    "brand": "ZYRIVO TRAVEL",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 7499,
    "discountPrice": 3199,
    "ratings": 4.8,
    "numReviews": 145,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "cabin trolley suitcases",
      "smart luggage",
      "usb trolley"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "External USB power bank pass-through port with quick-access front laptop sleeve and multi-stage telescopic handle."
  },
  {
    "_id": "prod-bags-trolley-4",
    "name": "Pastel Mint Featherweight 3-Piece Complete Luggage Set",
    "brand": "ZYRIVO TRAVEL",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 14999,
    "discountPrice": 6299,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "bags",
      "bag",
      "cabin trolley suitcases",
      "luggage set",
      "trolley set"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Nesting 20-inch cabin, 24-inch medium, and 28-inch large suitcases crafted from textured anti-scratch ABS."
  },
  {
    "_id": "prod-bags-trolley-5",
    "name": "Waterproof Ballistic Nylon Softside Multi-Pocket Business Trolley",
    "brand": "ZYRIVO TRAVEL",
    "category": {
      "name": "Bags & Leather",
      "slug": "bags-leather"
    },
    "price": 6499,
    "discountPrice": 2699,
    "ratings": 4.7,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "bags",
      "bag",
      "cabin trolley suitcases",
      "softside luggage",
      "business trolley"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Tough 1680D ballistic weave with padded front organizer pockets, garment suit hangers, and smooth inline skate wheels."
  },
  {
    "_id": "prod-shoes-running-1",
    "name": "Air Cushion Ultra-Responsive Mesh Athletic Running Shoes",
    "brand": "ZYRIVO SPORT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3999,
    "discountPrice": 1799,
    "ratings": 4.9,
    "numReviews": 320,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "athletic running shoes",
      "running shoes",
      "gym shoes",
      "sports shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Engineered breathable knit upper with nitrogen-infused midsole rebound foam that propels you through every stride."
  },
  {
    "_id": "prod-shoes-running-2",
    "name": "Carbon Plate Marathon Race Lightweight Breathable Road Shoes",
    "brand": "ZYRIVO SPORT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4999,
    "discountPrice": 2199,
    "ratings": 4.9,
    "numReviews": 185,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "athletic running shoes",
      "marathon shoes",
      "running shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Full-length carbon fiber propulsion plate sandwiched between dual layers of ultra-light supercritical foam."
  },
  {
    "_id": "prod-shoes-running-3",
    "name": "High-Traction Trail Running Shoes with Reinforced Toe Guard",
    "brand": "ZYRIVO SPORT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4499,
    "discountPrice": 1949,
    "ratings": 4.8,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "athletic running shoes",
      "trail shoes",
      "hiking shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Aggressive 5mm multi-directional rubber lugs provide relentless grip on mud, rocks, and uneven loose gravel trails."
  },
  {
    "_id": "prod-shoes-running-4",
    "name": "All-Day Cloud Comfort Slip-On Walking & Gym Fitness Shoes",
    "brand": "ZYRIVO SPORT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 2999,
    "discountPrice": 1299,
    "ratings": 4.8,
    "numReviews": 260,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "athletic running shoes",
      "walking shoes",
      "slip on shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Sock-like stretchy collar with memory foam insole arch support designed for 10,000+ daily standing steps."
  },
  {
    "_id": "prod-shoes-running-5",
    "name": "Cross-Training Weightlifting Flat Stable Rubber Sole Shoes",
    "brand": "ZYRIVO SPORT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3699,
    "discountPrice": 1599,
    "ratings": 4.7,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "athletic running shoes",
      "training shoes",
      "gym sneakers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Zero-drop wide toe box platform with lateral TPU sidewall wraps for heavy squatting and deadlift stability."
  },
  {
    "_id": "prod-shoes-loafer-1",
    "name": "Hand-Burnished Italian Suede Penny Loafers with Leather Sole",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4999,
    "discountPrice": 2199,
    "ratings": 4.9,
    "numReviews": 175,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "suede penny loafers",
      "loafers",
      "penny loafers",
      "suede shoes"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Velvety genuine calfskin suede with traditional saddle strap slot and Blake-stitched stacked leather sole."
  },
  {
    "_id": "prod-shoes-loafer-2",
    "name": "Classic Tassel Slip-On Dress Loafers in Espresso Suede",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4699,
    "discountPrice": 2049,
    "ratings": 4.8,
    "numReviews": 130,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "suede penny loafers",
      "tassel loafers",
      "dress loafers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Dual fringed swing tassels with hand-sewn apron stitching and cushioned anti-fatigue leather sock lining."
  },
  {
    "_id": "prod-shoes-loafer-3",
    "name": "Driving Moccasins with Pebble Rubber Gripper Outsole",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 3899,
    "discountPrice": 1699,
    "ratings": 4.8,
    "numReviews": 155,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "suede penny loafers",
      "driving shoes",
      "moccasins"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Flexible unlined glove-soft suede with wrap-around studded heel guards designed for pedal precision."
  },
  {
    "_id": "prod-shoes-loafer-4",
    "name": "Golden Horsebit Metal Buckle Suede Slip-On Loafers",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4899,
    "discountPrice": 2149,
    "ratings": 4.9,
    "numReviews": 110,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "suede penny loafers",
      "horsebit loafers",
      "luxury loafers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Gleaming antique brass horsebit bridge ornament accents this refined Italian Riviera-inspired slip-on."
  },
  {
    "_id": "prod-shoes-loafer-5",
    "name": "Chunky Lug Sole Modern Urban Suede Penny Loafers",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4499,
    "discountPrice": 1999,
    "ratings": 4.7,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "suede penny loafers",
      "lug sole loafers",
      "chunky loafers"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Bold 1.75-inch lightweight commando lug platform gives a contemporary high-fashion twist to the heritage silhouette."
  },
  {
    "_id": "prod-shoes-boots-1",
    "name": "Classic Tan Suede Pull-On Chelsea Boots with Crepe Sole",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5999,
    "discountPrice": 2699,
    "ratings": 4.9,
    "numReviews": 210,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "chelsea boots",
      "boots",
      "suede boots",
      "ankle boots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Supple English suede with elasticated ribbed side gores, woven finger pull tabs, and natural textured rubber crepe sole."
  },
  {
    "_id": "prod-shoes-boots-2",
    "name": "Polished Black Full-Grain Leather Formal Chelsea Boots",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 6499,
    "discountPrice": 2899,
    "ratings": 4.9,
    "numReviews": 185,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "chelsea boots",
      "black boots",
      "leather boots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Hand-waxed mirror-shine calfskin leather with Goodyear-welted construction for a sharp tailored silhouette under trousers."
  },
  {
    "_id": "prod-shoes-boots-3",
    "name": "Rugged Waxed Leather Lace-Up Combat Military Ankle Boots",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5799,
    "discountPrice": 2499,
    "ratings": 4.8,
    "numReviews": 140,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "chelsea boots",
      "combat boots",
      "lace up boots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Heavyweight pull-up oiled cowhide with speed lacing gunmetal eyelets, padded collar, and deep commando traction tread."
  },
  {
    "_id": "prod-shoes-boots-4",
    "name": "Rich Dark Brown Suede Chukka Desert Boots (3-Eyelet)",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 4999,
    "discountPrice": 2199,
    "ratings": 4.7,
    "numReviews": 95,
    "isFeatured": false,
    "tags": [
      "shoes",
      "footwear",
      "chelsea boots",
      "chukka boots",
      "desert boots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Timeless ankle-height three-eyelet chukka styling with breathable microfiber lining and shock-absorbing EVA wedge sole."
  },
  {
    "_id": "prod-shoes-boots-5",
    "name": "Women Chunky Block Heel Lug Sole Suede Chelsea Booties",
    "brand": "ZYRIVO CRAFT",
    "category": {
      "name": "Footwear & Sneakers",
      "slug": "footwear-sneakers"
    },
    "price": 5499,
    "discountPrice": 2399,
    "ratings": 4.9,
    "numReviews": 160,
    "isFeatured": true,
    "tags": [
      "shoes",
      "footwear",
      "chelsea boots",
      "women booties",
      "heel boots"
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop"
      }
    ],
    "description": "Modern 2.5-inch block heel combined with deep tread platform lug sole and flexible stretch side goring."
  }
];

