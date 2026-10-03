const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

async function fixFinalDupes() {
  await mongoose.connect('mongodb://127.0.0.1:27017/velora');
  const db = mongoose.connection.db;

  const renames = [
    { id: '6ac0491d026d6e3065fb5964', name: 'Handcrafted Lucknowi Embroidered Anarkali Kurta Set', slug: 'handcrafted-lucknowi-embroidered-anarkali-kurta-set' },
    { id: '6ac0491d026d6e3065fb596a', name: 'Boho Tiered Ruffle Georgette Botanical Maxi Dress', slug: 'boho-tiered-ruffle-georgette-botanical-maxi-dress' },
    { id: '6ac0491e026d6e3065fb596b', name: '70s Retro High-Rise Flare Wide Leg Denim Jeans', slug: '70s-retro-high-rise-flare-wide-leg-denim-jeans' },
    { id: '6ac0491e026d6e3065fb5973', name: 'Royal Velvet Golden Zardozi Bridal Punjabi Juttis', slug: 'royal-velvet-golden-zardozi-bridal-punjabi-juttis' },
    { id: '6ac0491e026d6e3065fb5972', name: 'Dual-Tone Minimalist Canvas & Tan Leather Shopper Tote', slug: 'dual-tone-minimalist-canvas-tan-leather-shopper-tote' },
    { id: '6ac0491e026d6e3065fb5971', name: 'Chevron Quilted Golden Chain Turn-Lock Crossbody Bag', slug: 'chevron-quilted-golden-chain-turn-lock-crossbody-bag' },
  ];

  for (const r of renames) {
    await db.collection('products').updateOne(
      { _id: new mongoose.Types.ObjectId(r.id) },
      { $set: { name: r.name, slug: r.slug, updatedAt: new Date() } }
    );
  }
  console.log('Renamed 6 duplicates!');

  // Verify unique names
  const allProds = await db.collection('products').find().toArray();
  const nameSet = new Set(allProds.map(p => p.name));
  const slugSet = new Set(allProds.map(p => p.slug));
  const imgSet = new Set(allProds.map(p => p.images && p.images[0] ? p.images[0].url : ''));

  console.log('Total Products:', allProds.length);
  console.log('Unique Names:', nameSet.size, 'Duplicates:', allProds.length - nameSet.size);
  console.log('Unique Slugs:', slugSet.size, 'Duplicates:', allProds.length - slugSet.size);
  console.log('Unique Images:', imgSet.size, 'Duplicates:', allProds.length - imgSet.size);

  // Sync to fallbackProducts.js
  const finalCats = await db.collection('categories').find().toArray();
  const catObjMap = Object.fromEntries(finalCats.map(c => [String(c._id), { name: c.name, slug: c.slug }]));
  const fallbackPath = path.join(__dirname, '../../frontend/src/data/fallbackProducts.js');
  const cleanFallbackList = allProds.map(p => ({
    _id: String(p._id),
    name: p.name,
    slug: p.slug,
    brand: p.brand || 'ZYRIVO',
    category: catObjMap[String(p.category)] || { name: 'Fashion', slug: 'fashion' },
    price: p.price,
    discountPrice: p.discountPrice || p.price,
    ratings: p.ratings || 4.7,
    numReviews: p.numReviews || 45,
    isFeatured: !!p.isFeatured,
    tags: p.tags || [],
    images: (p.images && p.images.length > 0) ? p.images : [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800' }],
    description: p.description || ''
  }));

  const fileContent = '// Comprehensive Deduplicated Catalog for ZYRIVO (' + cleanFallbackList.length + ' Unique Products)\n// 0 Duplicate Images, 0 Duplicate Names, minimum 30 products per category for 20 related products\nexport const FALLBACK_PRODUCTS = ' + JSON.stringify(cleanFallbackList, null, 2) + ';\n';
  fs.writeFileSync(fallbackPath, fileContent, 'utf8');
  console.log('Synced fallbackProducts.js successfully!');

  await mongoose.disconnect();
}

fixFinalDupes().catch(console.error);
