const Product = require('../models/Product');
const Category = require('../models/Category');

// @desc    Get all products with filtering, search, sorting & pagination
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const skip = (page - 1) * limit;

    // Build filter query
    const query = {};

    // Keyword search (name, description, brand, tags)
    if (req.query.keyword) {
      query.$or = [
        { name: { $regex: req.query.keyword, $options: 'i' } },
        { description: { $regex: req.query.keyword, $options: 'i' } },
        { brand: { $regex: req.query.keyword, $options: 'i' } },
        { tags: { $regex: req.query.keyword, $options: 'i' } },
      ];
    }

    // Category filter (by id or slug)
    if (req.query.category) {
      if (req.query.category.match(/^[0-9a-fA-F]{24}$/)) {
        query.category = req.query.category;
      } else {
        const foundCategory = await Category.findOne({ slug: req.query.category });
        if (foundCategory) {
          query.category = foundCategory._id;
        }
      }
    }

    // Price range filter
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
    }

    // Rating filter
    if (req.query.rating) {
      query.ratings = { $gte: Number(req.query.rating) };
    }

    // Sort order
    let sortOptions = { createdAt: -1 }; // Default: Newest first
    if (req.query.sort === 'price_asc') {
      sortOptions = { price: 1 };
    } else if (req.query.sort === 'price_desc') {
      sortOptions = { price: -1 };
    } else if (req.query.sort === 'rating') {
      sortOptions = { ratings: -1 };
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name slug')
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: products.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
const getFeaturedProducts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 8;
    const products = await Product.find({ isFeatured: true })
      .populate('category', 'name slug')
      .limit(limit);

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product by ID or Slug
// @route   GET /api/products/:idOrSlug
// @access  Public
const getProductByIdOrSlug = async (req, res, next) => {
  try {
    const { idOrSlug } = req.params;
    let product;

    if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(idOrSlug)
        .populate('category', 'name slug')
        .populate('reviews.user', 'name avatar');
    } else {
      product = await Product.findOne({ slug: idOrSlug })
        .populate('category', 'name slug')
        .populate('reviews.user', 'name avatar');
    }

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create product review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    // Check if user already reviewed this product
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('You have already reviewed this product');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.ratings =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();

    res.status(201).json({
      success: true,
      message: 'Review added successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      category,
      brand,
      stock,
      countInStock,
      images,
      isFeatured,
      tags,
    } = req.body;

    // Resolve category to a valid ObjectId
    let resolvedCategory = category;
    if (typeof category === 'object' && category?._id) {
      resolvedCategory = category._id;
    } else if (typeof category === 'object' && (category?.name || category?.slug)) {
      const catDoc = await Category.findOne({
        $or: [
          { slug: category.slug },
          { name: new RegExp(category.name || '', 'i') },
        ],
      });
      resolvedCategory = catDoc ? catDoc._id : (await Category.findOne())?._id;
    } else if (typeof category === 'string' && !category.match(/^[0-9a-fA-F]{24}$/)) {
      const catDoc = await Category.findOne({
        $or: [
          { slug: category.toLowerCase().replace(/\s+/g, '-') },
          { name: new RegExp(category, 'i') },
        ],
      });
      resolvedCategory = catDoc ? catDoc._id : (await Category.findOne())?._id;
    }

    if (!resolvedCategory) {
      const fallbackCat = await Category.findOne();
      resolvedCategory = fallbackCat?._id;
    }

    const finalStock = Number(stock !== undefined ? stock : countInStock) || 0;

    const product = new Product({
      name,
      description: description || `${name} - Luxury collection from ZYRIVO.`,
      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : 0,
      category: resolvedCategory,
      brand: brand || 'ZYRIVO',
      stock: finalStock,
      images: images || [],
      isFeatured: Boolean(isFeatured),
      tags: tags || [],
    });

    const createdProduct = await product.save();

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    // Resolve category if updated
    if (req.body.category) {
      const cat = req.body.category;
      if (typeof cat === 'object' && cat?._id) {
        req.body.category = cat._id;
      } else if (typeof cat === 'object' && (cat?.name || cat?.slug)) {
        const catDoc = await Category.findOne({
          $or: [
            { slug: cat.slug },
            { name: new RegExp(cat.name || '', 'i') },
          ],
        });
        if (catDoc) req.body.category = catDoc._id;
      } else if (typeof cat === 'string' && !cat.match(/^[0-9a-fA-F]{24}$/)) {
        const catDoc = await Category.findOne({
          $or: [
            { slug: cat.toLowerCase().replace(/\s+/g, '-') },
            { name: new RegExp(cat, 'i') },
          ],
        });
        if (catDoc) req.body.category = catDoc._id;
      }
    }

    if (req.body.countInStock !== undefined && req.body.stock === undefined) {
      req.body.stock = Number(req.body.countInStock);
    }

    const fields = [
      'name',
      'description',
      'price',
      'discountPrice',
      'category',
      'brand',
      'stock',
      'images',
      'isFeatured',
      'tags',
    ];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        product[field] = req.body[field];
      }
    });

    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: 'Product removed successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getFeaturedProducts,
  getProductByIdOrSlug,
  createProductReview,
  createProduct,
  updateProduct,
  deleteProduct,
};


