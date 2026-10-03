const fs = require('fs');
const path = require('path');
const catalog = require('../../frontend/src/data/fallbackProducts.js').FALLBACK_PRODUCTS;

function computeSimilar(product, catalog) {
  const targetTags = (Array.isArray(product.tags) ? product.tags : []).map(t => String(t).toLowerCase());
  const targetCatSlug = (product.category?.slug || '').toLowerCase();
  const targetCatName = (product.category?.name || '').toLowerCase();
  const primarySubtag = targetTags.find(t =>
    !['women','men','unisex','ethnic','western','luxury','exclusive','festive','basics','casual','formal','shoes','bags','watch','watches'].includes(t)
  );

  const seenIds = new Set([String(product._id)]);
  const seenNames = new Set([String(product.name || '').trim().toLowerCase()]);
  const seenImages = new Set();
  const currentImg = product.images?.[0]?.url || (typeof product.images?.[0] === 'string' ? product.images[0] : '');
  if (currentImg) seenImages.add(currentImg);

  const isDuplicate = (p) => {
    const pid = String(p._id);
    const pname = String(p.name || '').trim().toLowerCase();
    const pimg = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : '');
    if (seenIds.has(pid)) return true;
    if (pname && seenNames.has(pname)) return true;
    if (pimg && seenImages.has(pimg)) return true;
    return false;
  };

  const selected = [];
  const addProduct = (p) => {
    seenIds.add(String(p._id));
    if (p.name) seenNames.add(String(p.name).trim().toLowerCase());
    const pimg = p.images?.[0]?.url || (typeof p.images?.[0] === 'string' ? p.images[0] : '');
    if (pimg) seenImages.add(pimg);
    selected.push(p);
  };

  const scored = catalog
    .filter(p => String(p._id) !== String(product._id))
    .map(p => {
      let score = 0;
      const pTags = (Array.isArray(p.tags) ? p.tags : []).map(t => String(t).toLowerCase());
      const pCatSlug = (p.category?.slug || '').toLowerCase();
      const pCatName = (p.category?.name || '').toLowerCase();
      if (primarySubtag && pTags.includes(primarySubtag)) score += 12;
      score += pTags.filter(t => targetTags.includes(t)).length * 3;
      if (pCatSlug && pCatSlug === targetCatSlug) score += 6;
      else if (pCatName && pCatName === targetCatName) score += 5;
      if (targetTags.includes('men') && pTags.includes('men')) score += 2;
      if (targetTags.includes('women') && pTags.includes('women')) score += 2;
      return { product: p, score };
    })
    .filter(i => i.score > 2)
    .sort((a, b) => b.score - a.score);

  for (const item of scored) {
    if (selected.length >= 20) break;
    if (!isDuplicate(item.product)) addProduct(item.product);
  }

  if (selected.length < 20) {
    const sameCat = catalog.filter(p => {
      const pCatSlug = (p.category?.slug || '').toLowerCase();
      const pCatName = (p.category?.name || '').toLowerCase();
      return (pCatSlug && pCatSlug === targetCatSlug) || (pCatName && pCatName === targetCatName);
    });
    for (const p of sameCat) {
      if (selected.length >= 20) break;
      if (!isDuplicate(p)) addProduct(p);
    }
  }

  if (selected.length < 20) {
    for (const p of catalog) {
      if (selected.length >= 20) break;
      if (!isDuplicate(p)) addProduct(p);
    }
  }

  return selected.slice(0, 20);
}

const testIndices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 520, 540];
let allPassed = true;
for (const idx of testIndices) {
  const prod = catalog[idx];
  const similar = computeSimilar(prod, catalog);
  const uNames = new Set(similar.map(p => p.name));
  const uImgs = new Set(similar.map(p => p.images[0]?.url));
  const hasCurrent = similar.some(p => p._id === prod._id);
  console.log(`[${prod.category?.name}] '${prod.name.slice(0, 30)}...' -> ${similar.length} related items | Unique names: ${uNames.size} | Unique images: ${uImgs.size} | Excludes self: ${!hasCurrent}`);
  if (similar.length !== 20 || uNames.size !== 20 || uImgs.size !== 20 || hasCurrent) {
    allPassed = false;
  }
}
console.log('\nAll 20 related products tests passed:', allPassed);
