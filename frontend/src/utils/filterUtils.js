/**
 * MEESHO-STYLE STRICT SEMANTIC FILTERING
 * Provides exact 5-item precision for every subcategory in Women Ethnic and Women Western,
 * full catalog retrieval for parent categories, and clean keyword matching.
 */
export const matchProduct = (item, queryOrCategory) => {
  if (!queryOrCategory || queryOrCategory === 'all') return true;

  const q = queryOrCategory.toLowerCase().trim();
  const name = (item.name || '').toLowerCase();
  const desc = (item.description || '').toLowerCase();
  const brand = (item.brand || '').toLowerCase();
  const catName = (item.category?.name || '').toLowerCase();
  const catSlug = (item.category?.slug || '').toLowerCase();
  const tags = (Array.isArray(item.tags) ? item.tags : []).map((t) => String(t).toLowerCase());

  // ═════════════════════════════════════════════════════════════
  // A. WOMEN ETHNIC SUBCATEGORIES (Exact 5 Products Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Anarkali Kurta Sets
  if (['anarkali kurta sets', 'anarkali', 'anarkali suits', 'anarkali set', 'anarkalis'].includes(q)) {
    return tags.includes('anarkali kurta sets');
  }

  // 2. Chikankari Kurtis
  if (['chikankari kurtis', 'chikankari', 'chikankari kurti', 'lucknowi chikankari'].includes(q)) {
    return tags.includes('chikankari kurtis');
  }

  // 3. Cotton Daily Kurtas
  if (['cotton daily kurtas', 'cotton daily', 'daily kurtas', 'daily wear kurtas'].includes(q)) {
    return tags.includes('cotton daily kurtas');
  }

  // 4. Ethnic Co-ord Sets
  if (['ethnic co-ord sets', 'ethnic co-ord', 'ethnic coord', 'ethnic sets', 'ethnic co ord', 'coord sets'].includes(q)) {
    return tags.includes('ethnic co-ord sets');
  }

  // 5. Kurtas & Kurtis (Standard / General category)
  if (['kurtas & kurtis', 'kurtas and kurtis'].includes(q)) {
    return tags.includes('kurtas & kurtis') && !tags.includes('anarkali kurta sets') && !tags.includes('chikankari kurtis') && !tags.includes('cotton daily kurtas') && !tags.includes('ethnic co-ord sets');
  }

  // 6. Banarasi Silk Sarees
  if (['banarasi silk sarees', 'banarasi sarees', 'banarasi', 'banarasi saree'].includes(q)) {
    return tags.includes('banarasi silk sarees');
  }

  // 7. Georgette Printed Sarees
  if (['georgette printed sarees', 'georgette sarees', 'printed sarees', 'georgette saree', 'printed saree'].includes(q)) {
    return tags.includes('georgette printed sarees');
  }

  // 8. Lehengas & Cholis
  if (['lehengas & cholis', 'lehengas and cholis', 'lehengas', 'lehenga', 'lehenga choli', 'cholis'].includes(q)) {
    return tags.includes('lehengas & cholis');
  }

  // 9. Dupattas & Shawls
  if (['dupattas & shawls', 'dupattas and shawls', 'dupatta', 'dupattas', 'shawl', 'shawls', 'pashmina'].includes(q)) {
    return tags.includes('dupattas & shawls');
  }

  // 10. Sarees (General Sarees item from Navbar: gives all sarees)
  if (['sarees', 'saree', 'saris', 'sari', 'silk saree'].includes(q)) {
    return tags.includes('sarees') || tags.includes('banarasi silk sarees') || tags.includes('georgette printed sarees');
  }

  // General kurti/kurta search query
  if (['kurti', 'kurtis', 'kurta', 'kurtas'].includes(q)) {
    return tags.some((t) => ['kurtas & kurtis', 'kurti', 'kurta', 'anarkali', 'chikankari', 'cotton daily kurtas'].includes(t)) ||
      /\b(kurti|kurtis|kurta|kurtas|anarkali|chikankari)\b/i.test(name);
  }

  // ═════════════════════════════════════════════════════════════
  // B. WOMEN WESTERN SUBCATEGORIES (Exact 5 Products Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Tops & Blouses
  if (['tops & blouses', 'tops and blouses', 'blouse', 'blouses'].includes(q)) {
    return tags.includes('tops & blouses');
  }

  // 2. Crop Tops
  if (['crop tops', 'crop top', 'cropped tops', 'crop'].includes(q)) {
    return tags.includes('crop tops');
  }

  // 3. Floral Peplum Tops
  if (['floral peplum tops', 'peplum tops', 'peplum top', 'peplum', 'floral peplum'].includes(q)) {
    return tags.includes('floral peplum tops');
  }

  // 4. Casual Tunics
  if (['casual tunics', 'tunics', 'tunic', 'tunic top', 'tunic tops'].includes(q)) {
    return tags.includes('casual tunics');
  }

  // 5. T-Shirts (Women Western)
  if (['t-shirts', 't-shirt', 'tshirt', 'tshirts', 'tees', 'tee'].includes(q)) {
    return tags.includes('t-shirts') && catSlug === 'women-western-wear';
  }

  // 6. Tops & T-Shirts (Combined Navbar Header)
  if (['tops & t-shirts', 'tops and t-shirts'].includes(q)) {
    return catSlug === 'women-western-wear' && (tags.includes('tops & blouses') || tags.includes('t-shirts') || tags.includes('crop tops') || tags.includes('floral peplum tops') || tags.includes('casual tunics'));
  }

  // 7. Dresses & Jumpsuits
  if (['dresses & jumpsuits', 'dresses and jumpsuits', 'jumpsuits', 'jumpsuit'].includes(q)) {
    return tags.includes('dresses & jumpsuits');
  }

  // 8. Floral Maxi Dresses
  if (['floral maxi dresses', 'maxi dresses', 'maxi dress', 'floral maxi', 'maxi'].includes(q)) {
    return tags.includes('floral maxi dresses');
  }

  // 9. Denim Jeans (Women Western)
  if (['denim jeans', 'jeans', 'denim', 'jeans & jeggings'].includes(q)) {
    return tags.includes('denim jeans') && catSlug === 'women-western-wear';
  }

  // 10. Formal Trousers (Exact 5 Women Western)
  if (['formal trousers', 'trousers', 'trouser', 'formal pants', 'work trousers'].includes(q)) {
    return tags.includes('formal trousers') && catSlug === 'women-western-wear' && !tags.includes('ethnic') && !name.includes('kurta');
  }

  // 11. Blazers & Jackets (Women Western, Exact 5)
  if (['blazers & jackets', 'blazers and jackets', 'blazer', 'blazers', 'jackets', 'jacket'].includes(q)) {
    return tags.includes('blazers & jackets') && catSlug === 'women-western-wear' && !name.includes('trench coat');
  }

  // General "Dresses & Bottoms"
  if (['dresses & bottoms'].includes(q)) {
    return catSlug === 'women-western-wear' && (tags.includes('dresses & jumpsuits') || tags.includes('floral maxi dresses') || tags.includes('denim jeans') || tags.includes('formal trousers') || tags.includes('blazers & jackets'));
  }

  // General "top" or "tops"
  if (['top', 'tops'].includes(q)) {
    const isBraOrLaptop = name.includes('bra') || tags.includes('bra') || name.includes('laptop');
    if (isBraOrLaptop) return false;
    return tags.some((t) => ['tops & blouses', 'crop tops', 'floral peplum tops', 'casual tunics', 'tops', 'top'].includes(t)) ||
      /\b(top|tops|blouse|tunic|peplum|crop top)\b/i.test(name);
  }

  // General "dress" or "dresses"
  if (['dress', 'dresses'].includes(q)) {
    return tags.some((t) => ['dresses & jumpsuits', 'floral maxi dresses', 'dress', 'dresses'].includes(t)) ||
      /\b(dress|dresses|jumpsuit|jumpsuits)\b/i.test(name);
  }

  // ═════════════════════════════════════════════════════════════
  // C. MEN SUBCATEGORIES (Exact 5 Products Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Men T-Shirts (Exact 5)
  if (['men t-shirts', 'men t-shirt', 'men tees', 'men tee'].includes(q)) {
    return tags.includes('men t-shirts') || (tags.includes('t-shirts') && catSlug === 'men-top-wear' && !tags.includes('polo t-shirts') && !tags.includes('oversized streetwear tees'));
  }

  // 2. Polo T-Shirts (Exact 5)
  if (['polo t-shirts', 'polo t-shirt', 'polo tshirts', 'polo tshirt', 'polo tee', 'polo', 'polos', 'pique polo'].includes(q)) {
    return tags.includes('polo t-shirts');
  }

  // 3. Oversized Streetwear Tees (Exact 5)
  if (['oversized streetwear tees', 'oversized streetwear', 'oversized tees', 'oversized tee', 'oversized t-shirt', 'streetwear tees', 'streetwear tee'].includes(q)) {
    return tags.includes('oversized streetwear tees');
  }

  // 4. Casual Linen Shirts (Exact 5)
  if (['casual linen shirts', 'casual linen shirt', 'linen shirts', 'linen shirt', 'casual linen', 'men linen shirt'].includes(q)) {
    return tags.includes('casual linen shirts');
  }

  // 5. Formal Shirts (Exact 5)
  if (['formal shirts', 'formal shirt', 'executive shirt', 'office shirts', 'men formal shirts'].includes(q)) {
    return tags.includes('formal shirts');
  }

  // 6. Men Denim Jeans (Exact 5)
  if (['men denim jeans', 'men denim', 'men jeans', 'men jean'].includes(q)) {
    return tags.includes('denim jeans') && (catSlug === 'men-bottom-wear' || tags.includes('men'));
  }

  // 7. Chinos & Trousers (Exact 5)
  if (['chinos & trousers', 'chinos and trousers', 'chinos', 'chino', 'chino pants', 'men trousers'].includes(q)) {
    return tags.includes('chinos & trousers');
  }

  // 8. Track Pants & Joggers (Exact 5)
  if (['track pants & joggers', 'track pants and joggers', 'track pants', 'joggers', 'jogger', 'sweatpants', 'track pant'].includes(q)) {
    return tags.includes('track pants & joggers');
  }

  // 9. Casual Sneakers (Exact 5)
  if (['casual sneakers', 'sneakers', 'sneaker', 'court sneakers', 'sports sneakers'].includes(q)) {
    return tags.includes('casual sneakers') || (tags.includes('sneakers') && catSlug === 'footwear-sneakers');
  }

  // 10. Derby Leather Shoes (Exact 5)
  if (['derby leather shoes', 'derby leather shoe', 'derby shoes', 'derby shoe', 'derby', 'derbies', 'formal derby shoes'].includes(q)) {
    return tags.includes('derby leather shoes');
  }

  // Top Wear (Men Header)
  if (['top wear', 'men top wear'].includes(q)) {
    return catSlug === 'men-top-wear';
  }

  // Bottoms & Footwear (Men Header)
  if (['bottoms & footwear', 'men bottoms & footwear', 'men bottom wear'].includes(q)) {
    return catSlug === 'men-bottom-wear' || (catSlug === 'footwear-sneakers' && tags.includes('men'));
  }

  // ═════════════════════════════════════════════════════════════
  // D. FOOTWEAR & BAGS SUBCATEGORIES (Exact 5 Products Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Heels & Pumps (Exact 5)
  if (['heels & pumps', 'heels and pumps', 'pumps', 'heels'].includes(q)) {
    return tags.includes('heels & pumps');
  }

  // 2. Flats & Sandals (Exact 5)
  if (['flats & sandals', 'flats and sandals', 'flats', 'sandals', 'flat sandals'].includes(q)) {
    return tags.includes('flats & sandals') && !tags.includes('juttis');
  }

  // 3. Punjabi Juttis (Exact 5)
  if (['punjabi juttis', 'punjabi jutti', 'juttis', 'jutti', 'mojari'].includes(q)) {
    return tags.includes('punjabi juttis');
  }

  // 4. Block Heel Sandals (Exact 5)
  if (['block heel sandals', 'block heel', 'block heels'].includes(q)) {
    return tags.includes('block heel sandals');
  }

  // 5. Party Stilettos (Exact 5)
  if (['party stilettos', 'stilettos', 'stiletto'].includes(q)) {
    return tags.includes('party stilettos');
  }

  // 6. Athletic Running & Gym Shoes (Exact 5)
  if (['athletic running shoes', 'running shoes', 'running shoe', 'gym shoes', 'sports shoes', 'marathon shoes'].includes(q)) {
    return tags.includes('athletic running shoes');
  }

  // 7. Suede Penny Loafers (Exact 5)
  if (['suede penny loafers', 'penny loafers', 'loafers', 'loafer', 'moccasins', 'driving shoes', 'horsebit loafers'].includes(q)) {
    return tags.includes('suede penny loafers');
  }

  // 8. Chelsea Boots & Ankle Boots (Exact 5)
  if (['chelsea boots', 'boots', 'boot', 'ankle boots', 'combat boots', 'chukka boots'].includes(q)) {
    return tags.includes('chelsea boots');
  }

  // 9. Tote Bags (Exact 5)
  if (['tote bags', 'tote bag', 'totes', 'tote'].includes(q)) {
    return tags.includes('tote bags') && !name.startsWith('structured canvas');
  }

  // 7. Crossbody Bags (Exact 5)
  if (['crossbody bags', 'crossbody bag', 'crossbody', 'sling bags'].includes(q)) {
    return tags.includes('crossbody bags');
  }

  // 8. Evening Party Clutches (Exact 5)
  if (['evening party clutches', 'party clutches', 'clutches', 'clutch'].includes(q)) {
    return tags.includes('evening party clutches');
  }

  // 9. Laptop Backpacks (Exact 5)
  if (['laptop backpacks', 'laptop backpack', 'backpacks', 'backpack', 'office backpacks'].includes(q)) {
    return tags.includes('laptop backpacks');
  }

  // 10. Leather Duffel Bags (Exact 5)
  if (['leather duffel bags', 'leather duffel', 'duffel bags', 'duffel bag', 'duffels', 'duffel', 'travel duffels'].includes(q)) {
    return tags.includes('leather duffel bags');
  }

  // 11. Leather Shoulder & Hobo Bags (Exact 5)
  if (['shoulder & hobo bags', 'shoulder bags', 'hobo bags', 'shoulder bag', 'hobo bag', 'leather shoulder bags', 'baguette bag'].includes(q)) {
    return tags.includes('shoulder & hobo bags');
  }

  // 12. Quilted Satchels & Handbags (Exact 5)
  if (['quilted satchels & handbags', 'quilted satchels', 'satchels', 'satchel', 'handbags', 'handbag', 'doctor bag', 'boston bag'].includes(q)) {
    return tags.includes('quilted satchels & handbags');
  }

  // 13. RFID Leather Wallets & Wristlets (Exact 5)
  if (['rfid wallets & wristlets', 'wallets & wristlets', 'wallets', 'wallet', 'rfid wallet', 'wristlet', 'wristlets', 'card holder'].includes(q)) {
    return tags.includes('rfid wallets & wristlets');
  }

  // 14. Hard-Shell Cabin Trolley Suitcases (Exact 5)
  if (['cabin trolley suitcases', 'trolley suitcases', 'trolley bags', 'trolley', 'suitcases', 'suitcase', 'cabin luggage', 'luggage', 'travel luggage'].includes(q)) {
    return tags.includes('cabin trolley suitcases');
  }

  // Footwear Parent (Navbar category - 50 items)
  if (['shoes', 'footwear', 'shoe', 'footwear & sneakers', 'women footwear', 'footwear & bags'].includes(q)) {
    return (
      catSlug === 'footwear-sneakers' ||
      (catSlug === 'women-footwear-bags' && (tags.includes('footwear') || tags.includes('heels') || tags.includes('flats') || tags.includes('juttis') || tags.includes('shoes'))) ||
      tags.includes('footwear') ||
      tags.includes('shoes')
    );
  }

  // Bags Parent (Navbar category - 50 items)
  if (['bags', 'bag', 'bags & leather', 'handbags & totes', 'backpacks & travel'].includes(q)) {
    return (
      catSlug === 'bags-leather' ||
      (catSlug === 'women-footwear-bags' && (tags.includes('bags') || tags.includes('bag') || tags.includes('tote') || tags.includes('crossbody') || tags.includes('clutch'))) ||
      tags.includes('bags') ||
      tags.includes('bag')
    );
  }

  // ═════════════════════════════════════════════════════════════
  // E. WATCHES & ACCESSORIES SUBCATEGORIES (10 Subcategories × 5 Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Chronograph Watches (Exact 5)
  if (['chronograph watches', 'chronograph watch', 'chronograph', 'chronos', 'chrono', 'aviation pilot watches'].includes(q)) {
    return tags.includes('chronograph watches');
  }

  // 2. Skeleton Automatic Watches (Exact 5)
  if (['skeleton automatic watches', 'automatic skeleton watches', 'skeleton watches', 'skeleton watch', 'automatic watches', 'automatic watch'].includes(q)) {
    return tags.includes('skeleton automatic watches');
  }

  // 3. Rose Gold & Minimalist Mesh Watches (Exact 5)
  if (['rose gold analog watches', 'minimalist mesh watches', 'rose gold watch', 'rose gold watches', 'mesh watch', 'mesh watches', 'analog watch', 'analog watches'].includes(q)) {
    return tags.includes('rose gold analog watches') || tags.includes('minimalist mesh watches');
  }

  // 4. Smartwatches (Exact 5)
  if (['smartwatches', 'smartwatch', 'smart watches', 'smart watch', 'fitness tracker', 'smart fitness watches'].includes(q)) {
    return tags.includes('smartwatches');
  }

  // 5. Polarized & Aviator Sunglasses (Exact 5)
  if (['polarized sunglasses', 'aviator sunglasses', 'sunglasses', 'sunglass', 'shades', 'aviators'].includes(q)) {
    return tags.includes('polarized sunglasses') || tags.includes('aviator sunglasses');
  }

  // 6. Minimalist Leather Strap Watches (Exact 5)
  if (['leather strap watches', 'leather strap watch', 'leather watches', 'minimalist leather watches'].includes(q)) {
    return tags.includes('leather strap watches');
  }

  // 7. Sports & Digital Shock Watches (Exact 5)
  if (['sports digital watches', 'sports watches', 'sports watch', 'digital watch', 'digital watches', 'shock watch'].includes(q)) {
    return tags.includes('sports digital watches');
  }

  // 8. Diamond Dial & Crystal Watches (Exact 5)
  if (['diamond dial watches', 'diamond dial watch', 'crystal watches', 'crystal watch', 'diamond watches'].includes(q)) {
    return tags.includes('diamond dial watches');
  }

  // 9. Vintage Octagonal & Square Watches (Exact 5)
  if (['vintage square watches', 'square watches', 'square watch', 'octagonal watch', 'tank watch'].includes(q)) {
    return tags.includes('vintage square watches');
  }

  // 10. Ceramic & Two-Tone Luxury Watches (Exact 5)
  if (['ceramic two tone watches', 'ceramic watches', 'ceramic watch', 'two tone watches', 'two tone watch'].includes(q)) {
    return tags.includes('ceramic two tone watches');
  }

  // Watches Parent (50 products)
  if (['watches', 'watch', 'watches & timepieces', 'luxury watches', 'luxury timepieces', 'eyewear & accessories'].includes(q)) {
    return catSlug === 'watches-timepieces' || tags.includes('watches') || tags.includes('watch') || tags.includes('sunglasses');
  }

  // ═════════════════════════════════════════════════════════════
  // F. KIDS FASHION & CARE SUBCATEGORIES (10 Subcategories × 5 Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Boys T-Shirts (Exact 5)
  if (['boys t-shirts', 'boys t-shirt', 'boys tees', 'boys tee', 'boys polo', 'boys graphic tees', 'cotton polo t-shirts'].includes(q)) {
    return tags.includes('boys t-shirts');
  }

  // 2. Boys Jeans & Joggers (Exact 5)
  if (['boys jeans', 'boys jean', 'boys joggers', 'boys cargo pants', 'boys pants', 'denim cargo joggers'].includes(q)) {
    return tags.includes('boys jeans');
  }

  // 3. Girls Frocks & Party Dresses (Exact 5)
  if (['girls frocks & dresses', 'girls frocks and dresses', 'girls frocks', 'girls frock', 'girls dresses', 'girls dress', 'frocks', 'party frocks & dresses', 'party ball gowns'].includes(q)) {
    return tags.includes('girls frocks & dresses');
  }

  // 4. Baby Rompers & Onesies (Exact 5)
  if (['baby rompers', 'baby romper', 'onesies', 'onesie', 'infant wear', 'baby sleepsuit', 'bodysuit', 'infant onesies', 'soft toys'].includes(q)) {
    return tags.includes('baby rompers');
  }

  // 5. Kids Sneakers & Footwear (Exact 5)
  if (['kids sneakers', 'kids sneaker', 'kids shoes', 'kids shoe', 'school shoes', 'velcro shoes', 'kids casual sneakers', 'kids casual shoes'].includes(q)) {
    return tags.includes('kids sneakers');
  }

  // 6. Girls Tops & Floral Skirts (Exact 5)
  if (['girls tops & skirts', 'girls tops', 'girls skirts', 'skirt set', 'girls tops and skirts'].includes(q)) {
    return tags.includes('girls tops & skirts');
  }

  // 7. Kids Ethnic Sherwani & Kurta Sets (Exact 5)
  if (['kids ethnic sets', 'kids ethnic', 'boys kurta', 'boys sherwani', 'dhoti kurta'].includes(q)) {
    return tags.includes('kids ethnic sets');
  }

  // 8. Girls Festive Lehengas (Exact 5)
  if (['girls festive lehengas', 'girls lehenga', 'kids lehenga', 'girls lehenga choli', 'lehenga choli'].includes(q)) {
    return tags.includes('girls festive lehengas');
  }

  // 9. Kids Winter Hoodies & Sweatshirts (Exact 5)
  if (['kids winter hoodies', 'kids hoodies', 'kids hoodie', 'kids sweatshirts', 'kids sweatshirt'].includes(q)) {
    return tags.includes('kids winter hoodies');
  }

  // 10. Kids Nightwear & Cotton Pyjama Sets (Exact 5)
  if (['kids nightwear', 'kids pyjamas', 'kids pyjama', 'kids sleepwear', 'night suit'].includes(q)) {
    return tags.includes('kids nightwear');
  }

  // Kids Parent (50 products)
  if (['kids', 'kid', 'kids wear', 'children', 'baby', 'infant', 'boys & girls wear', 'trending kids'].includes(q)) {
    return catSlug === 'kids-wear' || tags.includes('kids') || tags.includes('baby');
  }

  // ═════════════════════════════════════════════════════════════
  // G. HOME & LIVING SUBCATEGORIES (10 Subcategories × 5 Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Cotton Bedsheets (Exact 5)
  if (['cotton bedsheets', 'cotton bedsheet', 'bedsheets', 'bedsheet', 'bedding', 'king size bedding'].includes(q)) {
    return tags.includes('cotton bedsheets');
  }

  // 2. Curtains & Drapes (Exact 5)
  if (['curtains & drapes', 'curtains and drapes', 'curtains', 'curtain', 'drapes', 'drape', 'blackout curtains'].includes(q)) {
    return tags.includes('curtains & drapes');
  }

  // 3. Cushions & Pillow Covers (Exact 5)
  if (['cushions & covers', 'cushions and covers', 'cushion covers', 'cushion cover', 'cushions', 'cushion', 'pillow covers', 'living room cushions', 'decorative cushion sets'].includes(q)) {
    return tags.includes('cushions & covers');
  }

  // 4. Cookware Sets (Exact 5)
  if (['cookware sets', 'cookware set', 'cookware', 'kitchenware', 'non stick', 'pressure cooker', 'pans', 'non-stick cookware'].includes(q)) {
    return tags.includes('cookware sets');
  }

  // 5. Dinnerware Sets (Exact 5)
  if (['dinnerware sets', 'dinnerware set', 'dinnerware', 'dinner set', 'crockery', 'pasta bowls', 'coffee mugs', 'ceramic dinner sets', 'ceramic crockery'].includes(q)) {
    return tags.includes('dinnerware sets');
  }

  // 6. Blankets, Quilts & Comforters (Exact 5)
  if (['blankets & quilts', 'blankets and quilts', 'blankets', 'blanket', 'quilts', 'quilt', 'comforter', 'comforters', 'duvet'].includes(q)) {
    return tags.includes('blankets & quilts') && !tags.includes('cotton bedsheets');
  }

  // 7. Luxury Cotton Bath Towels & Mats (Exact 5)
  if (['bath towels & mats', 'bath towels', 'towels', 'towel', 'bath mat', 'bath mats'].includes(q)) {
    return tags.includes('bath towels & mats');
  }

  // 8. Aesthetic Wall Art & Hanging Clocks (Exact 5)
  if (['wall art & clocks', 'wall art and clocks', 'wall art', 'wall clock', 'wall decor', 'clocks'].includes(q)) {
    return tags.includes('wall art & clocks');
  }

  // 9. Ceramic Flower Vases & Table Decor (Exact 5)
  if (['ceramic vases & decor', 'ceramic vases', 'ceramic vase', 'flower vases', 'flower vase', 'table decor'].includes(q)) {
    return tags.includes('ceramic vases & decor');
  }

  // 10. Kitchen Storage Containers & Spice Racks (Exact 5)
  if (['storage containers & jars', 'storage containers', 'storage jars', 'spice rack', 'spice jars', 'kitchen storage'].includes(q)) {
    return tags.includes('storage containers & jars');
  }

  // Home & Living Parent (50 products)
  if (['home & living', 'home and living', 'home', 'home decor', 'bed & living', 'bedding & living', 'kitchen & decor', 'kitchen & dining'].includes(q)) {
    return catSlug === 'home-living' || tags.includes('home & living') || tags.includes('home');
  }

  // ═════════════════════════════════════════════════════════════
  // H. BEAUTY & PERSONAL CARE SUBCATEGORIES (10 Subcategories × 5 Each)
  // ═════════════════════════════════════════════════════════════

  // 1. Face Wash & Cleansers (Exact 5)
  if (['face wash & cleansers', 'face wash and cleansers', 'face wash', 'facewash', 'cleansers', 'cleanser', 'daily cleansers', 'foaming face cleansers'].includes(q)) {
    return tags.includes('face wash & cleansers');
  }

  // 2. Moisturizers & Serums (Exact 5)
  if (['moisturizers & serums', 'moisturizers and serums', 'face serum', 'serums', 'serum', 'moisturizer', 'moisturizers', 'face serums', 'hyaluronic face serums'].includes(q)) {
    return tags.includes('moisturizers & serums');
  }

  // 3. Broad-Spectrum Sunscreens (Exact 5)
  if (['sunscreens', 'sunscreen', 'spf 50', 'sunblock', 'sun stick', 'broad-spectrum sunscreens', 'spf 50 sunscreens'].includes(q)) {
    return tags.includes('sunscreens');
  }

  // 4. Matte Lipsticks & Lip Gloss (Exact 5)
  if (['lipsticks & lip gloss', 'lipsticks and lip gloss', 'lipsticks', 'lipstick', 'lip gloss', 'lip oil', 'lip tint', 'matte lipsticks', 'velvet matte lip gloss'].includes(q)) {
    return tags.includes('lipsticks & lip gloss');
  }

  // 5. Luxury Perfumes & Eau de Parfum (Exact 5)
  if (['eau de parfum', 'perfumes', 'perfume', 'fragrances', 'fragrance', 'scents', 'scent', 'luxury perfumes', 'deodorants & mists'].includes(q)) {
    return tags.includes('eau de parfum');
  }

  // 6. Shampoos & Hair Conditioners (Exact 5)
  if (['shampoos & conditioners', 'shampoos and conditioners', 'shampoos', 'shampoo', 'hair conditioner', 'conditioner'].includes(q)) {
    return tags.includes('shampoos & conditioners');
  }

  // 7. Botanical Hair Serums & Scalp Oils (Exact 5)
  if (['hair serums & oils', 'hair serums and oils', 'hair serum', 'hair oil', 'scalp oil', 'rosemary oil'].includes(q)) {
    return tags.includes('hair serums & oils');
  }

  // 8. Exfoliating Body Washes & Scrubs (Exact 5)
  if (['body washes & scrubs', 'body washes and scrubs', 'body wash', 'body scrub', 'shower gel', 'scrub'].includes(q)) {
    return tags.includes('body washes & scrubs');
  }

  // 9. Volumizing Mascaras & Precision Eyeliners (Exact 5)
  if (['eyeliners & mascaras', 'eyeliners and mascaras', 'eyeliner', 'mascara', 'kajal', 'eye makeup'].includes(q)) {
    return tags.includes('eyeliners & mascaras');
  }

  // 10. Detox Clay Face Masks & Sheet Masks (Exact 5)
  if (['face packs & masks', 'face packs and masks', 'face pack', 'face mask', 'sheet masks', 'clay mask', 'sheet mask'].includes(q)) {
    return tags.includes('face packs & masks');
  }

  // Beauty Parent (50 products)
  if (['beauty', 'beauty & personal care', 'beauty and personal care', 'skincare', 'skincare & face', 'skincare essentials', 'makeup & fragrance', 'hair & fragrance', 'makeup'].includes(q)) {
    return catSlug === 'beauty-personal-care' || tags.includes('beauty') || tags.includes('skincare') || tags.includes('makeup') || tags.includes('fragrances');
  }

  // ═════════════════════════════════════════════════════════════
  // SPECIAL OFFERS & BUDGET STORES
  // ═════════════════════════════════════════════════════════════
  if (['under ₹199 store', 'under 199', 'under ₹199'].includes(q)) {
    return (item.discountPrice || item.price) <= 199;
  }
  if (['under ₹299 store', 'under 299', 'under ₹299'].includes(q)) {
    return (item.discountPrice || item.price) <= 299;
  }
  if (['under ₹499 store', 'under 499', 'under ₹499'].includes(q)) {
    return (item.discountPrice || item.price) <= 499;
  }
  if (['under ₹999 store', 'under 999', 'under ₹999'].includes(q)) {
    return (item.discountPrice || item.price) <= 999;
  }
  if (
    [
      'buy 1 get 1 free',
      'flash deals of the day',
      'flat 70% off clearance',
      'new user extra 15% off',
      'combo saver packs',
      'weekend mega drops',
      'special offers',
      'flat 50% – 80% off',
      'flat 50% - 80% off',
      'flat 50% to 80% off',
      '50% off',
      '80% off',
      'festive special',
      'festive sale',
      'rohit400',
      'rohit 400',
      'rohit',
      'sale',
      'offers',
      'offer',
      'deals',
      'clearance',
    ].includes(q) ||
    q.includes('50%') ||
    q.includes('80%') ||
    q.includes('festive') ||
    q.includes('clearance')
  ) {
    const selling = item.discountPrice || item.price;
    const mrp = item.price;
    const discPct = mrp > 0 ? ((mrp - selling) / mrp) * 100 : 0;
    return discPct >= 25 || tags.includes('festive') || name.includes('festive');
  }

  // ═════════════════════════════════════════════════════════════
  // I. TOP-LEVEL PARENT CATEGORIES
  // ═════════════════════════════════════════════════════════════
  if (['women ethnic', 'women ethnic wear', 'ethnic wear', 'ethnic'].includes(q)) {
    return catSlug === 'women-ethnic-wear' || tags.includes('ethnic');
  }

  if (['women western', 'women western wear', 'western wear', 'western'].includes(q)) {
    return catSlug === 'women-western-wear' || tags.includes('western');
  }

  if (['women', "women's"].includes(q)) {
    return tags.includes('women') || catSlug.includes('women') || catName.includes('women');
  }

  // MEN Parent Category (returns all 50 Men products)
  if (['men', 'men fashion', "men's fashion", "men's"].includes(q)) {
    if (tags.includes('women') || catSlug.includes('women') || catName.includes('women')) return false;
    return tags.includes('men') || catSlug.startsWith('men-') || /\bmen\b/i.test(catName);
  }

  // Fallback token matching
  const rawQ = q.replace(/[^\w\s]/g, ' ');
  const tokens = rawQ.split(/\s+/).filter((t) => t.length > 2);
  const targetStr = [name, desc, brand, catName, catSlug, ...tags].join(' ');

  if (tokens.length === 0) {
    return targetStr.includes(q);
  }

  return tokens.every((tok) => {
    const singular = tok.replace(/s$/, '');
    return targetStr.includes(singular);
  });
};

