const express = require('express');
const { getOneProduct, getProducts } = require('../controller/controller');
const { getIndianProducts, uploadIndianProduct } = require('../controller/indianController');
const searchAllProducts = require('../controller/searchController');
const router = express.Router();

router.get("/", getProducts);
router.get("/indianProduct", getIndianProducts);
router.post("/upload/indianProduct", uploadIndianProduct );
router.get("/search", searchAllProducts);
router.get('/:id', getOneProduct);

module.exports = router;