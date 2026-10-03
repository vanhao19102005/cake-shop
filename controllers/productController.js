const Product = require('../models/productModel');

exports.getHomePage = async (req, res) => {
  try {
    const newProducts = await Product.getProductsByType('new');
    const topProducts = await Product.getProductsByType('top');
    res.render('layout', { newProducts, topProducts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading products');
  }
};

exports.getProductDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.getProductById(id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('product-detail', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading products');
  }
};
