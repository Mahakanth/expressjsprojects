const path = require('path');
const express = require('express');
const productscontroler = require('../controlers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productscontroler.addProducts);

// /admin/add-product => POST
router.post('/add-product', productscontroler.postAddProducts);

// Export the router instead of a property named "routes"
module.exports = router;
