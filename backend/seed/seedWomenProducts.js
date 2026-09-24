const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');
const Product = require('../models/Product');

dotenv.config();

const seedWomen = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ZYRIVO';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for Women products seeding...');

    // 1. Create or Find Women Categories
    const categoriesData = [
      {
        name: 'Women Ethnic Wear',
        slug: 'women-ethnic-wear',
        description: 'Kurtas, Kurtis, Sarees, Lehengas and festive ethnic wear for women.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Women Western Wear',
        slug: 'women-western-wear',
        description: 'Dresses, Jumpsuits, Tops, Jeans, Trousers and Blazers for women.',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Women Footwear & Bags',
        slug: 'women-footwear-bags',
        description: 'Heels, flats, juttis, handbags, clutches and tote bags.',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Women Lingerie & Sleepwear',
        slug: 'women-lingerie-sleepwear',
        description: 'Bras, panties, satin nightsuits, loungewear and shapewear.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      },
    ];

    const categoryMap = {};
    for (const catData of categoriesData) {
      let cat = await Category.findOne({ slug: catData.slug });
      if (!cat) {
        cat = await Category.create(catData);
      }
      categoryMap[catData.slug] = cat._id;
    }
    console.log('Women Categories initialized.');

    // 2. Comprehensive Women Products List matching exact Navbar subcategories
    const womenProducts = [
      // ─── Ethnic Wear ───
      {
        name: 'Embroidered Anarkali Kurta Set with Chiffon Dupatta',
        slug: 'embroidered-anarkali-kurta-set',
        description: 'Flowy Georgette Anarkali Kurta featuring intricate thread embroidery, matching churidar pants and a lightweight border dupatta.',
        price: 650,
        discountPrice: 369,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Ethnic',
        stock: 35,
        isFeatured: true,
        tags: ['women', 'ethnic', 'kurtas & kurtis', 'ethnic sets', 'anarkali'],
        images: [
          { url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' },
          { url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 42,
      },
      {
        name: 'Banarasi Art Silk Zari Woven Saree',
        slug: 'banarasi-art-silk-zari-saree',
        description: 'Traditional Banarasi weave with regal floral motifs, broad golden zari border and matching unstitched designer blouse piece.',
        price: 900,
        discountPrice: 569,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Heritage',
        stock: 25,
        isFeatured: true,
        tags: ['women', 'ethnic', 'sarees', 'silk saree', 'wedding'],
        images: [
          { url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop' },
          { url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.9,
        numReviews: 68,
      },
      {
        name: 'Floral Embroidered Semi-Stitched Lehenga Choli',
        slug: 'floral-embroidered-lehenga-choli',
        description: 'Stunning festive lehenga with sequin embellishments, flared silhouette, padded choli blouse and sheer net dupatta.',
        price: 1250,
        discountPrice: 769,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Couture',
        stock: 18,
        isFeatured: true,
        tags: ['women', 'ethnic', 'lehengas & cholis', 'partywear', 'lehenga'],
        images: [
          { url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop' },
          { url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.9,
        numReviews: 31,
      },
      {
        name: 'Handcrafted Lucknowi Chikankari Georgette Kurti',
        slug: 'lucknowi-chikankari-georgette-kurti',
        description: 'Authentic handcrafted Chikankari needlework on premium georgette fabric with matching inner slip. Elegant and breathable.',
        price: 1850,
        discountPrice: 1099,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Ethnic',
        stock: 45,
        isFeatured: false,
        tags: ['women', 'ethnic', 'kurtas & kurtis', 'chikankari', 'summer'],
        images: [
          { url: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.7,
        numReviews: 54,
      },
      {
        name: 'Handwoven Chanderi Zari Dupatta with Tassels',
        slug: 'handwoven-chanderi-zari-dupatta',
        description: 'Lustrous Chanderi silk blend dupatta adorned with traditional zari border and hand-tied corner tassels.',
        price: 2000,
        discountPrice: 1249,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Heritage',
        stock: 40,
        isFeatured: false,
        tags: ['women', 'ethnic', 'dupattas & shawls', 'dupatta'],
        images: [
          { url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.6,
        numReviews: 22,
      },
      {
        name: 'Pure Cotton Floral Print Kurta with Palazzos',
        slug: 'pure-cotton-floral-kurta-palazzo-set',
        description: 'Everyday comfortable 100% breathable cotton straight-fit kurta paired with flared palazzo pants featuring pocket details.',
        price: 350,
        discountPrice: 239,
        category: categoryMap['women-ethnic-wear'],
        brand: 'ZYRIVO Daily',
        stock: 60,
        isFeatured: false,
        tags: ['women', 'ethnic', 'kurtas & kurtis', 'ethnic sets', 'cotton'],
        images: [
          { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.5,
        numReviews: 87,
      },

      // ─── Western Wear ───
      {
        name: 'Floral Print Tiered Georgette Maxi Dress',
        slug: 'floral-print-tiered-maxi-dress',
        description: 'Vibrant botanical print maxi dress with sweetheart neckline, smocked back and tiered A-line skirt. Ideal for brunch or vacations.',
        price: 700,
        discountPrice: 439,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Studio',
        stock: 30,
        isFeatured: true,
        tags: ['women', 'western', 'dresses & jumpsuits', 'maxi dress', 'floral'],
        images: [
          { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' },
          { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 53,
      },
      {
        name: 'High-Rise Vintage Wide Leg Denim Jeans',
        slug: 'high-rise-vintage-wide-leg-jeans',
        description: 'Classic 5-pocket high-waisted denim crafted from premium stretch cotton denim with authentic washed finish.',
        price: 1050,
        discountPrice: 639,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Denim',
        stock: 50,
        isFeatured: true,
        tags: ['women', 'western', 'jeans & jeggings', 'denim', 'pants'],
        images: [
          { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.7,
        numReviews: 76,
      },
      {
        name: 'Ribbed Knit Bodycon Midi Dress',
        slug: 'ribbed-knit-bodycon-midi-dress',
        description: 'Form-flattering stretch ribbed knit midi dress with side slit detail. Effortlessly versatile for day to evening styling.',
        price: 1450,
        discountPrice: 839,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Studio',
        stock: 35,
        isFeatured: false,
        tags: ['women', 'western', 'dresses & jumpsuits', 'bodycon', 'midi dress'],
        images: [
          { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.6,
        numReviews: 39,
      },
      {
        name: 'Tailored Double-Breasted Formal Blazer',
        slug: 'tailored-double-breasted-blazer',
        description: 'Sharp tailored blazer featuring peaked lapels, structured shoulder padding, gold button accents, and twin flap pockets.',
        price: 1800,
        discountPrice: 1039,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Workwear',
        stock: 20,
        isFeatured: true,
        tags: ['women', 'western', 'blazers & jackets', 'formal', 'blazer'],
        images: [
          { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 45,
      },
      {
        name: 'Satin V-Neck Ruched Wrap Blouse',
        slug: 'satin-v-neck-ruched-wrap-blouse',
        description: 'Lustrous satin wrap blouse with cuffed bishop sleeves and flattering wrap waist tie. Luxe and sophisticated.',
        price: 550,
        discountPrice: 299,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Studio',
        stock: 40,
        isFeatured: false,
        tags: ['women', 'western', 'tops & t-shirts', 'satin top', 'shirts'],
        images: [
          { url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.6,
        numReviews: 28,
      },
      {
        name: 'Pleated High-Waisted Straight Trousers',
        slug: 'pleated-high-waisted-trousers',
        description: 'Elegant tailored formal trousers with front pleats, slant pockets, and a clean belt loop waistband.',
        price: 750,
        discountPrice: 499,
        category: categoryMap['women-western-wear'],
        brand: 'ZYRIVO Workwear',
        stock: 30,
        isFeatured: false,
        tags: ['women', 'western', 'trousers & pants', 'pants', 'formal'],
        images: [
          { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.7,
        numReviews: 33,
      },

      // ─── Footwear & Bags ───
      {
        name: 'Handcrafted Kolhapuri Block Heel Sandals',
        slug: 'handcrafted-kolhapuri-block-heels',
        description: 'Traditional Kolhapuri toe loop design combined with a comfortable 2.5-inch block heel and cushioned memory foam insole.',
        price: 1150,
        discountPrice: 699,
        category: categoryMap['women-footwear-bags'],
        brand: 'ZYRIVO Steps',
        stock: 45,
        isFeatured: true,
        tags: ['women', 'footwear', 'flats & sandals', 'heels & wedges', 'sandals'],
        images: [
          { url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 61,
      },
      {
        name: 'Quilted Chain Strap Crossbody Handbag',
        slug: 'quilted-chain-crossbody-bag',
        description: 'Premium vegan leather with elegant diamond quilting, gold-tone twist-lock closure, and dual compartment interior.',
        price: 1550,
        discountPrice: 899,
        category: categoryMap['women-footwear-bags'],
        brand: 'ZYRIVO Bags',
        stock: 30,
        isFeatured: true,
        tags: ['women', 'bags', 'handbags & clutches', 'crossbody', 'handbag'],
        images: [
          { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.9,
        numReviews: 84,
      },
      {
        name: 'Pointed-Toe Classic Stiletto Pumps',
        slug: 'pointed-toe-classic-stiletto-pumps',
        description: 'Sleek 3-inch stiletto heels with anti-skid rubber sole and padded footbed for all-evening elegance and comfort.',
        price: 2100,
        discountPrice: 1299,
        category: categoryMap['women-footwear-bags'],
        brand: 'ZYRIVO Steps',
        stock: 25,
        isFeatured: false,
        tags: ['women', 'footwear', 'heels & wedges', 'pumps', 'party shoes'],
        images: [
          { url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.6,
        numReviews: 40,
      },
      {
        name: 'Structured Canvas & Vegan Leather Tote Bag',
        slug: 'structured-canvas-leather-tote',
        description: 'Spacious everyday tote bag with laptop sleeve, inner zippered pouch, and reinforced dual shoulder straps.',
        price: 300,
        discountPrice: 199,
        category: categoryMap['women-footwear-bags'],
        brand: 'ZYRIVO Bags',
        stock: 35,
        isFeatured: false,
        tags: ['women', 'bags', 'tote bags', 'canvas tote', 'laptop bag'],
        images: [
          { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.7,
        numReviews: 52,
      },
      {
        name: 'Embroidered Punjabi Juttis with Zardozi Work',
        slug: 'embroidered-punjabi-juttis',
        description: 'Pure genuine leather sole Punjabi juttis accented with genuine zari and mirror embroidery. Zero bite and cushioned.',
        price: 650,
        discountPrice: 399,
        category: categoryMap['women-footwear-bags'],
        brand: 'ZYRIVO Steps',
        stock: 40,
        isFeatured: false,
        tags: ['women', 'footwear', 'flats & sandals', 'juttis', 'casual shoes'],
        images: [
          { url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 38,
      },

      // ─── Lingerie & Sleepwear ───
      {
        name: 'Seamless Lightly Padded Wirefree T-Shirt Bra',
        slug: 'seamless-wirefree-t-shirt-bra',
        description: 'Super-soft microfiber stretch fabric with invisible edges under clothing, breathable cups, and adjustable multiway straps.',
        price: 1000,
        discountPrice: 599,
        category: categoryMap['women-lingerie-sleepwear'],
        brand: 'ZYRIVO Intimates',
        stock: 60,
        isFeatured: false,
        tags: ['women', 'lingerie', 'bras & panties', 'bra', 'innerwear'],
        images: [
          { url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.7,
        numReviews: 95,
      },
      {
        name: 'Pure Satin Silk Notch Collar 2-Piece Nightsuit Set',
        slug: 'pure-satin-silk-nightsuit-set',
        description: 'Ultra-luxurious satin button-down sleep shirt with chest pocket and contrast piping paired with elasticated waist pajama pants.',
        price: 400,
        discountPrice: 249,
        category: categoryMap['women-lingerie-sleepwear'],
        brand: 'ZYRIVO Sleep',
        stock: 35,
        isFeatured: true,
        tags: ['women', 'sleepwear', 'nightsuits & pajamas', 'nightsuit', 'satin'],
        images: [
          { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.9,
        numReviews: 73,
      },
      {
        name: 'Ribbed Cotton Knit Loungewear Co-ord Set',
        slug: 'ribbed-cotton-knit-loungewear-set',
        description: 'Relaxed drop-shoulder lounge top with drawstring joggers in breathable, soft combed cotton for lazy weekends and work from home.',
        price: 1400,
        discountPrice: 799,
        category: categoryMap['women-lingerie-sleepwear'],
        brand: 'ZYRIVO Sleep',
        stock: 40,
        isFeatured: false,
        tags: ['women', 'sleepwear', 'loungewear', 'coord set'],
        images: [
          { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.8,
        numReviews: 46,
      },
      {
        name: 'High-Waist Tummy Control Seamless Shapewear',
        slug: 'high-waist-seamless-shapewear',
        description: 'Medium-to-firm control body shaper with non-slip silicone waistband to smooth waistline, hips, and tummy seamlessly.',
        price: 650,
        discountPrice: 349,
        category: categoryMap['women-lingerie-sleepwear'],
        brand: 'ZYRIVO Intimates',
        stock: 50,
        isFeatured: false,
        tags: ['women', 'lingerie', 'shapewear', 'bras & panties'],
        images: [
          { url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop' },
        ],
        ratings: 4.6,
        numReviews: 64,
      },
    ];

    for (const prod of womenProducts) {
      await Product.findOneAndUpdate({ slug: prod.slug }, prod, {
        upsert: true,
        new: true,
      });
    }

    console.log(`Successfully seeded ${womenProducts.length} Women products!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding women products:', error);
    process.exit(1);
  }
};

seedWomen();


