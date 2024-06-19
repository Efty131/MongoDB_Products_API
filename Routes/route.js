const express = require('express');
const getProducts = require('../controller/controller');
const { getIndianProducts, uploadIndianProduct } = require('../controller/indianController');
const searchAllProducts = require('../controller/searchController');
const updateProductByName = require('../controller/updateController');
const getProductsByCategory = require('../controller/category');
const router = express.Router();

router.get("/", getProducts);
router.get("/indianProduct", getIndianProducts);
router.post("/upload/indianProduct", uploadIndianProduct );
router.put('/update/:name', updateProductByName);
router.get("/search", searchAllProducts);
router.get('/category/:category', getProductsByCategory);

module.exports = router;