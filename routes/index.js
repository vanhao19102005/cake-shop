const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.get('/', productController.getHomePage);
router.get('/products/:id', productController.getProductDetail);

module.exports = router;
